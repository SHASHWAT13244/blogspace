📝 BlogSpace – Next-Gen Markdown Editor & Blogging Platform
















A modern full-stack blogging platform that combines a powerful Markdown editor, advanced blog management, analytics, and a stunning 2026-inspired UI — built with the MERN stack.

🔗 GitHub Repository:
https://github.com/SHASHWAT13244/blogspace

🌐 Live Demo:
https://blogspace-frontend-wxyh.onrender.com/

✨ Overview

BlogSpace transforms how writers create, manage, and publish their work by providing:

📝 Real-time Markdown editor with live preview

📁 Hierarchical file system with nested folders

📰 Blog publishing engine with SEO-friendly URLs

🔍 Advanced search with relevance scoring

📊 Comprehensive analytics dashboard

🎨 2026 Neubrutalism UI with kinetic typography

❤️ Social engagement features (likes, shares)

🔐 Secure JWT authentication with multi-device sessions

Built with MERN + TypeScript, the project demonstrates advanced file management, analytics tracking, and modern UI/UX design.

🔧 Key Features
📝 Markdown Editor

Real-time preview with syntax highlighting

Live auto-saving using debounced API calls (1 second)

Dark-themed editor with monospace font

Line count and file statistics

PDF export with one-click download

Split-screen editing and preview

📁 File Management System

Create, rename, and delete files or folders

Nested folder structure with unlimited depth

File system search functionality

Automatic .md extension handling

Expandable/collapsible file explorer

Inline renaming

Recursive deletion for folders

📰 Blog Publishing Engine

Publish Markdown files as blog posts

Custom SEO-friendly slugs

Excerpt and tag management

Blog status system:

Draft

Published

Archived

Automatic read time calculation (200 words/min)

Meta title and description for SEO

Featured image support

Update blogs without losing analytics

🔍 Advanced Search & Discovery

Full-text search across published blogs

Weighted relevance scoring:

Title → 10x

Meta → 8x

Excerpt → 6x

Tags → 5x

Content → 3x

File name lookup with 5x weight

Tag filtering

Popular tag suggestions

Sorting options:

Relevance

Date

Views

Likes

Pagination (12 results per page)

📊 Analytics Dashboard

Unique view tracking

Like/unlike system

Share tracking

Daily analytics aggregation

Top performing blogs

Activity feed

Period filtering:

7 days

30 days

90 days

👤 User Authentication

JWT authentication

15 minute access tokens

7 day refresh tokens

Password hashing with bcrypt (10 salt rounds)

Refresh token mechanism

Multi-device session management

Token blacklisting

Protected routes

Logout from all devices

🎨 UI/UX Highlights

BlogSpace uses 2026 design trends including:

Kinetic typography with gradient animations

Mouse-tracked interactive orbs

Floating particle effects

Neubrutalism card design

Gradient borders and hover effects

Horizontal scrolling review section

Fully responsive layout

📁 Project Structure
blogspace/
│
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── blogController.js
│   │   └── fileController.js
│   │
│   ├── middleware/
│   │   └── auth.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── File.js
│   │   ├── Folder.js
│   │   ├── Blog.js
│   │   ├── BlogAnalytics.js
│   │   └── BlogLike.js
│   │
│   ├── routes/
│   │   ├── auth.js
│   │   ├── blogs.js
│   │   └── files.js
│   │
│   └── server.js
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── Auth/
│       │   ├── Editor/
│       │   ├── Preview/
│       │   ├── Sidebar/
│       │   ├── FileExplorer/
│       │   └── UI/
│       │
│       ├── contexts/
│       ├── hooks/
│       ├── pages/
│       ├── services/
│       ├── types/
│       │
│       ├── App.tsx
│       ├── main.tsx
│       └── index.css
│
├── package.json
└── README.md
🧠 Technologies Used
Technology	Description
MongoDB	NoSQL database with Mongoose ODM
Express.js	Backend REST API framework
React 19	Frontend SPA
Node.js	Server runtime
TypeScript	Static typing
Tailwind CSS	Utility-first styling
JWT	Authentication system
Bcrypt	Password hashing
Vite	Fast build tool

Additional Libraries:

React Router DOM v7

React Markdown

html2pdf.js

Lucide React Icons

🌐 Live Demo

Frontend:
https://blogspace-frontend-wxyh.onrender.com/

Backend API:
https://blogspace-backend.onrender.com/

🚦 Getting Started
Prerequisites

Node.js v18+

MongoDB (Local or Atlas)

npm or yarn

Installation
Clone the repository
git clone https://github.com/SHASHWAT13244/blogspace.git
cd blogspace
Install backend dependencies
cd backend
npm install
Install frontend dependencies
cd ../frontend
npm install
⚙️ Environment Variables
Backend .env
PORT=8000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Frontend .env
VITE_BACKEND_URL=http://localhost:8000/api
▶️ Run Development Servers
Backend
cd backend
npm run dev
Frontend
cd frontend
npm run dev
🌍 Access the Application

Frontend

http://localhost:5173

Backend API

http://localhost:8000/api
🧪 Test Credentials
Email: test@example.com
Password: password123
📊 API Endpoints
Authentication /api/auth
Method	Endpoint	Description
POST	/register	Register new user
POST	/login	Login user
POST	/refresh	Refresh token
POST	/logout	Logout current device
POST	/logout-all	Logout all devices
File Management /api/files
Method	Endpoint	Description
GET	/	Get files & folders
POST	/file	Create file
POST	/folder	Create folder
PUT	/file/:id	Update file
PUT	/folder/:id	Update folder
DELETE	/:id	Delete item
Blog Routes /api/blogs
Public Routes
Method	Endpoint	Description
GET	/public	Get published blogs
GET	/public/:slug	Blog by slug
POST	/public/:id/track	Track analytics
GET	/public/:id/like-status	Like status
GET	/search	Search blogs
Protected Routes
Method	Endpoint	Description
POST	/publish	Publish blog
GET	/	Get user blogs
GET	/dashboard	Dashboard analytics
GET	/:id	Get blog
PUT	/:id	Update blog
DELETE	/:id	Delete blog
GET	/:id/analytics	Blog analytics
🛣 Future Improvements

Real-time collaborative editing

Comment system

AI writing assistant

Email newsletter integration

Blog monetization features

👨‍💻 Author

Shashwat Khandelwal

🎓 B.Tech Computer Science Student
💻 MERN Stack Developer
🎨 UI/UX Enthusiast

📧 Email:
shashwatk340@gmail.com

GitHub
https://github.com/SHASHWAT13244
