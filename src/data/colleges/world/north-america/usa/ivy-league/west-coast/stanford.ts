
import { College } from '../../../../../../../types/collegeTypes';

export const stanfordUniversity: College[] = [
  {
    id: "77",
    name: "Stanford University",
    location: "Stanford, California, USA",
    type: "Private",
    overallRanking: 3,
    establishedYear: 1885,
    courses: [
      { name: "Computer Science", ranking: 1, strength: "Excellent", fees: "$56K", feeType: "per-year" },
      { name: "Engineering", ranking: 2, strength: "Excellent", fees: "$56K", feeType: "per-year" },
      { name: "Business", ranking: 1, strength: "Excellent", fees: "$75K", feeType: "per-year" },
      { name: "Medicine", ranking: 4, strength: "Excellent", fees: "$66K", feeType: "per-year" }
    ],
    highlights: ["Silicon Valley location", "Innovation hub", "Top entrepreneurship", "Tech industry connections"],
    website: "https://www.stanford.edu",
    image: "/placeholder.svg"
  }
];
