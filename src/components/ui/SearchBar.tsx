"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement the search logic here
    console.log("Search query:", query);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="relative flex items-center text-gray-600"
    >
      <input
        type="text"
        className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none shadow-md transition-transform transform focus:scale-105 duration-300 focus:border-blue-400 focus:border-b-2"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
      <button type="submit" className="absolute right-0 top-0 mt-2 mr-4">
        <FaSearch className="text-gray-600 hover:text-blue-500 transition-colors duration-300" />
      </button>
    </form>
  );
};

export default SearchBar;
