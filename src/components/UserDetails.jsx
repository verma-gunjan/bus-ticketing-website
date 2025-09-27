import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);

  let { bus, seats, from, to, date } = location.state || {};

  if (!bus || !seats) {
    const savedBooking = localStorage.getItem("bookingData");
    if (savedBooking) {
      const parsed = JSON.parse(savedBooking);
      bus = parsed.bus;
      seats = parsed.seats;
      from = parsed.from;
      to = parsed.to;
      date = parsed.date;
    }
  }

  // Passenger details state (per seat)
  const [passengers, setPassengers] = useState(
    seats?.map((seat) => ({
      seatId: seat,
      name: "",
      age: "",
      gender: "",
    })) || []
  );

  // Main user details
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
  });

  const handlePassengerChange = (index, field, value) => {
    const updated = [...passengers];
    updated[index][field] = value;
    setPassengers(updated);
  };

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingSummary = {
      bus,
      from,
      to,
      date,
      seats,
      passengers,
      userDetails,
    };

    console.log("Final Booking:", bookingSummary);

    localStorage.setItem("finalBooking", JSON.stringify(bookingSummary));

    setShowSuccess(true);

    // Redirect after 2 seconds
    setTimeout(() => {
      navigate("/invoice");
    }, 2000);
  };

  return (
    <section className="py-4 mx-auto px-8 lg:px-20">
      {/* Booking Summary */}
      <div className="bg-white shadow-md rounded-lg px-6 border border-gray-200">
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-gray-800">{bus.brandName}</h2>
            <div className="flex space-x-10 text-sm text-gray-600">
              <div className="flex flex-col">
                <span className="font-bold text-black">{bus.startTime}</span>
                <span>{from || "Delhi"}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-black">{bus.endTime}</span>
                <span>{to || "Jaipur"}</span>
              </div>
            </div>
            <div className="text-xs text-gray-400">{bus.timeDifference}</div>
          </div>
      
          <div className="text-right">
            <p className="text-yellow-500 text-sm font-semibold">
              Selected Seats: {seats?.join(", ") || "None"}
            </p>
            <p className="text-yellow-600 font-bold text-lg mt-1">
              ₹{(bus.discountFare * (seats?.length || 1)).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
      
      {/* Passenger Form */}
      <form onSubmit={handleSubmit} className="space-y-6 mt-8 ">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Passenger Details</h3>
          {passengers.map((p, index) => (
            <div
              key={p.seatId}
              className="flex items-center space-x-3 bg-gray-100 p-4 rounded-lg"
            >
              <div className="text-sm font-medium text-gray-700 w-10">{p.seatId}</div>
          
              <input
                type="text"
                placeholder="Passenger Name"
                value={p.name}
                onChange={(e) =>
                  handlePassengerChange(index, "name", e.target.value)
                }
                className="flex-1 px-3 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
    
              <input
                type="number"
                placeholder="Age"
                value={p.age}
                onChange={(e) =>
                  handlePassengerChange(index, "age", e.target.value)
                }
                className="w-20 px-3 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
                min="1"
                required
              />
    
              <div className="flex space-x-2">
                <button
                  type="button"
                  onClick={() => handlePassengerChange(index, "gender", "M")}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    p.gender === "M"
                      ? "bg-blue-600 text-white"
                      : "bg-white border border-gray-300 text-gray-600"
                  }`}
                >
                  M
                </button>
                <button
                  type="button"
                  onClick={() => handlePassengerChange(index, "gender", "F")}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    p.gender === "F"
                      ? "bg-pink-600 text-white"
                      : "bg-white border border-gray-300 text-gray-600"
                  }`}
                >
                  F
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Contact Information</h3>
        
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={userDetails.fullName}
              onChange={handleUserChange}
              className="w-full px-4 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>
        
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={userDetails.email}
              onChange={handleUserChange}
              className="w-full px-4 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>
        
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={userDetails.phone}
              onChange={handleUserChange}
              className="w-full px-4 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full bg-yellow-500 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-600 transition"
        >
          Proceed To Pay
        </button>
        
        {/* Payment Success */}
        {showSuccess && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl text-center space-y-2">
              <h2 className="text-xl font-bold text-green-600">
                Payment Successful 🎉
              </h2>
              <p className="text-gray-600">Redirecting to your invoice...</p>
            </div>
          </div>
        )}
      </form>
    </section>
  );
};

export default UserDetails;
