# 📝 BlogSpace – Next-Gen Markdown Editor & Blogging Platform  
**MongoDB • Express • React • Node.js • TypeScript • Tailwind CSS • JWT Auth**

[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](#)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](#)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](#)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](#)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](#)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](#)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](#)
[![Live Demo](https://img.shields.io/badge/Live-Demo-ff69b4?style=for-the-badge&logo=render)](https://blogspace-frontend-wxyh.onrender.com/)

A **modern full-stack blogging platform** that combines a powerful **Markdown editor**, advanced **blog management**, **analytics**, and a stunning **2026-inspired UI** — built with the **MERN stack**.

---

## ✨ Overview

**BlogSpace** transforms how writers create, manage, and publish their work by providing:

- 📝 Real-time Markdown editor with live preview  
- 📁 Hierarchical file system with nested folders  
- 📰 Blog publishing engine with SEO-friendly URLs  
- 🔍 Advanced search with weighted relevance scoring  
- 📊 Comprehensive analytics dashboard  
- 🎨 2026 Neubrutalism UI with kinetic typography  
- ❤️ Social engagement system with likes and shares  
- 🔐 Secure JWT authentication with multi-device session management  

🔗 **GitHub Repository:**  
https://github.com/SHASHWAT13244/blogspace

🌐 **Live Demo:**  
https://blogspace-frontend-wxyh.onrender.com/

---

## 🔧 Key Features

### 📝 Markdown Editor

- Real-time preview with syntax highlighting  
- Auto-save using debounced API calls  
- Dark themed editor with monospace font  
- Split-screen editing and preview layout  
- Line count and file statistics display  
- One-click PDF export  

---

### 📁 File Management System

- Create, rename, and delete files or folders  
- Nested folder hierarchy with unlimited depth  
- File explorer with expandable folders  
- Inline renaming support  
- Automatic `.md` extension handling  
- Recursive deletion for folder contents  
- File search functionality  

---

### 📰 Blog Publishing Engine

- Publish Markdown files as blog posts  
- Custom SEO-friendly slug generation  
- Excerpt and tag management  
- Blog status options:
  - Draft
  - Published
  - Archived  
- Automatic read time calculation  
- Meta title and description for SEO  
- Featured image support  
- Edit blogs without losing analytics  

---

### 🔍 Advanced Search & Discovery

- Full-text search across blogs  
- Weighted relevance scoring:
  - Title → 10x  
  - Meta → 8x  
  - Excerpt → 6x  
  - Tags → 5x  
  - Content → 3x  
- File name lookup with 5x weight  
- Tag filtering  
- Popular tag suggestions  
- Sorting options:
  - Relevance  
  - Date  
  - Views  
  - Likes  
- Pagination support  

---

### 📊 Analytics Dashboard

- Unique view tracking  
- Like / Unlike toggle per user  
- Share tracking  
- Daily analytics aggregation  
- Top performing blogs  
- Recent activity feed  
- Time range filters (7, 30, 90 days)  

---

### 👤 Authentication & Security

- JWT authentication  
- 15-minute access tokens  
- 7-day refresh tokens  
- Password hashing with bcrypt  
- Multi-device session management  
- Token blacklisting on logout  
- Protected routes  
- Logout from all devices  

---

## 📁 Project Structure

```
blogspace/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── contexts/
│       ├── hooks/
│       ├── pages/
│       ├── services/
│       ├── types/
│       ├── App.tsx
│       └── main.tsx
│
├── package.json
└── README.md
```

---

## 🧠 Technologies Used

| Technology | Description |
|------------|-------------|
| MongoDB | NoSQL database with Mongoose ODM |
| Express.js | Backend framework for REST APIs |
| React | Frontend SPA with TypeScript |
| Node.js | Backend runtime |
| TypeScript | Type safety across stack |
| Tailwind CSS | Utility-first styling |
| JWT | Secure authentication |
| Bcrypt | Password hashing |
| Vite | Fast frontend build tool |
| React Router | Client-side routing |
| React Markdown | Markdown rendering |
| html2pdf.js | PDF export functionality |
| Lucide React | Icon library |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- MongoDB (local or Atlas)
- npm or yarn

---

### Installation

Clone the repository

```bash
git clone https://github.com/SHASHWAT13244/blogspace.git
cd blogspace
```

Install backend dependencies

```bash
cd backend
npm install
```

Install frontend dependencies

```bash
cd ../frontend
npm install
```

---

## ⚙️ Environment Setup

### Backend `.env`

```
PORT=8000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### Frontend `.env`

```
VITE_BACKEND_URL=http://localhost:8000/api
```

---

## ▶️ Run Development Servers

Backend

```bash
cd backend
npm run dev
```

Frontend

```bash
cd frontend
npm run dev
```

---

## 🌐 Access the Application

Frontend  
```
http://localhost:5173
```

Backend API  
```
http://localhost:8000/api
```

---

## 🧪 Test Credentials

```
Email: test@example.com
Password: password123
```

---

## 🎨 Design Highlights

### Dashboard
- Clean analytics overview
- Blog performance insights
- Recent activity tracking

### Markdown Editor
- Split screen live preview
- Dark themed editor
- Auto-save indicators

### Blog Listing
- Advanced search with filters
- Responsive card grid layout

### Homepage
- Kinetic typography
- Interactive background effects
- Neubrutalism UI design

---

## 🧑‍💻 Author

**Shashwat Khandelwal**  
B.Tech Computer Science Student | MERN Stack Developer | UI/UX Enthusiast  

[GitHub](https://github.com/SHASHWAT13244)  
[LinkedIn](https://www.linkedin.com/in/shashwat-khandelwal-a0564532b/)  

Email: **shashwatk340@gmail.com**

---

⭐ If you like this project, consider giving it a star on GitHub!

