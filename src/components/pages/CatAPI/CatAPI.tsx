import MainSection from "../../global-components/MainSection";
import { CatApiProvider } from "@/src/APIHooks/CatApiContext";
import DataSection from "./DataSection";

const CatAPI: React.FC = () => {
  return (
    <CatApiProvider>
      <MainSection
        header="Cat API"
        paragraph="The Cat API provides a collection of adorable cat images sourced from around the web. It’s perfect for projects that need a dose of feline charm, offering easy access to random cat pictures and various image sizes."
      />
      <DataSection/>
    </CatApiProvider>
  );
};

export default CatAPI;
