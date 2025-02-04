function Team() {
  return (
    <div className="mx-auto p-5">
      <h1 className="text-4xl text-center my-5 font-bold text-gray-200 dark:text-white mb-6">
        Meet Our Team Members
      </h1>
      <div className="mx-auto my-10 md:max-w-7xl gap-3 grid grid-cols-12">
        {/* Team member 1 */}
        <div className="w-full max-w-sm bg-white xl:col-span-3 md:col-span-4 col-span-12 sm:col-span-6 mx-2 my-3 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-end px-4 pt-4"></div>
          <div className="flex flex-col items-center pb-10">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="https://placehold.co/400"
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Bonnie Green
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Visual Designer
            </span>
            <div className="flex mt-4 md:mt-6">
              <a
                href="#"
                className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
