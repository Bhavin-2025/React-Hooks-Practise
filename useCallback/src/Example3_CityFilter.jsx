import React, { useState, useCallback } from "react";

const FilterInput = React.memo(({ onFilter }) => {
  console.log("FilterInput Rendered");

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    onFilter(e.target.value); 
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Search cities..."
      className="border px-3 py-2 rounded w-full"
    />
  );
});

function CityFilterApp() {
  const cities = [
    "Delhi",
    "Mumbai",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Pune",
    "Kolkata",
    "Ahmedabad",
    "Surat",
    "Jaipur",
  ];

  const [filtered, setFiltered] = useState(cities);
  const [themeToggle, setThemeToggle] = useState(false); 

 
  const filterCities = useCallback((search) => {
    setFiltered(
      cities.filter((city) =>
        city.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, []);

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl mb-3"> Filter Cities</h2>
      <FilterInput onFilter={filterCities} />

      <ul className="list-disc pl-5 mt-3">
        {filtered.map((city, idx) => (
          <li key={idx}>{city}</li>
        ))}
      </ul>

      <button
        onClick={() => setThemeToggle((prev) => !prev)}
        className="mt-6 !bg-blue-500 text-white px-4 py-2 rounded"
      >
        Toggle Theme (Unrelated State)
      </button>
    </div>
  );
}

export default CityFilterApp;
