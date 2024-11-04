import React from "react";
import JobListingsCard from "./Cards/JobListingsCard";
import { JobListingsData } from "@/data/JobListingsData";

const CareerListingsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {JobListingsData.map((listings, index) => (
        <JobListingsCard
          key={index}
          image={listings.image}
          Header={listings.Header}
          Subtext={listings.Subtext}
          Link={listings.Link}
        />
      ))}
    </div>
  );
};

export default CareerListingsSection;
