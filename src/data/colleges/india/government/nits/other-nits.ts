
import { College } from '../../../../../types/collegeTypes';

export const otherNITs: College[] = [
  {
    id: "9",
    name: "National Institute of Technology Karnataka",
    location: "Surathkal, Karnataka, India",
    type: "Government",
    overallRanking: 24,
    establishedYear: 1960,
    courses: [
      { name: "Computer Science", ranking: 20, strength: "Good", fees: "₹1.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 24, strength: "Good", fees: "₹1.5L", feeType: "per-year" },
      { name: "Management", ranking: 30, strength: "Good", fees: "₹3L", feeType: "per-year" }
    ],
    highlights: ["Coastal campus", "Industry connections", "Good placement", "Research facilities"],
    website: "https://www.nitk.ac.in",
    image: "/placeholder.svg"
  }
];
