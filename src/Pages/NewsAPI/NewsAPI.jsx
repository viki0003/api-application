
import "./NewsAPI.css";
import MainSection from "./Components/MainSection";
import DataSection from "./Components/DataSection";
import NewsProvider from "../../APIHooks/NewsContext";

const NewsAPI = () => {

    return (
        <>
            <NewsProvider>
                <MainSection />
                <DataSection />
            </NewsProvider>
        </>
    );
};

export default NewsAPI;
