
import { College } from '../../../../../../../types/collegeTypes';

export const greaterNoidaPrivateEngineering: College[] = [
  {
    id: "eng-up-gn-01",
    name: "Sharda University",
    location: "Greater Noida, Uttar Pradesh, India",
    type: "Private",
    overallRanking: 45,
    establishedYear: 2009,
    courses: [
      { name: "Computer Science", ranking: 38, strength: "Good", fees: "₹2.8L", feeType: "per-year" },
      { name: "Engineering", ranking: 45, strength: "Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "Management", ranking: 55, strength: "Good", fees: "₹8L", feeType: "total" },
      { name: "Medicine", ranking: 42, strength: "Good", fees: "₹15L", feeType: "per-year" }
    ],
    highlights: ["Multi-disciplinary university", "International collaborations", "Modern campus", "Industry partnerships"],
    website: "https://www.sharda.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-up-gn-02",
    name: "GL Bajaj Institute of Technology",
    location: "Greater Noida, Uttar Pradesh, India",
    type: "Private",
    overallRanking: 65,
    establishedYear: 1998,
    courses: [
      { name: "Computer Science", ranking: 58, strength: "Average", fees: "₹2.2L", feeType: "per-year" },
      { name: "Engineering", ranking: 65, strength: "Average", fees: "₹2L", feeType: "per-year" },
      { name: "Management", ranking: 75, strength: "Average", fees: "₹6L", feeType: "total" }
    ],
    highlights: ["Affordable education", "Industry connect", "Placement support", "Modern labs"],
    website: "https://www.glbitm.org",
    image: "/placeholder.svg"
  }
];
