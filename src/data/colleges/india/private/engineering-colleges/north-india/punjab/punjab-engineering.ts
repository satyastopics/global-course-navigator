
import { College } from '../../../../../../../types/collegeTypes';

export const punjabPrivateEngineering: College[] = [
  {
    id: "54",
    name: "Thapar Institute of Engineering and Technology",
    location: "Patiala, Punjab, India",
    type: "Private",
    overallRanking: 29,
    establishedYear: 1956,
    courses: [
      { name: "Computer Science", ranking: 24, strength: "Good", fees: "₹3.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 29, strength: "Good", fees: "₹3.2L", feeType: "per-year" },
      { name: "Management", ranking: 45, strength: "Good", fees: "₹12L", feeType: "total" }
    ],
    highlights: ["Deemed university", "Industry partnerships", "Strong alumni", "Research focus"],
    website: "https://www.thapar.edu",
    image: "/placeholder.svg"
  },
  {
    id: "eng-pb-02",
    name: "Lovely Professional University",
    location: "Phagwara, Punjab, India",
    type: "Private",
    overallRanking: 42,
    establishedYear: 2005,
    courses: [
      { name: "Engineering", ranking: 35, strength: "Good", fees: "₹10L", feeType: "total" },
      { name: "Computer Science", ranking: 38, strength: "Good", fees: "₹10L", feeType: "total" },
      { name: "Management", ranking: 50, strength: "Good", fees: "₹6L", feeType: "total" },
      { name: "Design", ranking: 25, strength: "Good", fees: "₹8L", feeType: "total" }
    ],
    highlights: ["Large campus", "Diverse programs", "International students", "Modern facilities"],
    website: "https://www.lpu.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-pb-03",
    name: "Chandigarh University",
    location: "Mohali, Punjab, India",
    type: "Private",
    overallRanking: 48,
    establishedYear: 2012,
    courses: [
      { name: "Engineering", ranking: 42, strength: "Good", fees: "₹9L", feeType: "total" },
      { name: "Computer Science", ranking: 45, strength: "Good", fees: "₹9L", feeType: "total" },
      { name: "Management", ranking: 55, strength: "Good", fees: "₹5L", feeType: "total" }
    ],
    highlights: ["Rapidly growing university", "Industry connect", "Modern infrastructure", "Placement focus"],
    website: "https://www.cuchd.in",
    image: "/placeholder.svg"
  }
];
