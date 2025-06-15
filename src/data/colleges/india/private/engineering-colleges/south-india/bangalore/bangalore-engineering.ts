
import { College } from '../../../../../../../types/collegeTypes';

export const bangalorePrivateEngineering: College[] = [
  {
    id: "52",
    name: "RV College of Engineering",
    location: "Bangalore, Karnataka, India",
    type: "Private",
    overallRanking: 22,
    establishedYear: 1963,
    courses: [
      { name: "Computer Science", ranking: 18, strength: "Very Good", fees: "₹2L", feeType: "per-year" },
      { name: "Engineering", ranking: 22, strength: "Good", fees: "₹1.8L", feeType: "per-year" },
      { name: "Research", ranking: 25, strength: "Good", fees: "₹1.5L", feeType: "per-year" }
    ],
    highlights: ["Autonomous college", "Industry partnerships", "Research focus", "Strong alumni"],
    website: "https://www.rvce.edu.in",
    image: "/placeholder.svg"
  }
];
