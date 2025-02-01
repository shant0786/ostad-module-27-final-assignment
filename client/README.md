# Vite Frontend Setup

## 🚀 Project: Portfolio Website

This project is a **Vite-powered frontend** for the Portfolio Website. Follow the steps below to set up, develop, and deploy the frontend.

## 📌 Prerequisites

Make sure you have the following installed:

- **Node.js** (>= 16.x recommended)
- **npm** or **yarn**

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

## 🎯 Running the Development Server

To start the Vite development server, run:

```bash
npm run dev
# or
yarn dev
```

Your application will be available at `http://localhost:5173/` by default.

## 🏗️ Project Structure

```
/src
   ├── components/      # Reusable components
   ├── pages/           # Page components
   ├── assets/          # Static assets (images, styles, etc.)
   ├── App.jsx          # Main App component
   ├── main.jsx         # Entry point
   ├── router.jsx       # Routes configuration (if applicable)
```

## ⚡ Building for Production

To create a production build, run:

```bash
npm run build
# or
yarn build
```

This will generate a `dist/` folder containing the optimized build.

## 🚀 Deployment

### Deploy to Netlify

1. Install Netlify CLI (if not installed):
   ```bash
   npm install -g netlify-cli
   ```
2. Run the deployment command:
   ```bash
   netlify deploy --prod
   ```

### Deploy to Vercel

1. Install Vercel CLI (if not installed):
   ```bash
   npm install -g vercel
   ```
2. Deploy using:
   ```bash
   vercel
   ```

## 🛠️ Environment Variables

Create a `.env` file in the root directory and add:

```
VITE_API_URL=https://your-api-url.com
```

## 📜 License

This project is licensed under the MIT License.

## 📞 Contact

For any inquiries, reach out at [rm.shanto786@gmail.com](mailto:rm.shanto786@gmail.com).
