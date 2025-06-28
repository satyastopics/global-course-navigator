
import { College } from '../../../../../../../types/collegeTypes';

export const coimbatorePrivateEngineering: College[] = [
  {
    id: "eng-tn-cbe-01",
    name: "Amrita Vishwa Vidyapeetham",
    location: "Coimbatore, Tamil Nadu, India",
    type: "Private",
    overallRanking: 20,
    establishedYear: 2003,
    courses: [
      { name: "Computer Science", ranking: 15, strength: "Very Good", fees: "₹3.2L", feeType: "per-year" },
      { name: "Engineering", ranking: 20, strength: "Very Good", fees: "₹2.8L", feeType: "per-year" },
      { name: "Medicine", ranking: 25, strength: "Good", fees: "₹18L", feeType: "per-year" }
    ],
    highlights: ["Deemed university", "Research excellence", "Spiritual foundation", "Multiple campuses"],
    website: "https://www.amrita.edu",
    image: "/placeholder.svg"
  },
  {
    id: "eng-tn-cbe-02",
    name: "Karunya Institute of Technology",
    location: "Coimbatore, Tamil Nadu, India",
    type: "Private",
    overallRanking: 65,
    establishedYear: 1986,
    courses: [
      { name: "Computer Science", ranking: 55, strength: "Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 65, strength: "Average", fees: "₹2.2L", feeType: "per-year" },
      { name: "Management", ranking: 70, strength: "Average", fees: "₹6L", feeType: "total" }
    ],
    highlights: ["Deemed university", "Christian values", "Industry partnerships", "Research focus"],
    website: "https://www.karunya.edu",
    image: "/placeholder.svg"
  }
];
