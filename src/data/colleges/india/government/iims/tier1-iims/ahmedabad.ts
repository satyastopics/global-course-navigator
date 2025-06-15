
import { College } from '../../../../../../types/collegeTypes';

export const iimAhmedabad: College[] = [
  {
    id: "5",
    name: "Indian Institute of Management Ahmedabad",
    location: "Ahmedabad, Gujarat, India",
    type: "Government",
    overallRanking: 4,
    establishedYear: 1961,
    courses: [
      { name: "Management", ranking: 1, strength: "Excellent", fees: "₹25L", feeType: "total" },
      { name: "Executive MBA", ranking: 1, strength: "Excellent", fees: "₹30L", feeType: "total" },
      { name: "PhD", ranking: 2, strength: "Excellent", fees: "₹50K", feeType: "per-year" }
    ],
    highlights: ["Top management institute", "Global recognition", "Case study method", "Alumni network"],
    website: "https://www.iima.ac.in",
    image: "/placeholder.svg"
  }
];
