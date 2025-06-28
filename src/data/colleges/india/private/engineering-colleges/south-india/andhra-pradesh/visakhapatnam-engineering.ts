
import { College } from '../../../../../../../types/collegeTypes';

export const visakhapatnamPrivateEngineering: College[] = [
  {
    id: "eng-ap-vzm-01",
    name: "Gitam University",
    location: "Visakhapatnam, Andhra Pradesh, India",
    type: "Private",
    overallRanking: 55,
    establishedYear: 1980,
    courses: [
      { name: "Computer Science", ranking: 48, strength: "Good", fees: "₹2.8L", feeType: "per-year" },
      { name: "Engineering", ranking: 55, strength: "Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "Management", ranking: 60, strength: "Average", fees: "₹7L", feeType: "total" }
    ],
    highlights: ["Deemed university", "Coastal campus", "Industry partnerships", "Multi-disciplinary"],
    website: "https://www.gitam.edu",
    image: "/placeholder.svg"
  }
];
