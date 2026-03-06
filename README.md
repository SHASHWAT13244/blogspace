📝 BlogSpace – Next-Gen Markdown Editor & Blogging Platform
MongoDB • Express • React • Node.js • TypeScript • Tailwind CSS • JWT Auth
https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white
https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black
https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white
https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white
https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white
https://img.shields.io/badge/Live-Demo-ff69b4?style=for-the-badge&logo=render

A modern full-stack blogging platform that combines a powerful markdown editor with advanced blog management, analytics, and a stunning 2026-inspired UI — built with the MERN stack.

GitHub Repository: https://github.com/SHASHWAT13244/blogspace.git
Live Demo: https://blogspace-frontend-wxyh.onrender.com/

✨ Overview
BlogSpace transforms how writers create, manage, and publish their work by providing:

📝 Real-time markdown editor with live preview
📁 Hierarchical file system with nested folders
📰 Blog publishing engine with SEO-friendly URLs
🔍 Advanced search with relevance scoring
📊 Comprehensive analytics dashboard
🎨 2026 Neubrutalism UI with kinetic typography
❤️ Social features – likes, shares, and engagement tracking
🔐 Secure JWT authentication with multi-device session management

Built with the MERN stack and TypeScript, this application demonstrates advanced file management, real-time collaboration features, and cutting-edge UI/UX design principles.

🔧 Key Features
📝 Markdown Editor
Real-time preview with syntax highlighting

Live content saving with debounced API calls (1-second delay)

Dark-themed editor with monospace font

Line count and file statistics display

PDF export with one-click download

Split-screen layout for simultaneous editing and preview

📁 File Management System
Create, rename, delete files and folders

Nested folder structure with unlimited depth

Search functionality within your file system

Automatic .md extension handling

Hierarchical file explorer with expandable/collapsible folders

Inline editing for quick renaming

Recursive deletion for folder contents

📰 Blog Publishing Engine
Publish markdown files as blog posts with one click

Custom slug generation with uniqueness validation

Excerpt and tag management for discovery

Multiple status options – draft, published, archived

Automatic read time calculation (200 words/min)

Meta title and description for SEO optimization

Featured image support

Update existing blogs while preserving analytics

🔍 Advanced Search & Discovery
Full-text search across all published blogs

Weighted relevance scoring (title:10x, meta:8x, excerpt:6x, tags:5x, content:3x)

File name lookup with 5x weight

Tag filtering for precise discovery

Search suggestions based on popular tags

Sort options – relevance, date, views, likes

Pagination (12 items per page)

📊 Analytics Dashboard
View count tracking with unique visitor counting

Like/unlike functionality with user-specific toggle

Share tracking to measure social engagement

Daily analytics aggregation for trend analysis

Top performing blogs by views, likes, shares

Recent activity feed for quick insights

Period-based filtering (7, 30, 90 days)

👤 User Authentication
JWT-based authentication (15min access, 7day refresh)

Secure registration with bcrypt password hashing (10 rounds)

Refresh token mechanism for seamless sessions

Multi-device session management with token blacklisting

Protected routes with automatic redirects

Logout from all devices functionality

Automatic token refresh on expiration

🎨 2026 Neubrutalism UI/UX
Kinetic typography with animated gradient text

Mouse-tracked interactive orbs

Floating particle animations

Gradient borders and hover effects

Horizontal scrolling reviews section

Neubrutalism card designs with bold shadows

Fully responsive across all devices

📁 Project Structure
text
blogspace/
│
├── backend/                          # Node.js + Express API
│   ├── controllers/                  # Route controllers
│   │   ├── authController.js
│   │   ├── blogController.js
│   │   └── fileController.js
│   ├── middleware/                   # Custom middleware
│   │   └── auth.js
│   ├── models/                        # MongoDB schemas
│   │   ├── User.js
│   │   ├── File.js
│   │   ├── Folder.js
│   │   ├── Blog.js
│   │   ├── BlogAnalytics.js
│   │   └── BlogLike.js
│   ├── routes/                         # API endpoints
│   │   ├── auth.js
│   │   ├── blogs.js
│   │   └── files.js
│   └── server.js
│
├── frontend/                           # React + TypeScript + Vite
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── Auth/
│       │   ├── Editor/
│       │   ├── Preview/
│       │   ├── Sidebar/
│       │   ├── FileExplorer/
│       │   └── UI/
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
🧠 Technologies Used
Technology	Description
MongoDB	NoSQL database with Mongoose ODM
Express.js	Backend framework for RESTful API
React 19	Front-end SPA with TypeScript and hooks
Node.js	Backend runtime environment
TypeScript	Type safety throughout the stack
Tailwind CSS	Utility-first styling with custom plugins
JWT	Secure user authentication
Bcrypt	Password hashing (10 salt rounds)
Vite	Fast frontend build tool with HMR
React Router	Client-side routing with protected routes
React Markdown	Markdown parsing and rendering
html2pdf.js	PDF export functionality
Lucide React	Beautiful, consistent icons
🎨 Design Highlights
Dashboard
Clean analytics overview with stats cards

Top performing blogs and recent activity

Quick actions for new posts and navigation

Period-based filtering dropdown

Markdown Editor
Split-screen layout with live preview

Dark-themed editor for reduced eye strain

PDF export button with formatting options

Line count and auto-save indicators

Blog List
Advanced search with debounced input

Tag filtering with visual feedback

Sort options for relevance, date, views

Responsive card grid layout

2026 Home Page
Kinetic typography with gradient animations

Mouse-tracked background orbs

Floating particles and infinite scroll reviews

Neubrutalism cards with hover effects

🌐 Live Demo
🔗 Frontend – Explore BlogSpace
🔗 Backend API – RESTful API endpoint



🧑‍💻 Author
Shashwat Khandelwal
🎓 B.Tech Computer Science Student | 💻 MERN Stack Developer | 🎨 UI/UX Enthusiast

https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white
https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
📧 Email: shashwatk340@gmail.com

"BlogSpace reflects my commitment to building secure, responsive, and user-focused full-stack applications with cutting-edge UI/UX design."
