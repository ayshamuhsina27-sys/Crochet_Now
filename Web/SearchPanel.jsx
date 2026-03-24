import { FiSearch, FiX } from "react-icons/fi";

import yarn1 from "../assets/Yarn1.webp";
import yarn2 from "../assets/Yarn2.webp";
import ring from "../assets/Ring.webp";
import sheet from "../assets/Sheet.jpg";

const sampleProducts = [
  {
    id: "acrylics-6",
    name: "Acrylics 6 ply - All Colours",
    price: "Rs. 95.00",
    image: yarn1,
  },
  {
    id: "acrylics-8",
    name: "Acrylics 8 Ply - All Colours",
    price: "Rs. 95.00",
    image: yarn2,
  },
  {
    id: "ring",
    name: "Adjustable Crochet Ring",
    price: "Rs. 99.00",
    image: ring,
  },
  {
    id: "cloth",
    name: "Aida Cloth",
    price: "Rs. 129.00",
    image: sheet,
  },
];

export function SearchPanel({ searchTerm, onSearchTermChange, onSubmit, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 px-6 py-10">
      <div className="w-full max-w-6xl rounded-[24px] bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-gray-200 px-8 py-6">
          <div className="flex items-center gap-4 text-2xl font-semibold text-gray-800">
            <FiSearch className="text-2xl" />
            <span>Search</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-3xl text-gray-700 hover:text-black"
            aria-label="Close search"
          >
            <FiX />
          </button>
        </div>

        <div className="px-8 py-6">
          <form onSubmit={onSubmit} className="mb-8">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-lg outline-none focus:border-black"
              value={searchTerm}
              onChange={(e) => onSearchTermChange(e.target.value)}
            />
          </form>

          <h2 className="mb-4 text-xl font-semibold text-gray-800">Products</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {sampleProducts.map((product) => (
              <div key={product.id} className="space-y-3">
                <div className="flex h-48 items-center justify-center rounded-lg bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-40 w-40 object-contain"
                  />
                </div>
                <div className="text-sm font-semibold text-gray-800">{product.name}</div>
                <div className="text-sm font-semibold text-gray-700">{product.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
