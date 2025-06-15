
import { College } from '../../../../../../../types/collegeTypes';

export const harvardUniversity: College[] = [
  {
    id: "60",
    name: "Harvard University",
    location: "Cambridge, Massachusetts, USA",
    type: "Ivy League",
    overallRanking: 1,
    establishedYear: 1636,
    courses: [
      { name: "Medicine", ranking: 1, strength: "Excellent", fees: "$65K", feeType: "per-year" },
      { name: "Law", ranking: 1, strength: "Excellent", fees: "$68K", feeType: "per-year" },
      { name: "Business", ranking: 1, strength: "Excellent", fees: "$73K", feeType: "per-year" },
      { name: "Engineering", ranking: 15, strength: "Very Good", fees: "$55K", feeType: "per-year" }
    ],
    highlights: ["World's oldest university in US", "Largest endowment", "Nobel laureates", "Global prestige"],
    website: "https://www.harvard.edu",
    image: "/placeholder.svg"
  }
];
