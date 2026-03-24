import { useNavigate } from "react-router-dom";

export function Contact() {
     const navigate = useNavigate();
  return (
    
      <div className="flex-col ">
         <h1 className="text-4xl md:text-5xl font-bold mb-6"> 
          Contact Us
        </h1>
        <br></br>
        <p className="text">
          Contact Us
        <br />
          January 18, 2026
        <br />
        <br />
          For queries and collaborations email us on: crochetnowindia@gmail.com 
          Address: Crochet Now India 3-3-53/8/B, Kacheguda Station Road Hyderabad, 500027 Telangana, India.
        </p>

      <button
        onClick={() => navigate("/contact-us")}
        className="text-balck rounded-lg hover:bg-grey-700 transition" >
        Read More...
      </button>
 
      </div>
    
  );
}