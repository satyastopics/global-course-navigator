
import { College } from '../../../../../../../types/collegeTypes';

export const coimbatorePrivateEngineering: College[] = [
  {
    id: "eng-tn-coi-01",
    name: "Amrita Vishwa Vidyapeetham",
    location: "Coimbatore, Tamil Nadu, India",
    type: "Private",
    overallRanking: 15,
    establishedYear: 1994,
    courses: [
      { name: "Computer Science", ranking: 12, strength: "Excellent", fees: "₹3.2L", feeType: "per-year" },
      { name: "Engineering", ranking: 15, strength: "Very Good", fees: "₹2.8L", feeType: "per-year" },
      { name: "Management", ranking: 18, strength: "Very Good", fees: "₹12L", feeType: "total" }
    ],
    highlights: ["Deemed university", "Research excellence", "International collaborations", "Spiritual values"],
    website: "https://www.amrita.edu",
    image: "/placeholder.svg"
  },
  {
    id: "eng-tn-coi-02",
    name: "PSG College of Technology",
    location: "Coimbatore, Tamil Nadu, India",
    type: "Private",
    overallRanking: 32,
    establishedYear: 1951,
    courses: [
      { name: "Computer Science", ranking: 28, strength: "Very Good", fees: "₹1.8L", feeType: "per-year" },
      { name: "Engineering", ranking: 32, strength: "Good", fees: "₹1.5L", feeType: "per-year" }
    ],
    highlights: ["Autonomous college", "Strong industry connect", "Research excellence", "Alumni network"],
    website: "https://www.psgtech.edu",
    image: "/placeholder.svg"
  },
  {
    id: "eng-tn-coi-03",
    name: "Karunya Institute of Technology",
    location: "Coimbatore, Tamil Nadu, India",
    type: "Private",
    overallRanking: 48,
    establishedYear: 1986,
    courses: [
      { name: "Computer Science", ranking: 42, strength: "Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 48, strength: "Good", fees: "₹2.2L", feeType: "per-year" }
    ],
    highlights: ["Deemed university", "Christian values", "Research focus", "Industry partnerships"],
    website: "https://www.karunya.edu",
    image: "/placeholder.svg"
  },
  {
    id: "eng-tn-coi-04",
    name: "Kumaraguru College of Technology",
    location: "Coimbatore, Tamil Nadu, India",
    type: "Private",
    overallRanking: 58,
    establishedYear: 1984,
    courses: [
      { name: "Computer Science", ranking: 52, strength: "Good", fees: "₹2.2L", feeType: "per-year" },
      { name: "Engineering", ranking: 58, strength: "Good", fees: "₹2L", feeType: "per-year" }
    ],
    highlights: ["Autonomous college", "Industry partnerships", "Modern facilities", "Strong placements"],
    website: "https://www.kct.ac.in",
    image: "/placeholder.svg"
  }
];
