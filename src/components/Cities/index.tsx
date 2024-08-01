import React from 'react';

const Cities = () => {
  return (
    <div className='min-h-screen w-full flex flex-col justify-center items-center'>
      <h2 className="text-4xl font-bold text-center mb-[120px]">
        We are available in many<br />well-known cities
      </h2>
      <div className="w-full flex justify-start items-start flex-wrap gap-4">
        <a href="" className="flex-1">
          <div className="relative w-full h-72 bg-cover bg-center" style={{ backgroundImage: "url('/images/hero/andheri.jpg')" }}>
            <div className="absolute inset-0 bg-black/30 flex justify-center items-center">
              <p className="text-white text-lg">Mumbai</p>
            </div>
          </div>
        </a>
        <a href="" className="flex-1">
          <div className="relative w-full h-72 bg-cover bg-center" style={{ backgroundImage: "url('/images/hero/bandra.jpg')" }}>
            <div className="absolute inset-0 bg-black/30 flex justify-center items-center">
              <p className="text-white text-lg">Palghar</p>
            </div>
          </div>
        </a>
        <a href="" className="flex-1">
          <div className="relative w-full h-72 bg-cover bg-center" style={{ backgroundImage: "url('/images/hero/chembur.jpg')" }}>
            <div className="absolute inset-0 bg-black/30 flex justify-center items-center">
              <p className="text-white text-lg">Navi Mumbai</p>
            </div>
          </div>
        </a>
        <a href="" className="flex-1">
          <div className="relative w-full h-72 bg-cover bg-center" style={{ backgroundImage: "url('/images/hero/juhu.jpg')" }}>
            <div className="absolute inset-0 bg-black/30 flex justify-center items-center">
              <p className="text-white text-lg">Thane</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Cities;