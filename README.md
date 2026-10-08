# 🚀 Developer Resume & Portfolio Website

A modern, high-performance, and responsive personal resume & portfolio website designed to showcase your engineering skills, projects, and career history to recruiters and hiring managers. Ready for 1-click deployment on **Vercel** via **GitHub**.

---

## ✨ Features Included

- **⚡ Blazing Fast & Zero-Config:** Built with modern HTML5, Tailwind CSS, Lucide icons, and vanilla JavaScript. Deploys instantly to Vercel with zero build time and zero server costs.
- **🎨 Dark & Light Mode:** System-aware theme toggle with smooth transitions and persistent `localStorage` saving.
- **📄 1-Click ATS-Friendly PDF Resume:** Built-in "Save PDF" button triggers a dedicated print stylesheet (`@media print`) that formats your resume into a clean, professional, high-contrast document ready for recruiters.
- **🛠️ Interactive Skills Filter:** Filter skills dynamically across Frontend, Backend, Cloud/DevOps, and Tools with proficiency badges.
- **💼 Project Showcase with Case Studies:** Interactive project cards with live demo links, GitHub buttons, metrics badges, and architecture modal popups.
- **⏳ Work Experience Timeline:** Visual career milestones with bulleted quantifiable achievements.
- **📬 Interactive Contact Section:** Direct contact cards, 1-click email copy with animated toast notification, and message form.
- **⚙️ Centralized Data File (`data.js`):** Update your resume details, skills, experiences, and links in **one single file** without digging through HTML!

---

## 📂 Project Structure

```text
portfolio-resume/
├── index.html       # Semantic HTML5 layout and SEO metadata
├── data.js          # 👈 EDIT THIS: Your personal details, skills, and projects
├── styles.css       # Custom animations, dark mode rules, and print/PDF styles
├── app.js           # Dynamic rendering, modal triggers, and theme management
├── vercel.json      # Production Vercel configuration (headers & clean URLs)
├── .gitignore       # Git ignore rules
└── README.md        # Documentation and deployment instructions
```

---

## 🛠️ Step 1: Customize Your Information

You don't need to touch complex code! Simply open **`data.js`** in your editor:

1. **`personal`**: Your name, title, bio, email, location, phone number, and social links (GitHub, LinkedIn, Twitter).
2. **`skills`**: Your core skills, categories (`frontend`, `backend`, `devops`, `tools`), and proficiency levels.
3. **`projects`**: Your top projects, descriptions, tech stacks, live demo URLs, and GitHub links.
4. **`experience`**: Your employment history and bulleted achievements.
5. **`education` & `certifications`**: Your degrees and professional credentials.

---

## 💻 Step 2: Preview Locally

You can preview the website immediately:
- Simply **double-click `index.html`** in Windows File Explorer to open it in your default web browser (Chrome, Edge, Firefox, Brave).
- Or, if you use VS Code, right-click `index.html` and click **"Open with Live Server"**.

---

## 🐙 Step 3: Install Git & Push to GitHub

### 1. Install Git (if not yet installed)
Open Windows PowerShell and run:
```powershell
winget install --id Git.Git -e --source winget
```
*(Or download the installer directly from [git-scm.com](https://git-scm.com/download/win).)*

After installation completes, close and reopen PowerShell.

### 2. Initialize Git and Commit
Navigate to the project directory in PowerShell:
```powershell
cd "C:\Users\lundinw\.gemini\antigravity\scratch\portfolio-resume"
git init
git add .
git commit -m "Initial commit: developer portfolio & resume website"
```

### 3. Push to GitHub
1. Go to [github.com/new](https://github.com/new) and sign in.
2. Create a new repository named `portfolio` (keep it **Public**).
3. Do **not** initialize with README or license (you already have them).
4. Run the commands shown by GitHub in your terminal:
```powershell
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/portfolio.git
git push -u origin main
```

---

## ▲ Step 4: Deploy to Vercel (Free & Instant)

1. Go to [vercel.com](https://vercel.com) and click **Sign Up** (choose **Continue with GitHub**).
2. On your Vercel Dashboard, click **"Add New..."** → **"Project"**.
3. Locate your `portfolio` repository from GitHub and click **"Import"**.
4. **Framework Preset:** Leave as `Other` (Vercel automatically detects HTML/CSS/JS).
5. **Root Directory:** `./`
6. Click **"Deploy"**!

🎉 In less than 15 seconds, your website will be live at a free URL like:
`https://portfolio-<your-username>.vercel.app`

### Automatic Updates:
Whenever you update `data.js` or make changes:
```powershell
git add .
git commit -m "Update projects and skills"
git push
```
Vercel will **automatically re-deploy** your website within seconds!

---

## 🖨️ Exporting ATS Resume PDF

When you or an employer clicks **"Save PDF"** or **"Download Resume"**:
1. The browser's print dialog will open with print styling automatically active.
2. In the print dialog, select **"Save as PDF"** as the Destination.
3. Check **"Background graphics"** for optimal badge rendering.
4. Click **Save** to generate a clean, ATS-friendly PDF copy of your resume!
