"use client";
import React from "react";
import PropertyData from "./propertData";
import property from "property.json";
import "@/styles/index.css";
import Slider from "react-slick";

// Function to format price
const formatPrice = (price) => {
  if (price >= 10000000) {
    return (price / 10000000).toFixed(2) + " crore";
  } else if (price >= 100000) {
    return (price / 100000).toFixed(2) + " lakh";
  } else {
    return price.toString();
  }
};

// Carousel settings
const PropertiesList = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3, // Default: Show 3 slides on desktop
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablets (below 1024px)
        settings: {
          slidesToShow: 2, // Show 2 slides on tablets
        },
      },
      {
        breakpoint: 640, // Mobile (below 640px)
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
        },
      },
    ],
  };

  return (
    <div className="relative w-full px-4 py-6 sm:px-8 sm:py-10 md:px-12 lg:px-16">
      <h1 className="text-center text-2xl font-bold sm:text-3xl md:text-4xl">
        Recently Added Properties
      </h1>

      {/* Centered & Larger Container */}
      <div className="relative mx-auto mt-6 w-full max-w-screen-xl">
        <Slider {...settings} className="px-4 sm:px-6">
          {property.map((property) => {
            const {
              ID,
              Image_Url,
              Property_Type,
              Property_Address,
              Current_Auction_Reserve_Price,
            } = property;

            // Validation to skip invalid data
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
              <div key={ID} className="flex justify-center">
                <div className="w-full max-w-xl p-4 sm:max-w-xl sm:p-6">
                  <PropertyData
                    imageUrl={Image_Url}
                    name={Property_Type}
                    location={Property_Address}
                    price={formatPrice(Current_Auction_Reserve_Price)}
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default PropertiesList;
