// components/CityInput.js
import React from "react";
import { useCityAutocomplete } from "../custom_hooks/useCityAutocomplete";
export default function CityInput({ placeholder, onSelect, value }) {
    const {
      query,
      filteredCities,
      showSuggestions,
      handleChange,
      handleSelectCity,
    } = useCityAutocomplete(onSelect);
  
    return (
      <div className="relative w-full flex-1">
        <input
          type="text"
          value={value || query}
          placeholder={placeholder}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-400"
        />
  
        {showSuggestions && filteredCities.length > 0 && (
          <ul className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg shadow-lg mt-1 max-h-60 overflow-y-auto">
            {filteredCities.map((city) => (
              <li
                key={city._id}
                onClick={() => handleSelectCity(city.cityName)}
                className="p-2 hover:bg-gray-100 cursor-pointer"
              >
                {city.cityName}, {city.state}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  