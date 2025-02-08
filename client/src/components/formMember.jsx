function FormMember({
  label1,
  label2,
  label3,
  label4,
  btnName,
  setMemberData,
  memberData,
  MemberSubmit,
  formName,
}) {
  return (
    <div className="rounded-3xl bg-gray-800 py-10 col-span-12 md:col-span-6">
      <h2 className="text-3xl text-center font-bold text-white dark:text-gray-100">
        {formName}
      </h2>
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {label1}
          </label>
          <input
            type="text"
            id="base-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) =>
              setMemberData({ ...memberData, name: e.target.value })
            }
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="small-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {label2}
          </label>
          <input
            type="text"
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) =>
              setMemberData({ ...memberData, role: e.target.value })
            }
          />
        </div>

        <div className="mb-2">
          <label
            htmlFor="small-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {label3}
          </label>
          <input
            type="text"
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) =>
              setMemberData({ ...memberData, image: e.target.value })
            }
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="small-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {label4}
          </label>
          <input
            type="text"
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) =>
              setMemberData({ ...memberData, expertise: e.target.value })
            }
          />
        </div>
        <div className="flex items-center justify-end mt-3">
          <button
            onClick={(e) => {
              MemberSubmit(e);
            }}
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {btnName}
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormMember;
