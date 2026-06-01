# Song Submission Tracker — Requirements Document
**Project:** Shahn Bendz Song Submission Tracker  
**Date:** 2026-05-31  
**Status:** Planning

---

## Goal

Build a fully functional song submission tracker for Shahn Bendz — HTML/CSS/JS frontend with Apple-inspired design, Google Sheets as the database, hosted on GitHub Pages for cross-device access. Pre-load all 5 priority tiers (labels + DJs). Research and populate each entry with IG handles, label bosses, submission links, contact methods, and relevant notes. Include status tracking (Sent → Response → Signed) and a metrics dashboard (submissions sent, response rate, signed count, weekly breakdown). The tracker must be fully editable without data loss, and moving labels or DJs between priority tiers must be intuitive and easy — drag and drop or simple reassignment.

---

## Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Frontend | HTML / CSS / JS | Full design control, Apple-style UI |
| Database | Google Sheets (via API) | Cloud-synced, free, editable directly |
| Hosting | GitHub Pages | Free, cross-device via URL, no maintenance |

---

## Access

- Desktop: Open hosted URL in browser
- Mobile: Same URL bookmarked on phone
- Data always in sync via Google Sheets as single source of truth
- Only Shahn Bendz using it (for now), but shareable for content creation

---

## Data Model

### Entry Types
- **Label** — a record label to submit to
- **DJ** — an individual DJ/artist to submit to

### Fields Per Entry

| Field | Description |
|---|---|
| Name | Label or DJ name |
| Type | Label or DJ |
| Priority Tier | 1–5 (see tiers below) |
| Label Boss | Name of the person running the label |
| Associated DJs | DJs linked to this label (or vice versa) |
| Instagram Handle | Clickable IG link |
| Contact Method | Best way to reach them (DM, email, submission portal, etc.) |
| Contact / Submission Link | Direct clickable link |
| Status | Sent / Got a Response / Signed |
| Response Detail | Sub-option when status = Got a Response (e.g., Pass, Interested, Hold) |
| Date Sent | When the submission was sent |
| Song Title | Which song was submitted |
| Notes | Research findings relevant to Shahn Bendz — pre-populated + editable |

---

## Priority Tiers (Pre-loaded)

### Priority 1 — Send First
*Best combination of stylistic fit, likelihood of play, influence, relevance to groove-driven rave-techno sound*

**Labels:** DOOF, OUTWORLD, Filth on Acid, Codex Recordings, 1605, We Are The Brave, Terminal M, Repopulate Mars  
**DJs:** Hannah Laing, HI-LO, Eli Brown, Space 92, Layton Giordani, Maddix, Azyr, Charlie Sparks, Joyhauser, Alan Fitzpatrick, Spartaque, UMEK

### Priority 2 — Very Strong Fits

**Labels:** Drumcode, Arcane, Odd Recordings, Senso Sounds, Unrilis, AnalyticTrail, Say What?, IAMT  
**DJs:** Adam Beyer, Alignment, Julian Jeweil, Charles D, Monika Kruse, Ben Hemsley, Novah, Odymel, Max Styler, Marie Vaunt, AK SPORTS, Marlon Hoffstadt

### Priority 3 — Rising Artists With Real Upside

**Labels:** Reckless, Rave Alert, Falsive Records, Mutual Rytm, Minds Of Sin  
**DJs:** Fish56Octagon, Onlynumbers, CARV, Dyen, Parfait, AKKI, blk., Pegassi, Cloudy, Franck, Kettama, Funk Tribu

### Priority 4 — Hardgroove Specialists
*May love the groove but slightly less aligned with rave-hook direction*

**Labels:** Planet Rhythm, Decoded Records, Enemy Records  
**DJs:** Chlär, Alarico, Rene Wise, Marcal, Isaiah, BAUGRUPPE90, DJ SWISHERMAN, ANNĒ

### Priority 5 — Wildcards / Long Shots

**Labels:** KNTXT, EXHALE, Experts Only  
**DJs:** John Summit, Amelie Lens, Charlotte de Witte, Kasablanca, Popof, Juliet Fox, Bad Boombox, MCR-T, Sikoti, Lee Foss, Kyle Watson

---

## Status Workflow

```
Sent → Got a Response → Signed
                ↓
         Response options:
         - Pass
         - Interested
         - Hold / Considering
         - No Reply (auto after X days)
```

---

## Metrics Dashboard

| Metric | Description |
|---|---|
| Total Submissions Sent | All entries with status = Sent or beyond |
| Response Rate | % of submissions that got any response |
| Signed Count | Total entries with status = Signed |
| Weekly Breakdown | Bar/line chart — submissions sent per week |
| Response Breakdown | Pie/donut — Pass vs Interested vs Hold vs No Reply |
| Priority Tier Breakdown | How many submissions per tier |
| Top Contacted Labels/DJs | Who you've submitted to most |
| Average Response Time | Days between sent and response (where applicable) |

---

## UI Requirements

- **Design language:** Apple-inspired — clean, minimal, generous whitespace, SF Pro or system font, subtle shadows, rounded corners
- **Easy to read:** Large clear typography, color-coded status badges, priority tier color coding
- **Editable:** Every field editable inline or via modal, no data loss on edits
- **Expandable:** Add new labels, DJs, songs at any time
- **Priority reassignment:** Drag and drop or simple dropdown to move entries between tiers
- **Mobile responsive:** Full functionality on phone browser
- **Clickable links:** IG handles and contact/submission links open directly

---

## Research Task (after build)

For every label and DJ in the list, research and populate:
- Instagram handle + link
- Label boss / key contact name
- Best submission method (DM, email, portal)
- Submission portal link if it exists
- Notes: anything relevant to Shahn Bendz specifically — label sound, vibe, what they're looking for, recent signings, relationship tips

---

## Build Order

1. Build HTML/CSS/JS frontend with Apple design, all fields, status workflow, metrics dashboard
2. Set up Google Sheets as database and connect via API
3. Pre-load all 5 priority tiers (labels + DJs) as stubs
4. Research and populate all entries with contact info, IG handles, notes
5. Deploy to GitHub Pages
6. Test on desktop and mobile

---

## Out of Scope (for now)

- Multi-user / collaboration features
- Automated email sending
- Audio file uploads
- Native mobile app
