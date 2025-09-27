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
    return (
      <div className="bg-gray-800 text-white rounded-lg p-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-col space-y-1">
            <div className="font-semibold text-sm">{bus.brandName}</div>
            <div className="flex items-center space-x-4 text-xs text-gray-300">
              <div className="flex flex-col items-start">
                <span className="font-bold text-white">{bus.startTime}</span>
                <span>{from}</span>
              </div>
              <div className="flex flex-col items-start">
                <span className="font-bold text-white">{bus.endTime}</span>
                <span>{to}</span>
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
