# MyUI Design System - Documentation

## 🚀 Overview
MyUI is a modern, framework-agnostic design system built with **Tailwind CSS v4**, **Vanilla JS**, and **CSS Variables**. It focuses on performance, accessibility, and a premium aesthetic inspired by Shadcn/UI but with zero heavy dependencies.

---

## 🎨 Color System (OKLCH)
We use the `oklch` color space for uniform perception of brightness and accessibility.

### 3-Level Palette
All status and theme colors follow a 3-level naming convention:
- `-solid`: High contrast, for primary actions and important borders.
- `-med`: Intermediate contrast, for secondary borders and focus states.
- `-soft`: Low contrast, for subtle backgrounds and areas where text readability is key.

### Semantic Tokens
- `--color-primary`: Maps to the brand's main color.
- `--color-bg` & `--color-fg`: Main background and foreground.
- `--color-surface`: Card and modal backgrounds.
- `--color-border`: Standard border color (dynamically updated in dark mode).

---

## 🧩 Components

### 1. Accordion
A smooth-transitioning accordion using the CSS Grid row trick for fluid animations.
- **Trigger**: `<button class="accordion-trigger">`
- **Content**: `<div class="accordion-content">` with `<div class="accordion-inner">` inside.

### 2. Alerts
Contextual messages with a functional close button.
- **Variants**: `alert-success`, `alert-error`, `alert-warning`, `alert-info`.
- **Interaction**: Close buttons (`data-alert-close`) trigger a fade-out and collapse animation.

### 3. Modals & Overlays
Fully accessible modals and dropdowns.
- **Close Button**: Standard 'X' icon in the top-right corner for quick closure.
- **Interactions**: Uses `data-modal-trigger` and `data-modal-close` for zero-config implementation.

---

## 📱 Navigation & Responsive Toggle
The mobile navigation features a **dual-icon toggle**:
- **Hamburger**: Visible when the menu is closed.
- **X (Close)**: Visible when the menu is open.
Driven by `aria-expanded` and CSS, ensuring it's lightweight and accessible.

---

## 🎭 Brands & Themes
MyUI supports multiple brands and theme modes out of the box.

### Available Brands
- **Standard**: The default purple-based theme (Poppins).
- **Ocean**: A deep blue theme with specialized info tokens.
- **Sunset**: A vibrant orange-red theme (Inter).
- **Forest**: A nature-inspired green theme (Mulish).

### Theme Modes
- **Light**: High contrast, crisp surfaces.
- **Dark**: Deep surfaces (#0F1012), optimized for eye comfort and premium feel.

---

## 🛠 Tech Stack
- **Engine**: Vite 5+
- **Styling**: Tailwind CSS v4.2.2 (Modern Engine)
- **Logic**: Vanilla JavaScript (ES Modules)
- **Fonts**: Local self-hosted (Inter, Mona Sans, Mulish, Poppins)

---

## 📦 Usage
1. Import `globals.css` into your project.
2. Use the semantic CSS variables for custom styling.
3. Initialize components using the provided `initX()` functions in `main.js`.
