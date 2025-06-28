
import { College } from '../../../../../../../types/collegeTypes';

export const lucknowPrivateEngineering: College[] = [
  {
    id: "eng-up-02",
    name: "Integral University",
    location: "Lucknow, Uttar Pradesh, India",
    type: "Private",
    overallRanking: 46,
    establishedYear: 2004,
    courses: [
      { name: "Computer Science", ranking: 40, strength: "Good", fees: "₹1.8L", feeType: "per-year" },
      { name: "Engineering", ranking: 46, strength: "Good", fees: "₹1.6L", feeType: "per-year" },
      { name: "Management", ranking: 65, strength: "Average", fees: "₹6L", feeType: "total" }
    ],
    highlights: ["Deemed university", "Affordable fees", "Modern campus", "Industry exposure"],
    website: "https://www.iul.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-up-03",
    name: "ABES Engineering College",
    location: "Ghaziabad, Uttar Pradesh, India",
    type: "Private",
    overallRanking: 52,
    establishedYear: 2000,
    courses: [
      { name: "Computer Science", ranking: 45, strength: "Good", fees: "₹2.2L", feeType: "per-year" },
      { name: "Engineering", ranking: 52, strength: "Good", fees: "₹2L", feeType: "per-year" },
      { name: "Information Technology", ranking: 48, strength: "Good", fees: "₹2.1L", feeType: "per-year" }
    ],
    highlights: ["AICTE approved", "Industry partnerships", "Modern labs", "Placement cell"],
    website: "https://www.abes.ac.in",
    image: "/placeholder.svg"
  }
];
