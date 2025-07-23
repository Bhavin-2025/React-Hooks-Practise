import { useState } from "react";

function SearchFilter() {
  const [search, setSearch] = useState("");
  const names = [
    "Bhavin",
    "Raj",
    "Meera",
    "Sonal",
    "Divya",
    "Ravi",
    "Kiran",
    "Amit",
  ];

  const filteredNames = names.filter(name=>
    name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-6 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-gray-400 px-4 py-2 rounded w-full mb-4"
      />

      <ul className="list-disc pl-5">
        {filteredNames.map((name, index) => (
          <li key={index} className="mb-1">
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}


export default SearchFilter;
