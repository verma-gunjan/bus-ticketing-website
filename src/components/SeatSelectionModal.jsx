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
    <div className="mt-4 p-4 bg-gray-700 rounded">
      <h3 className="mb-2 font-semibold">Select Seats</h3>
      <div className="grid grid-cols-4 gap-2 mb-4">
        {[...Array(20)].map((_, i) => {
          const seatId = `S${i + 1}`;
          const isSelected = seatsForBus.includes(seatId);
          return (
            <div
              key={seatId}
              onClick={() => toggleSeat(bus.id, seatId)}
              className={`w-10 h-10 flex items-center justify-center rounded cursor-pointer ${
                isSelected
                  ? "bg-yellow-500 text-black font-bold"
                  : "bg-gray-600"
              }`}
            >
              {seatId}
            </div>
          );
        })}
      </div>
      <div className="flex justify-between items-center">
        <div>
          Selected Seats: {seatsForBus.join(", ") || "None"}
        </div>
        <button
          onClick={() => handleConfirm(bus)}
          className="bg-yellow-500 text-black px-4 py-1 rounded hover:bg-yellow-600"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default React.memo(SeatSelectionModal);
