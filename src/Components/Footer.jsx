const Footer = () => {
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl text-center">
        <a
          href="#"
          className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img src="logo.png" className="h-8 px-3" alt="" />
          Industrial Research Development
        </a>
        <p className="my-6 text-gray-500 dark:text-gray-400">
          Delhi Technological University , Shahbad Daulatpur, Main Bawana Road,
          DL - 42, IN
        </p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              FAQs
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Contact
            </a>
          </li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024-2025{" "}
          <a href="#" className="hover:underline">
            DTU-IRD.
          </a>{" "}
          All rights are reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
