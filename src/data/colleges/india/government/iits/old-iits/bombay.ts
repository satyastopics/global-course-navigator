
import { College } from '../../../../../../types/collegeTypes';

export const iitBombay: College[] = [
  {
    id: "2",
    name: "Indian Institute of Technology Bombay",
    location: "Mumbai, Maharashtra, India",
    type: "Government",
    overallRanking: 1,
    establishedYear: 1958,
    courses: [
      { name: "Computer Science", ranking: 1, strength: "Excellent", fees: "₹2L", feeType: "per-year" },
      { name: "Engineering", ranking: 1, strength: "Excellent", fees: "₹2L", feeType: "per-year" },
      { name: "Management", ranking: 3, strength: "Excellent", fees: "₹5L", feeType: "per-year" },
      { name: "Research", ranking: 1, strength: "Excellent", fees: "₹1L", feeType: "per-year" }
    ],
    highlights: ["Top IIT", "Global recognition", "Innovation hub", "Industry partnerships"],
    website: "https://www.iitb.ac.in",
    image: "/placeholder.svg"
  }
];
