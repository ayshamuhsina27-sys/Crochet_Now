import person from "../assets/person.jpeg";

export function About() {
  return (
    <div className="about-person">
      <div className="flex-col ">
         <h1 className="text-4xl md:text-5xl font-bold mb-6"> 
          About the founder
        </h1>
        <br></br>
        <p className="text">
        Himabindu Manchala, having worked in MNCs such as Deloitte & Amazon, having Masters in Business Administration & English 
        Literature has never thought that she would start her firm "Crochet Now India" which is not really relevant to her core subject expertise. 
        <br />
        <br />
        Crochet Now has always been her baby since she ever started it and she has put her heart and soul into it. 
        <br />
        <br />
        Crochet Now is a business that provides online courses to art enthusiasts across the globe and high quality 
        material to artists across the country. 
        <br />
        <br />
        Our mission is to supply and make available all materials and tools required for fiber arts that exist in 
        the world to each and every nook and corner. 
        <br />
        <br /> 
        Our vision is to help, educate people know the value of art and make them aware of how happy can they be once 
        they learn to be creative in their day to day life.
      </p>
      </div>
    
       <img src={person} alt="person" className="about-img" />
       
    </div>
  );
}