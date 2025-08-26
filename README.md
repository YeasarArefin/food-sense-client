# Food Sense Client

This is the client-side application for Food Sense, a modern and responsive web app for browsing and ordering meals. It is built with React and communicates with the Food Sense server.

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://example.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)](https://example.com)

## Tech Stack

This project is built with a modern and robust technology stack:

*   **Frontend:**
    *   [React](https://reactjs.org/) (v17.0.2)
    *   [React Router DOM](https://reactrouter.com/) (v5.3.0) for routing
    *   [Tailwind CSS](https://tailwindcss.com/) for styling
*   **State Management & Forms:**
    *   [React Hook Form](https://react-hook-form.com/) (v7.18.0) for form handling
    *   React Context API for state management
*   **Backend Integration:**
    *   [Firebase](https://firebase.google.com/) (v9.2.0) for authentication
*   **Build Tools:**
    *   [Craco](https://craco.js.org/) for configuration overrides
*   **Others:**
    *   [React Icons](https://react-icons.github.io/react-icons/)
    *   [SweetAlert2](https://sweetalert2.github.io/) for alerts and modals
    *   [React Reveal](https://www.react-reveal.com/) for animations

## Features

*   **User Authentication:** Secure user registration and login using Firebase Authentication.
*   **Meal Browsing:** Browse a variety of meals with detailed descriptions and ratings.
*   **Shopping Cart:** Add meals to the cart and manage the order.
*   **Order Placement:** Place orders and view order history.
*   **User Dashboard:** A personal dashboard for users to manage their profile and orders.
*   **Responsive Design:** Fully responsive layout for a seamless experience on desktop and mobile devices.

  ## Live Demo: [Live Site Link](https://yeasararefin-ph-as11.netlify.app/)

## Installation Guide

Follow these steps to set up the project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/YeasarArefin/food-sense-client.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd food-sense-client
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Start the development server:**
    ```bash
    npm start
    ```

## Usage Instructions

After installation, the application will be running on `http://localhost:3000`.

To use the application, you can:

*   Navigate to `http://localhost:3000` in your browser.
*   Create a new account or log in.
*   Browse meals, add them to your cart, and place an order.

## Configuration

This project uses Firebase for authentication and connects to a backend server. You will need to create a `.env` file in the root of the project and add your Firebase configuration and the API server URL:

```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id

REACT_APP_API_URL=http://localhost:5000
```

## Screenshots / Demo

![Home Page](https://via.placeholder.com/800x400.png?text=Home+Page+Screenshot)
_Home Page_

![Meals Page](https://via.placeholder.com/800x400.png?text=Meals+Page+Screenshot)
_Meals Page_

## Contact / Support

*   **Email:** [yeasararefin007@gamil.com](mailto:yeasararefin007@gamil.com)
*   **Portfolio:** [yeasararefin.vercel.app](https://yeasararefin.vercel.app)
