import PropertiesList from "@/components/PropertyCard";
import  ExploreProperty  from "@/components/PropertySearch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property Page",
  description: "This is Property Page for auctionwale",
  // other metadata
};

const PropertyPage = () => {
    return (
        <>
        <div className="pt-20">
        <PropertiesList />
        </div>
        
        
        </>
    );
}

export default PropertyPage;