import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../custom_hooks/useQuery";
import { buses } from "../mockData/available_buses";
import "../styles/busdetails.css"
const BusDetails = () =>{
  const navigate = useNavigate();
  const query = useQuery();
  const from = query.get("from");
  const to = query.get("to");
  const date = query.get("date");
  const route_id = `${from?.toLowerCase()}_${to?.toLowerCase()}`;
  
  // Memoized bus list
  const busList = useMemo(() => {
    const selectedRoute = buses?.data.find(route => route?.routeId === route_id);
    if (!selectedRoute) return [];
    
    const dateObj = selectedRoute.dates.find(d => d.searchDate === date);
    return dateObj?.marketPlaceResult || [];
  }, [route_id, date]);

  const handleBook = (bus) => {
    // Navigate to seat booking page with bus info
    navigate("/seat-selection", { state: { bus, from, to, date } });
  }

  console.log(busList);
  return(
    <>
     <section>
        <div className="bg-yellow-500 flex flex-col items-center justify-center h-20 p-2 details_bar space-y-1">
          <div className="flex items-center space-x-2 text-black text-sm font-medium">
            <div>{from}</div>
            <span><i className="fas fa-bus"></i></span>
            <div>{to}</div>
          </div>

          <div className="text-white text-xs font-medium">
            {date}
          </div>  
        </div>
        <div className="space-y-4 mt-4">
            {busList.map(bus => (
              <div
                key={bus.id}
                className="bg-gray-800 text-white rounded-lg p-4 flex justify-between items-center"
              >
                {/* Left: Bus Info and timing */}
                <div className="flex flex-col space-y-1">
                  {/* Bus type */}
                  <div className="font-semibold text-sm">{bus.brandName}</div>

                  {/* Start → End */}
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
            
                  {/* Duration */}
                  <div className="text-xs text-gray-400">
                    {bus.timeDifference}
                  </div>
                </div>
            
                {/* Right: Fare and Book button */}
                <div className="flex flex-col items-end space-y-2">
                  <div className="text-yellow-400 font-bold text-sm">
                    {bus.discountFare.toLocaleString()}/Rs
                  </div>
                  <button onClick={() => handleBook(bus)} className="bg-gray-600 hover:bg-gray-700 px-4 py-1 rounded text-white text-sm">
                    Book
                  </button>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  )
}
export default BusDetails;