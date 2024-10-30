import abousection from "@/app/about/page";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Cities from "@/components/Cities";
import PropertyCard from "@/components/PropertyCard";

import FAQSection from "@/components/FAQ";
import PropertySearch from "@/components/PropertySearch";

import Video from "@/components/Video";
import { Metadata } from "next";
import { About } from "@/components/component/About";
import WhatsAppIcon from "@/components/WhatsApp";

export const metadata: Metadata = {
  title: "Auctionwale",
  description: "This is Home for Auctionwale",
  // other metadata
};

export default function Home() {
  return (
    <>
     {/*<ScrollUp />*/}
      <Hero/>
      <PropertySearch/>
      <Cities />
      <PropertyCard />
      <Testimonials />
      <WhatsAppIcon/>
      {/*<FAQSection />
      <Contact />
      <About />*/}
      
      
    </>
  );
}
