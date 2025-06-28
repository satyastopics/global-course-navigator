
import { College } from '../../../../../../../types/collegeTypes';

export const gurgaonPrivateEngineering: College[] = [
  {
    id: "eng-hr-gur-01",
    name: "Amity University Gurgaon",
    location: "Gurgaon, Haryana, India",
    type: "Private",
    overallRanking: 35,
    establishedYear: 2010,
    courses: [
      { name: "Computer Science", ranking: 30, strength: "Good", fees: "₹2.8L", feeType: "per-year" },
      { name: "Engineering", ranking: 35, strength: "Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "Management", ranking: 40, strength: "Good", fees: "₹9L", feeType: "total" }
    ],
    highlights: ["Modern infrastructure", "Industry partnerships", "International programs", "Corporate backing"],
    website: "https://www.amity.edu/gurgaon",
    image: "/placeholder.svg"
  },
  {
    id: "eng-hr-gur-02",
    name: "ITM University Gurgaon",
    location: "Gurgaon, Haryana, India",
    type: "Private",
    overallRanking: 58,
    establishedYear: 1996,
    courses: [
      { name: "Computer Science", ranking: 50, strength: "Good", fees: "₹2.2L", feeType: "per-year" },
      { name: "Engineering", ranking: 58, strength: "Average", fees: "₹2L", feeType: "per-year" },
      { name: "Management", ranking: 65, strength: "Average", fees: "₹7L", feeType: "total" }
    ],
    highlights: ["State private university", "Industry exposure", "Placement support", "Modern labs"],
    website: "https://www.itmindia.edu",
    image: "/placeholder.svg"
  }
];
