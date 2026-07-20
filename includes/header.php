<!DOCTYPE html>
<html lang="en" class="is-loading">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Home Culture — A Complete Branded Living Experience</title>
<meta name="description" content="Home Culture transforms residential architecture into a complete turnkey solution — one brand, one ecosystem, one seamless experience.">

<!-- Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Unna:wght@400;700&display=swap" rel="stylesheet">

<!-- Styles (cascade order matters: abstracts -> base -> layout -> components -> utilities) -->
<link rel="stylesheet" href="assets/css/abstracts/_tokens.css">
<link rel="stylesheet" href="assets/css/base/_reset.css">
<link rel="stylesheet" href="assets/css/layout/_container.css">
<link rel="stylesheet" href="assets/css/components/_c-header.css">
<link rel="stylesheet" href="assets/css/components/_c-hero.css">
<link rel="stylesheet" href="assets/css/components/_c-chaos.css">
<link rel="stylesheet" href="assets/css/components/_c-luxury.css">
<link rel="stylesheet" href="assets/css/components/_c-preloader.css">
<link rel="stylesheet" href="assets/css/utilities/_reveal.css">

<!-- LCP image: preload with high priority -->
<link rel="preload" as="image" href="assets/images/sections/hero-bg.png" fetchpriority="high">

<!-- If JS is disabled, the preloader JS never runs to unlock the page — fail open. -->
<noscript><style>.c-preloader{display:none!important}html.is-loading{overflow:auto!important;height:auto!important}</style></noscript>
</head>
<body>

<div class="c-preloader" id="preloader" role="status" aria-live="polite" aria-label="Loading Home Culture">
    <div class="c-preloader__mark">
        <span class="c-preloader__mark-text">HOME CULTURE&reg;</span>
    </div>
    <div class="c-preloader__meter">
        <div class="c-preloader__track">
            <div class="c-preloader__fill" id="preloaderFill"></div>
        </div>
        <span class="c-preloader__count" id="preloaderCount">0</span>
    </div>
</div>

<header class="c-header" id="siteHeader">
    <div class="l-container">
        <div class="c-header__bar">
            <a href="index.php" class="c-header__logo" aria-label="Home Culture — home">HOME CULTURE&reg;</a>

            <button type="button" class="c-header__toggle" id="navToggle" aria-label="Open menu" aria-controls="mobileNav" aria-expanded="false">
                <span class="c-header__toggle-bar" aria-hidden="true"></span>
                <span class="c-header__toggle-bar" aria-hidden="true"></span>
                <span class="c-header__toggle-bar" aria-hidden="true"></span>
            </button>
        </div>
    </div>
</header>

<div class="c-backdrop" id="navBackdrop"></div>

<nav class="c-mobile-nav" id="mobileNav" aria-hidden="true">
    <button type="button" class="c-mobile-nav__close" id="navClose" aria-label="Close menu">&times;</button>
    <ul class="c-mobile-nav__list">
        <li><a href="#" class="c-mobile-nav__link">Services</a></li>
        <li><a href="#" class="c-mobile-nav__link">Experience Center</a></li>
        <li><a href="#" class="c-mobile-nav__link">About</a></li>
        <li><a href="#" class="c-mobile-nav__link">Portfolio</a></li>
    </ul>
</nav>

<div id="pageWrapper">
