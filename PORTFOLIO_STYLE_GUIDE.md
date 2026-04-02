# Portfolio Redesign — Style Guide

**Purpose:** Restyle the existing portfolio website to match the new design system defined below.
**Rule:** Preserve all existing content, copy, and the profile photo. Change only styles, layout, and structure.

---

## 1. Design Principles

- **Light mode only.** White and off-white surfaces; no dark backgrounds anywhere except the hero gradient mesh (which is very subtle).
- **Dark green as the sole accent.** Every interactive element, highlight, and brand moment uses the accent palette. No secondary accent colors.
- **Clean and editorial.** Generous whitespace, clear typographic hierarchy, minimal decoration.
- **Content first.** No element should draw attention away from the content — animations are subtle, decorations are restrained.

---

## 2. Color Palette

Define these as CSS custom properties on `:root`:

```css
:root {
  --bg:             #f7f8f5;   /* page background */
  --surface:        #ffffff;   /* card / nav / footer background */
  --surface-2:      #f0f2ec;   /* slightly tinted surface for hover states */
  --accent:         #1a5c3a;   /* primary dark green — buttons, links, active states */
  --accent-mid:     #2a7a4f;   /* hover shade of accent */
  --accent-light:   #e8f2ec;   /* tint — badge fills, hover backgrounds, tag fills */
  --accent-muted:   #b8d4c2;   /* muted green — decorative dots, disabled states */
  --text:           #0f1a14;   /* primary text */
  --muted:          #5a6b62;   /* secondary text, placeholders, subtitles */
  --border:         rgba(26, 92, 58, 0.12);  /* default border */
  --border-strong:  rgba(26, 92, 58, 0.22);  /* emphasized border */
}
```

