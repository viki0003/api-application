"use client";

import { useWeatherAPI } from "@/src/APIHooks/OpenWeatherAPIContext";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
import MainSection from "../../global-components/MainSection";

const FetchWeather = () => {
  const { weatherData, loading, error, fetchWeather } = useWeatherAPI();
  const [city, setCity] = useState<string>("");

  const handleFetch = () => {
    fetchWeather(city);
  };

  return (
    <>
      <MainSection
        header="Weather API"
        paragraph="OpenWeather is a team of IT experts and data scientists that has been practising deep weather data science. For each point on the globe, OpenWeather provides historical, current and forecasted weather data via light-speed APIs. Headquarters in London, UK."
      />
      <div className="max-w-container mx-auto pt-20">
        <div className="flex items-center justify-center gap-2 mb-20">
          <div className="border-2 border-[#263238] py-2 px-2 inline-flex gap-5 justify-between rounded-sm">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city name"
            />
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 group bg-gray-900 hover:bg-gray-950 transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-gray-900 w-fit m-auto"
              onClick={handleFetch}
            >
              <span className="text-white">Get Weather</span>
              <span className="flex items-center ml-3 text-[#fff] group-hover:text-yellow-500 transition-colors duration-200 ease-in-out">
                <SearchIcon strokeWidth={1} />
              </span>
            </button>
          </div>
        </div>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {weatherData && (
          <div className="my-20">
            <div className="max-w-[400px] group hover:-rotate-0  duration-500 overflow-hidden bg-gradient-to-bl from-sky-400 via-sky-500 to-sky-700 p-6 rounded-lg hover:shadow-lg [box-shadow:12px_12px_0px_0px_#0d0d0d] backdrop-filter backdrop-blur-md border border-neutral-600">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    {weatherData.name}, {weatherData.sys.country}
                  </h2>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48px"
                  height="48px"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="absolute -top-2 -right-2 w-12 h-12 stroke-yellow-300"
                >
                  <path
                    d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                    stroke=""
                    strokeWidth="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="mt-4">
                <p className="text-4xl font-bold text-white">
                  {weatherData.main.temp}°C
                </p>
                <div className="flex items-center justify-between gap-1 mt-3">
                  <span className="mr-2 text-neutral-800">Feels Like</span>
                  <span className="text-white">
                    {weatherData.main.feels_like}°C
                  </span>
                </div>
                <div className="flex items-center justify-between gap-1">
                  <span className="text-neutral-800">Wind Speed</span>
                  <span className="text-white">
                    {weatherData.wind.speed} m/s
                  </span>
                </div>
                <div className="flex items-center justify-between gap-1">
                  <span className="text-neutral-800">Condition</span>
                  <span className="text-white">
                    {weatherData.weather[0].description}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-start gap-10">
          <div>
            <h4>Create Context For API Fetch</h4>
            <iframe
              src="https://carbon.now.sh/embed?bg=rgba%2874%2C144%2C226%2C1%29&t=material&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=true&fl=1&fm=Fira+Code&fs=10px&lh=147%25&si=false&es=2x&wm=false&code=%27use%2520client%27%250A%250Aimport%2520React%252C%2520%257B%2520createContext%252C%2520useContext%252C%2520useState%2520%257D%2520from%2520%27react%27%250Aimport%2520axios%2520from%2520%27axios%27%250A%250A%252F%252F%2520Define%2520the%2520data%2520type%2520for%2520weather%2520data%250Atype%2520WeatherData%2520%253D%2520%257B%250A%2520%2520main%253A%2520%257B%250A%2520%2520%2520%2520temp%253A%2520number%252C%250A%2520%2520%2520%2520feels_like%253A%2520number%252C%250A%2520%2520%2520%2520temp_min%253A%2520number%252C%250A%2520%2520%2520%2520temp_max%253A%2520number%252C%250A%2520%2520%2520%2520pressure%253A%2520number%252C%250A%2520%2520%2520%2520humidity%253A%2520number%252C%250A%2520%2520%257D%252C%250A%2520%2520weather%253A%2520%257B%2520description%253A%2520string%252C%2520icon%253A%2520string%2520%257D%255B%255D%252C%250A%2520%2520wind%253A%2520%257B%2520speed%253A%2520number%2520%257D%252C%250A%2520%2520name%253A%2520string%252C%250A%2520%2520sys%253A%2520%257B%2520country%253A%2520string%2520%257D%252C%250A%257D%250A%250A%252F%252F%2520Context%2520type%250Ainterface%2520WeatherAPIContextType%2520%257B%250A%2520%2520weatherData%253A%2520WeatherData%2520%257C%2520null%253B%250A%2520%2520loading%253A%2520boolean%253B%250A%2520%2520error%253A%2520string%2520%257C%2520null%253B%250A%2520%2520fetchWeather%253A%2520%28city%253A%2520string%29%2520%253D%253E%2520void%253B%250A%257D%250A%250A%252F%252F%2520Create%2520the%2520context%250Aconst%2520WeatherAPIContext%2520%253D%250A%2520%2520%28createContext%2520%253C%2520WeatherAPIContextType%29%2520%257C%2520%28undefined%2520%253E%2520undefined%29%250A%250A%252F%252F%2520Provider%2520component%250Aexport%2520const%2520WeatherAPIProvider%253A%2520React.FC%253C%257B%2520children%253A%2520React.ReactNode%2520%257D%253E%2520%253D%2520%28%257B%250A%2520%2520children%252C%250A%257D%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%255BweatherData%252C%2520setWeatherData%255D%2520%253D%2520%28useState%2520%253C%2520WeatherData%29%2520%257C%2520%28null%2520%253E%2520null%29%250A%2520%2520const%2520%255Bloading%252C%2520setLoading%255D%2520%253D%2520useState%2520%253C%2520boolean%2520%253E%2520false%250A%2520%2520const%2520%255Berror%252C%2520setError%255D%2520%253D%2520%28useState%2520%253C%2520string%29%2520%257C%2520%28null%2520%253E%2520null%29%250A%250A%2520%2520const%2520fetchWeather%2520%253D%2520async%2520%28city%253A%2520string%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520setLoading%28true%29%250A%2520%2520%2520%2520setError%28null%29%250A%2520%2520%2520%2520try%2520%257B%250A%2520%2520%2520%2520%2520%2520const%2520response%2520%253D%2520await%2520axios.get%28%250A%2520%2520%2520%2520%2520%2520%2520%2520%27https%253A%252F%252Fapi.openweathermap.org%252Fdata%252F2.5%252Fweather%27%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520params%253A%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520q%253A%2520city%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520units%253A%2520%27metric%27%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520appid%253A%2520%27Replace%2520with%2520your%2520API%2520key%27%252C%2520%252F%252F%2520Replace%2520with%2520your%2520API%2520key%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%29%250A%2520%2520%2520%2520%2520%2520setWeatherData%28response.data%29%250A%2520%2520%2520%2520%257D%2520catch%2520%28err%29%2520%257B%250A%2520%2520%2520%2520%2520%2520console.error%28%27An%2520error%2520occurred%253A%27%252C%2520err%29%2520%252F%252F%2520Logs%2520the%2520error%250A%2520%2520%2520%2520%2520%2520setError%28%27Failed%2520to%2520fetch%2520weather%2520data.%27%29%250A%2520%2520%2520%2520%257D%2520finally%2520%257B%250A%2520%2520%2520%2520%2520%2520setLoading%28false%29%250A%2520%2520%2520%2520%257D%250A%2520%2520%257D%250A%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253CWeatherAPIContext.Provider%250A%2520%2520%2520%2520%2520%2520value%253D%257B%257B%2520weatherData%252C%2520loading%252C%2520error%252C%2520fetchWeather%2520%257D%257D%250A%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%257Bchildren%257D%250A%2520%2520%2520%2520%253C%252FWeatherAPIContext.Provider%253E%250A%2520%2520%29%250A%257D%250A%250A%252F%252F%2520Hook%2520to%2520use%2520the%2520Weather%2520API%2520context%250Aexport%2520const%2520useWeatherAPI%2520%253D%2520%28%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520context%2520%253D%2520useContext%28WeatherAPIContext%29%250A%2520%2520if%2520%28context%2520%253D%253D%253D%2520undefined%29%2520%257B%250A%2520%2520%2520%2520throw%2520new%2520Error%28%27useWeatherAPI%2520must%2520be%2520used%2520within%2520a%2520WeatherAPIProvider%27%29%250A%2520%2520%257D%250A%2520%2520return%2520context%250A%257D%250A"
              className="w-[450px] h-[500px] border-0 overflow-hidden"
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
          </div>
          <div>
            <h4>Fetch the API data in component</h4>
            <iframe
              src="https://carbon.now.sh/embed?bg=rgba%2874%2C144%2C226%2C1%29&t=material&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=true&fl=1&fm=Fira+Code&fs=11.5px&lh=156%25&si=false&es=2x&wm=false&code=%27use%2520client%27%250A%250Aimport%2520%257B%2520useWeatherAPI%2520%257D%2520from%2520%27%2540%252Fsrc%252FAPIHooks%252FOpenWeatherAPIContext%27%250Aimport%2520%257B%2520SearchIcon%2520%257D%2520from%2520%27lucide-react%27%250Aimport%2520%257B%2520useState%2520%257D%2520from%2520%27react%27%250A%250Aconst%2520FetchWeather%2520%253D%2520%28%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257B%2520weatherData%252C%2520loading%252C%2520error%252C%2520fetchWeather%2520%257D%2520%253D%2520useWeatherAPI%28%29%250A%2520%2520const%2520%255Bcity%252C%2520setCity%255D%2520%253D%2520useState%2520%253C%2520string%2520%253E%2520%27%27%250A%250A%2520%2520const%2520handleFetch%2520%253D%2520%28%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520fetchWeather%28city%29%250A%2520%2520%257D%250A%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522max-w-container%2520mx-auto%2520pt-20%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Ch1%2520className%253D%2522text-%255B48px%255D%2520font-bold%2520text-center%2520pb-10%2522%253EWeather%2520API%253C%252Fh1%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522flex%2520items-center%2520justify-center%2520gap-2%2520mb-10%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522border-2%2520border-%255B%2523263238%255D%2520py-2%2520px-2%2520inline-flex%2520gap-5%2520justify-between%2520rounded-sm%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520type%253D%2522text%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520value%253D%257Bcity%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520onChange%253D%257B%28e%29%2520%253D%253E%2520setCity%28e.target.value%29%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520placeholder%253D%2522Enter%2520city%2520name%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520className%253D%2522inline-flex%2520items-center%2520justify-center%2520whitespace-nowrap%2520rounded-md%2520text-sm%2520font-medium%2520ring-offset-background%2520focus-visible%253Aoutline-none%2520focus-visible%253Aring-2%2520focus-visible%253Aring-ring%2520focus-visible%253Aring-offset-2%2520disabled%253Apointer-events-none%2520disabled%253Aopacity-50%2520h-10%2520px-4%2520py-2%2520group%2520bg-gray-900%2520hover%253Abg-gray-950%2520transition-all%2520duration-200%2520ease-in-out%2520hover%253Aring-2%2520hover%253Aring-offset-2%2520hover%253Aring-gray-900%2520w-fit%2520m-auto%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520onClick%253D%257BhandleFetch%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520className%253D%2522text-white%2522%253EGet%2520Weather%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520className%253D%2522flex%2520items-center%2520ml-3%2520text-%255B%2523fff%255D%2520group-hover%253Atext-yellow-500%2520transition-colors%2520duration-200%2520ease-in-out%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253CSearchIcon%2520strokeWidth%253D%257B1%257D%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%257Bloading%2520%2526%2526%2520%253Cp%253ELoading...%253C%252Fp%253E%257D%250A%2520%2520%2520%2520%2520%2520%257Berror%2520%2526%2526%2520%253Cp%253E%257Berror%257D%253C%252Fp%253E%257D%250A%2520%2520%2520%2520%2520%2520%257BweatherData%2520%2526%2526%2520%28%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522my-20%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522max-w-%255B400px%255D%2520group%2520hover%253A-rotate-0%2520%2520duration-500%2520overflow-hidden%2520bg-gradient-to-bl%2520from-sky-400%2520via-sky-500%2520to-sky-700%2520p-6%2520rounded-lg%2520hover%253Ashadow-lg%2520%255Bbox-shadow%253A12px_12px"
              className="w-[450px] h-[500px] border-0 overflow-hidden"
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default FetchWeather;
