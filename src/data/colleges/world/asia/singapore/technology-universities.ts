
import { College } from '../../../../../types/collegeTypes';

export const singaporeTechnologyUniversities: College[] = [
  {
    id: "sg-02",
    name: "Nanyang Technological University",
    location: "Singapore",
    type: "Public",
    overallRanking: 26,
    establishedYear: 1991,
    courses: [
      { name: "Engineering", ranking: 12, strength: "Excellent", fees: "$35,000", feeType: "per-year" },
      { name: "Computer Science", ranking: 15, strength: "Excellent", fees: "$35,000", feeType: "per-year" },
      { name: "Business", ranking: 18, strength: "Very Good", fees: "$40,000", feeType: "per-year" }
    ],
    highlights: ["Technology focus", "Smart campus", "Innovation hub", "Industry partnerships"],
    website: "https://www.ntu.edu.sg",
    image: "/placeholder.svg"
  }
];
