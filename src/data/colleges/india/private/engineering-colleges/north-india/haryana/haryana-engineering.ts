
import { College } from '../../../../../../../types/collegeTypes';

export const haryanaPrivateEngineering: College[] = [
  {
    id: "eng-har-01",
    name: "Manav Rachna International Institute of Research and Studies",
    location: "Faridabad, Haryana, India",
    type: "Private",
    overallRanking: 35,
    establishedYear: 1997,
    courses: [
      { name: "Computer Science", ranking: 30, strength: "Good", fees: "₹2.8L", feeType: "per-year" },
      { name: "Engineering", ranking: 35, strength: "Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "Management", ranking: 55, strength: "Good", fees: "₹9L", feeType: "total" }
    ],
    highlights: ["Deemed university", "Industry partnerships", "Modern campus", "Research facilities"],
    website: "https://www.manavrachna.edu.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-har-02",
    name: "The NorthCap University",
    location: "Gurugram, Haryana, India",
    type: "Private",
    overallRanking: 42,
    establishedYear: 1996,
    courses: [
      { name: "Computer Science", ranking: 35, strength: "Good", fees: "₹3.2L", feeType: "per-year" },
      { name: "Engineering", ranking: 42, strength: "Good", fees: "₹2.9L", feeType: "per-year" },
      { name: "Management", ranking: 60, strength: "Average", fees: "₹11L", feeType: "total" }
    ],
    highlights: ["Private university", "Corporate partnerships", "Placement focus", "Industry exposure"],
    website: "https://www.ncuindia.edu",
    image: "/placeholder.svg"
  }
];
