
import { College } from '../../../../../../../types/collegeTypes';

export const vellorePrivateEngineering: College[] = [
  {
    id: "eng-tn-vel-01",
    name: "VIT University Vellore",
    location: "Vellore, Tamil Nadu, India",
    type: "Private",
    overallRanking: 17,
    establishedYear: 1984,
    courses: [
      { name: "Computer Science", ranking: 15, strength: "Very Good", fees: "₹2L", feeType: "per-year" },
      { name: "Engineering", ranking: 18, strength: "Very Good", fees: "₹1.8L", feeType: "per-year" },
      { name: "Management", ranking: 25, strength: "Good", fees: "₹8L", feeType: "total" }
    ],
    highlights: ["Premier private university", "International collaborations", "Strong placement", "Research focus"],
    website: "https://vit.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-tn-vel-02",
    name: "Sathyabama Institute of Science and Technology",
    location: "Chennai, Tamil Nadu, India",
    type: "Private",
    overallRanking: 42,
    establishedYear: 1987,
    courses: [
      { name: "Computer Science", ranking: 35, strength: "Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 42, strength: "Good", fees: "₹2.2L", feeType: "per-year" },
      { name: "Management", ranking: 55, strength: "Good", fees: "₹6L", feeType: "total" }
    ],
    highlights: ["Deemed university", "Research programs", "Industry partnerships", "Modern facilities"],
    website: "https://www.sathyabama.ac.in",
    image: "/placeholder.svg"
  }
];
