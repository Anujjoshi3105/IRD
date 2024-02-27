const Section = ({ heading, description }) => {
  return (
    <section className="bg-white dark:bg-gray-100 rounded-xl m-5 shadow-md relative">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold text-black md:text-4xl lg:text-5xl dark:text-gray">
          {heading}
        </h1>
        <p className="mb-8 text-lg font-normal text-red-800 lg:text-xl sm:px-16 lg:px-24 dark:text-gray-800">
          {description}
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            EXPLORE MORE
            <svg
              className="w-4 h-4 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section;
