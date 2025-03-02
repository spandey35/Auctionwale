"use client";
import React, { useState } from "react";
import { ExploreProperty } from "../component/ExploreProperty";
import PropertyData from "../PropertyCard/propertData";
import property from "property.json";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const PropertySearch = () => {
  const router = useRouter();
  const [searchCriteria, setSearchCriteria] = useState({
    city: "",
    locality: "",
    propertyType: "",
    budget: "",
  });

  const [filter, setFilter] = useState(searchCriteria);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchCriteria({ ...searchCriteria, [name]: value });
  };

  const handleSearchClick = () => {
    // Convert the filter criteria to URL parameters
    const params = new URLSearchParams();
    Object.entries(searchCriteria).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });

    // Navigate to the property page with search parameters
    router.push(`/property?${params.toString()}`);
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

  return (
    <ExploreProperty
      onInputChange={handleInputChange}
      onSearchClick={handleSearchClick}
    />
  );
};

export default PropertySearch;
