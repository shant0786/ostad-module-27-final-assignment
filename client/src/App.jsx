import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import BlogPage from "./pages/blog-page";
import ContactPage from "./pages/contact-page";
import AboutPage from "./pages/about-page";
import ServicePage from "./pages/service-page";
import LoginPage from "./pages/login-page";
import RegisterPage from "./pages/register-page";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/blog" exact element={<BlogPage />} />
        <Route path="/contact" exact element={<ContactPage />} />
        <Route path="/services" exact element={<ServicePage />} />
        <Route path="/about" exact element={<AboutPage />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/register" exact element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
