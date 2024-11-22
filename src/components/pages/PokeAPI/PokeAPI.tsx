import { PokemonProvider } from "@/src/APIHooks/PokemonContext";
import MainSection from "../../global-components/MainSection";
import DataSection from "./DataSection";

const PokeAPI = () => {
  return (
    <>
      <PokemonProvider>
        <MainSection
          header="Pokemon API"
          paragraph="PokéAPI is free and open to use. It is also very popular. Because of this, we ask every developer to abide by our fair use policy."
        />
        <DataSection/>
      </PokemonProvider>
    </>
  );
};

export default PokeAPI;
