
import { College } from '../../../../../../types/collegeTypes';

export const iitHyderabad: College[] = [
  {
    id: "4",
    name: "Indian Institute of Technology Hyderabad",
    location: "Hyderabad, Telangana, India",
    type: "Government",
    overallRanking: 8,
    establishedYear: 2008,
    courses: [
      { name: "Computer Science", ranking: 8, strength: "Very Good", fees: "₹2L", feeType: "per-year" },
      { name: "Engineering", ranking: 10, strength: "Very Good", fees: "₹2L", feeType: "per-year" },
      { name: "Research", ranking: 12, strength: "Very Good", fees: "₹1L", feeType: "per-year" }
    ],
    highlights: ["Fast growing IIT", "Modern infrastructure", "Research focus", "Industry collaboration"],
    website: "https://www.iith.ac.in",
    image: "/placeholder.svg"
  }
];
