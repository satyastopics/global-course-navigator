
import { College } from '../../../../../types/collegeTypes';

export const londonRussellGroup: College[] = [
  {
    id: "85",
    name: "Imperial College London",
    location: "London, England, UK",
    type: "Public",
    overallRanking: 6,
    establishedYear: 1907,
    courses: [
      { name: "Engineering", ranking: 7, strength: "Excellent", fees: "£34K", feeType: "per-year" },
      { name: "Medicine", ranking: 8, strength: "Excellent", fees: "£45K", feeType: "per-year" },
      { name: "Computer Science", ranking: 12, strength: "Very Good", fees: "£34K", feeType: "per-year" },
      { name: "Business", ranking: 15, strength: "Good", fees: "£57K", feeType: "per-year" }
    ],
    highlights: ["STEM focus", "London location", "Research excellence", "Industry partnerships"],
    website: "https://www.imperial.ac.uk",
    image: "/placeholder.svg"
  }
];
