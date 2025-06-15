
import { College } from '../../../../../types/collegeTypes';

export const northIndiaStateUniversities: College[] = [
  {
    id: "12",
    name: "University of Delhi",
    location: "Delhi, India",
    type: "Government",
    overallRanking: 14,
    establishedYear: 1922,
    courses: [
      { name: "Liberal Arts", ranking: 8, strength: "Very Good", fees: "₹0.3L", feeType: "per-year" },
      { name: "Commerce", ranking: 5, strength: "Very Good", fees: "₹0.3L", feeType: "per-year" },
      { name: "Science", ranking: 12, strength: "Good", fees: "₹0.5L", feeType: "per-year" }
    ],
    highlights: ["Premier state university", "Multiple colleges", "Rich heritage", "Central location"],
    website: "https://www.du.ac.in",
    image: "/placeholder.svg"
  }
];
