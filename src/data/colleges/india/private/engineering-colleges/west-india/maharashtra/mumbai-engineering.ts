
import { College } from '../../../../../../../types/collegeTypes';

export const mumbaiPrivateEngineering: College[] = [
  {
    id: "58",
    name: "Mukesh Patel School of Technology Management",
    location: "Mumbai, Maharashtra, India",
    type: "Private",
    overallRanking: 45,
    establishedYear: 1999,
    courses: [
      { name: "Computer Science", ranking: 35, strength: "Good", fees: "₹2.8L", feeType: "per-year" },
      { name: "Engineering", ranking: 45, strength: "Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "Management", ranking: 60, strength: "Average", fees: "₹8L", feeType: "total" }
    ],
    highlights: ["Industry location", "Modern facilities", "Placement support", "Urban campus"],
    website: "https://www.mpstme.edu.in",
    image: "/placeholder.svg"
  }
];
