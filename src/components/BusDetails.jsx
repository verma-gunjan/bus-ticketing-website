import React, { useMemo, useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { buses } from "../mockData/available_buses";
import { useQuery } from "../custom_hooks/useQuery";
import "../styles/busdetails.css";

const BusDetails = () => {
  const [expandedBusId, setExpandedBusId] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState({});

  const navigate = useNavigate();
  const query = useQuery();
  const from = query.get("from");
  const to = query.get("to");
  const date = query.get("date");
  const route_id = `${from?.toLowerCase()}_${to?.toLowerCase()}`;

  const busList = useMemo(() => {
    const selectedRoute = buses?.data.find(route => route?.routeId === route_id);
    if (!selectedRoute) return [];
    const dateObj = selectedRoute.dates.find(d => d.searchDate === date);
    return dateObj?.marketPlaceResult || [];
  }, [route_id, date]);

  const toggleSeat = (busId, seatId) => {
    const busSeats = selectedSeats[busId] || [];
    if (busSeats.includes(seatId)) {
      setSelectedSeats({
        ...selectedSeats,
        [busId]: busSeats.filter((id) => id !== seatId),
      });
    } else {
      setSelectedSeats({
        ...selectedSeats,
        [busId]: [...busSeats, seatId],
      });
    }
  };

  const handleBookClick = (busId) => {
    setExpandedBusId(expandedBusId === busId ? null : busId);
  };

  const handleUserDetails = (bus) => {
    const seatsForBus = selectedSeats[bus.id] || [];
    if (seatsForBus.length === 0) {
      alert("Please select at least one seat");
      return;
    }
  
    const bookingData = {
      bus,
      seats: seatsForBus,
      from,
      to,
      date,
    };
  
    // Save to localStorage
    localStorage.setItem("bookingData", JSON.stringify(bookingData));
  
    console.log("Bus:", bus);
    console.log("Selected Seats:", seatsForBus);
  
    navigate("/user-details", { state: bookingData });
  };
  
  useEffect(() => {
    const savedBooking = localStorage.getItem("bookingData");
    if (savedBooking) {
      const { bus, seats } = JSON.parse(savedBooking);
      setSelectedSeats({ [bus.id]: seats });
      setExpandedBusId(bus.id);
    }
  }, []);

  return (
    <section>
      <div className="bg-yellow-500 flex flex-col items-center justify-center h-20 p-2 details_bar space-y-1">
        <div className="flex items-center space-x-2 text-black text-sm font-medium">
          <div>{from}</div>
          <span><i className="fas fa-bus"></i></span>
          <div>{to}</div>
        </div>
        <div className="text-white text-xs font-medium">{date}</div>  
      </div>

      <div className="space-y-4 mt-4 mx-auto max-w-7xl px-6 lg:px-8">
        {busList.map((bus) => (
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
                  {bus.discountFare.toLocaleString()}/Rs
                </div>
                <button
                  onClick={() => handleBookClick(bus.id)}
                  className="bg-gray-600 hover:bg-gray-700 px-4 py-1 rounded text-white text-sm"
                >
                  View Seats
                </button>
              </div>
            </div>

            {/* Inline seat selection */}
            {expandedBusId === bus.id && (
              <div className="mt-4 p-4 bg-gray-700 rounded">
                <h3 className="mb-2 font-semibold">Select Seats</h3>
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {[...Array(20)].map((_, i) => {
                    const seatId = `S${i + 1}`;
                    const isSelected =
                      selectedSeats[bus.id]?.includes(seatId) || false;
                    return (
                      <div
                        key={seatId}
                        onClick={() => toggleSeat(bus.id, seatId)}
                        className={`w-10 h-10 flex items-center justify-center rounded cursor-pointer ${
                          isSelected ? "bg-yellow-500 text-black font-bold" : "bg-gray-600"
                        }`}
                      >
                        {seatId}
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    Selected Seats:{" "}
                    {(selectedSeats[bus.id] || []).join(", ") || "None"}
                  </div>
                  <button onClick={()=>handleUserDetails(bus)} className="bg-yellow-500 text-black px-4 py-1 rounded hover:bg-yellow-600">
                    Confirm
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusDetails;
