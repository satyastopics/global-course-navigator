
import { College } from '../../../../../types/collegeTypes';

export const yaleColumbiaGroup: College[] = [
  {
    id: "8",
    name: "Yale University",
    location: "New Haven, Connecticut, USA",
    type: "Ivy League",
    overallRanking: 8,
    establishedYear: 1701,
    courses: [
      { name: "Law", ranking: 1, strength: "Excellent", fees: "$69,975", feeType: "per-year" },
      { name: "Medicine", ranking: 5, strength: "Excellent", fees: "$66,160", feeType: "per-year" },
      { name: "Drama", ranking: 1, strength: "Excellent", fees: "$34,800", feeType: "per-year" },
      { name: "Economics", ranking: 3, strength: "Excellent", fees: "$57,700", feeType: "per-year" }
    ],
    highlights: ["Residential college system", "Strong liberal arts", "Historic campus", "Extensive resources"],
    website: "https://www.yale.edu",
    image: "/placeholder.svg"
  }
];
