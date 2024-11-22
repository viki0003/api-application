import Marquee from "react-fast-marquee";

const BannerSection = () => {
  return (
    <div className="bg-gradient-to-r from-slate-100 to-rose-100 -mt-[100px]">
      <div className="container bg-image-main">
        <div className="flex flex-col gap-10 text-center max-w-[850px] m-auto pt-56">
          <h1 className="text-center text-[38px] leading-[53px]">
            Your Ultimate Gateway to Free APIs:
            <strong> Explore & Innovate!</strong>
          </h1>
          <p className="text-center">
            Welcome to your one-stop destination for free APIs! Our application
            offers an extensive library of APIs across various categories,
            complete with working models and ready-to-use code snippets.
          </p>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 group bg-gray-900 hover:bg-gray-950 transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-gray-900 w-fit m-auto">
            <svg
              className="mr-2 text-white"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            <span className="text-white">Star on Github</span>
            <span className="flex items-center ml-4 group-hover:text-yellow-500 transition-colors duration-200 ease-in-out">
              <svg
                className="text-yellow-500"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <span className="text-white ml-2">612</span>
            </span>
          </button>
        </div>
        <div className="pt-44 pb-5">
          <Marquee className="flex items-center gap-3">
            <div className="px-3 py-1 rounded-sm bg-white border border-1 border-[#E5E7EB]">
              Crypto API
            </div>
            <div className="px-3 py-1 rounded-sm bg-white border border-1 border-[#E5E7EB]">
              Stocks API
            </div>
            <div className="px-3 py-1 rounded-sm bg-white border border-1 border-[#E5E7EB]">
              Trivia API
            </div>
            <div className="px-3 py-1 rounded-sm bg-white border border-1 border-[#E5E7EB]">
              News API
            </div>
            <div className="px-3 py-1 rounded-sm bg-white border border-1 border-[#E5E7EB]">
              Pokemon API
            </div>
            <div className="px-3 py-1 rounded-sm bg-white border border-1 border-[#E5E7EB]">
              Cat API
            </div>
            <div className="px-3 py-1 rounded-sm bg-white border border-1 border-[#E5E7EB]">
              Dog API
            </div>
            <div className="px-3 py-1 rounded-sm bg-white border border-1 border-[#E5E7EB]">
              JSON API
            </div>
            <div className="px-3 py-1 rounded-sm bg-white border border-1 border-[#E5E7EB]">
              JSON API
            </div>
            <div className="px-3 py-1 rounded-sm bg-white border border-1 border-[#E5E7EB]">
              JSON API
            </div>
            <div className="px-3 py-1 rounded-sm bg-white border border-1 border-[#E5E7EB]">
              JSON API
            </div>
            <div className="px-3 py-1 rounded-sm bg-white border border-1 border-[#E5E7EB]">
              JSON API
            </div>
            <div className="px-3 py-1 rounded-sm bg-white border border-1 border-[#E5E7EB]">
              JSON API
            </div>
            <div className="px-3 py-1 rounded-sm bg-white border border-1 border-[#E5E7EB]">
              JSON API
            </div>
            <div className="px-3 py-1 rounded-sm bg-white border border-1 border-[#E5E7EB]">
              JSON API
            </div>
            <div className="px-3 py-1 rounded-sm bg-white border border-1 border-[#E5E7EB]">
              JSON API
            </div>
            <div className="px-3 py-1 rounded-sm bg-white border border-1 border-[#E5E7EB]">
              JSON API
            </div>
            <div className="px-3 py-1 rounded-sm bg-white border border-1 border-[#E5E7EB]">
              JSON API
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
