
import { College } from '../../../../../../../types/collegeTypes';

export const mysorePrivateEngineering: College[] = [
  {
    id: "53",
    name: "PES University",
    location: "Bangalore, Karnataka, India",
    type: "Private",
    overallRanking: 28,
    establishedYear: 1972,
    courses: [
      { name: "Computer Science", ranking: 22, strength: "Good", fees: "₹3L", feeType: "per-year" },
      { name: "Engineering", ranking: 28, strength: "Good", fees: "₹2.8L", feeType: "per-year" },
      { name: "Management", ranking: 45, strength: "Good", fees: "₹10L", feeType: "total" }
    ],
    highlights: ["Private university", "Technology focus", "Innovation labs", "Industry collaboration"],
    website: "https://www.pes.edu",
    image: "/placeholder.svg"
  }
];
