import React from "react";
import city_image from "../assets/city_image.jpg";
import bus_image from "../assets/bus_image.png";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/homepage.css";
import FindRoute from "./shared_components/FindRoute";
import {useNavigate} from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
    <section className="relative h-screen/2 w-full">
      <img src={city_image} alt="City" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
      <div className="relative z-10 flex flex-col md:flex-row h-full items-center justify-center md:justify-between text-center md:text-left p-y-10 max-w-7xl mx-auto lg:px-8">
        <div className="text-white max-w-lg py-24">
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            Welcome to City Travels
          </h1>
          <p className="text-xl lg:text-2xl mb-8">
            Book your bus tickets easily and travel safely
          </p>
          <button
            className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-yellow-400 hover:scale-105 transition"
            onClick={() => navigate("/bus")}
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
    <section className="relative flex justify-center -mt-20 px-4 z-20">
      <FindRoute/>
    </section>
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-start">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-4 lg:text-left">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Simple Steps To Book Your Bus Ride
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Follow these easy steps to book your bus ticket and travel safely.
            </p>
          </div>
          <div className="mt-16 lg:mt-0 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              { id: 1, icon: "fa-bus", title: "Destination", desc: "Select the type of bus rental you need." },
              { id: 2, icon: "fa-calendar-days", title: "Pick Date", desc: "Set your preferred travel date and time." },
              { id: 3, icon: "fa-file", title: "Confirm Details", desc: "Enter passenger info and finalize trip details." },
              { id: 4, icon: "fa-thumbs-up", title: "Book Ride", desc: "Secure your bus with instant checkout." },
            ].map((step) => (
              <div
                key={step.id}
                className="relative bg-white p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-500 text-white rounded-full text-lg font-bold mx-auto mb-4">
                  {step.id}
                </div>
                <div className="text-4xl text-yellow-500 mb-4">
                  <i className={`fas ${step.icon}`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Home;
