# 🏋️ APEX Elite Fitness — Gym Landing Page

A modern, premium, dark-themed gym landing page built with React + Vite + Tailwind CSS + Framer Motion.

## 🚀 Quick Start

### Prerequisites
- Node.js v18+ (https://nodejs.org)
- npm v9+

### 1. Install Dependencies
```
npm install
```

### 2. Start Development Server
```
npm run dev
```
Open: http://localhost:5173

### 3. Build for Production
```
npm run build
```

### 4. Preview Production Build
```
npm run preview
```

## 📁 Project Structure
```
gym-landing/
├── src/
│   ├── components/
│   │   ├── Loader.jsx         # Animated loading screen
│   │   ├── Navbar.jsx         # Sticky nav + mobile menu
│   │   ├── Hero.jsx           # Full-screen hero
│   │   ├── Equipment.jsx      # Equipment grid (3D tilt)
│   │   ├── DietPlans.jsx      # Nutrition plans
│   │   ├── Gallery.jsx        # Masonry gallery
│   │   ├── Testimonials.jsx   # Auto-scroll carousel
│   │   ├── Pricing.jsx        # Fee packages
│   │   ├── Competitions.jsx   # Events
│   │   ├── Achievements.jsx   # Timeline
│   │   ├── Trainers.jsx       # Trainer cards
│   │   ├── Booking.jsx        # Booking form
│   │   ├── Branches.jsx       # Locations + maps
│   │   ├── Contact.jsx        # Contact form + map
│   │   └── Footer.jsx
│   ├── data/siteData.js       # All editable content
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
└── package.json
```

## ✨ Features
- Dark UI with neon red accents
- Framer Motion animations throughout
- Fully responsive (mobile, tablet, desktop)
- Glassmorphism cards
- Scroll progress bar
- Loading animation
- 3D tilt effect on cards
- Auto-scrolling testimonials carousel
- Form validation
- Google Maps embedded
- Back-to-top button
- Ticker marquee

## 🎨 Customizing Content
Edit src/data/siteData.js to update all text, trainers, pricing, etc.

## Tech Stack
- React 18 + Vite 8
- Tailwind CSS 3
- Framer Motion
- Lucide React icons
