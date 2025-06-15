
import { College } from '../../../../../types/collegeTypes';

export const singaporeNationalUniversities: College[] = [
  {
    id: "sg-01",
    name: "National University of Singapore",
    location: "Singapore",
    type: "Public",
    overallRanking: 11,
    establishedYear: 1905,
    courses: [
      { name: "Engineering", ranking: 8, strength: "Excellent", fees: "$39,000", feeType: "per-year" },
      { name: "Computer Science", ranking: 10, strength: "Excellent", fees: "$39,000", feeType: "per-year" },
      { name: "Business", ranking: 12, strength: "Excellent", fees: "$45,000", feeType: "per-year" },
      { name: "Medicine", ranking: 22, strength: "Very Good", fees: "$65,000", feeType: "per-year" }
    ],
    highlights: ["Asia's top university", "Global city campus", "Strong research", "International outlook"],
    website: "https://www.nus.edu.sg",
    image: "/placeholder.svg"
  }
];
