# 🎯 HobbyHub: A Local Hobby Group Organizer

**Live Site:** [https://hobyhub-by-ratul.web.app](https://hobyhub-by-ratul.web.app)

**HobbyHub** is a full-stack web application where users can discover, join, and create local hobby-based groups such as book clubs, hiking teams, and painting circles. It promotes social interaction through shared interests and helps people form real-world connections.

---

![Project Screenshot](https://i.ibb.co/BVDHtZZ7/Screenshot-2025-06-25-144117.png)

---

## 🚀 Features

- 🔐 Authentication (Email/Password + Google Login)
- 📆 Create and Manage Hobby Groups
- 👥 Join and View Group Details
- 🗂️ Filter My Groups (Only Your Created Ones)
- 🌓 Dark/Light Theme Toggle
- 🧩 Smooth Animations with Lottie and Awesome Reveal
- 🛡️ Protected Routes for Private Pages
- ⚠️ 404 Not Found Page + Loading Spinner
- 📱 Responsive Design for Mobile, Tablet & Desktop
- 🔒 JWT-based secure route access (HttpOnly Cookie)

---

## 🛠️ Tech Stack

### 🔹 Client

![React](https://img.shields.io/badge/React.js-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase_Auth-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0FC8?style=for-the-badge&logo=daisyui&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router_DOM-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Lottie](https://img.shields.io/badge/Lottie-000000?style=for-the-badge&logo=lottie&logoColor=00C1CC)
![Awesome Reveal](https://img.shields.io/badge/React_Awesome_Reveal-purple?style=for-the-badge&logo=react&logoColor=white)
![React Tooltip](https://img.shields.io/badge/React_Tooltip-000000?style=for-the-badge&logo=react&logoColor=white)
![SweetAlert2](https://img.shields.io/badge/SweetAlert2-FF4154?style=for-the-badge&logo=sweetalert&logoColor=white)
![React Toastify](https://img.shields.io/badge/React_Toastify-1B1F23?style=for-the-badge&logo=react&logoColor=white)

### 🔹 Server

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![CORS](https://img.shields.io/badge/CORS-4B32C3?style=for-the-badge&logo=fastify&logoColor=white)
![dotenv](https://img.shields.io/badge/dotenv-000000?style=for-the-badge&logo=dotenv&logoColor=green)
![Cookie Parser](https://img.shields.io/badge/Cookie_Parser-ffca28?style=for-the-badge&logo=cookiecutter&logoColor=black)

---

- Step 1: Clone the client repository
  --git clone https://github.com/yourusername/hobbyhub-client.git

- Step 2: Navigate into the project folder
--cd hobbyhub-client
  
- Step 3: Install dependencies
npm install

- Step 4: Create a `.env` file with the following variables
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_messagingSenderId
VITE_appId=your_appId


- Step 5: Run the development server
npm run dev


## 📦 Dependencies (Client)

```bash
axios
firebase
react-router-dom
react-icons
sweetalert2
react-toastify
lottie-react
react-awesome-reveal
react-tooltip
