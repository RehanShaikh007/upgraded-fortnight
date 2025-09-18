# Rehan Shaikh – Portfolio (React + Vite)

A modern, animated personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion. It showcases featured projects, skills, experience, and includes a contact form powered by EmailJS to deliver messages directly to your inbox.

Live Repos Page: https://github.com/RehanShaikh007?page=1&tab=repositories

## ✨ Features

- Animated landing and section transitions with Framer Motion
- Responsive design with Tailwind CSS
- Projects grid with hover actions:
  - GitHub icon → opens repository
  - External link icon → opens live demo
  - Card click does not navigate to avoid accidental redirects
- Experience and Skills sections
- Contact form with EmailJS (sends emails without a backend)

## 🧱 Tech Stack

- React (Vite)
- Tailwind CSS
- Framer Motion
- Tabler Icons
- EmailJS (client-side email)

## 📁 Project Structure (key files)

```
frontend/
  src/
    components/
      Navigation.jsx
      ProjectsSection.jsx
      ExperienceSection.jsx
      SkillsSection.jsx
      ContactSection.jsx
      Footer.jsx
    pages/
      LandingPage.jsx
    main.jsx
    App.jsx
  index.html
  tailwind.config.js
  vite.config.js
```

## 🚀 Getting Started

1) Install dependencies
```
npm install
```

2) Start the dev server
```
npm run dev
```

3) Build for production
```
npm run build
```

4) Preview production build
```
npm run preview
```

## ✉️ EmailJS Setup (Contact Form)

This project uses EmailJS to send form submissions directly to your email without a backend.

Prereqs
- Create a free account at https://www.emailjs.com/
- Connect an email service (e.g., Gmail)
- Create an email template and note:
  - Service ID (e.g., `service_65e512c`)
  - Template ID (e.g., `template_xxxxxx`)
  - Public Key

Install dependency
```
npm i @emailjs/browser
```

Configure IDs
- Open `src/components/ContactSection.jsx`
- Set the constants near the top:
  - `EMAILJS_SERVICE_ID = 'service_65e512c'`
  - `EMAILJS_TEMPLATE_ID = 'template_xxxxxx'`
  - `EMAILJS_PUBLIC_KEY = '<your_public_key>'`

Template variables
- Ensure your EmailJS template uses variables that match what the form sends:
  - `from_name`
  - `from_email`
  - `reply_to` (set to user email for easy replying)
  - `subject`
  - `message`

Reply-To configuration
- In your EmailJS template settings, set the Reply-to field to `{{reply_to}}` so replies go to the sender’s email.

## 🧩 Notable UI Behaviors

- Project card hover shows action buttons only; only the two icons navigate.
- “View All Projects” button opens the GitHub repositories page in a new tab.
- Performance-friendly hover animations (GPU transforms, reduced heavy shadows).

## 🌐 Deployment

You can deploy this Vite app easily to Netlify, Vercel, or GitHub Pages.

Vercel
1) Push to GitHub
2) Import the repo on https://vercel.com/
3) Framework preset: Vite → Build Command: `npm run build` → Output: `dist`

Netlify
1) Push to GitHub
2) Import the repo on https://app.netlify.com/
3) Build Command: `npm run build` → Publish directory: `dist`

## 🛠️ Scripts

- `dev` – start local dev server
- `build` – build production bundle
- `preview` – preview built bundle

## 🤝 Contributing

Suggestions and improvements are welcome! Feel free to open an issue or PR.

## 📬 Contact

- Portfolio Contact section (EmailJS)
- LinkedIn: https://www.linkedin.com/in/rehan-shaikh-900571276/
- GitHub: https://github.com/RehanShaikh007

---

Built with ❤️ using React + Vite.
