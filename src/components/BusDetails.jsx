import React, { useMemo, useState, useEffect, useCallback } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { buses } from "../mockData/available_buses";
import { useQuery } from "../custom_hooks/useQuery";
import "../styles/busdetails.css";
import FindRoute from "./shared_components/FindRoute";
import SeatSelectionModal from "./SeatSelectionModal";
import BusCard from "./BusCard";

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

  const toggleSeat = useCallback((busId, seatId) => {
    setSelectedSeats(prev => {
      const busSeats = prev[busId] || [];
      if (busSeats.includes(seatId)) {
        return { ...prev, [busId]: busSeats.filter(id => id !== seatId) };
      } else {
        return { ...prev, [busId]: [...busSeats, seatId] };
      }
    });
  }, []);

  const handleBookClick = (busId) => {
    setExpandedBusId(expandedBusId === busId ? null : busId);
  };

  const handleUserDetails = useCallback((bus) => {
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
  
    localStorage.setItem("bookingData", JSON.stringify(bookingData));
    navigate("/user-details", { state: bookingData });
  }, [selectedSeats, from, to, date, navigate]);
  
  useEffect(() => {
    const savedBooking = localStorage.getItem("bookingData");
    if (savedBooking) {
      try {
        const { bus, seats } = JSON.parse(savedBooking);
        setSelectedSeats({ [bus.id]: seats });
        setExpandedBusId(bus.id);
      } catch (err) {
        console.warn("Failed to parse booking data from localStorage", err);
      }
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

      <div>
        <FindRoute/>
      </div>

      <div className="space-y-4 mt-4 mx-auto max-w-7xl px-6 lg:px-8">
        {busList.length === 0 ? (
          <div className="text-center"><b>No bus found for this route</b></div>
        ) : (
          busList.map((bus) => (
            <BusCard
              key={bus.id}
              bus={bus}
              expandedBusId={expandedBusId}
              handleBookClick={handleBookClick}
              selectedSeats={selectedSeats}
              toggleSeat={toggleSeat}
              handleUserDetails={handleUserDetails}
              from={from}
              to={to}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default BusDetails;
