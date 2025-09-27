// SeatSelectionModal.jsx
import React from "react";

const SeatSelectionModal = ({
  bus,
  selectedSeats,
  toggleSeat,
  handleConfirm,
}) => {
  const seatsForBus = selectedSeats[bus.id] || [];

  return (
    <div className="mt-4 p-6 bg-white rounded-2xl shadow-lg max-w-md mx-auto">
      <h3 className="mb-4 text-lg font-semibold text-gray-900 text-center">
        Select Seats
      </h3>
      <div className="grid grid-cols-4 gap-3 mb-6">
        {[...Array(20)].map((_, i) => {
          const seatId = `S${i + 1}`;
          const isSelected = seatsForBus.includes(seatId);
  
          return (
            <button
              key={seatId}
              type="button"
              onClick={() => toggleSeat(bus.id, seatId)}
              className={`w-12 h-12 rounded-lg flex items-center justify-center text-sm font-medium transition
                ${
                  isSelected
                    ? "bg-yellow-500 text-black shadow-md scale-105"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
              {seatId}
            </button>
          );
        })}
      </div>  
      <div className="flex justify-between items-center text-sm">
        <span className="text-gray-700">
          Selected:{" "}
          <span className="font-semibold text-gray-900">
            {seatsForBus.join(", ") || "None"}
          </span>
        </span>
        <button
          onClick={() => handleConfirm(bus)}
          className="bg-red-500 text-white px-5 py-2 rounded-xl font-semibold
                     hover:bg-red-400 transition shadow-sm"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};
export default React.memo(SeatSelectionModal);
