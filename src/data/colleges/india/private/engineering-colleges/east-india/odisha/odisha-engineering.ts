
import { College } from '../../../../../../../types/collegeTypes';

export const odishaPrivateEngineering: College[] = [
  {
    id: "eng-odi-01",
    name: "Kalinga Institute of Industrial Technology",
    location: "Bhubaneswar, Odisha, India",
    type: "Private",
    overallRanking: 33,
    establishedYear: 1992,
    courses: [
      { name: "Computer Science", ranking: 28, strength: "Good", fees: "₹3.2L", feeType: "per-year" },
      { name: "Engineering", ranking: 33, strength: "Good", fees: "₹2.9L", feeType: "per-year" },
      { name: "Management", ranking: 45, strength: "Good", fees: "₹11L", feeType: "total" }
    ],
    highlights: ["Deemed university", "Multiple campuses", "Industry partnerships", "Research focus"],
    website: "https://www.kiit.ac.in",
    image: "/placeholder.svg"
  }
];
