"use client";
import React from 'react';
import PropertyData from './propertData';
import property from "property.json";

const PropertiesList = () => {
  const formatPrice = (price) => {
    if (price >= 10000000) {
      return (price / 10000000).toFixed(2) + " crore";
    } else if (price >= 100000) {
      return (price / 100000).toFixed(2) + " lakh";
    } else {
      return price.toString();
    }
  };

  return (
    <>
      <div>
        <h1 className="text-4xl text-center font-bold mt-8">Recently Added Properties</h1>
      </div>
      <div className="w-full justify-center items-center flex flex-wrap p-12 gap-8">
        {property.map((property) => {
          const { ID, Image_Url, Property_Type, Property_Address, Current_Auction_Reserve_Price } = property;

          // Check if any required field is missing or invalid
          if (
            !ID ||
            !Property_Type ||
            Property_Type.toLowerCase() === "link" ||
            !Property_Address ||
            Property_Address.toLowerCase() === "link" ||
            !Current_Auction_Reserve_Price ||
            isNaN(Current_Auction_Reserve_Price) ||
            Current_Auction_Reserve_Price <= 0
          ) {
            return null;
          }

          return (
            <PropertyData
              key={ID}
              imageUrl={Image_Url}
              name={Property_Type}
              location={Property_Address}
              price={formatPrice(Current_Auction_Reserve_Price)}
            />
          );
        })}
      </div>
    </>
  );
};

export default PropertiesList;
