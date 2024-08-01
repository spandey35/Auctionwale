"use client";
import React, { useState } from "react";
import { ExploreProperty } from "../component/ExploreProperty";
import PropertyData from "../PropertyCard/propertData";
import property from "property.json";

const PropertySearch = () => {
  const [searchCriteria, setSearchCriteria] = useState({
    city: "",
    locality: "",
    propertyType: "",
    budget: ""
  });

  const [filter, setFilter] = useState(searchCriteria);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria({ ...searchCriteria, [name]: value });
  };

  const handleSearchClick = () => {
    setFilter(searchCriteria);
  };

  const formatPrice = (price) => {
    if (price >= 10000000) {
      return (price / 10000000).toFixed(2) + " crore";
    } else if (price >= 100000) {
      return (price / 100000).toFixed(2) + " lakh";
    } else {
      return price.toString();
    }
  };

  const parseBudget = (budget) => {
    // Remove commas and convert to lowercase
    budget = budget.replace(/,/g, "").toLowerCase();

    // Parse the numeric part and the unit
    const numberPattern = /[\d.]+/g;
    const textPattern = /[a-z]+/g;
    const number = parseFloat(budget.match(numberPattern)?.[0]);
    const unit = budget.match(textPattern)?.[0];

    if (isNaN(number)) return 0; // Return 0 if the number is invalid

    switch (unit) {
      case "lakh":
        return number * 100000;
      case "crore":
      case "cr":
        return number * 10000000;
      default:
        return number; // If no unit is provided, assume it's already in rupees
    }
  };

  const filteredProperties = property.filter((p) => {
    const addressIncludes = (searchString) =>
      p.Property_Address.toLowerCase().includes(searchString.toLowerCase());

    // Check for valid property details
    const isValidProperty = (
      p.ID &&
      p.Property_Type &&
      p.Property_Type.toLowerCase() !== "link" &&
      p.Property_Address &&
      p.Property_Address.toLowerCase() !== "link" &&
      !isNaN(p.Current_Auction_Reserve_Price) &&
      p.Current_Auction_Reserve_Price > 0
    );

    // Check if budget criteria is met
    const isWithinBudget = () => {
      if (filter.budget === "") return true;
      const budgetValue = parseBudget(filter.budget);
      return p.Current_Auction_Reserve_Price <= budgetValue;
    };

    return (
      isValidProperty &&
      (filter.city === "" || addressIncludes(filter.city)) &&
      (filter.locality === "" || addressIncludes(filter.locality)) &&
      (filter.propertyType === "" || p.Property_Type.toLowerCase().includes(filter.propertyType.toLowerCase())) &&
      isWithinBudget()
    );
  });

  return (
    <>
      <ExploreProperty onInputChange={handleInputChange} onSearchClick={handleSearchClick} />
      <div className="container flex flex-wrap p-12 gap-8">
        {filteredProperties.map((property) => (
          <PropertyData
            key={property.ID}
            imageUrl={property.Image_Url}
            name={property.Property_Type}
            location={property.Property_Address}
            price={formatPrice(property.Current_Auction_Reserve_Price)}
          />
        ))}
      </div>
    </>
  );
};

export default PropertySearch;
