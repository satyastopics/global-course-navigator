
import { College } from '../../../../../../../types/collegeTypes';

export const noidaPrivateEngineering: College[] = [
  {
    id: "51",
    name: "Amity University Noida",
    location: "Noida, Uttar Pradesh, India",
    type: "Private",
    overallRanking: 30,
    establishedYear: 2005,
    courses: [
      { name: "Computer Science", ranking: 25, strength: "Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 30, strength: "Good", fees: "₹2.2L", feeType: "per-year" },
      { name: "Management", ranking: 35, strength: "Good", fees: "₹8L", feeType: "total" }
    ],
    highlights: ["Private university", "International programs", "Modern campus", "Industry partnerships"],
    website: "https://www.amity.edu",
    image: "/placeholder.svg"
  }
];
