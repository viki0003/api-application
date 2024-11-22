"use client";

import React from "react";
import { useCatApi } from "@/src/APIHooks/CatApiContext";
import Image from "next/image";

const DataSection: React.FC = () => {
  const { catData, error, loading, cattotalItems } = useCatApi();

  if (loading) return <div>Loading...</div>; // Show loader
  if (error) return <div>Error: {error}</div>; // Show error

  return (
    <div className="w-full max-w-container mx-auto pt-20">
      <h1>Total Cats: {cattotalItems}</h1>
      <div className="mt-5">
        {catData.map((cat) => (
          <div key={cat.id}>
            <Image
              src={cat.url}
              alt={`Cat ${cat.id}`}
              className="rounded shadow-md w-full h-[250px] lg:h-[600px] object-cover"
              width={1024}
              height={600}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataSection;
