import { MoveRight } from "lucide-react";

const APICategories = () => {
  return (
    <>
      <div className="bg-zinc-50 py-20">
        <div className="container max-w-[1024px] m-auto pt-5 pb-5">
          <div className="flex flex-col gap-1 justify-center items-center mb-10">
            <h2 className="text-[24px] text-[#121212] font-bold">
              API Categories
            </h2>
            <p>
              Categories of different types of API&apos;s and it&apos;s data
            </p>
          </div>
          <div className=" grid md:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-5">
            <div className="border-2 rounded-xl p-[7px] md:p-[12px] flex justify-center items-center">
              <h3 className="text-[12px] md:text-lg text-primary">
                Images API
              </h3>
            </div>
            <div className="border-2 rounded-xl p-[7px] md:p-[12px] flex justify-center items-center">
              <h3 className="text-[12px] md:text-lg text-primary">
                API for Data
              </h3>
            </div>
            <div className="border-2 rounded-xl p-[7px] md:p-[12px] flex justify-center items-center">
              <h3 className="text-[12px] md:text-lg text-primary">
              Cryptocurrency API
              </h3>
            </div>

            <div className="border-2 rounded-xl p-[7px] md:p-[12px] flex justify-center items-center">
              <h3 className="text-[12px] md:text-lg text-primary">
              Health & Wellness API
              </h3>
            </div>
            
            <div className="border-2 rounded-xl p-[7px] md:p-[12px] flex justify-center items-center">
              <h3 className="text-[12px] md:text-lg text-primary">
              Fun and Games API
              </h3>
            </div>

            <div className="border-2 rounded-xl p-[7px] md:p-[12px] flex justify-center items-center">
              <h3 className="text-[12px] md:text-lg text-primary">
              Natural Language API
              </h3>
            </div>


            <div className="border-2 rounded-xl p-[7px] md:p-[12px] flex justify-center items-center">
              <h3 className="text-[12px] md:text-lg text-primary">
               AI API
              </h3>
            </div>

            <div className="border-2 rounded-xl p-[7px] md:p-[12px] flex justify-center items-center">
              <h3 className="text-[12px] md:text-lg text-primary">
              Education API
              </h3>
            </div>

            <div className="border-2 rounded-xl p-[7px] md:p-[12px] flex justify-center items-center">
              <h3 className="text-[12px] md:text-lg text-primary">
              Miscellaneous API
              </h3>
            </div>

            <div className="border-2 rounded-xl p-[7px] md:p-[12px] flex justify-center items-center">
              <h3 className="text-[12px] md:text-lg text-primary">
              News API
              </h3>
            </div>
            <div className="border-2 rounded-xl p-[7px] md:p-[12px] flex justify-center items-center">
              <h3 className="text-[12px] md:text-lg text-primary">
              Fun API
              </h3>
            </div>

            <div className="border-2 rounded-xl p-[7px] md:p-[12px] flex justify-center items-center">
              <h3 className="text-[12px] md:text-lg text-primary">
              Random API
              </h3>
            </div>

          </div>
          <div className="flex justify-center items-center mt-10">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 group bg-gray-900 hover:bg-gray-950 transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-gray-900 w-fit m-auto">
              <span className="text-white">Know More</span>
              <span className="flex items-center ml-3 text-[#fff] group-hover:text-yellow-500 transition-colors duration-200 ease-in-out">
                <MoveRight strokeWidth={1} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default APICategories;
