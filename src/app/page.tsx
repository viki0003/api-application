// import { ModeToggle } from "@/components/ui/ModeToggle";

import ApiBlock from "@/src/components/pages/Home/ApiBlock";
import BannerSection from "@/src//components/pages/Home/BannerSection";
import { CryptoProvider } from "@/src/APIHooks/CryptoContext";
import { NewsProvider } from "@/src/APIHooks/NewsContext";
import { PokemonProvider } from "@/src/APIHooks/PokemonContext";
import { CatApiProvider } from "@/src/APIHooks/CatApiContext";
import { TriviaApiProvider } from "@/src/APIHooks/TriviaApiContext";
import { DogApiProvider } from "../APIHooks/DogApiContext";
import APICategories from "../components/pages/Home/ApiCategories";
import APICarousel from "../components/pages/Home/APICarousel";

export default function Home() {
  return (
    //  <ModeToggle/>
    <>
      <DogApiProvider>
        <TriviaApiProvider>
          <CatApiProvider>
            <PokemonProvider>
              <NewsProvider>
                <CryptoProvider>
                  <BannerSection />
                  <ApiBlock />
                  <APICategories/>
                  <APICarousel/>
                </CryptoProvider>
              </NewsProvider>
            </PokemonProvider>
          </CatApiProvider>
        </TriviaApiProvider>
      </DogApiProvider>
    </>
  );
}
