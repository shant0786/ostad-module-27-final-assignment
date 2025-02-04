const Footer = () => {
  return (
    <>
      <footer className="bg-white shadow-sm dark:bg-gray-900 border-t-1 border-gray-500">
        <div className="w-full  max-w-screen-xl p-4 md:flex md:items-center md:justify-around">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025 . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Learn about us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Services we provide
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Our Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
