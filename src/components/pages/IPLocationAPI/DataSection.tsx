"use client";

import React from "react";
import { useIPGeolocation } from "@/src/APIHooks/IPLocationContext";

const DataSection: React.FC = () => {
  const { ipData, error, loading } = useIPGeolocation();

  if (loading) {
    return <div className="text-center py-10 text-blue-500 text-xl font-semibold">Loading IP data...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500 text-xl font-semibold">Error: {error}</div>;
  }

  return (
    <div className="max-w-container mx-auto pt-32 px-4 py-8">
      {ipData ? (
        <div className="bg-orange-200 p-6 rounded-md border border-orange-400 flex flex-col items-start justify-between mx-auto w-fit">
          <div className="w-full flex justify-center items-center">
            <p className="text-left mb-4 py-2 px-5 border-2 border-black rounded-xl shadow-large bg-yellow-200 text-[16px] font-semibold text-gray-800">
              IP: <span className="text-[#1A2562]">{ipData.ip}</span>
            </p>
          </div>
          <ul className="text-lg text-gray-700 space-y-3">
            <li>
              <span className="font-medium text-gray-900">City:</span> {ipData.city}
            </li>
            <li>
              <span className="font-medium text-gray-900">Region:</span> {ipData.region}
            </li>
            <li>
              <span className="font-medium text-gray-900">Country:</span> {ipData.country}
            </li>
            <li>
              <span className="font-medium text-gray-900">Network:</span> {ipData.network}
            </li>
            <li>
              <span className="font-medium text-gray-900">Version:</span> {ipData.version}
            </li>
            <li>
              <span className="font-medium text-gray-900">Region Code:</span> {ipData.region_code}
            </li>
            <li>
              <span className="font-medium text-gray-900">Country Name:</span> {ipData.country_name}
            </li>
            <li>
              <span className="font-medium text-gray-900">Country Capital:</span> {ipData.country_capital}
            </li>
            <li>
              <span className="font-medium text-gray-900">Latitude:</span> {ipData.latitude}
            </li>
            <li>
              <span className="font-medium text-gray-900">Longitude:</span> {ipData.longitude}
            </li>
            <li>
              <span className="font-medium text-gray-900">Timezone:</span> {ipData.timezone}
            </li>
            <li>
              <span className="font-medium text-gray-900">Currency:</span> {ipData.currency}
            </li>
            <li>
              <span className="font-medium text-gray-900">Telecom Operator:</span> {ipData.org}
            </li>
           
          </ul>
        </div>
      ) : (
        <div className="text-center py-4 text-gray-500">No data available</div>
      )}
    </div>
  );
};

export default DataSection;
