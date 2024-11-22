import ApiGrid from "./ApiBlockCard";
import {  MoveRight } from "lucide-react";

const ApiBlock = () => {
  return (
    <>
      <div className="bg-white py-20">
        <div className="container max-w-container m-auto pt-5 pb-5">
          <div className="flex flex-col gap-1 justify-center items-center mb-10">
            <h2 className="text-[24px] text-[#121212] font-bold">
              Top Free API&apos;s in our Platform
            </h2>
            <p>Select your preferred API for testing and learning</p>
          </div>
          <div className=" grid md:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-5">
            <ApiGrid />
          </div>
          <div className="flex justify-center items-center mt-10">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 group bg-gray-900 hover:bg-gray-950 transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-gray-900 w-fit m-auto">
              <span className="text-white">Check More API&apos;s</span>
              <span className="flex items-center ml-3 text-[#fff] group-hover:text-yellow-500 transition-colors duration-200 ease-in-out">
                <MoveRight strokeWidth={1}/>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApiBlock;
