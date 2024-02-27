function Card({ cards, mainHeading, subHeading }) {
  return (
    <div className="bg-gray-100 py-16 m-5 rounded-xl">
      <div className="container mx-auto px-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center relative">
          {mainHeading}
        </h2>
        {subHeading && (
          <p className="text-lg text-gray-600 mb-8 text-center">{subHeading}</p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 flex flex-col justify-between"
            >
              <div
                className="relative overflow-hidden"
                style={{ backgroundColor: "white" }}
              >
                <img
                  className="object-cover w-full h-80"
                  src={card.image}
                  alt={card.name}
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-bold text-gray-900 mt-4 text-center">
                  {card.name}
                </h3>
                <p className="text-gray-500 text-sm mt-2 text-center">
                  {card.description}
                </p>
                <div className="flex items-center justify-center mt-4">
                  <button className="bg-blue-700 text-white py-2 px-4 rounded-xl font-bold hover:bg-blue-600">
                    View More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Button Wrapper for Centering */}
        <div className="flex justify-center mt-8">
          <button className="bg-orange-700 text-white py-2 px-4 rounded-xl font-bold hover:bg-blue-600">
            View More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
