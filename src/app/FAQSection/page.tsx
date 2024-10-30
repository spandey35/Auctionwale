// import { About } from "../../components/component/about";
// const abousection= () => {
//     return (
//         <>
//     <About />
//         </>
//     )
// }
// export default abousection;
import { FAQ } from "@/components/component/FAQ";


import { Metadata } from "next";

export const metadata: Metadata = {
    title: "F&Q Section",
    description: "This is F&Q Section for auctionwale",
    // other metadata
  };
  const AboutSection = () => {
    return (
        <>
        <div className="pt-20">
        <FAQ />
        </div>
        
        
        </>
    );
}

export default FAQ;