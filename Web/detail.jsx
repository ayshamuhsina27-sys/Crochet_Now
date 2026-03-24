import { FaFacebook, FaInstagram, FaYoutube, FaHeart, FaUser, } from "react-icons/fa";

export function Detail()
{
  return (
    <section class=" p-16 my-16 font-sans">
      <div class="border border-gray-400 rounded-[100px] p-8 md:p-12">
      <div class="flex flex-col md:flex-row  items-start gap-12"> 
                
      
          <div class="flex flex-col space-y-8 w-full md:w-1/3">
       

          <div className="flex md:justify-start gap-6 text-xl"> 

            <FaFacebook className="cursor-pointer hover:opacity-70" /> 
            <FaInstagram className="cursor-pointer hover:opacity-70" /> 
            <FaYoutube className="cursor-pointer hover:opacity-70" /> 
            
          </div>
       
            <div>
              <svg class="w-95 h-5 mb-2 " fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                <h3 className="text-lg md:text-xl font-medium leading-snug text-center">
                    Handpicked <br /> with love
                </h3>
                <p className="text-sm mt-2 text-gray-600 text-center"> We believe in building better </p>
            </div>
          </div>
          <div class="flex flex-col space-y-3  text-center w-full md:w-1/3">
            <svg class="w-95 h-6 text-gray-800" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2m8-10a4 4 0 100-8 4 4 0 000 8z"></path></svg>
              <h4 class="text-lg  font-semibold">Let's Talk</h4>
                <div class="text-sm text-center text-gray-600 space-y-1"> 
                  <p className="text-sm mt-1 leading-relaxed"> Address: 3-3-5/3/B, Kacheguda Station Road,<br />
                      500027-Hyd, Telangana, India </p>
                </div>
          </div>
          <div class="flex flex-col items-center md:items-end w-full md:w-1/3 space-y-2 text-sm pt-4 md:pt-0">
         
            <p className="cursor-pointer hover:underline">Terms of Service</p>
            <p className="cursor-pointer hover:underline">Shipping Policy</p>
            <p className="cursor-pointer hover:underline">Return and Refund Policy</p>
            <p className="cursor-pointer hover:underline">Privacy Policy</p>
          </div>
        </div>
       
      
      </div>
    </section>
  );
}