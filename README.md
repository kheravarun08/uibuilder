# UI Builder

> A modern drag-and-drop UI Builder built with React and Vite for visually creating user interfaces.

![React](https://img.shields.io/badge/React-19-blue)
![Vite](https://img.shields.io/badge/Vite-Fast%20Build-purple)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![License](https://img.shields.io/badge/License-MIT-green)

## Overview

UI Builder is an interactive visual editor that allows users to design user interfaces by dragging and dropping components onto a canvas.

The application provides a structured design workflow with a component sidebar, editable canvas, and dynamic properties panel, making it easy to prototype layouts without writing code.

---

## Features

### Visual UI Design

* Drag-and-drop interface building
* Interactive design canvas
* Component placement and positioning
* Real-time visual updates

### Component Management

* Predefined UI element library
* Reusable components
* Dynamic element rendering
* Element selection and editing

### Properties Editor

* Modify component properties
* Configure styling attributes
* Update component behavior
* Real-time property synchronization

### Modern Architecture

* React component-based design
* Custom hooks for state management
* Modular UI architecture
* Vite-powered development environment

---

## Application Architecture

```text
┌─────────────────────┐
│      Sidebar        │
│ Available Elements  │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│       Canvas        │
│  Drag & Drop Area   │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│   Placed Elements   │
│ Selected Component  │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Properties Panel   │
│ Edit Configuration  │
└─────────────────────┘
```

---

## Tech Stack

### Frontend

* React
* Vite
* JavaScript (ES6+)
* CSS3

### State Management

* React Hooks
* Custom Hooks

### Validation

* Zod

---

## Project Structure

```text
uibuilder/
│
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── components/
│   │
│   ├── canvas/
│   │   ├── Canvas.jsx
│   │   ├── CanvasUI.jsx
│   │   └── useCanvas.js
│   │
│   ├── placedelement/
│   │   ├── PlacedElement.jsx
│   │   ├── PlacedElementUI.jsx
│   │   └── usePlacedElement.js
│   │
│   ├── propertiespanel/
│   │   ├── PropertiesPanel.jsx
│   │   ├── PropertiesPanelUI.jsx
│   │   └── usePropertiesPanel.js
│   │
│   ├── sidebar/
│   │   ├── Sidebar.jsx
│   │   ├── SidebarUI.jsx
│   │   ├── SidebarIcons.jsx
│   │   └── useSidebar.js
│   │
│   ├── topnav/
│   │   ├── TopNav.jsx
│   │   ├── TopNavUI.jsx
│   │   └── TopNav.css
│   │
│   ├── data/
│   │   └── elementTypes.js
│   │
│   ├── hooks/
│   │   └── useElements.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── package-lock.json
└── vite.config.js
```

---

## Core Modules

### Canvas

Handles:

* Element placement
* Layout rendering
* User interactions
* Drag-and-drop operations

### Sidebar

Provides:

* Available UI components
* Component categories
* Drag source elements

### Properties Panel

Allows:

* Editing selected components
* Updating styles
* Managing element configuration

### Top Navigation

Contains:

* Project controls
* Global actions
* Workspace tools

### Element Management

Custom hooks manage:

* Component state
* Selection logic
* Updates and synchronization

---

## Installation

### Clone Repository

```bash
git clone https://github.com/kheravarun08/uibuilder.git
cd uibuilder
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Application will run at:

```text
http://localhost:5173
```

---

## Production Build

Build the application:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## Usage

### Create a Layout

1. Open the application.
2. Select a component from the sidebar.
3. Drag it onto the canvas.
4. Click the element to select it.
5. Edit its properties using the Properties Panel.
6. Continue building your interface visually.

---

## Design Flow

```text
Select Component
        │
        ▼
Drag to Canvas
        │
        ▼
Place Element
        │
        ▼
Select Element
        │
        ▼
Edit Properties
        │
        ▼
Update UI
```

---

## Future Enhancements

* Export generated UI code
* JSON project import/export
* Undo / Redo support
* Responsive layout preview
* Grid system support
* Component grouping
* Custom component creation
* Theme management
* Dark mode
* Multi-page projects

---

## Contributing

Contributions are welcome.

1. Fork the repository

2. Create a feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit changes

```bash
git commit -m "Add feature"
```

4. Push changes

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

## License

MIT License

---

## Author

**Varun Khera**

GitHub: https://github.com/kheravarun08

---

⭐ If you find this project useful, consider giving it a star on GitHub.
