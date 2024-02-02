# React + Vite

# Expense Tracker Documentation

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool that supports React and other JavaScript frameworks.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **axios**: A promise-based HTTP client for making requests to the server.
- **chart.js**: A simple yet flexible JavaScript charting library for interactive data visualization.
- **react-chartjs-2**: A React wrapper for Chart.js to create charts in React applications.
- **react-datepicker**: A responsive and feature-rich datepicker component for React.
- **react-router-dom**: A routing library for React applications.
- **moment**: A JavaScript library for parsing, validating, manipulating, and formatting dates.

## How to Run Locally

### Prerequisites

- Node.js (https://nodejs.org/)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/expense-tracker.git

2. Change into the project directory:
   
   cd expense-tracker

4. Create a .env file in the root directory and put the following line:

   VITE_API=http://192.168.1.4:8080/api

5. Install dependencies:
   
   npm install

6. Run the following command to start the development server:

   npm run dev


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
