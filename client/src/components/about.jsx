import aboutImg from "../assets/images/about-pic.png";
const About = () => {
  return (
    <>
      <section className="py-10 md:my-26 overflow-hidden bg-gray-50 dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
                About me
              </h2>
              <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-200 dark:text-gray-200 md:mt-8">
                I am a passionate Full Stack Web Developer from Dhaka,
                Bangladesh, specializing in crafting seamless, user-centric web
                solutions. With expertise in JavaScript, React.js, Node.js,
                Express.js, RDBMS, REST API, and Data Visualization, I am on a
                mission to bridge the gap between front-end elegance and
                back-end efficiency. Driven by innovation, I strive to deliver
                exceptional digital experiences that leave a lasting impact.
              </p>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 md:mt-8">
                <span className="relative inline-block">
                  <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900" />
                  <span className="relative"> Have a question? &nbsp;</span>
                </span>
                <br className="block sm:hidden" />
                Ask me on{" "}
                <a
                  href="#"
                  title=""
                  className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline">
                  Facebook
                </a>
              </p>
            </div>
            <div className="relative">
              <img
                className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                src={aboutImg}
                alt="about-picture"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
