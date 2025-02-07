// eslint-disable-next-line no-unused-vars
import React from "react";
import shoe from "../assets/shoe_image.png";
import Button from "./Button";
import flipkart from "../assets/flipkart.png"
import amazon from "../assets/amazon.png"

const Hero = () => {
  return (
    <>
      <div className=" flex justify-center items-center min-h-screen">
        <div className="mainboarder border border-red-500 flex flex-row h-[600px] w-[1000px] mt-[40px]">
          {/*left side */}
          <div className=" mr-6 pt-[10px] basis-1/2 border border-blue-500 ">
            <h1 className="text-black font-bold text-7xl">
              YOUR FEET <br></br>DESERVE<br></br> THE BEST
            </h1>
             {/*left side paragraph*/}
            <div className="paragraph text-black mt-10 mr-2 h-[40px] w-[315px] text-pretty text-1xl">
            <p>
              YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
              SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
              OUR SHOES.
            </p>
          </div>
          {/*Button */}
          <div className="mt-[120px] flex gap-6">
          <Button/>
          <Button/>
          </div>
          {/*logo*/}
          <div>
            <h1 className="text-black mt-5">Also Available on</h1>

          </div>
          {/**/}
          <div className="flex gap-3">
            <img src={flipkart}></img>
            <img src={amazon}></img>
          </div>
          </div>

         
          

          {/*Right side */}
          <div className=" pt-[100px] basis-1/2">
            <img src={shoe}></img>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default Hero;
