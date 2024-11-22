"use client";

import React from "react";
import { useDogApi } from "@/src/APIHooks/DogApiContext";
import Image from "next/image";
import { RefreshCcw } from "lucide-react";

const DataSection: React.FC = () => {
  const { dogImages, loading, error } = useDogApi();

  // Reload the page to fetch new images
  const reloadImages = () => {
    window.location.reload();
  };

  if (loading) return <div className="text-center py-10">Loading dog images...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;

  return (
    <div className="max-w-container mx-auto px-4 py-8 pt-20">
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dogImages.map((image) => (
          <div
            key={image.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={image.url}
              alt={image.breeds?.[0]?.name || "Dog"}
              className="w-full h-48 object-cover"
              width={150}
              height={150}
            />
          </div>
        ))}
      </div>
      <div className="text-center mt-8">

        <button   onClick={reloadImages} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 group bg-gray-900 hover:bg-gray-950 transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-gray-900 w-fit m-auto">
        <span className="flex items-center mr-3 text-[#fff] group-hover:text-yellow-500 transition-colors duration-200 ease-in-out">
                <RefreshCcw strokeWidth={1.3} size={18} />
              </span>
              <span className="text-white group-hover:text-yellow-500 transition-colors duration-200 ease-in-out">  Reload Images</span>
            </button>
      </div>
    </div>
  );
};

export default DataSection;
