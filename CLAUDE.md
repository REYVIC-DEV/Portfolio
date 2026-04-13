# 🤖 CLAUDE.md

## Project Overview

This repository contains a modern web application built using **Nuxt.js** and **Vue.js**, with **TypeScript** for robust type safety. The architecture is designed to leverage Nuxt's file-system-based conventions, allowing for a highly scalable and maintainable structure.

The application follows a clear separation of concerns, where page and component logic is managed within Nuxt's structure, while TypeScript ensures type integrity across the codebase.

## ⚙️ Architecture Highlights

*   **Framework:** Nuxt.js (Builds upon Vue.js)
*   **Language:** TypeScript (`.ts`, `.tsx`)
*   **Structure:** Utilizes Nuxt's file-system routing, meaning the file structure directly maps to the application's routes.
*   **Compilation:** The project uses a robust TypeScript setup, managed by `tsconfig.json`, ensuring all components and pages are compiled and strongly typed.

## 🚀 Getting Started

Before running the application, ensure you have the following installed:

1.  **Node.js:** (LTS version recommended)
2.  **npm** or **yarn**

### Installation

1.  Clone the repository:
    ```bash
    git clone [REPOSITORY_URL]
    cd [PROJECT_DIR]
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

## ▶️ Development Workflow

The development environment allows for hot-reloading and easy debugging.

*   **Start Development Server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    *The application will typically be available at http://localhost:3000.*

## 📦 Build & Deployment

When preparing the application for production deployment, follow these steps:

*   **Build the Production Assets:**
    ```bash
    npm run build
    # or
    yarn build
    ```
    This command compiles the entire application into optimized, production-ready static assets, ready for deployment to a static hosting provider.

*   **Run Preview:**
    ```bash
    npm run preview
    # or
    yarn preview
    ```
    This serves the optimized build directory locally, allowing you to test the exact output that end-users will see in production.

## 🧪 Testing Guidelines

Testing is crucial for maintaining code quality. The project supports unit and integration tests.

*   **Run All Tests:**
    ```bash
    npm run test
    # or
    yarn test
    ```

*   **Run Single Component/Unit Test:**
    (The specific command will depend on the testing framework, but typically involves running the test file path):
    ```bash
    # Example: Testing a specific utility file
    npm run test -- ./utils/myUtility.spec.ts
    ```