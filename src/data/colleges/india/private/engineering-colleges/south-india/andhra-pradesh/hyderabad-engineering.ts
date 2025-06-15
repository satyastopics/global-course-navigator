
import { College } from '../../../../../../../types/collegeTypes';

export const hyderabadPrivateEngineering: College[] = [
  {
    id: "57",
    name: "International Institute of Information Technology Hyderabad",
    location: "Hyderabad, Telangana, India",
    type: "Private",
    overallRanking: 20,
    establishedYear: 1998,
    courses: [
      { name: "Computer Science", ranking: 16, strength: "Very Good", fees: "₹3L", feeType: "per-year" },
      { name: "Engineering", ranking: 20, strength: "Good", fees: "₹2.8L", feeType: "per-year" },
      { name: "Research", ranking: 18, strength: "Good", fees: "₹2L", feeType: "per-year" }
    ],
    highlights: ["Research focus", "Industry partnerships", "Innovation labs", "Strong placements"],
    website: "https://www.iiit.ac.in",
    image: "/placeholder.svg"
  }
];
