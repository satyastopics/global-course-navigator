
import { College } from '../../../../../../../types/collegeTypes';

export const punePrivateEngineering: College[] = [
  {
    id: "eng-mh-pun-01",
    name: "College of Engineering Pune",
    location: "Pune, Maharashtra, India",
    type: "Private",
    overallRanking: 38,
    establishedYear: 1854,
    courses: [
      { name: "Computer Science", ranking: 32, strength: "Good", fees: "₹1.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 38, strength: "Good", fees: "₹1.2L", feeType: "per-year" },
      { name: "Management", ranking: 45, strength: "Good", fees: "₹5L", feeType: "total" }
    ],
    highlights: ["Historic institution", "Government aided", "Strong alumni", "Affordable fees"],
    website: "https://www.coep.org.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-mh-pun-02",
    name: "MIT World Peace University",
    location: "Pune, Maharashtra, India",
    type: "Private",
    overallRanking: 48,
    establishedYear: 1983,
    courses: [
      { name: "Computer Science", ranking: 40, strength: "Good", fees: "₹3L", feeType: "per-year" },
      { name: "Engineering", ranking: 48, strength: "Good", fees: "₹2.8L", feeType: "per-year" },
      { name: "Management", ranking: 45, strength: "Good", fees: "₹10L", feeType: "total" }
    ],
    highlights: ["Private university", "Holistic education", "Modern campus", "Industry partnerships"],
    website: "https://www.mitwpu.edu.in",
    image: "/placeholder.svg"
  }
];
