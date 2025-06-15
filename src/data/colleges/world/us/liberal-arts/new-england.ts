
import { College } from '../../../../../types/collegeTypes';

export const newEnglandLiberalArts: College[] = [
  {
    id: "83",
    name: "Williams College",
    location: "Williamstown, Massachusetts, USA",
    type: "Liberal Arts",
    overallRanking: 1,
    establishedYear: 1793,
    courses: [
      { name: "Liberal Arts", ranking: 1, strength: "Excellent", fees: "$61K", feeType: "per-year" },
      { name: "Art History", ranking: 3, strength: "Excellent", fees: "$61K", feeType: "per-year" },
      { name: "Economics", ranking: 8, strength: "Very Good", fees: "$61K", feeType: "per-year" }
    ],
    highlights: ["Top liberal arts college", "Small class sizes", "Beautiful campus", "Strong alumni network"],
    website: "https://www.williams.edu",
    image: "/placeholder.svg"
  }
];
