
import { College } from '../../../../../../../types/collegeTypes';

export const kolkataPrivateEngineering: College[] = [
  {
    id: "eng-wb-kol-01",
    name: "Heritage Institute of Technology",
    location: "Kolkata, West Bengal, India",
    type: "Private",
    overallRanking: 68,
    establishedYear: 2001,
    courses: [
      { name: "Computer Science", ranking: 58, strength: "Good", fees: "₹2.2L", feeType: "per-year" },
      { name: "Engineering", ranking: 68, strength: "Average", fees: "₹2L", feeType: "per-year" },
      { name: "Management", ranking: 75, strength: "Average", fees: "₹6L", feeType: "total" }
    ],
    highlights: ["Private college", "Industry partnerships", "Modern facilities", "Affordable fees"],
    website: "https://www.heritageit.edu",
    image: "/placeholder.svg"
  },
  {
    id: "eng-wb-kol-02",
    name: "Techno India University",
    location: "Kolkata, West Bengal, India",
    type: "Private",
    overallRanking: 85,
    establishedYear: 2012,
    courses: [
      { name: "Computer Science", ranking: 75, strength: "Average", fees: "₹1.8L", feeType: "per-year" },
      { name: "Engineering", ranking: 85, strength: "Average", fees: "₹1.5L", feeType: "per-year" },
      { name: "Management", ranking: 90, strength: "Average", fees: "₹5L", feeType: "total" }
    ],
    highlights: ["Private university", "Multi-disciplinary", "Affordable education", "Growing network"],
    website: "https://www.tiu.edu.in",
    image: "/placeholder.svg"
  }
];
