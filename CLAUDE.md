# ArbeeBioMarine Rebuild — Claude Code Handover Document

> **Purpose**: This file is the authoritative AI coding assistant handover guide for the ArbeeBioMarine homepage rebuild project. Read this **before making any changes** to this codebase.
> **Figma File**: `GjU1OS1G90VeZzEtYzLh6P` / Node `991-13205`
> **Branch**: `dev-vishal`
> **Stack**: PHP 8, Bootstrap 5, Vanilla CSS (`assets/css/app.css`), Vanilla JS (`assets/js/app.js`), Owl Carousel, Swiper, Lenis smooth scroll.

---

## 1. Project Architecture

```
ArbeeBioMarine-Rebuild/
├── index.php                          (Homepage: 10 sections, ~550 lines)
├── includes/
│   ├── header.php                     (Sticky nav, desktop/mobile nav, scripts)
│   └── footer.php                     (4-col footer, social icons, copyright)
├── assets/
│   ├── css/app.css                    (ALL styles — 2035+ lines, v4.0.0)
│   ├── js/app.js                      (ALL scripts, carousel inits, Lenis)
│   └── images/                        (Section images, SVG icons, logo)
├── .agents/AGENTS.md                  (AI agent rules — must follow)
├── figma-html-development-standard.md (Full dev standard reference)
└── CLAUDE.md                          (THIS FILE)
```

### Page Include Structure (ALL inner pages must follow this)

```php
<?php include 'includes/header.php' ?>
<div id="pageWrapper" class="[page-specific-class]">
    <!-- page sections here -->
</div><!-- /#pageWrapper -->
<?php include 'includes/footer.php' ?>
```

NEVER put header/footer markup inline in a page file. Always use include.

---

## 2. The 10 Homepage Sections

Section 1  | Sticky Navbar      | header, #MobileNav, #NavBackdrop | Mobile nav outside header (body child)
Section 2  | Hero Carousel      | .hero_slider                      | 2-slide Owl Carousel, floating side tabs
Section 3  | About Us           | .about_sec, .about-grid           | Swiper features slider on mobile
Section 4  | Certifications     | .cert_slider                      | Logo ribbon, 5 logos, auto-scroll
Section 5  | Products           | .products_sec, .products_slider   | 3 cards, Owl Carousel
Section 6  | Technology         | .tech_sec                         | Multi-col specs, gradient bg
Section 7  | Indian Ocean       | .ocean_sec                        | 1x4 horizontal list
Section 8  | Health Benefits    | .health_sec, .health-inner        | Dual-col: image left, 7-item grid right
Section 9  | Insights / Blog    | .blog_sec, .blog_slider           | 4-card Owl Carousel
Section 10 | Footer             | .footer-main                      | 4 columns, contact, social

---

## 3. CSS Design Tokens (:root in app.css)

### Color Variables
--clr-blue:       #23AFE4     (brand primary — accents, active states)
--clr-blue-dark:  #0089CF     (bg gradients, overlays, labels)
--clr-dark:       #1B1B1B     (headings)
--clr-body:       #2A2A2A     (body copy)
--clr-grey:       #4C4949     (secondary / subtext)
--clr-white:      #ffffff
--clr-header-bg:  rgba(242, 250, 255, 0.90)
--clr-footer-bg:  #E0F7FF
--clr-bg-section: rgba(0, 137, 207, 0.08)   (products section)

### Typography Tokens (mobile-first base in :root)
Token              | Base (mobile) | 1920px Figma full
--fs-hero-title    | 26px          | 61px
--fs-hero-sub      | 16px          | 32px
--fs-sec-title     | 22px          | 48px
--fs-body          | 14px          | 18px
--fs-nav           | 12px          | 16px
--fs-cta           | 12px          | 16px

### Spacing Tokens (mobile-first base in :root)
Token              | Base (mobile) | 1920px Figma full
--sp-section       | 40px          | 100px
--sp-gap           | 24px          | 60px
--sp-card-pad      | 20px          | 48px
--sp-img-h         | 220px         | 480px
--sp-health-h      | 350px         | 800px

---

## 4. Responsive Breakpoint System

PROPORTIONAL SCALING SYSTEM: all tokens scale from mobile baseline up to Figma 1920px.
Every breakpoint overrides CSS custom properties in a single :root block.

### Container Widths
@media (min-width: 768px)  { .container { max-width: 720px;  } }
@media (min-width: 992px)  { .container { max-width: 950px;  } }
@media (min-width: 1200px) { .container { max-width: 1105px; } }
@media (min-width: 1551px) { .container { max-width: 1420px; } }
@media (min-width: 1771px) { .container { max-width: 1751px; } }
@media (min-width: 1920px) { .container { max-width: 1750px; } }

