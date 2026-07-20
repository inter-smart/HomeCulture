Enterprise Frontend Development Standard v3.0

Estimated size:
350-500 rules
150+ pages

Volume 1 — Project Foundation

Everything starts here.

Folder architecture
Naming conventions
File organization
Import order
HTML standards
CSS standards
JS standards
Asset structure
Image structure
SVG standards
Font loading
Icon strategy
Environment setup
Volume 2 — Pixel Perfect Figma Implementation

This becomes your AI's Bible.

Instead of

Build from Figma

it becomes

You MUST use the Figma MCP/API to retrieve every design token.

Rules include

✔ Never estimate

✔ Never visually guess spacing

✔ Never approximate typography

✔ Never use "looks close"

✔ Every property must come from Figma

including

Font Size

Weight

Letter spacing

Line height

Padding

Margin

Gap

Radius

Shadow

Opacity

Color

Stroke

Effects

Grid

Auto Layout

Constraints

Component Variants

Variables

Design Tokens

Volume 3 — HTML Standards

Modern semantic HTML.

Examples

<header>

<nav>

<main>

<section>

<article>

<aside>

<footer>

Every section

must have

Unique ID

Unique class

ARIA

Heading hierarchy

Anchor friendly

SEO friendly

Accessible labels

Proper landmarks

Meaningful alt

Loading strategy

Width

Height

Decoding

fetchpriority

Volume 4 — Enterprise CSS Architecture

Instead of random CSS

AI follows

base/

abstracts/

layout/

utilities/

components/

pages/

vendors/

Naming

c-card

c-button

c-hero

l-container

u-hidden

is-active

has-dropdown

No more

.about2

.heroNew

box4

sectionTest
Volume 5 — Modern Animation System

Not ordinary GSAP.

Inspired by

Splacio

Apple

Linear

Framer

Awwwards

Examples

Page reveal

Section reveal

Stagger reveal

Mask reveal

Split text

Magnetic button

Image parallax

Video parallax

Smooth scrolling

Cursor follower

Hover morph

Underline animation

Background zoom

Marquee

Infinite logo wall

Cards stacking

Sticky sections

Horizontal scroll

SVG draw

Counter

Lottie

Mouse parallax

Floating blobs

Canvas effects

All performance optimized.

No layout thrashing.

Only

transform

opacity

filter

GPU accelerated.

Volume 6 — Lenis + GSAP Standards

Exactly how every animation should work.

Never

top

left

width

height

Animate

Always

translate

scale

rotate

opacity

ScrollTrigger rules

Refresh rules

Cleanup rules

Memory rules

Mobile rules

Reduced motion rules

Volume 7 — Responsive System

Fluid scaling.

No hardcoded breakpoints.

Everything uses

clamp()

min()

max()

CSS Variables

Fluid typography

Fluid spacing

Fluid radius

Fluid container

Fluid gaps

Fluid icons

Volume 8 — Component Library

Every reusable component.

Hero

Navbar

Mega menu

Button

Accordion

Tabs

Slider

Cards

Forms

Inputs

Gallery

Testimonials

Timeline

Pricing

FAQ

Footer

Modal

Drawer

Breadcrumb

Pagination

Toast

Tooltip

Dropdown

Share menu

Cookie popup

Video player

Map

Every component

has

HTML

CSS

JS

Accessibility

SEO

Animation

Responsive

Performance

Volume 9 — JavaScript Standards

Never

window.onload

Always

DOMContentLoaded

Never global variables.

Never duplicated listeners.

Use

Modules

Classes

Utilities

Event Delegation

Intersection Observer

Resize Observer

Mutation Observer

Passive listeners

Debounce

Throttle

Destroy methods

Cleanup

Volume 10 — Performance

Largest Contentful Paint

CLS

INP

TTFB

FID

Preload

Prefetch

Preconnect

Priority hints

Responsive images

Modern formats

Critical CSS

Deferred JS

Lazy loading

Font optimization

Tree shaking

Code splitting

Cache policy

Compression

Brotli

Everything optimized.

Volume 11 — Accessibility

WCAG AA

Keyboard

ARIA

Focus trap

Skip links

Contrast

Reduced motion

Screen readers

VoiceOver

Tab order

Semantic labels

Live regions

Dialog rules

Volume 12 — SEO

Semantic HTML

JSON-LD

OpenGraph

Twitter Cards

Canonical

Meta

Sitemap

Robots

Schema

Breadcrumb schema

FAQ schema

Organization schema

Article schema

Product schema

Image SEO

Heading hierarchy

Volume 13 — Coding Standards

Indentation

Naming

Comments

Functions

Imports

Exports

Variables

Constants

Error handling

Documentation

Volume 14 — AI Rules

This is the killer feature.

Rules like

Never invent values.

Never guess colors.

Never approximate spacing.

Ask Figma.

Compare with the reference.

Verify every section before continuing.

Stop if design deviates.

Match at 1920px first.

Then build responsiveness.

Validate HTML.

Validate accessibility.

Validate Lighthouse.

This alone dramatically improves AI-generated frontend quality.

Volume 15 — Quality Checklist

Before completion AI checks

✓ Pixel Perfect

✓ Responsive

✓ Lighthouse

✓ Accessibility

✓ SEO

✓ HTML validation

✓ CSS validation

✓ JS errors

✓ Image optimization

✓ Lazy loading

✓ Keyboard navigation

✓ Mobile testing

✓ Tablet testing

✓ Cross browser

✓ Animations

✓ Scroll performance

✓ CLS

✓ LCP

✓ INP

Nothing gets marked complete until every item passes.

Volume 16 — Prompt Library

Ready-to-use prompts for:

Figma → HTML
Figma → Next.js
Figma → React
Figma → Astro
Figma → Laravel Blade
Landing pages
CMS pages
E-commerce pages
Email templates
Dashboard UIs
Component extraction
Animation generation
Accessibility audits
Performance optimization
Code reviews
My recommended addition: Design Quality Rules

One thing that's missing from almost every AI coding guide is design judgment. I'd add rules such as:

Preserve visual rhythm and consistent spacing.
Use an 8px spacing system unless Figma specifies otherwise.
Keep animation durations within a cohesive range (typically 200–800ms depending on the interaction).
Prefer subtle, purposeful motion over decorative effects.
Maintain consistent border radii, shadows, and elevation across components.
Ensure every interactive element has meaningful hover, focus, active, and disabled states.
Avoid visual clutter by limiting simultaneous animations.
Final deliverable

I would package this as:

📘 Enterprise Frontend Development Standard v3.0 (Master document, ~180–250 pages)
📙 AI Rules Companion (Claude, ChatGPT, Codex, Cursor, Windsurf, Antigravity)
📗 GSAP + Lenis Animation Handbook
📕 Pixel-Perfect Figma Implementation Guide
📓 Frontend Component & Pattern Library
📒 Performance, SEO & Accessibility Handbook
📔 Project Starter Template with folder structure, boilerplate files, linting, and example components