**Usage rules:**
- `--accent` on white backgrounds only. Never place `--accent` text on `--accent-light` if contrast is insufficient.
- `--accent-light` as background fill for badges, tags, pill labels, and hover states.
- `--muted` for all secondary/supporting text. Never use pure gray (#888, #999, etc.).
- No hardcoded hex values in component styles — always reference a CSS variable.

---

## 3. Typography

### Font Stack

```css
/* Import in <head> */
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&display=swap');

--font-display: 'Syne', sans-serif;
--font-body:    'DM Sans', sans-serif;
--font-mono:    'DM Mono', 'Fira Code', monospace;
```

### Scale

| Role | Font | Size | Weight | Color |
|---|---|---|---|---|
| Hero title | Syne | clamp(50px, 8vw, 84px) | 800 | `--text` |
| Hero title accent word | Syne | same | 800 | `--accent` |
| Section title (h2) | Syne | clamp(28px, 4vw, 42px) | 700 | `--text` |
| Section label (eyebrow) | DM Sans | 11.5px | 600 | `--accent` |
| Card title | Syne | 16px | 600 | `--text` |
| Body text | DM Sans | 15px | 400 | `--muted` |
| Small / meta | DM Sans | 13px | 400 | `--muted` |
| Uppercase label | DM Sans | 11px | 500 | `--muted` |
| Code / mono | DM Mono | 12.5px | 400 | varies |

### Rules
- `letter-spacing: -2px` on the hero title, `-0.5px` on section titles.
- `line-height: 1.75–1.85` on body paragraphs.
- Section eyebrow labels: `text-transform: uppercase; letter-spacing: 0.14em`.
- Never use font weights 600 or 700 for body text — use 500 (medium) at most.

---

## 4. Layout & Spacing

- Max content width: no hard max-width on the full page; use `padding: 0 5%` on all sections for consistent gutters.
- Section vertical padding: `90px 5%` on desktop, `60px 5%` on mobile.
- Nav height: `62px`, fixed to top.
- Card grid: `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))` with `gap: 20px`.
- Stats row: `grid-template-columns: repeat(3, 1fr)` with `gap: 14px`.
- About section two-column: `grid-template-columns: 1fr 1fr; gap: 64px` — collapse to single column below 800px.

---

## 5. Components

### 5.1 Navigation

```
- Position: fixed, top 0
- Background: rgba(247, 248, 245, 0.88) with backdrop-filter: blur(16px)
- Bottom border: 1px solid var(--border)
- Logo: Syne 700 17px, color --text, accent dot in --accent
- Nav links: DM Sans 14px, color --muted; hover/active → --accent
- Active link: underline bar using ::after pseudo-element, 1.5px height, --accent color
```

### 5.2 Hero Section

**Layout:** Full viewport height (`min-height: 100vh`), flex align-items center, left-aligned content.

**Background mesh:** Three absolutely-positioned blobs filtered with `blur(90px)`, very low opacity (~0.10–0.13). Colors: green tones only.
- Blob 1: `rgba(26, 92, 58, 0.13)`, top-right, 580×480px
- Blob 2: `rgba(42, 122, 79, 0.09)`, center-right, 400×380px
- Blob 3: `rgba(184, 212, 194, 0.35)`, bottom-right, 320×320px

**"Open to opportunities" badge:**
```css
display: inline-flex; align-items: center; gap: 8px;
padding: 6px 14px; border-radius: 100px;
border: 1px solid var(--border-strong);
background: var(--accent-light);
color: var(--accent); font-size: 12.5px; font-weight: 500;
```
- Animated green dot (pulse keyframe, 2s infinite) before the text.

**Profile photo:** Place immediately to the right of (or below on mobile) the hero text. Style as:
```css
border-radius: 50%;               /* circular crop */
width: clamp(160px, 18vw, 240px);
height: clamp(160px, 18vw, 240px);
object-fit: cover;
border: 3px solid var(--accent-light);
box-shadow: 0 8px 32px rgba(26, 92, 58, 0.12);
```
On mobile (below 768px), center the photo above the hero text.

**Tech stack tags** (pill row below hero description):
```css
padding: 5px 13px; border-radius: 100px;
border: 1px solid var(--border-strong);
background: var(--surface);
color: var(--muted); font-size: 12.5px;
transition: all 0.2s;
/* hover: */ border-color: var(--accent); color: var(--accent); background: var(--accent-light);
```

**Hero entry animation:** Staggered `fadeUp` on each element (badge, h1, subtitle, description, tags, buttons, socials) with `animation-delay` increasing by ~120ms per element.

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(22px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

### 5.3 Buttons

**Primary button:**
```css
background: var(--accent); color: #fff; border: none;
padding: 11px 24px; border-radius: 8px;
font-family: var(--font-body); font-size: 14px; font-weight: 500;
box-shadow: 0 2px 12px rgba(26, 92, 58, 0.25);
transition: all 0.2s;
/* hover: */ background: #154d30; transform: translateY(-1px);
            box-shadow: 0 4px 20px rgba(26, 92, 58, 0.3);
```

**Outline button:**
```css
background: var(--surface); color: var(--text);
border: 1px solid var(--border-strong);
padding: 11px 24px; border-radius: 8px;
transition: all 0.2s;
/* hover: */ border-color: var(--accent); color: var(--accent); background: var(--accent-light);
```

### 5.4 Social Icon Buttons

```css
width: 40px; height: 40px; border-radius: 8px;
border: 1px solid var(--border-strong);
background: var(--surface); color: var(--muted);
display: flex; align-items: center; justify-content: center;
transition: all 0.2s;
/* hover: */ border-color: var(--accent); color: var(--accent); background: var(--accent-light);
```
Icon SVGs: 17×17px, `fill: currentColor`.

### 5.5 Section Eyebrow + Title Pattern

Every section uses this pattern:
```html
<p class="section-label">Category Name</p>
<h2 class="section-title">Display Title</h2>
<p class="section-sub">Optional supporting description.</p>
```
Bottom margin on `.section-head`: `52px`.

### 5.6 Stat Cards

Three-column grid of small cards (used in the About section):
```css
/* card */
background: var(--bg); border: 1px solid var(--border);
border-radius: 14px; padding: 22px 20px;
transition: all 0.2s;
/* hover: */ border-color: var(--accent-muted); background: var(--accent-light);

/* icon container */
width: 34px; height: 34px; border-radius: 8px;
background: var(--accent-light); border: 1px solid var(--border-strong);

/* number */
font-family: var(--font-display); font-size: 30px; font-weight: 700; color: var(--text);

/* label */
font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted);

/* arrow */
font-size: 15px; color: var(--accent-muted); margin-top: 14px;
```

### 5.7 Project Cards

```css
/* card */
background: var(--surface); border: 1px solid var(--border);
border-radius: 14px; overflow: hidden;
transition: all 0.25s;
/* hover: */ border-color: var(--accent); transform: translateY(-3px);
            box-shadow: 0 12px 40px rgba(26, 92, 58, 0.10);

/* image area */
height: 160px; background: linear-gradient(135deg, #e8f2ec, #d0e8d8);
display: flex; align-items: center; justify-content: center;
/* Use a different light green gradient per card for variety */

/* body */
padding: 20px;

/* tech tags */
font-size: 11.5px; padding: 3px 9px; border-radius: 4px;
background: var(--accent-light); color: var(--accent);
border: 1px solid var(--border-strong); font-weight: 500;

/* project links row */
margin-top: 16px; padding-top: 14px; border-top: 1px solid var(--border);

/* link */
font-size: 12.5px; color: var(--muted); font-weight: 500;
text-decoration: none; transition: color 0.2s;
/* hover: */ color: var(--accent);
```
If the project has a screenshot, use it as the card image. If not, use the green gradient placeholder.

### 5.8 Skills Section

**Tabs (pill toggles):**
```css
padding: 8px 18px; border-radius: 100px; font-size: 13px;
border: 1px solid var(--border-strong); background: transparent;
color: var(--muted); cursor: pointer; transition: all 0.2s;
/* active/hover: */ background: var(--accent); border-color: var(--accent); color: #fff;
```

**Skill items:**
```css
display: flex; align-items: center; gap: 9px;
padding: 9px 16px; border-radius: 8px;
border: 1px solid var(--border); background: var(--bg);
font-size: 13.5px; color: var(--text); transition: all 0.2s;
/* hover: */ border-color: var(--accent); background: var(--accent-light); color: var(--accent);
```
Prepend a 6×6px circle (`background: var(--accent); border-radius: 50%`) as a visual bullet.

### 5.9 Experience Timeline

Each entry separated by `border-bottom: 1px solid var(--border)`, with `padding: 20px 0`.

```css
/* date */
font-size: 11.5px; color: var(--accent); font-weight: 600;
text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 5px;

/* role */
font-family: var(--font-display); font-size: 16px; font-weight: 600; color: var(--text);

/* company */
font-size: 13px; color: var(--muted);
```

### 5.10 Contact Form

```css
/* inputs and textarea */
width: 100%; background: var(--surface);
border: 1px solid var(--border-strong); border-radius: 8px;
padding: 12px 16px; font-size: 14px; color: var(--text);
font-family: var(--font-body); outline: none; transition: border-color 0.2s;
/* focus: */ border-color: var(--accent);
             box-shadow: 0 0 0 3px rgba(26, 92, 58, 0.08);
/* placeholder: */ color: #b0bdb5;
```
Name + email sit side-by-side (`display: flex; gap: 12px`). Message textarea below, full width, `rows="5"`, `resize: vertical`.

### 5.11 Footer

```css
padding: 32px 5%;
border-top: 1px solid var(--border);
background: var(--surface);
display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;
font-size: 13px; color: var(--muted);
```
Footer links: same 13px muted style, hover → `--accent`.

---

## 6. Section Backgrounds

Alternate between `--bg` and `--surface` to create visual separation without borders:

| Section | Background |
|---|---|
| Hero | `--bg` (with mesh blobs) |
| About | `--surface` |
| Projects | `--bg` |
| Skills | `--surface` |
| Contact | `--bg` |
| Footer | `--surface` |

---

## 7. Borders & Radius

- Default cards: `border-radius: 14px`
- Buttons, inputs, skill items: `border-radius: 8px`
- Pills / tags / badges: `border-radius: 100px`
- Small tech tags: `border-radius: 4px`
- Profile photo: `border-radius: 50%`
- Default border: `1px solid var(--border)` (`rgba(26,92,58,0.12)`)
- Emphasized border (form inputs, badge outlines): `1px solid var(--border-strong)` (`rgba(26,92,58,0.22)`)
- Active/featured card border: `1px solid var(--accent)` — 1px only, no thicker

---

## 8. Shadows

Shadows should be green-tinted, not gray:

```css
/* Default card elevation (e.g. code card, nav) */
box-shadow: 0 8px 40px rgba(26, 92, 58, 0.08);

/* Project card hover */
box-shadow: 0 12px 40px rgba(26, 92, 58, 0.10);

/* Primary button */
box-shadow: 0 2px 12px rgba(26, 92, 58, 0.25);

/* Primary button hover */
box-shadow: 0 4px 20px rgba(26, 92, 58, 0.30);

/* Profile photo */
box-shadow: 0 8px 32px rgba(26, 92, 58, 0.12);
```
No pure gray or black shadows anywhere.

---

## 9. Animations

**Page load:** `fadeUp` stagger on hero elements only (see Section 5.2). Do not apply page-load animations to other sections.

**Scroll-triggered reveals:** Apply a subtle `fadeUp` (same keyframe, 0.5s ease) to section titles and card grids as they enter the viewport. Use `IntersectionObserver` with `threshold: 0.15`.

**Hover transitions:** All interactive elements use `transition: all 0.2s ease`. No slower transitions except the pulse dot (2s).

**No parallax, no particle effects, no full-page scroll animations.** Keep motion minimal and purposeful.

---

## 10. Responsive Breakpoints

| Breakpoint | Change |
|---|---|
| `max-width: 1000px` | Hide floating code card |
| `max-width: 800px` | About section collapses to single column |
| `max-width: 768px` | Profile photo moves above hero text, centered |
| `max-width: 640px` | Hero buttons stack vertically; nav collapses to hamburger |
| `max-width: 480px` | Stats grid → `repeat(3, 1fr)` stays but font reduces; project grid → 1 column |

---

## 11. Content Preservation Rules

1. **Do not change any text content.** All headings, body copy, project descriptions, job titles, dates, and skill names must remain exactly as they are.
2. **Keep the profile photo** in its current `<img>` tag. Only update its CSS class/styles per Section 5.2.
3. **Keep all project links, GitHub URLs, and live demo URLs** intact.
4. **Keep all social links** (GitHub, LinkedIn, etc.) — only restyle the buttons.
5. **Keep the resume/CV download link** intact.
6. **Do not reorder sections** unless the current order is: Hero → About → Projects → Skills → Contact. If it differs, preserve the existing order.
7. **Keep all `id` attributes** on sections for anchor navigation.

---

## 12. What NOT to Do

- Do not use any purple, blue, or other non-green accent colors.
- Do not use dark/black backgrounds (except the hero mesh blobs which are extremely faint).
- Do not add new sections or content that doesn't exist in the current portfolio.
- Do not use Inter, Roboto, Arial, or system fonts — use Syne + DM Sans only.
- Do not use `box-shadow` with gray or black color values.
- Do not use gradient fills on buttons — solid `--accent` only.
- Do not add animations beyond what's specified in Section 9.
- Do not use any CSS `!important` declarations.
- Do not change the semantic HTML structure (h1, h2, nav, section, footer, etc.).