### Full Token Scale Table
Breakpoint          | Hero Title | Sec Title | Body  | Sp-Section | Sp-Gap | Container
Mobile (<768px)     | 26px       | 22px      | 14px  | 40px       | 24px   | fluid
768px               | 32px       | 26px      | 14px  | 50px       | 30px   | 720px
992px               | 38px       | 30px      | 14px  | 60px       | 36px   | 950px
1200px              | 42px       | 32px      | 15px  | 60px       | 38px   | 1105px
1551px              | 50px       | 40px      | 16px  | 80px       | 48px   | 1420px
1771px              | 59px       | 46px      | 17px  | 92px       | 55px   | 1751px
1920px              | 61px       | 48px      | 18px  | 100px      | 60px   | 1750px

CRITICAL RULE: Never hardcode font-sizes, padding, or gap values in section CSS.
Always use var(--token) so the proportional scale works across all breakpoints.

---

## 5. About Us Section — Grid Adaptation Rules

>1440px         | 3 columns         | Image Visible | Grid list
1201–1440px     | 1.6fr 1.4fr       | Image Visible | Swiper .feat-swiper
992–1200px      | 1.8fr 1.2fr       | Image Visible | Swiper .feat-swiper
<991px          | block (1 col)     | HIDDEN (display: none !important) | Swiper .feat-swiper

The .about-img-col is hidden on mobile. Features grid becomes a Swiper carousel on mobile.

---

## 6. Button Standards

All buttons (.btn-primary, .btn-outline, .btn-outline-white, .btn-cta, .btn-hero):

Desktop (>=992px)  | Height: 52px | Font: 16px | Padding: 0 26px
Tablet (<991px)    | Height: 46px | Font: 14px | Padding: 0 20px
Mobile (<575px)    | Height: 42px | Font: 13px | Padding: 0 16px

White Outline Button (.btn-outline-white):
- Default: white bg, dark blue text (color: var(--clr-blue-dark); background: #fff)
- Hover: transparent bg, white border, white text

---

## 7. Slider / Carousel Configurations

Libraries load order (in header.php):
1. Owl Carousel CSS/JS
2. Swiper CSS/JS
3. assets/js/app.js  (MUST LOAD LAST)

### Dynamic Navigation Hiding Rule
Only show carousel nav if slide count exceeds visible count:
- Products (3 cards): nav: false on desktop (items: 3)
- Blog (4 cards): nav: false on desktop (items: 4)
- Certifications (5 logos): nav: false on wide desktop (items: 5)

### Products Mobile Peek Preview
In Products Slider responsive config at 0px breakpoint: items: 1.3
(Shows 30% of next card — indicates swipeability without instruction)

### Owl Stage Shadow Clipping Fix
.products_slider .owl-stage-outer {
    padding: 0 4px;
    padding-top: 7px;
}
Prevents hover zoom/shadow from being clipped by the Owl stage container.

---

## 8. Lenis Smooth Scroll Integration

### Script (in index.php)
<script src="https://unpkg.com/lenis@1.1.18/dist/lenis.min.js"></script>

### Initialization (in app.js)
onReady(function () {
    if (typeof Lenis !== 'undefined') {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false
        });
        function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
        requestAnimationFrame(raf);
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                const target = document.querySelector(href);
                if (target) { e.preventDefault(); lenis.scrollTo(target, { offset: -80 }); }
            });
        });
    }
});

### CSS Compatibility (bottom of app.css)
html.lenis, html.lenis body { height: auto; }
.lenis-smooth { scroll-behavior: auto !important; }
.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }
.lenis-stopped { overflow: hidden; }
.lenis-scrolling iframe { pointer-events: none; }

IMPORTANT: #viewport, #pageWrapper { overflow-x: hidden; } is COMMENTED OUT intentionally.
Do NOT uncomment — it breaks Lenis viewport tracking.

---

## 9. Mobile Navigation Architecture

CRITICAL: #MobileNav and #NavBackdrop must be DIRECT CHILDREN OF <body>, NOT inside <header>.
Why: Placing inside <header> causes z-index isolation and translation bugs on sticky header.

All <a> links inside #MobileNav must close the drawer on click.
Failing to do this leaves overflow: hidden active on body after anchor navigation, freezing the page.

---

## 10. Preserved Manual Corrections — DO NOT REVERT

1. index.php          | Brain & Cognitive Health: <div class="health-item"> (NO active class)
                        Why: User correction — all health items are idle/normal by default

