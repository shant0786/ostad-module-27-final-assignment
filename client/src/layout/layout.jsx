import Footer from "../components/footer";
import NavBar from "../components/navbar";

function Layout({ children }) {
  return (
    <div className="dark:bg-gray-900 border border-gray-600 border-b-2">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
