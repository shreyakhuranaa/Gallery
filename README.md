# **Gallery App**
A web application built with React, Redux, Express, and MongoDB for managing images and categories.

---

## Features
-Home Page: Displays all images categorized by user-defined categories.
-Add Image: Upload images to specific categories.
-Add Category: Create new categories for organizing images.
-View Single Image: View images filtered by selected category

## Technologies Used
-Frontend: React, Redux, React Router, Axios
-Backend: Node.js, Express.js, MongoDB, Mongoose
-Styling: CSS, Bootstrap
-Other Tools: Redux Toolkit, FormData for image uploads

## Setup Instructions 
Navigate to the project directory: cd gallery-app
Install dependencies: npm install
Start the frontend: npm start
Start the backend (if separate): node server.js


### API Endpoints
GET /api/v1/get/images: Fetch all images.
GET /api/v1/get/categories: Fetch all categories.
POST /api/v1/add/image: Upload a new image.
POST /api/v1/add/category: Add a new category.
GET /api/v1/get/singleimage?category=<category_id>: Fetch images by category.

Overall, the app integrates frontend and backend technologies to create a responsive and dynamic gallery management system.
