## Valentine Love Letter – React Experience

A handcrafted, romantic Valentine’s Day website from a wife to her husband, built with React, Vite, Tailwind CSS, Framer Motion, Lucide icons, and optional background music via Howler.

### Tech Stack
- **Framework**: React + Vite
- **Styling**: Tailwind CSS + custom gradients / glassmorphism
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Music**: Howler.js (optional, toggle in the UI)

### Getting Started
```bash
npm install
npm run dev
```

The app will start on `http://localhost:5173`.

### Personalizing the Content
- **All copy, names, dates, and messages** live in `src/data/content.js`.
  - Update `couple.wifeName` and `couple.husbandName`.
  - Edit the love letter paragraphs, timeline events, reasons, gallery descriptions, and surprise message text.
- **Password gate**:
  - Open `src/components/PasswordGate.jsx`.
  - Change the `correctPassword` value to your shared secret word.
- **Music track**:
  - Open `src/components/MusicToggle.jsx`.
  - Replace `FALLBACK_TRACK_URL` with a link to your own (royalty‑free or personal) MP3.

### Main Sections
- **Hero**: animated gradient hero with hearts and CTA.
- **Love Letter**: handwritten-style, animated paragraphs.
- **Our Journey (Timeline)**: soft vertical timeline of your key moments.
- **Reasons I Love You**: glassmorphism grid with hover heart pulse.
- **Gallery**: Polaroid-style placeholders, ready for real photos.
- **Special Message**: emotional peak line with glow pulse.
- **Valentine Surprise**: interactive locked message with confetti and vibration.
- **Background Music**: optional soft romantic track with play/pause toggle.
- **Dark Mode**: “Romantic edition” deep red / wine palette with smooth toggle.

### Deployment
Build a production bundle:
```bash
npm run build
```

Then deploy the generated `dist` folder to **Netlify**, **Vercel**, or any static host.

