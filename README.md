# AbiLink Dashboard

A responsive React + Vite + Tailwind CSS dashboard starter with reusable components, sample workspace data, and Framer Motion animations.

## Requirements
- Node.js 18+ (recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (typically http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```

## Project structure
```text
abilink-dashboard/
├── src/
│   ├── components/
│   │   ├── dashboard/StatCard.jsx
│   │   ├── layout/Sidebar.jsx
│   │   ├── projects/ProjectRow.jsx
│   │   ├── tasks/TaskRow.jsx
│   │   ├── ui/Avatar.jsx
│   │   └── views/OtherView.jsx
│   ├── data/workspaceData.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Notes
- The dashboard currently uses sample data.
- Task changes are held in React state and reset on refresh.
- Authentication, database storage, and backend APIs are not connected.
- Each extracted component has its own file and can be extended independently.

## Compile fixes
The component JSX and icon imports are corrected in this archive. If you already extracted an older copy, replace it with this ZIP before running `npm install` and `npm run dev`.

## Marketing website sections

The existing workspace dashboard is preserved. Use the **View marketing website** button in the sidebar to open the new AbiLink public-facing landing page. It includes:

- Hero section with headline, description, CTA buttons, and dashboard preview
- About / introduction section
- Features cards grid
- Testimonials / review cards (sample demo content)
- Pricing plans with feature lists and CTA buttons (sample demo pricing)
- Footer with contact email, useful links, and social media icons

The landing-page CTAs return to the workspace dashboard. The pricing, testimonials, social destinations, and contact address are placeholders for this demo and should be replaced with real business details before publishing.
