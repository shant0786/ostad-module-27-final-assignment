# **📌 Step-by-Step Plan for Portfolio Website Development**

This guide breaks down your assignment into **simple, manageable steps** to help you complete it efficiently.

---

## **✅ Step 1: Plan Your Website Structure**

Your portfolio website must have **5 main pages** and a **dashboard**.

### **Pages Overview:**

| Page        | Required Sections                                          |
| ----------- | ---------------------------------------------------------- |
| **Home**    | Menu, Hero/Slider, Blog section (dynamic: 6 items), Footer |
| **About**   | Menu, About section, Team section (dynamic: items), Footer |
| **Blog**    | Menu, Blog listing (dynamic: 6 items), Footer              |
| **Service** | Menu, Service listing (dynamic: 6 items), Footer           |
| **Contact** | Menu, Contact form, Footer                                 |

**💡Tip:** Draw a simple wireframe or sketch to visualize your website layout.

---

## **✅ Step 2: Set Up Your Development Environment**

### **Required Technologies:**

- **Frontend:** React.js (or simple HTML, CSS, JavaScript)
- **Backend:** Node.js + Express.js
- **Database:** MongoDB (hosted on **MongoDB Atlas**)

### **Installation Steps:**

1️⃣ Install **Node.js** (if not already installed).  
2️⃣ Create a **new React project**:

```bash
npx create-react-app my-portfolio
cd my-portfolio
```

3️⃣ Install **backend dependencies**:

```bash
npm init -y
npm install express mongoose cors dotenv nodemon
```

4️⃣ Set up MongoDB Atlas and get your **database connection URL**.

---

## **✅ Step 3: Build the Frontend (Client-Side Development)**

- Design **5 pages** using React.
- Use **React Router** for page navigation.
- Fetch dynamic content from the backend (blog, team, service).

### **Folder Structure (Frontend)**

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

## **✅ Step 4: Build the Backend (Server & Database)**

- Set up **Express.js** server.
- Create **CRUD APIs** for blogs, team, and services.
- Connect to **MongoDB Atlas**.

### **Folder Structure (Backend)**

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

### **Sample Express API (server.js)**

```javascript
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

app.listen(5000, () => console.log("Server running on port 5000"));
```

---

## **✅ Step 5: Build the Admin Dashboard**

- Create a **login system** (username & password required).
- Allow admins to **add, edit, delete blogs, team, and services**.
- Use **JWT authentication** for secure access.

---

## **✅ Step 6: Deploy Your Project**

- **Frontend:** Deploy on **Netlify**
- **Backend:** Deploy on **Vercel**
- **Database:** Use **MongoDB Atlas**

### **Deployment Commands:**

1️⃣ **Frontend (Netlify)**

- Push your frontend code to **GitHub**.
- Connect your repository to **Netlify** and deploy.

2️⃣ **Backend (Vercel)**

- Push your backend code to **GitHub**.
- Deploy it using **Vercel**.

---

## **✅ Step 7: Final Submission Checklist**

🔹 Website is fully **functional and responsive**.  
🔹 **Dashboard is working** (with login).  
🔹 **GitHub repo is public** with:

- ✅ Frontend code
- ✅ Backend code
- ✅ README.md with:
  - 🔗 **Live website link (Netlify)**
  - 🔗 **Server link (Vercel)**
  - 🔑 **Admin login credentials**

❌ **Missing login credentials = 50% penalty**!

---

### 🎯 **Congratulations! You’re ready to submit your assignment! 🚀**

This plan ensures that you complete the project **step by step** without missing any details. Let me know if you need any modifications or explanations! 😊
