# Design Competition Brief: "What If It All Goes Right?"

## Your Mission
You are competing to create the most visually stunning, award-worthy interactive essay landing page. You are redesigning an existing basic Next.js site. The winner's design ships to production.

## Design References (MUST match this level of quality)
Study these two live sites carefully — they define the visual language:
- **Brand Book:** https://cx-brand-book.vercel.app — cursor glow, parallax, cinematic dark luxury, interactive elements
- **Investor Deck:** https://cx-investor-deck.vercel.app — data-forward, editorial, ambient gradients, glass panels

Your redesign must feel like it belongs in the same family as these two sites — same caliber of polish, same dark luxury aesthetic, same level of interactive craft.

## What You're Redesigning
The current site at https://what-if-it-all-goes-right.vercel.app is a basic Sonnet-built version. It works but it's visually plain. You need to elevate it to award-winning quality.

## Content
The essay is a ~6,000 word piece by "William & Mary" about AI's impact on work, culture, and creativity. It's structured as a dialogue (like a Platonic dialogue) between two co-founders. The full text is already in the codebase.

## Mandatory Design Requirements

### 1. Preface/Meta Sections → Accordions
The Preface, "Why Anonymous", "Who We Are", and "Who Is This For" sections should be collapsible accordions so readers can skip to the main content. Elegant, animated accordions — not ugly HTML details elements.

### 2. Dialogue Sections → Something Dynamic
William and Mary speak throughout the essay. Don't just use left/right layout. Think creatively:
- Chat-bubble style that animates in on scroll?
- Theatrical staging with spotlights?
- Split-screen with their portraits that shifts as speaker changes?
- Voice-like waveform decorations?
- Whatever you think will win — be creative and bold.

### 3. Statistical Callouts → Showstoppers
The essay is packed with statistics. These should be the visual anchors:
- Animated count-up numbers
- Parallax depth effects
- Full-width stat breaks between sections
- Consider: glowing numbers, particle effects, gradient text, or kinetic typography
- Key stats: 78%, $1.17T, 100M tokens/day, 80-95%, 57%/43%, 37%, 15-20hrs, 32→71 years

### 4. History of Work Timeline → Interactive
Part Three covers 5 epochs. Make this a memorable interactive experience:
- Horizontal scroll? Vertical with parallax cards? Animated transitions between eras?
- Each era should feel distinct

### 5. Core Visual Language
- Near-black backgrounds (#0A0A0A, #0D0D0D, #111)
- Gold accents (#C9A55C or richer)
- Cream text (#F5F0E8, #E8E0D0)
- Cormorant Garamond for display/headings
- Inter or Space Grotesk for body
- Cursor glow effect (like brand book)
- Subtle noise/grain texture overlay
- Glass morphism panels where appropriate
- GSAP or Framer Motion animations
- Smooth scroll (Lenis if desired)

### 6. Portraits
Two line drawings in /public/images/:
- william.jpg — man with cap and glasses
- mary.jpg — woman with curly hair
These need CSS `filter: invert(1)` or similar to render as white/cream lines on dark backgrounds. Use them creatively in dialogue sections.

### 7. Mobile Responsive
Must look great on mobile. Adapt interactions gracefully.

### 8. Performance
Keep it fast. Lazy load heavy animations. No layout shift.

## What Wins
- Visual impact and "wow factor"
- Creative interaction design
- Cohesion with the brand book / investor deck aesthetic
- Smooth, polished animations
- Typography and spacing excellence
- How it makes you FEEL reading the essay

## Technical Notes
- The project uses Next.js 14, TypeScript, Tailwind CSS
- You can add any dependencies (framer-motion, gsap, lenis, etc.)
- Keep all content faithful to the original essay text
- Dev server port: see instructions below
- When done, the site must build cleanly with `npm run build`

## When Done
Run `npm run build` to verify zero errors, then confirm the dev server is running so the design can be reviewed.
