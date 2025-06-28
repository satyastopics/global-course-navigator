
import { College } from '../../../../../../../types/collegeTypes';

export const maharashtraPrivateLiberalArts: College[] = [
  {
    id: "lib-mh-01",
    name: "Flame University",
    location: "Pune, Maharashtra, India",
    type: "Private",
    overallRanking: 25,
    establishedYear: 2015,
    courses: [
      { name: "Liberal Arts", ranking: 15, strength: "Very Good", fees: "₹6L", feeType: "per-year" },
      { name: "Design", ranking: 20, strength: "Good", fees: "₹5.5L", feeType: "per-year" },
      { name: "Management", ranking: 35, strength: "Good", fees: "₹8L", feeType: "total" }
    ],
    highlights: ["Liberal education pioneer", "Interdisciplinary approach", "Modern campus", "Industry connect"],
    website: "https://www.flame.edu.in",
    image: "/placeholder.svg"
  },
  {
    id: "lib-mh-02",
    name: "Symbiosis School for Liberal Arts",
    location: "Pune, Maharashtra, India",
    type: "Private",
    overallRanking: 32,
    establishedYear: 2010,
    courses: [
      { name: "Liberal Arts", ranking: 22, strength: "Good", fees: "₹7L", feeType: "per-year" },
      { name: "Psychology", ranking: 18, strength: "Good", fees: "₹6.5L", feeType: "per-year" },
      { name: "Media Studies", ranking: 25, strength: "Good", fees: "₹7.5L", feeType: "per-year" }
    ],
    highlights: ["Part of Symbiosis", "Holistic education", "Research focus", "International exposure"],
    website: "https://www.ssla.edu.in",
    image: "/placeholder.svg"
  }
];
