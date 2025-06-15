
import { College } from '../../../../../../../types/collegeTypes';

export const yaleUniversity: College[] = [
  {
    id: "79",
    name: "Yale University",
    location: "New Haven, Connecticut, USA",
    type: "Ivy League",
    overallRanking: 4,
    establishedYear: 1701,
    courses: [
      { name: "Law", ranking: 1, strength: "Excellent", fees: "$68K", feeType: "per-year" },
      { name: "Liberal Arts", ranking: 2, strength: "Excellent", fees: "$59K", feeType: "per-year" },
      { name: "Medicine", ranking: 7, strength: "Excellent", fees: "$67K", feeType: "per-year" },
      { name: "Business", ranking: 9, strength: "Very Good", fees: "$72K", feeType: "per-year" }
    ],
    highlights: ["Historic Ivy League", "Liberal arts excellence", "Secret societies", "Alumni network"],
    website: "https://www.yale.edu",
    image: "/placeholder.svg"
  }
];
