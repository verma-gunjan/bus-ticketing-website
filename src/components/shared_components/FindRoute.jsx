import React, {useState} from "react";
import CityInput from "../CityInput";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import { Navigate, useNavigate } from "react-router-dom";

const FindRoute = () =>{
  const [startDate, setStartDate] = useState(null);
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const formattedDate = startDate ? format(startDate, "yyyy-MM-dd") : "";
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-xl w-full max-w-5xl p-8 mx-auto">
      <p className="font-bold text-gray-900 mb-6 text-center text-xl">
        Find My Route
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate(`/bus?from=${fromCity}&to=${toCity}&date=${formattedDate}`);
        }}
      >
        <div className="flex flex-col md:flex-row items-center gap-4">
          <CityInput
            placeholder="From"
            value={fromCity}
            onSelect={setFromCity}
            className="w-full rounded-xl border border-gray-300 p-3 shadow-sm
                       focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <CityInput
            placeholder="To"
            value={toCity}
            onSelect={setToCity}
            className="w-full rounded-xl border border-gray-300 p-3 shadow-sm
                       focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <DatePicker
            placeholderText="Select Date"
            className="w-full rounded-xl border border-gray-300 p-3 shadow-sm
                       focus:outline-none focus:ring-2 focus:ring-yellow-400"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            required
          />
          <button
            type="submit"
            className="bg-red-500 text-white px-6 py-3 rounded-xl font-semibold
                       shadow-sm transition hover:bg-red-400 focus:ring-2 focus:ring-red-300"
          >
            Let's Go
          </button>
        </div>
      </form>
    </div>
  );   
}
export default FindRoute;
