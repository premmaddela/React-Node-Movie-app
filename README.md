# Fullstack React Node App

This is a full-stack application built with a React frontend and an Express/MongoDB backend. The app is designed to fetch and display animated movies, with features like pagination, lazy loading, and a responsive UI.

---

## Project Structure
React-Node-Movie-app/ ├── client/ # React frontend │ ├── public/ # Static files (index.html, favicon, etc.) │ ├── src/ # React components and logic │ └── package.json # Client dependencies and scripts ├── server/ # Express backend │ ├── src/ # Server logic (GraphQL, routes, etc.) │ └── package.json # Server dependencies and scripts ├── package.json # Root scripts for managing both client and server └── README.md # Project documentation


---

## Features

### Frontend (React)
- Built with **React** and **Material-UI** for a responsive and modern UI.
- Features:
  - Movie cards with hover effects.
  - Pagination for navigating through movie pages.
  - Lazy loading for improved performance.
  - Loading spinner for better user experience.

### Backend (Express)
- Built with **Express** and **MongoDB**.
- Features:
  - REST API for fetching animated movies from [TMDb API](https://www.themoviedb.org/documentation/api).
  - GraphQL integration for advanced querying.
  - MongoDB for data persistence.

---

## Prerequisites

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **MongoDB** (running locally or on a cloud service like MongoDB Atlas)
- **TMDb API Key** (Sign up at [TMDb](https://www.themoviedb.org/) to get an API key)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/React-Node-Movie-app.git
   cd React-Node-Movie-app
   ```
2. Install dependencies for the root, client, and server:

npm run install-all
3. Create a .env file in the server directory and add the following:
TMDB_API_KEY=your_tmdb_api_key
MONGODB_URI=your_mongodb_connection_string
PORT=5001

Usage
Start the App
To start both the client and server:

npm start

The server run on http://localhost:5001.
The client will run on http://localhost:3000.
Start Individually
To start the server only: npm run server
To start the client only: npm run client

Scripts
Root Scripts
npm start: Starts both the client and server concurrently.
npm run server: Starts the server using nodemon.
npm run client: Starts the React app.
npm run install-all: Installs dependencies for the root, client, and server.

Client Scripts
npm start: Starts the React app.
npm build: Builds the React app for production.
npm test: Runs tests for the React app.

Server Scripts
npm start: Starts the Express server using nodemon.
API Endpoints

Backend API
GET /api/movies: Fetches animated movies from TMDb API.
Query Parameters:
page: The page number to fetch (default: 1).

Environment Variables
Server
TMDB_API_KEY: Your TMDb API key.
MONGODB_URI: MongoDB connection string.
PORT: Port for the backend server (default: 5001).

Deployment

Frontend
1. Build the React app: npm run build-client
2. Deploy the client/build folder to a static hosting service like Netlify or Vercel.

Backend
1. Deploy the server to a cloud platform like Heroku, AWS, or Render.
2. Ensure the environment variables (TMDB_API_KEY, MONGODB_URI, etc.) are set in the deployment environment.

Technologies Used
## Frontend
React
Material-UI
Redux
Axios

## Backend
Express
MongoDB
GraphQL
Apollo Server
License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
TMDb API for movie data.
Material-UI for UI components.
---

### Instructions:
1. Copy the above content into a [README.md](http://_vscodecontentref_/5) file at the root of your project.
2. Replace placeholders like `your_tmdb_api_key` and `your_mongodb_connection_string` with actual values.
3. Update the repository URL in the "Clone the repository" section.

Let me know if you need further assistance!