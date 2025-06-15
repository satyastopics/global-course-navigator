
import { College } from '../../../../../../types/collegeTypes';

export const csuSystemColleges: College[] = [
  {
    id: "csu-01",
    name: "California Polytechnic State University",
    location: "San Luis Obispo, California, USA",
    type: "Public",
    overallRanking: 45,
    establishedYear: 1901,
    courses: [
      { name: "Engineering", ranking: 35, strength: "Good", fees: "$25K", feeType: "per-year" },
      { name: "Agriculture", ranking: 8, strength: "Very Good", fees: "$25K", feeType: "per-year" },
      { name: "Architecture", ranking: 15, strength: "Good", fees: "$25K", feeType: "per-year" }
    ],
    highlights: ["Learn by doing", "Strong industry ties", "Beautiful campus", "Practical education"],
    website: "https://www.calpoly.edu",
    image: "/placeholder.svg"
  }
];
