# 🎓 Shastra CET — Official CAT Mock Test Portal

A comprehensive, full-stack CAT (Common Admission Test) Computer-Based Test (CBT) assessment platform built for **Shastra CET**.

Built with **React**, **Vite**, **Tailwind CSS v4**, and **Firebase** (Authentication & Cloud Firestore).

---

## 🚀 Key Features

- **TCS iON CBT Exam Interface**: Pixel-perfect simulation of the official CAT exam interface, including:
  - Exact question palette shapes (answered green polygon, not-answered pointed polygon, marked-for-review purple circle).
  - Split pane for reading comprehension passages and caselets (with mobile tab switcher).
  - On-screen TCS iON Virtual Scientific & Basic Calculator.
  - Question Paper overview modal.
  - Virtual numerical keypad for TITA (Type In The Answer) questions.
  - Strict 40-minute sectional clocks with sequential progression (VARC ➔ DILR ➔ QA) and auto-submission on timer expiry.
  - Fullscreen lockdown proctoring: automatically enters fullscreen on test launch with an active lockdown overlay if exited.
- **College-Restricted Authentication**:
  - Sign-up is strictly **Google Sign-In only** using official college email IDs ending with `@cet.ac.in`.
  - Registration modal collects student name, 10-digit mobile number, department, year of study, and login password.
  - Login supports both Google Sign-In and saved Email & Password.
- **Student Profile & Comprehensive Performance Analytics**:
  - Accessible via header profile card or dedicated "View Analytics" buttons.
  - Detailed scorecard: overall score (out of 198), estimated percentile, accuracy %, and attempt rate.
  - Interactive SVG score and percentile progression trend graphs across chronological test attempts.
  - Sectional accuracy meters for VARC, DILR, and QA.
  - Past attempt history with question-by-question review showing candidate's response, official answer key, and in-depth explanations.
  - Profile management: update name, department, year, and password; college email and mobile number remain verified and read-only.
- **Fully Responsive & Mobile-Optimized**: Custom tailored for mobile phones, tablets, and desktop displays.

---

## 🛠️ Technology Stack

- **Frontend**: React 19, Vite, Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons**: Lucide React + custom inline SVGs
- **Backend / Database**: Firebase Authentication, Cloud Firestore
- **Deployment**: Vercel ready (`vercel.json` configured for SPA routing)

---

## 💻 Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/pisensein-gif/Shastra-CatMockTest.git
   cd Shastra-CatMockTest
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

---

## ☁️ Deploying to Vercel

This repository is pre-configured for one-click deployment on [Vercel](https://vercel.com):

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard) and click **Add New... ➔ Project**.
2. Import the GitHub repository: `https://github.com/pisensein-gif/Shastra-CatMockTest`.
3. Vercel automatically detects the **Vite** framework preset:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. Click **Deploy**. Vercel will build the project and assign a production URL with automatic HTTPS and global edge CDN.

`vercel.json` is included to handle client-side route rewrites.

---

## 👥 Credits

- **Organized by**: Shastra CET
- **Developer**: [Abhishek](https://www.instagram.com/abhi_sheiik_/?hl=en)
- **Instagram**: [@shastra_cet](https://www.instagram.com/shastra_cet/)
- **LinkedIn**: [Shastra CET](https://www.linkedin.com/company/shastracet/)
- **Email**: teamshastracet@gmail.com
- **Copyright**: © 2026 Shastra CET. All rights reserved.
