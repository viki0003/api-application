import MainSection from "../../global-components/MainSection";
import DataSection from "./DataSection";
import { TriviaApiProvider } from "@/src/APIHooks/TriviaApiContext";

const TriviaAPI = () => {
  return (
    <TriviaApiProvider>
      <MainSection header="Trivia API" paragraph="para" />
      <DataSection />
    </TriviaApiProvider>
  );
};

export default TriviaAPI;
