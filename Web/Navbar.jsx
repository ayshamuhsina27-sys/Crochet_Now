import { useState } from "react";

export function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
    alert(`Searching for "${searchTerm}"`);
    setSearchTerm("");
    setShowSearch(false);
  };

  const handleLoginToggle = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center relative">
      {/* Logo */}
      <h1 className="text-xl font-bold">Crochet Now</h1>

      <div className="flex items-center gap-6">
        {/* Search Button */}
        <button
          onClick={() => setShowSearch(!showSearch)}
          className="text-xl"
        >
          🔍
        </button>

        {/* Login / Logout Button */}
        <button
          onClick={handleLoginToggle}
          className="bg-black text-white px-4 py-2 rounded"
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>

      {/* Search Dropdown */}
      {showSearch && (
        <div className="absolute top-16 right-6 bg-white shadow-lg p-4 rounded w-72">
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search products..."
              className="w-full border p-2 rounded mb-3"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded"
            >
              Search
            </button>
          </form>
        </div>
      )}
    </nav>
  );
}