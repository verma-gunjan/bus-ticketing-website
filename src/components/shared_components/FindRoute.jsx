import React, {useState} from "react";
import CityInput from "../CityInput";
import DatePicker from "react-datepicker";

const FindRoute = () =>{
  const [startDate, setStartDate] = useState(new Date());
  return(
    <div className="bg-white rounded-2xl shadow-xl w-full max-w-5xl p-6">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
        Find My Route
      </h1>
      <div className="flex flex-col md:flex-row items-center gap-4">
        <CityInput placeholder="From" />
        <CityInput placeholder="To" />
        <DatePicker 
        placeholderText="Select Date" 
        className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-400" 
        selected={startDate} onChange={(date) => setStartDate(date)}/>
        <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-400 transition w-full md:w-auto">
          Let's Go
        </button>
      </div>
    </div>
  )
}
export default FindRoute;