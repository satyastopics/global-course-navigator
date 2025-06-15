
import { College } from '../../../../../../../types/collegeTypes';

export const chennaiPrivateEngineering: College[] = [
  {
    id: "56",
    name: "SRM Institute of Science and Technology",
    location: "Chennai, Tamil Nadu, India",
    type: "Private",
    overallRanking: 27,
    establishedYear: 1985,
    courses: [
      { name: "Computer Science", ranking: 23, strength: "Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 27, strength: "Good", fees: "₹2.2L", feeType: "per-year" },
      { name: "Medicine", ranking: 15, strength: "Good", fees: "₹18L", feeType: "per-year" }
    ],
    highlights: ["Large private university", "Multiple campuses", "International programs", "Industry partnerships"],
    website: "https://www.srmist.edu.in",
    image: "/placeholder.svg"
  }
];
