"use client";

import React from "react";
import { useCryptoApi } from "@/src/APIHooks/CryptoContext"; // Import the custom hook to use the context
import Loader from "@/src/components/global-components/Loader"; // Assuming you have a Loader component for loading state
import Image from "next/image";

const DataSection = () => {
  // Destructure context values using the custom hook
  const { cryptos, loading, error, CryptototalItems } = useCryptoApi();

  if (loading) return <Loader />; // Show loader while data is being fetched
  if (error) return <div>Error: {error}</div>; // Show error if there is any

  return (
    <div className="data-section py-6">
      <div className="container mx-auto px-4">
        <div className="section-title mb-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            Cryptocurrency Prices
          </h2>
          <p>Total Cryptos: {CryptototalItems}</p>
        </div>

        <div className="data-card bg-white shadow-md rounded-lg p-6">
          <div className="data-card-layout flex flex-col">
            <div className="dc-table overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 text-left font-semibold text-sm">
                      Rank
                    </th>
                    <th className="py-3 px-4 text-left font-semibold text-sm">
                      Name
                    </th>
                    <th className="py-3 px-4 text-left font-semibold text-sm">
                      Current Price (INR)
                    </th>
                    <th className="py-3 px-4 text-left font-semibold text-sm">
                      Market Cap
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cryptos.map((crypto, index) => (
                    <tr key={crypto.id} className="border-t">
                      <td className="py-3 px-4 text-sm">{index + 1}</td>
                      <td className="py-3 px-4 text-sm flex items-center">
                        <Image
                          src={crypto.image}
                          alt={crypto.name}
                          width={30}
                          height={30}
                          className="mr-2"
                        />
                        {crypto.name}
                      </td>
                      <td className="py-3 px-4 text-sm">
                        {crypto.current_price.toLocaleString()}
                      </td>
                      <td className="py-3 px-4 text-sm">
                        {crypto.market_cap.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataSection;
