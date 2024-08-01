"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

export function ExploreProperty({ onInputChange, onSearchClick }) {
  return (
    <>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center my-4">Explore Properties</h2>

      <div className="flex flex-wrap items-center gap-4 bg-background p-4 rounded-lg shadow-md">
        <div className="w-full sm:w-auto flex-grow">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <div className="relative">
              <Input
                type="text"
                name="city"
                placeholder="Enter city"
                onChange={onInputChange}
                className="flex items-center gap-2 px-4 py-2 rounded-md pl-10 pr-4 border border-muted focus:border-transparent focus:ring-primary w-full"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <MapPinIcon className="w-5 h-5 text-muted-foreground " />
              </div>
            </div>
            <div className="relative">
              <Input
                type="text"
                name="propertyType"
                placeholder="Property Type"
                onChange={onInputChange}
                className="flex items-center gap-2 px-4 py-2 rounded-md pl-10 pr-4 border border-muted focus:border-transparent focus:ring-primary w-full"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <LocateIcon className="w-5 h-5 text-muted-foreground" />
              </div>
            </div>
            <div className="relative">
              <Input
                type="text"
                name="budget"
                placeholder="Property Budget in lakh"
                onChange={onInputChange}
                className="flex items-center gap-2 px-4 py-2 rounded-md pl-10 pr-4 border border-muted focus:border-transparent focus:ring-primary w-full"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <MoneyIcon className="w-5 h-5 text-muted-foreground" />
              </div>
            </div>
            <div className="relative">
              {/* <Popover>
                <PopoverTrigger asChild>
                  
                </PopoverTrigger>
                <PopoverContent className="absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-background p-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Calendar />
                </PopoverContent>
              </Popover> */}
              <Input
                    type="text"
                    placeholder="Application date"
                    className="flex items-center gap-2 px-4 py-2 rounded-md pr-4 pl-4 border border-muted focus:border-transparent focus:ring-primary cursor-pointer w-full"
                  />
            </div>
          </div>
        </div>
        <div className="w-full sm:w-auto flex justify-center sm:justify-end">
          <Button className="ml-auto w-full sm:w-auto" onClick={onSearchClick}>
            Search
          </Button>
        </div>
      </div>
    </>
  );
}

function LocateIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function MoneyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
      <path d="M1 10h22M1 14h22" />
      <circle cx="12" cy="12" r="2" />
      <path d="M16 6h.01M8 6h.01M16 18h.01M8 18h.01" />
    </svg>
  );
}

