
import { College } from '../../../../../types/collegeTypes';

export const southIndiaPrivateMedical: College[] = [
  {
    id: "38",
    name: "Manipal Academy of Higher Education",
    location: "Manipal, Karnataka, India",
    type: "Private",
    overallRanking: 18,
    establishedYear: 1953,
    courses: [
      { name: "Medicine", ranking: 5, strength: "Very Good", fees: "₹18L", feeType: "per-year" },
      { name: "Engineering", ranking: 22, strength: "Good", fees: "₹3.5L", feeType: "per-year" },
      { name: "Management", ranking: 20, strength: "Good", fees: "₹12L", feeType: "total" },
      { name: "Pharmacy", ranking: 5, strength: "Very Good", fees: "₹2L", feeType: "per-year" }
    ],
    highlights: ["Healthcare excellence", "Multiple campuses", "International programs", "Strong alumni network"],
    website: "https://manipal.edu",
    image: "/placeholder.svg"
  }
];
