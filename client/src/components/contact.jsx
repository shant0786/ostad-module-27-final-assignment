import { useState } from "react";
import { contactSend } from "../APIRequest/APIRequest";

function Contact() {
  let [contactData, setContactData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const submitContact = async (e) => {
    e.preventDefault();
    await contactSend(contactData);
    setContactData({ email: "", subject: "", message: "" });
  };
  return (
    <div>
      <section className="md:py-10 min-h-svh">
        <div className="py-8 lg:py-16 rounded-3xl px-10 bg-gray-800   mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@example.com"
                onChange={(e) =>
                  setContactData({ ...contactData, email: e.target.value })
                }
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                onChange={(e) =>
                  setContactData({ ...contactData, subject: e.target.value })
                }
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
                onChange={(e) =>
                  setContactData({ ...contactData, message: e.target.value })
                }
              />
            </div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                onClick={(e) => submitContact(e)}
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Send message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
