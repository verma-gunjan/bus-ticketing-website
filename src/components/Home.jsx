import React from "react";
import city_image from "../assets/city_image.jpg";
import bus_image from "../assets/bus_image.png";
import "../styles/homepage.css";

const Home = () => {
  return (
    <>
    <section className="relative h-screen w-full">
      <img src={city_image} alt="City" className="absolute inset-0 w-full h-full object-cover"/>
      {/* Black Overlay */}
      <div className="transparent-layer"></div>
      <div className="relative z-10 flex h-full items-center justify-between px-8 lg:px-20">
        <div className="text-white max-w-lg">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Welcome to City Travels
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            Book your bus tickets easily and travel safely
          </p>
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition">
            Book Now
          </button>
        </div>
        <div className="hidden md:block relative">
          <img
            src={bus_image}
            alt="Bus"
            className="bus-image"
          />
        </div>
      </div>
    </section>
    <section className="relative flex justify-center -mt-20 px-4 z-20">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-5xl p-6 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
          Find My Route
        </h1>
        <input
          type="text"
          placeholder="From"
          className="border border-gray-300 rounded-lg p-2 flex-1"
        />
        <input
          type="text"
          placeholder="To"
          className="border border-gray-300 rounded-lg p-2 flex-1"
        />
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-400 transition">
          Let's Go
        </button>
      </div>
    </section>
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-start">

          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-4 lg:text-left">
            <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Simple Steps To Book Your Bus Ride
            </h3>
          </div>

          <div className="mt-16 lg:mt-0 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="relative bg-gray-50 p-6 rounded-lg text-center">
              <div className="blog-circle">
                1
              </div>
              <div className="text-3xl mb-4"><i className="fas fa-bus"></i></div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Destination</h3>
              <p className="text-gray-600 text-sm">Select the type of bus rental you need.</p>
            </div>

            <div className="relative bg-gray-50 p-6 rounded-lg text-center">
              <div className="blog-circle">
                2
              </div>
              <div className="text-3xl mb-4"><i className="fas fa-calendar-days"></i></div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pick Date</h3>
              <p className="text-gray-600 text-sm">Set your preferred travel date and time.</p>
            </div>

            <div className="relative bg-gray-50 p-6 rounded-lg text-center">
              <div className="blog-circle">
                3
              </div>
              <div className="text-3xl mb-4"><i className="fas fa-file"></i></div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Confirm Details</h3>
              <p className="text-gray-600 text-sm">Enter passenger info and finalize trip details.</p>
            </div>

            <div className="relative bg-gray-50 p-6 rounded-lg text-center">
              <div className="blog-circle">
                4
              </div>
              <div className="text-3xl mb-4"><i className="fa-solid fa-thumbs-up"></i></div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Book Ride</h3>
              <p className="text-gray-600 text-sm">Secure your bus with instant checkout.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Home;
