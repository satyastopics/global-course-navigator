
import { College } from '../../../../../../../types/collegeTypes';

export const punjabPrivateEngineering: College[] = [
  {
    id: "54",
    name: "Thapar Institute of Engineering and Technology",
    location: "Patiala, Punjab, India",
    type: "Private",
    overallRanking: 29,
    establishedYear: 1956,
    courses: [
      { name: "Computer Science", ranking: 24, strength: "Good", fees: "₹3.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 29, strength: "Good", fees: "₹3.2L", feeType: "per-year" },
      { name: "Management", ranking: 45, strength: "Good", fees: "₹12L", feeType: "total" }
    ],
    highlights: ["Deemed university", "Industry partnerships", "Strong alumni", "Research focus"],
    website: "https://www.thapar.edu",
    image: "/placeholder.svg"
  }
];
