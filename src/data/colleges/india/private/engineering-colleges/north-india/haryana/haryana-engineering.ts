
import { College } from '../../../../../../../types/collegeTypes';

export const haryanaPrivateEngineering: College[] = [
  {
    id: "eng-hr-gur-01",
    name: "O.P. Jindal Global University",
    location: "Sonipat, Haryana, India",
    type: "Private",
    overallRanking: 52,
    establishedYear: 2009,
    courses: [
      { name: "Computer Science", ranking: 45, strength: "Good", fees: "₹3.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 52, strength: "Good", fees: "₹3.2L", feeType: "per-year" },
      { name: "Management", ranking: 35, strength: "Good", fees: "₹15L", feeType: "total" }
    ],
    highlights: ["Global university", "Liberal arts focus", "International faculty", "Modern campus"],
    website: "https://www.jgu.edu.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-hr-gur-02",
    name: "Ansal University",
    location: "Gurgaon, Haryana, India",
    type: "Private",
    overallRanking: 78,
    establishedYear: 2012,
    courses: [
      { name: "Computer Science", ranking: 68, strength: "Average", fees: "₹2.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 78, strength: "Average", fees: "₹2.2L", feeType: "per-year" },
      { name: "Management", ranking: 80, strength: "Average", fees: "₹8L", feeType: "total" }
    ],
    highlights: ["Private university", "Modern infrastructure", "Industry connect", "Growing reputation"],
    website: "https://www.ansaluniversity.edu.in",
    image: "/placeholder.svg"
  }
];
