# Permanent Human UI/UX Design System Rules

These rules govern all UI/UX design and frontend development for the **GhIE Student Chapter at AAMUSTED** codebase.

---

## 🛑 Rule 1: ZERO Decorative Icon Clutter
- **STRICT REQUIREMENT**: Never place decorative shield, checkmark, star, rocket, or badge icons (`🛡`, `🚀`, `✨`, `⭐`) in front of menu items, section titles, headers, or buttons.
- Icons are permitted **ONLY** for strict functional utility:
  - `ChevronDown` for expandable dropdowns / accordions.
  - `ArrowUpRight` or `ExternalLink` for external navigation.
  - `X` or `Menu` for modal/drawer toggles.
  - `GraduationCap` or `Briefcase` for explicit role identification in tabs/inputs.

---

## 🛑 Rule 2: Pure Typography Over Background Sausages
- No light-blue background highlight pills (`bg-sky-50 rounded-xl`) or rounded sausage containers around links.
- Rely on clean typography, font weight transitions (`font-medium` -> `font-bold`), color shifts (`text-[#0c2340]` -> `text-[#00a2e8]`), and thin row dividers (`divide-y divide-slate-100`).

---

## 🛑 Rule 3: Proportioned Executive Buttons
- No full-width giant rounded-2xl bubble buttons.
- Buttons must use clean executive corners (`rounded-lg` or `rounded-xl`), crisp padding (`px-5 py-2.5`), and official color tokens:
  - Primary: GhIE Cyan (`#00a2e8` / hover: `#008bcb`)
  - Executive: Deep Navy (`#0c2340`)

---

## 🛑 Rule 4: Clean Whitespace & Layout Alignment
- Prioritize whitespace, clean alignment, and subtle horizontal borders over heavy floating cards.

---

## 🛑 Rule 5: Institutional Brand Tokens
- **Primary Accent**: GhIE Cyan (`#00a2e8`)
- **Executive Dark**: Deep Navy (`#0c2340`)
- **Background**: Crisp White (`#ffffff`) / Slate (`#f8fafc`)
- **Headings Font**: Montserrat (`font-heading`)
- **Body Font**: Inter (`font-sans`) & Open Sans
