"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { useRouter } from "next/navigation";

interface ExplorePropertyProps {
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchClick: () => void;
}

export function ExploreProperty({
  onInputChange,
  onSearchClick,
}: ExplorePropertyProps) {
  const router = useRouter();

  return (
    <>
      <h2 className="my-4 text-center text-2xl font-bold sm:text-3xl lg:text-4xl">
        Explore Properties
      </h2>

      <div className="bg-background flex flex-wrap items-center gap-4 rounded-lg p-4 shadow-md">
        <div className="w-full flex-grow sm:w-auto">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="relative">
              <Input
                type="text"
                name="city"
                placeholder="Enter city"
                onChange={onInputChange}
                className="border-muted flex w-full items-center gap-2 rounded-md border px-4 py-2 pl-10 pr-4 focus:border-transparent focus:ring-primary"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MapPinIcon className="text-muted-foreground h-5 w-5 " />
              </div>
            </div>
            <div className="relative">
              <Input
                type="text"
                name="propertyType"
                placeholder="Property Type"
                onChange={onInputChange}
                className="border-muted flex w-full items-center gap-2 rounded-md border px-4 py-2 pl-10 pr-4 focus:border-transparent focus:ring-primary"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <LocateIcon className="text-muted-foreground h-5 w-5" />
              </div>
            </div>
            <div className="relative">
              <Input
                type="text"
                name="budget"
                placeholder="Property Budget in lakh"
                onChange={onInputChange}
                className="border-muted flex w-full items-center gap-2 rounded-md border px-4 py-2 pl-10 pr-4 focus:border-transparent focus:ring-primary"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MoneyIcon className="text-muted-foreground h-5 w-5" />
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
                className="border-muted flex w-full cursor-pointer items-center gap-2 rounded-md border px-4 py-2 pl-4 pr-4 focus:border-transparent focus:ring-primary"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center sm:w-auto sm:justify-end">
          <Button
            className="ml-auto w-full sm:w-auto"
            onClick={() => {
              onSearchClick();
            }}
          >
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
