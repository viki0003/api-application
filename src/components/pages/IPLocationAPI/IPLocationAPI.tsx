import { IPGeolocationProvider } from "@/src/APIHooks/IPLocationContext";
import MainSection from "../../global-components/MainSection";
import DataSection from "./DataSection";

const IPLocationAPI = () => {
  return (
    <IPGeolocationProvider>
      <MainSection header="IP Location API" paragraph="Know what is your Ip Geo Location below" />
      <DataSection />
    </IPGeolocationProvider>
  );
};

export default IPLocationAPI;
