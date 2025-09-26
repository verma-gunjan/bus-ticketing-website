// hooks/useCityAutocomplete.js
import { useState } from "react";
import { cities } from "../mockData/city";

export function useCityAutocomplete() {
  const [query, setQuery] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setFilteredCities([]);
      setShowSuggestions(false);
      return;
    }

    const matches = cities.filter(
      (city) =>
        city.cityName.toLowerCase().includes(value.toLowerCase()) ||
        city.searchTags.some((tag) =>
          tag.toLowerCase().includes(value.toLowerCase())
        )
    );

    setFilteredCities(matches);
    setShowSuggestions(true);
  };

  const handleSelectCity = (cityName) => {
    setQuery(cityName);
    setShowSuggestions(false);
  };

  return {
    query,
    setQuery,
    filteredCities,
    showSuggestions,
    handleChange,
    handleSelectCity,
  };
}
