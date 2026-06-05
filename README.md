# Combo Flow 🚀🎮
> **Unleash your tactical fighting game potential.** Create, visualize, and map out frame-accurate movement sequences, situational decision trees, and pressure routes with an interactive node-based flowchart canvas.

[![Built with Vite](https://img.shields.io/badge/Vite-7.x-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![React Flow](https://img.shields.io/badge/React_Flow-12.x-FF007F?style=for-the-badge&logo=reactflow)](https://reactflow.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-Runtime-000000?style=for-the-badge&logo=bun)](https://bun.sh/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

[Combo FLow](https://combo-flow.vercel.app/)

![portfolio index page](/public/home.png)

---

## ⚡ What is Combo Flow?

In fighting games, success is built on split-second decision making, optimal combos, and situational awareness. **Combo Flow** is a specialized flowchart canvas designed for theorycrafters, coaches, and competitive players. It lets you visually construct tactical decision trees for legendary titles like **Street Fighter III: 3rd Strike**.

Instead of writing down combos in complex notation text lines, you can map them dynamically into flows showing exactly what to do when your opponent blocks, jumps, or wakes up.

---

## 🗺️ How it Works (Visualizing a Setup)

Here is a visual representation of how Combo Flow translates fighting game logic into interactive nodes:

```mermaid
graph TD
    A[Situation: Opponent Jumping] -->|React with Parry| B(Action: Parry - Input: 6)
    B -->|Success| C{Condition: Distance Close?}
    C -->|Yes| D[Action: Close HP - Input: c.HP]
    C -->|No| E[Action: Far HP - Input: f.HP]
    D --> F[Action: Shoryuken - Input: 623HP]
    F --> G[Action: Shinryuken Super Art - Input: 236236K]
    E --> H[Action: Hadouken - Input: 236LP]
```

---

## ✨ Features Breakdown

* **🕹️ Tactical Starting States:** Start your decision trees from concrete situational points such as:
  * *Opponent in Corner* (Corner setups & traps)
  * *Opponent Jumping* (Anti-air choices)
  * *Wake-up (Oki)* (Meaties, throws, baiting DP)
  * *Neutral Game* (Spacing & pokes)
* **🥋 Character-Specific Movesets:** Select from iconic Third Strike characters (e.g., Ryu, Ken, Necro) and load their movesets dynamically. The system displays correct inputs and maps:
  * Close/Far Normals (e.g., `c.MP`, `f.HP`)
  * Special Moves (e.g., Hadouken, Shoryuken)
  * Super Arts (e.g., Shinryuken, Denjin Hadouken)
  * System mechanics like **Parry (6)**, **Low Parry (2)**, and **Universal Overhead (MP+MK)**.
* **🧠 Custom Node Architecture:**
  * **Situation Nodes (Green):** Represent the state of the match.
  * **Condition Nodes (Amber/Yellow):** Introduce conditional branches (e.g., "Hit?", "Blocked?") with **YES** and **NO** handles for dynamic logic flow.
  * **Action/Move Nodes (Violet):** Detailed boxes containing the name of the move and its frame-accurate input commands.
* **📸 Flowchart Exporting:** Built-in rendering engine utilizing `html-to-image` that takes a high-resolution PNG snapshot of your strategy canvas. Share your setups instantly with your Discord community, Twitter, or coaching students.

---

## 🛠️ Technology Stack

Combo Flow is built using a modern, ultra-fast web development stack:

* **Frontend Library:** [React 19](https://react.dev/) — High performance UI rendering.
* **Canvas Engine:** [@xyflow/react (React Flow)](https://reactflow.dev/) — Interactive panning, zooming, and smooth node connections.
* **CSS Framework:** [Tailwind CSS v4](https://tailwindcss.com/) — Next-generation engine with lightning-fast utility-first compilation.
* **Bundler & Build Tool:** [Vite 7](https://vitejs.dev/) — Fast Hot Module Replacement (HMR) for developer efficiency.
* **Runtime / Package Manager:** [Bun](https://bun.sh/) & `npm` — Used for managing dependencies and running local processes quickly.
* **Iconography:** [Lucide React](https://lucide.dev/) — Clean, crisp vector icons.

---

## 📂 Project Architecture & Map

Below is a structured map of the project files. Click on any file to open it directly:

| File / Directory | Description |
| :--- | :--- |
| 🖥️ **Core Pages & Roots** | |
| [src/App.tsx](file:///home/gabriel/projects/combo-flow/src/App.tsx) | App container managing character select state. |
| [src/main.tsx](file:///home/gabriel/projects/combo-flow/src/main.tsx) | React entrypoint. |
| 🧩 **Canvas & React Flow Components** | |
| [src/components/flowCanvas.tsx](file:///home/gabriel/projects/combo-flow/src/components/flowCanvas.tsx) | Main React Flow canvas with custom handlers, connections, and PNG export logic. |
| [src/components/Sidebar.tsx](file:///home/gabriel/projects/combo-flow/src/components/Sidebar.tsx) | Drag-and-drop dock listing moves, situations, and conditions. |
| [src/components/nodes.tsx](file:///home/gabriel/projects/combo-flow/src/components/nodes.tsx) | custom React Flow nodes (`SituationNode`, `ConditionNode`, `MoveNode`). |
| [src/components/customEdge.tsx](file:///home/gabriel/projects/combo-flow/src/components/customEdge.tsx) | Custom edge logic. |
| 📊 **Moves & Game Logic Data** | |
| [src/data/moves/thirdstrike.ts](file:///home/gabriel/projects/combo-flow/src/data/moves/thirdstrike.ts) | Registry of supported Third Strike characters. |
| [src/data/moves/thirdStrike/ken.ts](file:///home/gabriel/projects/combo-flow/src/data/moves/thirdStrike/ken.ts) | Complete moveset registry for Ken (normals, specials, supers). |
| [src/data/moves/thirdStrike/ryu.ts](file:///home/gabriel/projects/combo-flow/src/data/moves/thirdStrike/ryu.ts) | Complete moveset registry for Ryu. |
| [src/data/moves/thirdStrike/necro.ts](file:///home/gabriel/projects/combo-flow/src/data/moves/thirdStrike/necro.ts) | Complete moveset registry for Necro. |
| [src/data/conditions.ts](file:///home/gabriel/projects/combo-flow/src/data/conditions.ts) | Tactical conditional checks (Hit?, Blocked?, etc.). |
| [src/data/situations.ts](file:///home/gabriel/projects/combo-flow/src/data/situations.ts) | Initial tactical states (Neutral, Wake-up, Corner, etc.). |

---

## 🚀 Getting Started

Ensure you have [Node.js](https://nodejs.org/) (v18+) or [Bun](https://bun.sh/) installed.

### 1. Clone the repository
```bash
git clone https://github.com/gabcosta/combo-flow.git
cd combo-flow
```

### 2. Install dependencies
Using **Bun** (highly recommended for speed):
```bash
bun install
```
Using **npm**:
```bash
npm install
```

### 3. Run in Development Mode
Using **Bun**:
```bash
bun run dev
```
Using **npm**:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Build for Production
Using **Bun**:
```bash
bun run build
```
Using **npm**:
```bash
npm run build
```

---

## 🤝 Contributing

We welcome contributions to add more movesets, new game supports, or feature requests!
1. **Fork** the Project.
2. **Create** your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. **Commit** your Changes (`git commit -m 'Add some AmazingFeature'`).
4. **Push** to the Branch (`git push origin feature/AmazingFeature`).
5. **Open** a Pull Request.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

Developed with ❤️ by [Gabriel Santos](https://github.com/gabcosta)
