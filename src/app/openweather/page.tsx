import { WeatherAPIProvider } from "@/src/APIHooks/OpenWeatherAPIContext";
import FetchWeather from "@/src/components/pages/WeatherAPI/FetchWeather";


// Define the page component with the correct type for props
const OpenWeather = () => {
    return (
        <WeatherAPIProvider>
            <FetchWeather />
        </WeatherAPIProvider>
    );
}

export default OpenWeather;
