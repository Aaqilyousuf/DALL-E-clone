# DALL-E Clone Project

This project is a clone of the DALL-E application, built with a modern tech stack including Vite, React, Express, MongoDB, Node.js, Cloudinary, and the OpenAI API. The application allows users to generate images from textual descriptions using the OpenAI API and manage these images using Cloudinary.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Generate images from textual descriptions using OpenAI's API.
- Store and manage images with Cloudinary.
- Frontend built with Vite and React for fast development and performance.
- Backend built with Express and Node.js for robust server-side logic.
- MongoDB for database management.

## Tech Stack

- **Frontend**: Vite, React
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Cloud Storage**: Cloudinary
- **AI Integration**: OpenAI API

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or later)
- npm or yarn
- MongoDB (local or remote)
- Cloudinary account
- OpenAI API key

## Installation

1. **Clone the repository**

   ```sh
   git clone https://github.com/yourusername/dalle-clone.git
   cd dalle-clone

2. **Install dependencies**
  - **For the backend:**
    ```sh
    cd server
    npm install
  - **For the frontend:**
    ```sh
    cd client
    npm install
    
3. ## Configuration
   - **Backend configuration**
   - Create a .env file in the server directory and add the following environment variables:
     ```sh
     MONGO_URI=your_mongo_connection_string
     CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
     CLOUDINARY_API_KEY=your_cloudinary_api_key
     CLOUDINARY_API_SECRET=your_cloudinary_api_secret
     OPENAI_API_KEY=your_openai_api_key
     PORT=5000

   - **Fronedn configuration**
   - Create a .env file in the server directory and add the following environment variables:
     ```sh
     VITE_API_URL=http://localhost:5000
4. ## Usage
   - Start the backend server:
     ```sh
     cd server
     npm start
   - Start the frontend development server:
     ```sh
     cd client
     npm run dev

5. ## Contributing
   **Contributions are welcome! Please follow these steps**
   - Fork the repository.
   - Create a new branch (git checkout -b feature-branch).
   - Make your changes.
   - Commit your changes (git commit -m 'Add new feature').
   - Push to the branch (git push origin feature-branch).
   - Open a pull request.

6. ## License
    **This project is licensed under the MIT License. See the LICENSE file for details.**

     

