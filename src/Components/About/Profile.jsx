import React from "react";

const Profile = ({ imageUrl, title, description }) => {
  return (
    <section className="bg-white rounded-xl m-5 shadow-md relative">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 flex flex-col">
        <div className="block text-center w-full">
          <div className="flex flex-col items-center">
            <img
              className="h-auto max-w mx-auto mb-5"
              src={imageUrl}
              alt="image description"
            />
            <h2 className="font-bold uppercase text-l">{title}</h2>
          </div>
          <p className="mb-3 text-gray-500 dark:text-gray-700 flex-1 text-center">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
