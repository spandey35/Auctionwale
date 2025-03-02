import React from "react";

const Cities = () => {
  return (
    <>
      <div className="mb-20 mt-20">
        <h2 className="mb-[80px] text-center text-4xl font-bold">
          We are available in many well-known cities
        </h2>
        <div className="flex w-full flex-wrap items-start justify-start gap-4">
          <a href="" className="flex-1">
            <div
              className="relative h-72 w-full bg-cover bg-center"
              style={{ backgroundImage: "url('/images/hero/andheri.jpg')" }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <p className="text-lg text-white">Mumbai</p>
              </div>
            </div>
          </a>
          <a href="" className="flex-1">
            <div
              className="relative h-72 w-full bg-cover bg-center"
              style={{ backgroundImage: "url('/images/hero/bandra.jpg')" }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <p className="text-lg text-white">Palghar</p>
              </div>
            </div>
          </a>
          <a href="" className="flex-1">
            <div
              className="relative h-72 w-full bg-cover bg-center"
              style={{ backgroundImage: "url('/images/hero/chembur.jpg')" }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <p className="text-lg text-white">Navi Mumbai</p>
              </div>
            </div>
          </a>
          <a href="" className="flex-1">
            <div
              className="relative h-72 w-full bg-cover bg-center"
              style={{ backgroundImage: "url('/images/hero/juhu.jpg')" }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <p className="text-lg text-white">Thane</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Cities;
