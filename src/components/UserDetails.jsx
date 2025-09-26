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
    <section className="p-4 mx-auto max-w-7xl px-6 lg:px-8">
      {/* Booking summary card */}
      <div className="space-y-4 mt-4">
        <div key={bus.id} className="bg-gray-800 text-white rounded-lg p-4">
          <div className="flex justify-between items-center">
            <div className="flex flex-col space-y-1">
              <div className="font-semibold text-sm">{bus.brandName}</div>
              <div className="flex items-center space-x-4 text-xs text-gray-300">
                <div className="flex flex-col items-start">
                  <span className="font-bold text-white">{bus.startTime}</span>
                  <span>{from || "TEGAL"}</span>
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-bold text-white">{bus.endTime}</span>
                  <span>{to || "JAKARTA"}</span>
                </div>
              </div>
              <div className="text-xs text-gray-400">{bus.timeDifference}</div>
            </div>

            <div className="flex flex-col items-end space-y-2">
              <div className="text-yellow-400 font-bold text-sm">
                <p>
                  <strong>Selected Seats:</strong>{" "}
                  {seats?.join(", ") || "None"}
                </p>
              </div>
              <div className="text-yellow-400 font-bold text-sm">
              {(bus.discountFare * (seats?.length || 1)).toLocaleString()}/Rs
              </div>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 mt-6">
        {/* Passenger details per seat */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Passenger Details</h3>
          {passengers.map((p, index) => (
            <div
              key={p.seatId}
              className="flex items-center space-x-3 bg-gray-50 p-3 rounded"
            >
              <div className="w-12 font-medium">{p.seatId}</div>

              <input
                type="text"
                placeholder="Type Passenger Name"
                value={p.name}
                onChange={(e) =>
                  handlePassengerChange(index, "name", e.target.value)
                }
                className="flex-1 px-2 py-1 border rounded text-black"
                required
              />

              <input
                type="number"
                placeholder="Age"
                value={p.age}
                onChange={(e) =>
                  handlePassengerChange(index, "age", e.target.value)
                }
                className="w-20 px-2 py-1 border rounded text-black"
                min="1"
                required
              />

              <div className="flex space-x-2">
                <button
                  type="button"
                  onClick={() => handlePassengerChange(index, "gender", "M")}
                  className={`px-2 py-1 rounded ${
                    p.gender === "M"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  M
                </button>
                <button
                  type="button"
                  onClick={() => handlePassengerChange(index, "gender", "F")}
                  className={`px-2 py-1 rounded ${
                    p.gender === "F"
                      ? "bg-purple-500 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  F
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Main user details */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Contact Information</h3>

          <div>
            <label className="block text-sm font-medium">Full Name<span className="text-red-500">*</span></label>
            <input
              type="text"
              name="fullName"
              value={userDetails.fullName}
              onChange={handleUserChange}
              className="w-full px-3 py-2 border rounded text-black"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email<span className="text-red-500">*</span></label>
            <input
              type="email"
              name="email"
              value={userDetails.email}
              onChange={handleUserChange}
              className="w-full px-3 py-2 border rounded text-black"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Phone<span className="text-red-500">*</span></label>
            <input
              type="tel"
              name="phone"
              value={userDetails.phone}
              onChange={handleUserChange}
              className="w-full px-3 py-2 border rounded text-black"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600"
        >
          Proceed To Pay
        </button>
        {/* Success Popup */}
        {showSuccess && (
          <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg text-center">
              <h2 className="text-xl font-bold text-green-600 mb-2">Payment Successful 🎉</h2>
              <p className="text-gray-600">Redirecting to your invoice...</p>
            </div>
          </div>
        )}
      </form>
    </section>
  );
};

export default UserDetails;
