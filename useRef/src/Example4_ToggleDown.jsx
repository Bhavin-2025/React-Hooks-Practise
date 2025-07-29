import { useEffect, useRef, useState } from "react";

function DropdownExample() {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="p-10 text-center">
      <button
        onClick={toggleDropdown}
        className="!bg-blue-600 text-white px-4 py-2 rounded"
      >
        Toggle Dropdown
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="mt-4 w-48 mx-auto bg-white border shadow-md rounded p-4"
        >
          <p className="text-gray-700">Dropdown Content</p>
        </div>
      )}
    </div>
  );
}

export default DropdownExample;
