
import { College } from '../../../../../types/collegeTypes';

export const eastIndiaStateUniversities: College[] = [
  {
    id: "15",
    name: "University of Calcutta",
    location: "Kolkata, West Bengal, India",
    type: "Government",
    overallRanking: 27,
    establishedYear: 1857,
    courses: [
      { name: "Liberal Arts", ranking: 12, strength: "Good", fees: "₹0.2L", feeType: "per-year" },
      { name: "Science", ranking: 25, strength: "Good", fees: "₹0.3L", feeType: "per-year" },
      { name: "Commerce", ranking: 20, strength: "Good", fees: "₹0.2L", feeType: "per-year" }
    ],
    highlights: ["Historic university", "Cultural heritage", "Research tradition", "Nobel laureate alumni"],
    website: "https://www.caluniv.ac.in",
    image: "/placeholder.svg"
  }
];
