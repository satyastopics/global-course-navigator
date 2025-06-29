
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
      { name: "Computer Science", ranking: 75, strength: "Good", fees: "₹1.8L", feeType: "per-year" },
      { name: "Engineering", ranking: 85, strength: "Good", fees: "₹1.6L", feeType: "per-year" },
      { name: "Management", ranking: 90, strength: "Average", fees: "₹6L", feeType: "total" }
    ],
    highlights: ["NAAC A+ accredited", "Industry partnerships", "Modern labs", "Placement support"],
    website: "https://www.integraluniversity.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-up-lko-02",
    name: "ABES Engineering College",
    location: "Ghaziabad, Uttar Pradesh, India",
    type: "Private",
    overallRanking: 92,
    establishedYear: 2000,
    courses: [
      { name: "Computer Science", ranking: 80, strength: "Good", fees: "₹2.2L", feeType: "per-year" },
      { name: "Engineering", ranking: 92, strength: "Good", fees: "₹2L", feeType: "per-year" },
      { name: "Management", ranking: 95, strength: "Average", fees: "₹7L", feeType: "total" }
    ],
    highlights: ["NAAC accredited", "Strong industry connect", "Research facilities", "Active placements"],
    website: "https://www.abes.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-up-lko-03",
    name: "Sharda University",
    location: "Greater Noida, Uttar Pradesh, India",
    type: "Private",
    overallRanking: 78,
    establishedYear: 2009,
    courses: [
      { name: "Computer Science", ranking: 68, strength: "Good", fees: "₹2.8L", feeType: "per-year" },
      { name: "Engineering", ranking: 78, strength: "Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "Management", ranking: 85, strength: "Good", fees: "₹8L", feeType: "total" }
    ],
    highlights: ["International collaborations", "Modern campus", "Research focus", "Global exposure"],
    website: "https://www.sharda.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-up-lko-04",
    name: "GL Bajaj Institute of Technology",
    location: "Greater Noida, Uttar Pradesh, India",
    type: "Private",
    overallRanking: 88,
    establishedYear: 1998,
    courses: [
      { name: "Computer Science", ranking: 78, strength: "Good", fees: "₹2.1L", feeType: "per-year" },
      { name: "Engineering", ranking: 88, strength: "Good", fees: "₹1.9L", feeType: "per-year" }
    ],
    highlights: ["AICTE approved", "Industry partnerships", "Strong alumni", "Placement support"],
    website: "https://www.glbajaj.ac.in",
    image: "/placeholder.svg"
  }
];
