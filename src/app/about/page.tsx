// import { About } from "../../components/component/about";
// const abousection= () => {
//     return (
//         <>
//     <About />
//         </>
//     )
// }
// export default abousection;
import { About } from "@/components/component/About";


import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Page",
    description: "This is About Page for auctionwale",
    // other metadata
  };
  const AboutSection = () => {
    return (
        <>
        <div className="pt-20">
        <About />
        </div>
        
        
        </>
    );
}

export default AboutSection;