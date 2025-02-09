import { useEffect, useState } from "react";
import { allBlogs, deleteBlogDas } from "../APIRequest/APIRequest";
import Loader from "./loader";

function DelBlogTB() {
  const [blogData, setBlogData] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await allBlogs();
      setBlogData(data);
    })();
  }, []);

  const deleteBlog = async (id) => {
    await deleteBlogDas(id);
    const data = await allBlogs();
    setBlogData(data);
  };
  if (blogData === null) {
    return <Loader />; // show loading message while data is loading
  }
  return (
    <div className="relative col-span-12 md:col-span-6 overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Blog Title
            </th>

            <th scope="col" className="px-6 py-3">
              Author
            </th>
            <th scope="col" className="px-6 py-3">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {blogData["data"]?.map((blog, i) => {
            return (
              <tr
                key={i}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {blog.title}
                </th>
                <td className="px-6 py-4">{blog.author}</td>

                <td className="px-6 py-4">
                  <button
                    onClick={() => deleteBlog(blog._id)}
                    className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DelBlogTB;
