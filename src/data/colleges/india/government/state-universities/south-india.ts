
import { College } from '../../../../../types/collegeTypes';

export const southIndiaStateUniversities: College[] = [
  {
    id: "13",
    name: "University of Madras",
    location: "Chennai, Tamil Nadu, India",
    type: "Government",
    overallRanking: 26,
    establishedYear: 1857,
    courses: [
      { name: "Liberal Arts", ranking: 15, strength: "Good", fees: "₹0.2L", feeType: "per-year" },
      { name: "Science", ranking: 20, strength: "Good", fees: "₹0.3L", feeType: "per-year" },
      { name: "Commerce", ranking: 18, strength: "Good", fees: "₹0.2L", feeType: "per-year" }
    ],
    highlights: ["Oldest university in India", "Historical significance", "Multiple departments", "Research focus"],
    website: "https://www.unom.ac.in",
    image: "/placeholder.svg"
  }
];
