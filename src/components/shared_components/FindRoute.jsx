import React, {useState} from "react";
import CityInput from "../CityInput";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";

const FindRoute = () =>{
  const [startDate, setStartDate] = useState(new Date());
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const formattedDate = startDate.toISOString().split("T")[0];

  return(
    <div className="bg-white rounded-2xl shadow-xl w-full max-w-5xl p-6">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
        Find My Route
      </h1>
      <div className="flex flex-col md:flex-row items-center gap-4">
        <CityInput placeholder="From" value={fromCity} onSelect={setFromCity} />
        <CityInput placeholder="To" value={toCity} onSelect={setToCity} />
        <DatePicker 
        placeholderText="Select Date" 
        className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-400" 
        selected={startDate} onChange={(date) => setStartDate(date)}/>
        <Link to={`/bus?from=${fromCity}&to=${toCity}&date=${formattedDate}`} className="bg-red-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-400 transition w-full md:w-auto">
          Let's Go
        </Link>
      </div>
    </div>
  )
}
export default FindRoute;