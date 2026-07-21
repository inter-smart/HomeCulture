<?php include 'includes/header.php'; ?>

    <!-- Sections are added here, one at a time, per Figma node 331:71 -->

    <section class="c-hero" id="hero" aria-label="Home Culture introduction">
        <div class="c-hero__media" aria-hidden="true">
            <img src="assets/images/sections/hero-bg.png" alt="" width="1920" height="1002" fetchpriority="high" decoding="async">
            <div class="c-hero__scrim"></div>
            <div class="c-hero__glow c-hero__glow--warm"></div>
            <div class="c-hero__glow c-hero__glow--cool"></div>
        </div>

        <div class="c-hero__content l-container">
            <div class="c-hero__row">
                <div class="c-hero__heading">
                    <span class="c-hero__eyebrow">Explore Home Culture</span>
                    <h1 class="c-hero__title">The New Paradigm in Premium Living</h1>
                </div>

                <div class="c-hero__aside">
                    <button type="button" class="c-hero__play" aria-label="Play introduction video">
                        <img src="assets/images/icons/hero-play-triangle.svg" alt="" class="c-hero__play-icon" width="16" height="14" aria-hidden="true">
                    </button>

                    <p class="c-hero__desc">The world's first Product-Led Premium Residential Brand. Discover a new way to build premium homes with curated designs, transparent pricing, and a seamless end-to-end experience.</p>

                    <div class="c-hero__actions">
                        <a href="#" class="c-btn c-btn--dark">
                            Explore Home Culture
                            <img src="assets/images/icons/arrow-diagonal.svg" alt="" class="c-btn__icon" width="11" height="20" aria-hidden="true">
                        </a>
                        <a href="#" class="c-btn c-btn--light">
                            Visit Experience Center
                            <img src="assets/images/icons/arrow-diagonal-dark.svg" alt="" class="c-btn__icon" width="11" height="20" aria-hidden="true">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="c-chaos" id="chaos" aria-label="The inherent chaos of building a home" style="--chaos-steps: 8;">
        <div class="c-chaos__pin">
            <div class="c-chaos__media" aria-hidden="true">
                <video class="c-chaos__video" id="chaosVideo" muted loop playsinline preload="none">
                    <source src="assets/images/sections/c-chaos-video.mp4" type="video/mp4">
                </video>
                <div class="c-chaos__scrim"></div>
            </div>

            <div class="c-chaos__inner l-container">
                <span class="c-chaos__eyebrow" data-fade-reveal>The Inherent Chaos</span>
                <h2 class="c-chaos__headline" data-split-reveal>Great Homes Deserve<br>Better Journeys.</h2>
                <p class="c-chaos__desc" data-split-reveal>A premium residence should be created with clarity&mdash;not endless coordination.</p>

                <div class="c-chaos__subtitle" data-fade-reveal>
                    <span>Broken Process</span>
                    <img src="assets/images/icons/arrow-down.svg" alt="" class="c-chaos__subtitle-arrow" width="22" height="8" aria-hidden="true">
                </div>

                <div class="c-chaos__words" id="chaosWords" aria-live="polite">
                    <span class="c-chaos__word">Endless Follow Ups</span>
                    <span class="c-chaos__word">Budget Confusion</span>
                    <span class="c-chaos__word">Interior Designer</span>
                    <span class="c-chaos__word">Consultants</span>
                    <span class="c-chaos__word">Contractor</span>
                    <span class="c-chaos__word">Architect</span>
                    <span class="c-chaos__word">Vendors</span>
                    <span class="c-chaos__word">Delays</span>
                </div>

                <a href="#" class="c-btn c-btn--dark c-chaos__cta" data-fade-reveal>
                    <span class="c-chaos__cta-sweep" aria-hidden="true"></span>
                    Find A Better Way
                    <img src="assets/images/icons/arrow-diagonal-chaos.svg" alt="" class="c-btn__icon" width="11" height="20" aria-hidden="true">
                </a>
            </div>
        </div>
    </section>

    <section class="c-luxury" id="luxury" aria-label="Imagine buying your home like buying a luxury car"
        data-frame-base="assets/images/sections/porsche-frames/frame_"
        data-frame-count="303" data-frame-pad="4" data-frame-ext="webp">
        <div class="c-luxury__pin">
            <canvas class="c-luxury__canvas" id="luxuryCanvas" aria-hidden="true"></canvas>
            <div class="c-luxury__scrim" aria-hidden="true"></div>

            <div class="c-luxury__inner l-container">
                <span class="c-luxury__eyebrow" data-fade-reveal>Hassle-Free Ownership</span>
                <img src="assets/images/icons/underline-eyebrow.svg" alt="" class="c-luxury__underline" width="283" height="13" aria-hidden="true">

                <h2 class="c-luxury__title" data-split-reveal>Imagine Buying Your Home Like Buying a Luxury Car.</h2>
                <p class="c-luxury__desc" data-split-reveal>You don't buy the engine, seats, dashboard, and wheels separately.</p>

                <div class="c-luxury__row">
                    <div class="c-luxury__choices" data-fade-reveal>
                        <span class="c-luxury__choose">You Simply Choose :</span>
                        <div class="c-luxury__tabs">
                            <span class="c-luxury__tab">Brand</span>
                            <span class="c-luxury__tab">Model</span>
                            <span class="c-luxury__tab">Variant</span>
                            <span class="c-luxury__tab">Finish</span>
                        </div>
                    </div>

                    <div class="c-luxury__aside">
                        <p class="c-luxury__quote" data-split-reveal>Your Premium Home Deserves the Same Experience.!!</p>
                        <a href="#" class="c-luxury__next" aria-label="Next" data-fade-reveal>
                            <img src="assets/images/icons/circle-arrow-button.svg" alt="" width="121" height="121">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

<?php include 'includes/footer.php'; ?>
