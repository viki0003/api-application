import MainSection from "../../global-components/MainSection";
import { DogApiProvider } from "@/src/APIHooks/DogApiContext";
import DataSection from "./DataSection";
const DogAPI = () => {
  return (
    <DogApiProvider>
      <MainSection
        header="Dog API"
        paragraph="Do you care about accessing free images of dogs on the internet? Do you want your dog pictures to be served at lightning fast speed with 99.999% uptime? Do you care about DaaS (Dogs as a Service)? Help us pay our hosting bills and ensure that Dog API stays free to access and use for everyone."
      />

      <DataSection/>
    </DogApiProvider>
  );
};

export default DogAPI;
