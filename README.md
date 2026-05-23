# Combo Flow 🚀

**Combo Flow** is a dynamic web application built with React, Vite, and React Flow. It provides an intuitive, node-based interface to visualize, create, and manage complex movement sequences or "combos" in a flow-chart style.

[Combo FLow](https://combo-flow.vercel.app/)
![portfolio index page](/public/home.png)


## ✨ Features

* **Node-Based Strategy Builder:** Visualize combo routes, pressure sequences, and situational decision trees using an intuitive drag-and-drop node interface.
* **Fighting Game Situations:** Start your flow from specific tactical states, such as *Opponent in Corner*, *Opponent Jumping*, *Neutral*, or *Wake-up (Oki)*.
* **Character-Specific Movesets:** Dynamically load frame-accurate inputs and move properties (like Close/Far Normals: `c.MP`, `f.HP`, etc.) mapped specifically to the selected character (e.g., Ryu).
* **Interactive Canvas:** Seamless zooming, panning, and locking controls provided by the React Flow engine for an optimal editing experience.
* **Export Strategy:** Save your custom flowcharts directly as PNG images to share setups and tech with the fighting game community.

## 🛠️ Tech Stack

* **Frontend:** [React.js](https://react.dev/)
* **Flow Engine:** [React Flow](https://reactflow.dev/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Language:** JavaScript / React
* **Linting:** [ESLint](https://eslint.org/)

---
## 🚀 Getting Started

### Prerequisites

To run or build this project, you need to have the following installed:
1.  **Node.js** (LTS version recommended)
2.  **npm** or **yarn**

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone [https://github.com/your-username/combo-flow.git](https://github.com/your-username/combo-flow.git)
   cd combo-flow
   ```
2. **Install dependencies**
   ```bash
    npm install
   ```
3. **Run in Development mode**

    ```Bash
    npm run dev
    ```

4. **Build the Application**

    ```Bash
    npm run build
    ```

## 📂 Project Structure

```text
.
├── src/                # Application source code
│   ├── components/     # UI components and Custom Nodes for React Flow
│   ├── data/           # Movement definitions and logic (moves folder)
│   ├── App.jsx         # Main application logic and Flow provider
│   └── main.jsx        # React entry point
├── public/             # Static assets (icons, images)
├── eslint.config.js    # Linting rules and standards
├── package.json        # Project dependencies and scripts
└── vite.config.js      # Vite configuration
```
## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create.

1. **Fork** the Project
2. **Create** your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your Changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the Branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---
**Developed with ❤️ by Gabriel Santos**
