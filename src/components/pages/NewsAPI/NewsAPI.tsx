import MainSection from "../../global-components/MainSection";
import DataSection from "./DataSection";
import { NewsProvider } from "@/src/APIHooks/NewsContext";

const NewsAPI = () => {
  return (
    <NewsProvider>
      <MainSection
        header="News API"
        paragraph="Locate articles and breaking news headlines from news sources and blogs across the web with JSON API"
      />
      <DataSection />
    </NewsProvider>
  );
};

export default NewsAPI;
