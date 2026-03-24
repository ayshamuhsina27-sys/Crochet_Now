import { Link } from "react-router-dom";

export function BestYarn() {
  return (
      <div className="flex-col ">
         <h1 className="text-4xl md:text-5xl font-bold mb-6"> 
         The Best Yarn Store in India

        </h1>
        <br></br>
        <p className="text">
        The Best Yarn Store in India

        <br />
        
        January 18, 2026
        <br />
        <br />
        Looking for the best yarn store in India? Look no further than our top-rated yarn store! We offer a wide selection of 
        high-quality yarns in a range of colors and textures, perfect for any knitting or crocheting project. Our yarns are made 
        from the finest materials, ensuring that your finished project will look and feel beautiful. We offer a range of natural 
        fibers, including wool, cotton, as well as synthetic blends that are both soft and durable. At our store, 
        you'll also find a range of knitting and crocheting accessories,...
      </p>
      <Link
        to="/best-yarn-store-india/full"
        className="text-black hover:underline font-medium"
      >
        Read more...
      </Link>
      
      </div>
    
  );
}
