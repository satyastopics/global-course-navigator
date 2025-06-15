
import { College } from '../../../../../../../types/collegeTypes';

export const kolkataPrivateEngineering: College[] = [
  {
    id: "59",
    name: "Heritage Institute of Technology",
    location: "Kolkata, West Bengal, India",
    type: "Private",
    overallRanking: 65,
    establishedYear: 2001,
    courses: [
      { name: "Computer Science", ranking: 45, strength: "Good", fees: "₹1.8L", feeType: "per-year" },
      { name: "Engineering", ranking: 65, strength: "Average", fees: "₹1.5L", feeType: "per-year" },
      { name: "Management", ranking: 80, strength: "Average", fees: "₹5L", feeType: "total" }
    ],
    highlights: ["Regional presence", "Affordable fees", "Industry connections", "Placement support"],
    website: "https://www.heritageit.edu",
    image: "/placeholder.svg"
  }
];