2. app.css            | .desktopNav { justify-content: flex-end; }  (NOT center)
                        Why: Nav aligns right in header, standard commercial layout

3. app.css            | .blog-card { padding: 14px 14px 10px; }
                        Why: Even inner card spacing

4. app.css            | .blog-card-body { padding: 22px 0px 0px; }
                        Why: Text margins align with card borders (no side padding)

5. includes/footer.php | LinkedIn icon: NO footer-social-icon--active class
                        Why: Only the active social network should carry the active class

6. app.css            | /* #viewport, #pageWrapper { overflow-x: hidden; } */ COMMENTED OUT
                        Why: Do not re-enable — breaks Lenis

7. app.css            | Health SVG overrides use !important on stroke: currentColor and fill: none
                        Why: CSS must win over inline SVG presentation attributes in all browsers

8. index.php          | Health heading is all dark — no .txt-blue span
                        Why: Matches Figma exactly — heading is entirely #1B1B1B

---

## 11. Section 8 — Health Benefits Layout

Structure:
.health_sec
  └── .container
        └── .health-inner  (CSS Grid: image-col | content-col)
              ├── .health-img-col        (left: full-height lab/product image)
              └── .health-content-col    (right: label + heading + 2-col icon grid)

7 health items in .health-grid-cols (2-column grid).
Gap: calc(var(--sp-gap) * 0.65)

SVG Icon CSS Override (must use !important to win over inline SVG attrs):
.health-icon-circle svg path,
.health-icon-circle svg circle,
.health-icon-circle svg line,
.health-icon-circle svg polyline,
.health-icon-circle svg rect,
.health-icon-circle svg ellipse {
    stroke: currentColor !important;
    fill: none !important;
}

---

## 12. Scroll Reveal System

GSAP/ScrollTrigger has been REMOVED.
A native IntersectionObserver is used in app.js:
- Elements with data-reveal attribute fade in and slide up on viewport entry.
- A 1.5-second fallback timer reveals all elements even if observer fails.

DO NOT re-add GSAP or ScrollTrigger.

---

## 13. Section Label Branding Pattern

Every section uses a brand label above the heading:

<div class="section-label">
    <img src="assets/images/label-icon-svg.svg" alt="" aria-hidden="true" width="20">
    <span>SECTION NAME</span>
</div>

Always use label-icon-svg.svg (brand clover logo mark). Never substitute with emoji or Unicode.

---

## 14. Git Workflow

Working branch: dev-vishal
Remote: origin → https://github.com/inter-smart/ArbeeBioMarine.git
Commit convention: type(scope): description
  Examples: fix(responsive): ..., feat(section8): ..., style(nav): ...
Do NOT commit to main directly. Always use dev-vishal and submit a PR.

---

## 15. Key Never Do Rules

NEVER hardcode px font-sizes or padding in section CSS         → Breaks proportional token scaling
NEVER add inline styles for layout properties in PHP/HTML      → Makes responsive overrides impossible
NEVER put overflow-x: hidden on #pageWrapper or html/body      → Breaks Lenis smooth scroll
NEVER use GSAP or ScrollTrigger                                → Removed intentionally for performance
NEVER add active class statically to .health-item              → Health items are idle by default
NEVER put #MobileNav inside <header>                           → Breaks z-index on mobile nav
NEVER use TailwindCSS                                          → Vanilla CSS only project
NEVER change .desktopNav to justify-content: center            → Must align right (flex-end)

---

## 16. Quick Reference — File Locations

CSS custom properties (tokens)           | assets/css/app.css | L28–L80
Responsive token overrides (768–1920px)  | assets/css/app.css | L130–L266
Lenis CSS compatibility                  | assets/css/app.css | ~L2020+
Section 8 (Health) CSS                  | assets/css/app.css | ~L1290–L1420
Hero section HTML                        | index.php           | ~L30–L120
Health section HTML                      | index.php           | ~L440–L520
Mobile nav HTML                          | includes/header.php | bottom section
All carousel inits + Lenis              | assets/js/app.js    | throughout

---

## 17. Figma Reference

Figma File Key: GjU1OS1G90VeZzEtYzLh6P
Homepage Node: 991-13205
Verified screen widths: 1920px, 1771px, 1551px, 1200px (desktop-first), then 992px, 768px (tablet/mobile)
All colors, typography, and spacing were sourced directly from Figma.

When comparing HTML vs Figma: always match the EXACT same viewport width in browser DevTools.

---

Last updated: 2026-07-17 | Branch: dev-vishal | Commit: bf5812a
