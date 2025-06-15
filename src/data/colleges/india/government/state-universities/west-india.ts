
import { College } from '../../../../../types/collegeTypes';

export const westIndiaStateUniversities: College[] = [
  {
    id: "14",
    name: "University of Mumbai",
    location: "Mumbai, Maharashtra, India",
    type: "Government",
    overallRanking: 21,
    establishedYear: 1857,
    courses: [
      { name: "Commerce", ranking: 8, strength: "Very Good", fees: "₹0.3L", feeType: "per-year" },
      { name: "Liberal Arts", ranking: 18, strength: "Good", fees: "₹0.3L", feeType: "per-year" },
      { name: "Science", ranking: 22, strength: "Good", fees: "₹0.4L", feeType: "per-year" }
    ],
    highlights: ["Major state university", "Commercial hub location", "Wide range of courses", "Industry connections"],
    website: "https://www.mu.ac.in",
    image: "/placeholder.svg"
  }
];
