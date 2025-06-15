
import { College } from '../../../../../../../types/collegeTypes';

export const delhiPrivateEngineering: College[] = [
  {
    id: "50",
    name: "Delhi Technological University",
    location: "Delhi, India",
    type: "Private",
    overallRanking: 25,
    establishedYear: 1941,
    courses: [
      { name: "Computer Science", ranking: 20, strength: "Very Good", fees: "₹1.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 25, strength: "Good", fees: "₹1.3L", feeType: "per-year" },
      { name: "Management", ranking: 40, strength: "Good", fees: "₹3L", feeType: "per-year" }
    ],
    highlights: ["State university", "Industry connections", "Research focus", "Modern facilities"],
    website: "https://www.dtu.ac.in",
    image: "/placeholder.svg"
  }
];
