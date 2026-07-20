(function () {
    'use strict';

    function onReady(fn) {
        if (document.readyState !== 'loading') fn();
        else document.addEventListener('DOMContentLoaded', fn);
    }

    // Branded preloader — tracks real load progress (fonts + the hero LCP
    // image) rather than a fake timer, animates the counter/bar toward it,
    // then lifts the panel away like a curtain once everything is ready.
    function initPreloader() {
        var root = document.documentElement;
        var el = document.getElementById('preloader');
        var fill = document.getElementById('preloaderFill');
        var count = document.getElementById('preloaderCount');

        if (!el) {
            root.classList.remove('is-loading');
            return;
        }

        var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        var target = 0;
        var displayed = 0;
        var done = false;

        function addWeight(w) {
            target = Math.min(100, target + w);
        }

        function tick() {
            displayed += (target - displayed) * (reduceMotion ? 1 : 0.18);
            if (target - displayed < 0.4) displayed = target;
            var shown = Math.round(displayed);
            if (fill) fill.style.width = shown + '%';
            if (count) count.textContent = shown;

            if (displayed >= 100) {
                finish();
                return;
            }
            requestAnimationFrame(tick);
        }

        function finish() {
            if (done) return;
            done = true;
            setTimeout(function () {
                el.classList.add('is-hidden');
                root.classList.remove('is-loading');
                setTimeout(function () {
                    el.setAttribute('aria-hidden', 'true');
                    el.style.display = 'none';
                }, 950);
            }, reduceMotion ? 0 : 250);
        }

        requestAnimationFrame(function () {
            el.classList.add('is-ready');
        });

        var heroImg = document.querySelector('.c-hero__media img');
        var heroPromise = new Promise(function (resolve) {
            if (!heroImg) return resolve();
            if (heroImg.complete) return resolve();
            heroImg.addEventListener('load', resolve, { once: true });
            heroImg.addEventListener('error', resolve, { once: true });
        });

        var fontsPromise = (document.fonts && document.fonts.ready) ? document.fonts.ready : Promise.resolve();
        var minDelay = new Promise(function (resolve) { setTimeout(resolve, reduceMotion ? 0 : 700); });

        fontsPromise.then(function () { addWeight(25); });
        heroPromise.then(function () { addWeight(45); });
        minDelay.then(function () { addWeight(30); });

        // Hard safety timeout: never let a slow/failed asset block entry forever.
        setTimeout(function () { target = 100; }, 6000);

        requestAnimationFrame(tick);
    }

    function initLenis() {
        if (typeof Lenis === 'undefined') return;

        var lenis = new Lenis({
            duration: 1.2,
            easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); },
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
            anchor.addEventListener('click', function (e) {
                var href = this.getAttribute('href');
                if (href === '#') return;
                var target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    lenis.scrollTo(target, { offset: -80 });
                }
            });
        });
    }

    function initMobileNav() {
        var toggle = document.getElementById('navToggle');
        var closeBtn = document.getElementById('navClose');
        var nav = document.getElementById('mobileNav');
        var backdrop = document.getElementById('navBackdrop');
        if (!toggle || !nav || !backdrop) return;

        function openNav() {
            nav.classList.add('is-open');
            backdrop.classList.add('is-open');
            nav.setAttribute('aria-hidden', 'false');
            toggle.setAttribute('aria-expanded', 'true');
            document.body.classList.add('lenis-stopped');
        }

        function closeNav() {
            nav.classList.remove('is-open');
            backdrop.classList.remove('is-open');
            nav.setAttribute('aria-hidden', 'true');
            toggle.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('lenis-stopped');
        }

        toggle.addEventListener('click', function () {
            nav.classList.contains('is-open') ? closeNav() : openNav();
        });
        closeBtn.addEventListener('click', closeNav);
        backdrop.addEventListener('click', closeNav);

        // Every link inside #MobileNav must close the drawer on click,
        // otherwise lenis-stopped stays on body and freezes the page.
        nav.querySelectorAll('a[href]').forEach(function (link) {
            link.addEventListener('click', closeNav);
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && nav.classList.contains('is-open')) closeNav();
        });
    }

    function initScrollReveal() {
        var items = document.querySelectorAll('[data-reveal]');
        if (!items.length) return;

        if (typeof IntersectionObserver === 'undefined') {
            items.forEach(function (el) { el.classList.add('is-revealed'); });
            return;
        }

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        items.forEach(function (el) { observer.observe(el); });

        setTimeout(function () {
            items.forEach(function (el) { el.classList.add('is-revealed'); });
        }, 1500);
    }

    // Background video only loads/plays while its section is on screen —
    // avoids spending bandwidth/battery on an autoplaying video the visitor
    // hasn't scrolled to yet, and pauses it again once scrolled past.
    function initChaosVideo() {
        var section = document.getElementById('chaos');
        var video = document.getElementById('chaosVideo');
        if (!section || !video) return;

        if (typeof IntersectionObserver === 'undefined') {
            video.preload = 'auto';
            video.play().catch(function () {});
            return;
        }

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    if (video.preload !== 'auto') video.preload = 'auto';
                    video.play().catch(function () {});
                } else {
                    video.pause();
                }
            });
        }, { threshold: 0 });

        observer.observe(section);
    }

    // Scroll-scrubbed word cycler for .c-chaos: the section pins in the
    // viewport (position: sticky) for an extended scroll run, and the
    // active word swaps based on how far the viewer has scrolled through
    // that run. GPU-safe (opacity/transform only), rAF-throttled scroll
    // handler, no GSAP/ScrollTrigger.
    function initChaosWords() {
        var section = document.getElementById('chaos');
        var wrap = document.getElementById('chaosWords');
        if (!section || !wrap) return;

        var words = Array.prototype.slice.call(wrap.querySelectorAll('.c-chaos__word'));
        if (!words.length) return;

        var activeIndex = -1;
        var ticking = false;

        function setActive(index) {
            if (index === activeIndex) return;
            activeIndex = index;
            words.forEach(function (word, i) {
                word.classList.toggle('is-active', i === index);
                word.classList.toggle('is-passed', i < index);
            });
        }

        function update() {
            ticking = false;
            var rect = section.getBoundingClientRect();
            var scrollable = rect.height - window.innerHeight;
            if (scrollable <= 0) {
                setActive(0);
                return;
            }
            var progress = -rect.top / scrollable;
            progress = Math.max(0, Math.min(1, progress));
            var index = Math.min(words.length - 1, Math.floor(progress * words.length));
            setActive(index);
        }

        function onScroll() {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(update);
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll, { passive: true });
        update();
    }

    // Canvas frame-sequence scroll-scrubber for .c-luxury: draws one of a
    // pre-rendered WebP frame sequence to <canvas> based on scroll progress
    // through a tall pinned section — behaves like scrubbing a video's
    // currentTime, but with exact per-scroll-pixel control since it's just
    // picking an array index. Frames lazy-preload once the section nears
    // the viewport; canvas always redraws with the nearest loaded frame so
    // it never shows a blank/broken frame mid-load.
    function initLuxuryScroll() {
        var section = document.getElementById('luxury');
        var canvas = document.getElementById('luxuryCanvas');
        if (!section || !canvas || !canvas.getContext) return;

        var ctx = canvas.getContext('2d');
        var base = section.getAttribute('data-frame-base');
        var count = parseInt(section.getAttribute('data-frame-count'), 10) || 0;
        var pad = parseInt(section.getAttribute('data-frame-pad'), 10) || 4;
        var ext = section.getAttribute('data-frame-ext') || 'webp';
        if (!base || !count) return;

        var images = new Array(count);
        var loadedFlags = new Array(count).fill(false);
        var lastDrawableIndex = -1;
        var currentIndex = -1;
        var preloadStarted = false;
        var dpr = Math.min(window.devicePixelRatio || 1, 2);

        function frameUrl(i) {
            return base + String(i + 1).padStart(pad, '0') + '.' + ext;
        }

        function drawIndex(index) {
            var img = images[index];
            if (!img || !loadedFlags[index]) return false;
            var cw = canvas.width, ch = canvas.height;
            var scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
            var dw = img.naturalWidth * scale, dh = img.naturalHeight * scale;
            var dx = (cw - dw) / 2, dy = (ch - dh) / 2;
            ctx.clearRect(0, 0, cw, ch);
            ctx.drawImage(img, dx, dy, dw, dh);
            lastDrawableIndex = index;
            return true;
        }

        function render(index) {
            currentIndex = index;
            if (!drawIndex(index) && lastDrawableIndex >= 0) {
                drawIndex(lastDrawableIndex);
            }
        }

        function resizeCanvas() {
            var rect = canvas.getBoundingClientRect();
            canvas.width = Math.round(rect.width * dpr);
            canvas.height = Math.round(rect.height * dpr);
            if (currentIndex >= 0) render(currentIndex);
        }

        function preload() {
            if (preloadStarted) return;
            preloadStarted = true;
            for (var i = 0; i < count; i++) {
                (function (i) {
                    var img = new Image();
                    img.decoding = 'async';
                    img.onload = function () {
                        loadedFlags[i] = true;
                        if (i === currentIndex) render(currentIndex);
                    };
                    img.src = frameUrl(i);
                    images[i] = img;
                })(i);
            }
        }

        var ticking = false;
        function update() {
            ticking = false;
            var rect = section.getBoundingClientRect();
            var scrollable = rect.height - window.innerHeight;
            var progress = scrollable > 0 ? -rect.top / scrollable : 0;
            progress = Math.max(0, Math.min(1, progress));
            var index = Math.min(count - 1, Math.round(progress * (count - 1)));
            if (index !== currentIndex) render(index);
        }

        function onScroll() {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(update);
        }

        if (typeof IntersectionObserver !== 'undefined') {
            var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        preload();
                        observer.disconnect();
                    }
                });
            }, { rootMargin: '150% 0px 150% 0px' });
            observer.observe(section);
        } else {
            preload();
        }

        resizeCanvas();
        render(0);
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', resizeCanvas, { passive: true });
    }

    onReady(function () {
        initPreloader();
        initLenis();
        initMobileNav();
        initScrollReveal();
        initChaosVideo();
        initChaosWords();
        initLuxuryScroll();
    });
})();
