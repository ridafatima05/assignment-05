import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mt-[110px] ml-[110px] space-y-0 ">
    
      <div className="w-full md:w-1/2 flex flex-col space-y-6">
        <h1 className="text-black text-[30px] font-serif font-semibold">
          IMPECCABLE <br/>
          CRAFTSMANSHIP AND<br/>
           FINESSE
        </h1>
        <p className="text-[20px] text-primary font-serif max-w-[920px]">
          An example of intricate workmanship and detail, elegant <br />
          necklaces and long and short chains form a part of <br />
          our desirable collection.
        </p>

        <button className="w-[200px] font-serif font-medium h-[58px] p-[10px] space-x-5 border-pr rounded-[10px] text-white bg-primary text-2xl">
          Explore Now
        </button>
      </div>

    
      <div className="w-full md:w-1/2 flex justify-center border-white">
        <img
          src="/rs-group-wrap ⏵ rs-group.png"
          alt="Jwellery Image"
          className="w-[400px] h-[450px] object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
