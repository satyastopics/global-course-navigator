
import { College } from '../../../../../types/collegeTypes';

export const midwestLiberalArts: College[] = [
  {
    id: "84",
    name: "Carleton College",
    location: "Northfield, Minnesota, USA",
    type: "Liberal Arts",
    overallRanking: 8,
    establishedYear: 1866,
    courses: [
      { name: "Liberal Arts", ranking: 8, strength: "Very Good", fees: "$58K", feeType: "per-year" },
      { name: "Science", ranking: 15, strength: "Good", fees: "$58K", feeType: "per-year" },
      { name: "Mathematics", ranking: 20, strength: "Good", fees: "$58K", feeType: "per-year" }
    ],
    highlights: ["Midwest liberal arts", "Strong academics", "Close community", "Research opportunities"],
    website: "https://www.carleton.edu",
    image: "/placeholder.svg"
  }
];
