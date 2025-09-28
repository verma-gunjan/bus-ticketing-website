import React from "react";
import SeatSelectionModal from "./SeatSelectionModal";

const BusCard = React.memo(
  ({
    bus,
    expandedBusId,
    handleBookClick,
    selectedSeats,
    toggleSeat,
    handleUserDetails,
    from,
    to,
  }) => {
    // Get seats selected for this bus
    const seatsForBus = selectedSeats[bus.id] || [];

    // Calculate price dynamically
    const totalFare = seatsForBus.length * bus.discountFare;
    return (
      <div className="bg-white rounded-2xl shadow-md p-5 mb-4 flex justify-between items-center hover:shadow-lg transition">
        {/* Left Section */}
        <div className="flex flex-col space-y-2">
          <h2 className="font-semibold text-gray-900 text-base">{bus.brandName}</h2>
    
          <div className="flex items-center space-x-8">
            <div className="flex flex-col text-sm">
              <span className="font-bold text-gray-900 text-lg">{bus.startTime}</span>
              <span className="text-gray-500">{from}</span>
            </div>
    
            <div className="flex flex-col text-sm">
              <span className="font-bold text-gray-900 text-lg">{bus.endTime}</span>
              <span className="text-gray-500">{to}</span>
            </div>
          </div>
    
          <p className="text-gray-400 text-xs">{bus.timeDifference}</p>
        </div>
    
        {/* Right Section */}
        <div className="flex flex-col items-end space-y-3">
          <span className="text-yellow-500 font-bold text-lg">
            ₹{totalFare > 0 ? totalFare.toLocaleString() : bus.discountFare.toLocaleString()}
          </span>
    
          <button
            onClick={() => handleBookClick(bus.id)}
            className="bg-red-500 hover:bg-red-400 text-white text-sm font-medium px-5 py-2 rounded-xl shadow-sm transition"
          >
            View Seats
          </button>
        </div>
    
        {expandedBusId === bus.id && (
          <SeatSelectionModal
            bus={bus}
            selectedSeats={selectedSeats}
            toggleSeat={toggleSeat}
            handleConfirm={handleUserDetails}
          />
        )}
      </div>
    );
  }
);

export default BusCard;
