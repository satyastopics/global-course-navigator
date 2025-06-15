
import { College } from '../../../../../../types/collegeTypes';

export const iitDelhi: College[] = [
  {
    id: "1",
    name: "Indian Institute of Technology Delhi",
    location: "New Delhi, India",
    type: "Government",
    overallRanking: 2,
    establishedYear: 1961,
    courses: [
      { name: "Computer Science", ranking: 2, strength: "Excellent", fees: "₹2L", feeType: "per-year" },
      { name: "Engineering", ranking: 2, strength: "Excellent", fees: "₹2L", feeType: "per-year" },
      { name: "Management", ranking: 5, strength: "Very Good", fees: "₹5L", feeType: "per-year" },
      { name: "Research", ranking: 3, strength: "Excellent", fees: "₹1L", feeType: "per-year" }
    ],
    highlights: ["Premier engineering institute", "Strong industry connections", "Research excellence", "Alumni network"],
    website: "https://home.iitd.ac.in",
    image: "/placeholder.svg"
  }
];
