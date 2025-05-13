import React from "react";
import { watchImage } from "../assets";
import Products from "./Products";

const Home = () => {
  return (
    <>
      <section className="bg-gray-100 h-[100vh] flex items-center justify-center px-6 py-12">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Timeless Style, <br /> Modern Precision
            </h1>
            <p className="text-gray-600 text-lg">
              Discover our latest collection of premium watches that redefine
              elegance and craftsmanship.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                Shop Now
              </button>
              <button className="px-6 py-3 border border-gray-800 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition">
                Explore Collection
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src={watchImage}
              alt="Luxury Watch"
              className="w-[500px] drop-shadow-lg"
            />
          </div>
        </div>
      </section>
      <Products />
    </>
  );
};

export default Home;
