
import { College } from '../../../../../../../types/collegeTypes';

export const kochiPrivateEngineering: College[] = [
  {
    id: "eng-kl-koc-01",
    name: "Cochin University of Science and Technology",
    location: "Kochi, Kerala, India",
    type: "Private",
    overallRanking: 45,
    establishedYear: 1971,
    courses: [
      { name: "Computer Science", ranking: 38, strength: "Good", fees: "₹1.8L", feeType: "per-year" },
      { name: "Engineering", ranking: 45, strength: "Good", fees: "₹1.5L", feeType: "per-year" },
      { name: "Management", ranking: 55, strength: "Good", fees: "₹4L", feeType: "total" }
    ],
    highlights: ["State university", "Research focus", "Industry partnerships", "Affordable fees"],
    website: "https://www.cusat.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-kl-koc-02",
    name: "Rajagiri School of Engineering & Technology",
    location: "Kochi, Kerala, India",
    type: "Private",
    overallRanking: 70,
    establishedYear: 2001,
    courses: [
      { name: "Computer Science", ranking: 60, strength: "Average", fees: "₹2.2L", feeType: "per-year" },
      { name: "Engineering", ranking: 70, strength: "Average", fees: "₹2L", feeType: "per-year" },
      { name: "Management", ranking: 75, strength: "Average", fees: "₹6L", feeType: "total" }
    ],
    highlights: ["Private college", "Modern facilities", "Industry connect", "Value education"],
    website: "https://www.rajagiritech.ac.in",
    image: "/placeholder.svg"
  }
];
