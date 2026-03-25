# ⚰️ Tab Graveyard 
> **Personal Engineering Project: Reclaiming memory, one tab at a time.**

![Version](https://img.shields.io/badge/version-1.5-BC13FE?style=for-the-badge)
![Manifest](https://img.shields.io/badge/Manifest-V3-white?style=for-the-badge&logo=googlechrome)
![Status](https://img.shields.io/badge/Build-Success-green?style=for-the-badge)

---

## ⚡ The Project Vibe
Browsers are RAM-hungry, and mine was starving. I built **Tab Graveyard** to automate my workflow cleanup. It's a sleek, dark-mode utility that identifies "zombie" tabs and puts them to rest, ensuring my system stays snappy during heavy dev sessions.

---

## 🛠️ The Tech Stack
Building this was a deep dive into the browser's engine. I moved away from "tutorial-level" code to master production-ready **Manifest V3** standards.

| Component | Technology | Role |
| :--- | :--- | :--- |
| **Logic** | `Vanilla JavaScript` | Asynchronous tab querying & filtering |
| **API** | `Chrome Tabs API` | Real-time browser state management |
| **UI/UX** | `CSS3 / Flexbox` | Glassmorphism & Neon-Void aesthetic |
| **Manifest** | `JSON / V3` | Scoped permissions & service workers |

---

## 🧠 Key Learning Milestones
This project wasn't just about closing tabs; it was a self-improvement sprint to master:

1.  **Asynchronous Orchestration:** Using `async/await` to handle non-blocking browser operations.
2.  **Dynamic DOM Injection:** Creating a real-time "Ghost List" that updates without refreshing the popup.
3.  **Data Filtering:** Crafting high-performance array filters to separate "Protected" sites from "Inactive" ones.
4.  **UI Hierarchy:** Organizing complex information into a minimalist, "Gen-Z" compliant interface.

---

## 📂 File Structure
How the "Graveyard" is organized:
```text
TAB_GRAVE/
├── icons/            # Asset branding (16px, 48px, 128px)
├── manifest.json     # The brain (Permissions & Metadata)
├── popup.html        # The skeleton (Structure)
├── popup.js          # The muscle (Logic & API calls)
└── styles.css        # The skin (Glassmorphism & Neon)
```
---
## 🚀 Local Deployment
For personal use or testing:

Clone this repository to your local machine.

Navigate to chrome://extensions/ in your browser.

Toggle Developer mode (top-right).

Select Load unpacked and choose the TAB_GRAVE folder.

Pin the ⚰️ and experience the speed.


## 🛡️ Protected Zones (Whitelist)
To prevent workflow disruption, the following sites are hardcoded as "Immortal":

GitHub (Code stays alive)

YouTube (Music stays playing)

WhatsApp/Web (Communications stay active)

Google (Search stays ready)

## 📬 Let's Connect
This project is part of my continuous journey in Mastering Full-Stack Development. Feel free to fork it and add your own "Loot."
