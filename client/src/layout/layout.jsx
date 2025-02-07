import Footer from "../components/footer";
import NavBar from "../components/navbar";

function Layout({ children }) {
  return (
    <div className="dark:bg-gray-900">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
