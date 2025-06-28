
import { College } from '../../../../../../types/collegeTypes';
import { maharashtraMedical } from './maharashtra';

export { maharashtraMedical };

export const westIndiaPrivateMedical: College[] = [
  {
    id: "61",
    name: "D.Y. Patil University",
    location: "Pune, Maharashtra, India",
    type: "Private",
    overallRanking: 55,
    establishedYear: 2003,
    courses: [
      { name: "Medicine", ranking: 35, strength: "Good", fees: "₹20L", feeType: "per-year" },
      { name: "Engineering", ranking: 60, strength: "Average", fees: "₹3L", feeType: "per-year" },
      { name: "Management", ranking: 70, strength: "Average", fees: "₹10L", feeType: "total" }
    ],
    highlights: ["Multi-disciplinary university", "Modern infrastructure", "Industry partnerships", "Research focus"],
    website: "https://www.dypvp.edu.in",
    image: "/placeholder.svg"
  },
  ...maharashtraMedical
];
