
import { College } from '../../../../../../types/collegeTypes';

export const iitMadras: College[] = [
  {
    id: "3",
    name: "Indian Institute of Technology Madras",
    location: "Chennai, Tamil Nadu, India",
    type: "Government",
    overallRanking: 3,
    establishedYear: 1959,
    courses: [
      { name: "Computer Science", ranking: 3, strength: "Excellent", fees: "₹2L", feeType: "per-year" },
      { name: "Engineering", ranking: 3, strength: "Excellent", fees: "₹2L", feeType: "per-year" },
      { name: "Management", ranking: 8, strength: "Very Good", fees: "₹5L", feeType: "per-year" },
      { name: "Research", ranking: 2, strength: "Excellent", fees: "₹1L", feeType: "per-year" }
    ],
    highlights: ["Research excellence", "NIRF ranking #1", "Innovation", "Global partnerships"],
    website: "https://www.iitm.ac.in",
    image: "/placeholder.svg"
  }
];
