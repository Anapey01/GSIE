# Ghana Institution of Engineering (GhIE) — AAMUSTED Student Chapter Platform

Official digital platform for the **Ghana Institution of Engineering (GhIE) Student Chapter** at **AAMUSTED (Kumasi & Mampong Campuses)**.

---

## 🚀 Quick Start & Collaborator Onboarding

Setting up your development environment is automated. Clone the repository and run the setup script for your OS:

### 🪟 Windows (PowerShell)
```powershell
.\setup.ps1
```

### 🍏 macOS / 🐧 Linux / 🪟 WSL (Bash)
```bash
chmod +x setup.sh
./setup.sh
```

*(The script automatically verifies Node.js/npm, creates `.env.local`, installs all dependencies via `npm install`, and launches the Next.js development server on `http://localhost:3000`.)*

---

## 🛠 Manual Installation

If you prefer installing dependencies manually:

```bash
# 1. Clone the repository
git clone https://github.com/Anapey01/GSIE.git
cd GSIE

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## ⚡ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [GSAP](https://gsap.com/) & `@gsap/react`
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🎨 Design System & Human UI/UX Directives

All collaborators must strictly follow the Human UI/UX Rules (`.gemini/rules/human-ui-ux.md`):
- **Zero Decorative Icon Clutter**: Avoid prefixing menu items or badges with unnecessary icons.
- **Pure Typography**: Prioritize clean typographic hierarchy over colored pills/sausages.
- **Official Brand Colors**:
  - **GhIE Cyan**: `#00a2e8`
  - **Executive Navy**: `#0c2340`
  - **Clean Canvas**: `#ffffff` & `#f8fafc`

---

## 📁 Repository Structure

```
├── app/
│   ├── layout.js       # Root layout with hydration warnings suppressed
│   ├── page.js         # Main home page composition
│   └── globals.css     # Global styles & Tailwind directives
├── components/
│   ├── Navbar.jsx      # Navigation bar & mobile drawer
│   ├── HeroBanner.jsx  # Full-bleed geometric notched animated hero
│   ├── AboutSection.jsx# Official GhIE historical narrative section
│   ├── PortalModal.jsx # Student & Alumni Chapter Portal Modal
│   └── Footer.jsx      # Official footer with contact details
├── public/
│   └── images/         # Official GhIE team photos & assets
├── setup.ps1           # Windows setup script
├── setup.sh            # Linux/macOS setup script
└── package.json        # Dependencies & scripts
```

---

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature-name`
2. Commit your changes: `git commit -m "feat: description of change"`
3. Push to origin: `git push origin feature/your-feature-name`
4. Open a Pull Request on [https://github.com/Anapey01/GSIE.git](https://github.com/Anapey01/GSIE.git)
