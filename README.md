# Ant Frontend 🐜

Welcome to the frontend repository for **Ant**. This project is a modern, responsive web application built with Vue 3, styled with Tailwind CSS and daisyUI, and uses Pinia for state management. 

The application is fully Dockerized for easy setup and deployment across different environments.

---

## 🛠️ Tech Stack

*   **Framework:** [Vue 3](https://vuejs.org/) (Composition API)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **State Management:** [Pinia](https://pinia.vuejs.org/)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
*   **UI Components:** [daisyUI](https://daisyui.com/)
*   **Containerization:** [Docker](https://www.docker.com/) & Docker Compose

---

## 🚀 Getting Started (Docker)

The easiest way to run the Ant frontend is by using Docker. This ensures that you have the exact same environment as production without needing to install Node.js locally.

### Prerequisites
Make sure you have the following installed on your machine:
*   [Docker](https://docs.docker.com/get-docker/)
*   [Docker Compose](https://docs.docker.com/compose/install/)

### Running the Application

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <your-repository-url>
   cd ant-frontend

2. **Build and start the container:**
  ```bash
  docker-compose up --build
