
import { College } from '../../../../../../../types/collegeTypes';

export const himachalPrivateEngineering: College[] = [
  {
    id: "eng-hp-01",
    name: "Lovely Professional University",
    location: "Phagwara, Punjab, India",
    type: "Private",
    overallRanking: 55,
    establishedYear: 2005,
    courses: [
      { name: "Computer Science", ranking: 48, strength: "Good", fees: "₹2.8L", feeType: "per-year" },
      { name: "Engineering", ranking: 55, strength: "Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "Management", ranking: 65, strength: "Average", fees: "₹8L", feeType: "total" },
      { name: "Design", ranking: 42, strength: "Good", fees: "₹3L", feeType: "per-year" }
    ],
    highlights: ["Large private university", "Multi-disciplinary", "Industry exposure", "Modern campus"],
    website: "https://www.lpu.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-hp-02",
    name: "Chitkara University",
    location: "Solan, Himachal Pradesh, India",
    type: "Private",
    overallRanking: 62,
    establishedYear: 2010,
    courses: [
      { name: "Computer Science", ranking: 55, strength: "Good", fees: "₹3L", feeType: "per-year" },
      { name: "Engineering", ranking: 62, strength: "Average", fees: "₹2.8L", feeType: "per-year" },
      { name: "Management", ranking: 68, strength: "Average", fees: "₹9L", feeType: "total" }
    ],
    highlights: ["Hill station campus", "Industry partnerships", "Modern facilities", "Research focus"],
    website: "https://www.chitkara.edu.in",
    image: "/placeholder.svg"
  }
];
