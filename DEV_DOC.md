# **Portfolio Website Development - Documentation & Guide**

## **Table of Contents**

1. Project Overview
2. Website Structure & Pages
3. Technology Stack
4. Development Setup
5. Frontend Implementation
6. Backend Implementation
7. Admin Dashboard Development
8. Database Setup (MongoDB Atlas)
9. Deployment Guide
10. Submission Checklist

---

## **1. Project Overview**

This project involves creating a **fully functional portfolio website** with dynamic content management. The website must be **mobile-responsive** and include an **admin dashboard** for managing blog posts, team members, and services.

---

## **2. Website Structure & Pages**

### **Main Pages**

| Page        | Sections                                            |
| ----------- | --------------------------------------------------- |
| **Home**    | Hero/Slider, Blog section (6 dynamic items), Footer |
| **About**   | About section, Team section (dynamic items), Footer |
| **Blog**    | Blog listing (6 dynamic items), Footer              |
| **Service** | Service listing (6 dynamic items), Footer           |
| **Contact** | Contact form, Footer                                |

### **Admin Dashboard**

- Secure login system
- CRUD (Create, Read, Update, Delete) for:
  - Blog posts
  - Team members
  - Services
- **5+ pages** for dashboard functionality

---

## **3. Technology Stack**

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Authentication:** JSON Web Token (JWT)
- **Hosting:** Netlify (Frontend), Vercel (Backend)

---

## **4. Development Setup**

### **Install Dependencies**

1. **Initialize Frontend:**
   ```bash
   npx create-react-app my-portfolio
   cd my-portfolio
   ```
2. **Initialize Backend:**
   ```bash
   mkdir server && cd server
   npm init -y
   npm install express mongoose cors dotenv nodemon
   ```

---

## **5. Frontend Implementation**

### **Folder Structure**

```
/src
   ├── components
   │   ├── Header.js
   │   ├── Footer.js
   ├── pages
   │   ├── Home.js
   │   ├── About.js
   │   ├── Blog.js
   │   ├── Service.js
   │   ├── Contact.js
   ├── App.js
   ├── index.js
```

---

## **6. Backend Implementation**

### **Folder Structure**

```
/server
   ├── models
   │   ├── Blog.js
   │   ├── Team.js
   │   ├── Service.js
   ├── routes
   │   ├── blogRoutes.js
   │   ├── teamRoutes.js
   │   ├── serviceRoutes.js
   ├── server.js
```

## **8. Database Setup (MongoDB Atlas)**

1. **Create a MongoDB Atlas Account** at [mongodb.com](https://www.mongodb.com/atlas).
2. **Create a cluster** and get the connection string.
3. Add the connection string to a `.env` file:
   ```bash
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

---

## **9. Deployment Guide**

### **Frontend Deployment (Netlify)**

1. Push frontend code to GitHub.
2. Connect GitHub repository to [Netlify](https://www.netlify.com/).
3. Deploy the website.

### **Backend Deployment (Vercel)**

1. Push backend code to GitHub.
2. Connect repository to [Vercel](https://vercel.com/).
3. Deploy the server.

---

## **10. Submission Checklist**

✅ **Frontend (Netlify) Live Link**
✅ **Backend (Vercel) Live Link**
✅ **GitHub Repository (Public)**
✅ **README.md with:**

- Live site link
- Server link
- Admin login credentials

🚨 **Missing login credentials will result in a 50% penalty!**

---

🎯 **Congratulations! Your portfolio website is ready for submission! 🚀**
