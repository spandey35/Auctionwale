"use client";
import React from 'react';
import { Property } from '@/types/property';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

// In your JSX


const PropertyData = ({ imageUrl, price, name, location }) => {
  const handleLike = () => {
    console.log('Liked!');
  };

  const handleAddToCart = () => {
    console.log('Added to cart!');
    
  };

  const handleInterest = () => {
    window.open("https://chat.whatsapp.com/Bh7uQqk4hEa4Q9kfspPP9O", "_blank")

    console.log('Interested!');
  };

  const handleViewMore = () => {
    
    console.log('View more!');
    
  };

  return (
     
    <>
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="relative">
      <Image
      src={imageUrl}
      alt="Property"
      width={500} 
      height={300}
      className="w-full"
      layout="responsive"
      objectFit="cover"
    />
        <div className="absolute top-0 right-0 m-2">
          {/* <button onClick={handleLike} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
          ❤
          </button> */}
          {/* <button onClick={handleAddToCart} className="bg-blue-500 rounded px-1 py-2 m-1 shadow-lg text-white">
            Add to Cart
          </button> */}
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">{name}</div>
        <p className="text-gray-700 text-sm  line-clamp-3 ">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 mr-2 " />
          {location}
        </p>
      </div>
      <div className="px-4 pt-2 pb-2 flex justify-between gap-2">
        <span className="inline-block bg-blue-500 rounded px-1 py-2 text-sm font-semibold text-white mr-2"> ₹{price}</span>
        <button onClick={handleInterest} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
          I&apos;m Interested
        </button>
        <button onClick={handleViewMore} className="bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-1 px-2 rounded">
          View More
        </button>
      </div>
    </div>
    </>
  );
};

export default PropertyData;
