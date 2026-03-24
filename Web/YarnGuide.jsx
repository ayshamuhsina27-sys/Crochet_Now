import { Link } from "react-router-dom";

export function YarnGuide() {
     
  return (
    
      <div className="flex-col ">
         <h1 className="text-4xl md:text-5xl font-bold mb-6"> 
          Yarn Guide
        </h1>
        <br></br>
        <p className="text">
        Yarn Guide
        <br />
        
        January 18, 2026
        <br />
        <br />
        How much yarn should I buy? And which type?   Do you always get confused between the ply, yardage, hook size and what type of yarn you need to buy? Here’s a guide you can quickly refer to when in doubt: Ladies Tops Yarn Type/ Size XS S M L XL Acrylics 3.5 – 4.5mm 200gms 250-300gms 300-350gms 350-400gms 400-470gms Acrylics Premium 3.5 – 4.0mm 250gms 350gms 400gms 450gms 500gms Cotton 4ply 3.5-4.5mm 250-300gms 300-400gms 
        450gms 500gms 550-600gms Thin Velvet 2.5mm 300-400gms 450gms 550gms 600gms 650gms Bamboo Yarn 3.5-4.5mm 300gms...
      </p>
      <Link
          to="/yarn-details"
          className="text-black hover:underline font-medium"
        >
          Read more...
        </Link>
      
      </div>
    
  );
}