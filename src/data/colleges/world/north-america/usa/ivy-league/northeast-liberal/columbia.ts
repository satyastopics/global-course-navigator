
import { College } from '../../../../../../../types/collegeTypes';

export const columbiaUniversity: College[] = [
  {
    id: "82",
    name: "Columbia University",
    location: "New York, New York, USA",
    type: "Ivy League",
    overallRanking: 18,
    establishedYear: 1754,
    courses: [
      { name: "Journalism", ranking: 1, strength: "Excellent", fees: "$65K", feeType: "per-year" },
      { name: "Business", ranking: 8, strength: "Excellent", fees: "$78K", feeType: "per-year" },
      { name: "Liberal Arts", ranking: 12, strength: "Excellent", fees: "$61K", feeType: "per-year" },
      { name: "Medicine", ranking: 6, strength: "Excellent", fees: "$68K", feeType: "per-year" }
    ],
    highlights: ["NYC location", "Journalism school", "Research university", "Urban campus"],
    website: "https://www.columbia.edu",
    image: "/placeholder.svg"
  }
];
