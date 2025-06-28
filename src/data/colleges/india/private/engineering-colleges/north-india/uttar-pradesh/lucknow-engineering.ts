
import { College } from '../../../../../../../types/collegeTypes';

export const lucknowPrivateEngineering: College[] = [
  {
    id: "eng-up-lko-01",
    name: "Integral University",
    location: "Lucknow, Uttar Pradesh, India",
    type: "Private",
    overallRanking: 85,
    establishedYear: 2004,
    courses: [
      { name: "Computer Science", ranking: 70, strength: "Average", fees: "₹1.8L", feeType: "per-year" },
      { name: "Engineering", ranking: 85, strength: "Average", fees: "₹1.5L", feeType: "per-year" },
      { name: "Management", ranking: 90, strength: "Average", fees: "₹5L", feeType: "total" }
    ],
    highlights: ["State private university", "Affordable fees", "Growing reputation", "Multi-disciplinary"],
    website: "https://www.iul.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-up-lko-02",
    name: "Sharda University",
    location: "Greater Noida, Uttar Pradesh, India",
    type: "Private",
    overallRanking: 75,
    establishedYear: 2009,
    courses: [
      { name: "Computer Science", ranking: 65, strength: "Good", fees: "₹2.2L", feeType: "per-year" },
      { name: "Engineering", ranking: 75, strength: "Average", fees: "₹2L", feeType: "per-year" },
      { name: "Medicine", ranking: 80, strength: "Average", fees: "₹15L", feeType: "per-year" }
    ],
    highlights: ["Multi-disciplinary university", "Modern campus", "International programs", "Research focus"],
    website: "https://www.sharda.ac.in",
    image: "/placeholder.svg"
  }
];
