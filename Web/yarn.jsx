import { useState } from "react";

export function Yarn() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative bg-white border-b">
      <div className="max-w-7xl mx-auto flex items-center gap-8 px-6 py-4">

        <a href="#" className="font-semibold">Home</a>

        
        <div
          className="relative"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          {/* <button className="font-semibold flex items-center gap-1">
            Yarns 🔥
          </button> */}

          
          {open && (
            <div className="absolute left-0 top-full w-[700px] bg-white shadow-xl border mt-4 p-10 z-50">
              <div className="grid grid-cols-2 gap-16">

                
                <div>
                  <h3 className="font-semibold mb-6 text-gray-700">By Yarn</h3>
                  <ul className="space-y-4 text-lg">
                    <li className="hover:text-black cursor-pointer">Acrylics</li>
                    <li className="hover:text-black cursor-pointer">Cotton</li>
                    <li className="hover:text-black cursor-pointer">Velvet</li>
                    <li className="hover:text-black cursor-pointer">Bamboo</li>
                    <li className="hover:text-black cursor-pointer">T-Shirt Yarn</li>
                    <li className="hover:text-black cursor-pointer">Fancy</li>
                    <li className="hover:text-black cursor-pointer">Macrame</li>
                  </ul>
                </div>

               
                <div>
                  <h3 className="font-semibold mb-6 text-gray-700">By Brand</h3>
                  <ul className="space-y-4 text-lg">
                    <li className="hover:text-black cursor-pointer">Ganga</li>
                    <li className="hover:text-black cursor-pointer">
                      Crochet Now India
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          )}
        </div>

        <a href="#" className="font-semibold">Accessories</a>
        <a href="#" className="font-semibold">Online Classes</a>
        <a href="#" className="font-semibold">Yarn Guide</a>
      </div>
    </nav>
  );
}
