"use client";

import React from "react";
import Link from "next/link";
import MotionGraphic from "@/src/Assets/Icons/MotionGraphic";
import LongArrow from "@/src/Assets/Icons/LongArrow";
import { useCryptoApi } from "@/src/APIHooks/CryptoContext";
import { useNewsApi } from "@/src/APIHooks/NewsContext";
import { usePokemonApi } from "@/src/APIHooks/PokemonContext";
import { useCatApi } from "@/src/APIHooks/CatApiContext";
import { useTriviaApi } from "@/src/APIHooks/TriviaApiContext";
import { useDogApi } from "@/src/APIHooks/DogApiContext"

const truncateText = (text: string, charLimit: number): string => {
  return text.length > charLimit ? text.slice(0, charLimit) + "..." : text;
};

const ApiGrid: React.FC = () => {
  const { CryptototalItems } = useCryptoApi();
  const { NewstotalItems } = useNewsApi();
  const { PoketotalItems } = usePokemonApi();
  const { cattotalItems } = useCatApi();
  const { totalItems } = useTriviaApi();
  const { dogTotalItems } = useDogApi();


  const apiData = [
    {
      id: 1,
      title: "News API",
      para: "Locate articles and breaking news headlines from news sources and blogs across the web with JSON API",
      link: "/newsapi",
      dataAvailable: NewstotalItems,
      type: "News",
    },
    {
      id: 2,
      title: "Pokemon API",
      para: "PokéAPI is free and open to use. It is also very popular. Because of this, we ask every developer to abide by our fair use policy.",
      link: "/pokemonapi",
      dataAvailable: PoketotalItems,
      type: "Cartoons",
    },
    {
      id: 3,
      title: "Crypto API",
      para: "This API is free and provides the extensive way of comprehensive data about cryptocurrencies. The component will display a list of cryptocurrencies",
      link: "/cryptoapi",
      dataAvailable: CryptototalItems,
      type: "Data",
    },
    {
      id: 4,
      title: "Cat API",
      para: " The Cat API provides a collection of adorable cat images sourced from around the web. It’s perfect for projects that need a dose of feline charm, offering easy access to random cat pictures and various image sizes.",
      link: "/catapi",
      dataAvailable: cattotalItems,
      type: "Data",
    },
    {
      id: 4,
      title: "Trivia API",
      para: "The Trivia API, powered by Open Trivia Database, offers a vast array of trivia questions across multiple categories and difficulty levels. With options for multiple-choice and true/false formats, its a great resource for quiz applications, educational tools, and interactive games.",
      link: "/triviaapi",
      dataAvailable: totalItems,
      type: "Data",
    },
    {
      id: 5,
      title: "Dog API",
      para: "Do you care about accessing free images of dogs on the internet? Do you want your dog pictures to be served at lightning fast speed with 99.999% uptime? Do you care about DaaS (Dogs as a Service)? Help us pay our hosting bills and ensure that Dog API stays free to access and use for everyone. We'll even gift you an executive business tie for your pet (or small child) to say thanks.",
      link: "/dogapi",
      dataAvailable: dogTotalItems,
      type: "Data",
    },
    {
      id: 6,
      title: "Open Weather API",
      para: "OpenWeather is a team of IT experts and data scientists that has been practising deep weather data science. For each point on the globe, OpenWeather provides historical, current and forecasted weather data via light-speed APIs. Headquarters in London, UK.",
      link: "/openweather",
      dataAvailable: '1',
      type: "Data",
    },
    {
      id: 7,
      title: "IP Location API",
      para: "Know what is your Ip Geo Location by clicking to below Read More button",
      link: "/iplocationapi",
      dataAvailable: '1',
      type: "Data",
    },
  ];

  return (
    <>
      {apiData.map((api) => (
        <div key={api.id} className="p-4 border-2 rounded-md api-card">
          <div className="flex items-center gap-2 mb-3">
            <span className="svg-block w-[35px] h-[35px]">
              <MotionGraphic />
            </span>
            <h4>{api.title}</h4>
          </div>
          <div>
            <p>{truncateText(api.para, 80)}</p>
          </div>
          <div className="block-footer flex items-center justify-between mt-4">
            <span className="text-[12px] font-bold text-[#0b0b5a] bg-[#0b0b5a12] px-[10px] py-[5px] rounded-sm border-2 border-solid border-[#0b0b5a52]">
              {api.dataAvailable} Data Available
            </span>
            <Link
              href={api.link}
              target="_blank"
              className="flex items-center gap-2 text-sm font-semibold text-[#474747]"
            >
              Read More
              <span className="w-[35px]">
                <LongArrow />
              </span>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default ApiGrid;
