import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Find Your Dream Home
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Explore top-rated properties in your area. Easy. Fast. Secure.
        </p>
        <a
          href="#properties"
          className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition duration-300"
        >
          Browse Listings
        </a>
      </div>
    </section>
  );
};

export default Hero;
