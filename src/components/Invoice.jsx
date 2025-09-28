import React, { useEffect, useState } from "react";

const Invoice = () => {
  const [booking, setBooking] = useState(null);
  const [ticketId, setTicketId] = useState("");


  useEffect(() => {
    const savedBooking = localStorage.getItem("finalBooking");
    if (savedBooking) {
      setBooking(JSON.parse(savedBooking));

      // Generate random ticket ID (e.g. "TKT-AB1234")
      const randomId = "TKT-" + Math.random().toString(36).substring(2, 8).toUpperCase();
      setTicketId(randomId);
  
      // Clear localStorage after setting state
      localStorage.removeItem("finalBooking");
      localStorage.removeItem("bookingData");
    }
  }, []);

  if (!booking) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-600 text-lg">No booking found.</p>
      </div>
    );
  }

  const { bus, from, to, date, seats, passengers } = booking;
  const totalFare = bus.discountFare * seats.length;

  return (
    <section className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-10">
      <div className="text-center border-b pb-4 mb-6">
        <h1 className="text-2xl font-bold text-yellow-600">Bus Ticket Invoice</h1>
        <p className="text-gray-500 text-sm">Booking Confirmation</p>
        {ticketId && <p className="text-gray-700 text-sm mt-1">Ticket ID: <strong>{ticketId}</strong></p>}
      </div>

      {/* Bus Information */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Journey Details</h2>
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
          <p><strong>Bus:</strong> {bus.brandName}</p>
          <p><strong>Date:</strong> {date}</p>
          <p><strong>From:</strong> {from}</p>
          <p><strong>To:</strong> {to}</p>
          <p><strong>Start Time:</strong> {bus.startTime}</p>
          <p><strong>End Time:</strong> {bus.endTime}</p>
          <p><strong>Duration:</strong> {bus.timeDifference}</p>
          <p><strong>Seats:</strong> {seats.join(", ")}</p>
        </div>
      </div>

      {/* Passenger Information */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Passenger Details</h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-3 py-2 text-left">Seat</th>
                <th className="border px-3 py-2 text-left">Name</th>
                <th className="border px-3 py-2 text-left">Age</th>
                <th className="border px-3 py-2 text-left">Gender</th>
              </tr>
            </thead>
            <tbody>
              {passengers.map((p, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="border px-3 py-2">{p.seatId}</td>
                  <td className="border px-3 py-2">{p.name}</td>
                  <td className="border px-3 py-2">{p.age}</td>
                  <td className="border px-3 py-2">{p.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Fare Summary */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Fare Summary</h2>
        <div className="flex justify-between text-sm text-gray-700">
          <p>Fare per Seat</p>
          <p>{bus.discountFare.toLocaleString()} Rs</p>
        </div>
        <div className="flex justify-between text-sm text-gray-700">
          <p>Total Seats</p>
          <p>{seats.length}</p>
        </div>
        <div className="flex justify-between text-base font-bold text-gray-900 border-t mt-2 pt-2">
          <p>Total Fare</p>
          <p>{totalFare.toLocaleString()} Rs</p>
        </div>
      </div>

      <div className="text-center text-gray-500 text-xs border-t pt-4">
        <p>Thank you for booking with us</p>
        <p>Safe travels! <i className="fas fa-bus"></i></p>
      </div>
    </section>
  );
};

export default Invoice;
