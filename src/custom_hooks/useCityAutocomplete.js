// hooks/useCityAutocomplete.js
import { useState, useCallback } from "react";
import { cities } from "../mockData/city";
import debounce from "lodash.debounce";

export function useCityAutocomplete(onSelect) {
  const [query, setQuery] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filterCities = useCallback(
    debounce((value) => {
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
    }, 300),
    []
  );

   const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    filterCities(value);
  };

  const handleSelectCity = (cityName) => {
    setQuery(cityName);
    setShowSuggestions(false);
    if (onSelect) onSelect(cityName);
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
