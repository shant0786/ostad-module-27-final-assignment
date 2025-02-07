import { useEffect, useState } from "react";
import { allBlogs } from "../APIRequest/APIRequest";
import Loader from "./loader";

function Blog() {
  const [blogData, setBlogData] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await allBlogs();
      setBlogData(data);
    })();
  }, []);
  if (blogData === null) {
    return <Loader />; // show loading message while data is loading
  }

  return (
    <>
      <div className="mx-auto my-10 md:max-w-7xl min-h-screen  gap-3 grid grid-cols-12">
        {blogData["data"].map((blog, i) => {
          return (
            <div
              key={i}
              className="md:col-span-4 col-span-12 sm:col-span-6 mx-2 my-3">
              <div className="max-w-sm bg-white border rounded-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    src={blog["image"]}
                    alt="blog-img"
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {blog["title"]}
                    </h6>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {blog["content"]}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Blog;
