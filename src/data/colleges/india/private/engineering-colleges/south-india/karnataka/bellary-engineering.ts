
import { College } from '../../../../../../../types/collegeTypes';

export const bellaryPrivateEngineering: College[] = [
  {
    id: "eng-ka-bel-01",
    name: "Vijayanagara Sri Krishnadevaraya University",
    location: "Bellary, Karnataka, India",
    type: "Private",
    overallRanking: 72,
    establishedYear: 2010,
    courses: [
      { name: "Computer Science", ranking: 65, strength: "Good", fees: "₹2L", feeType: "per-year" },
      { name: "Engineering", ranking: 72, strength: "Good", fees: "₹1.8L", feeType: "per-year" },
      { name: "Management", ranking: 80, strength: "Average", fees: "₹4L", feeType: "total" }
    ],
    highlights: ["State university", "Regional importance", "Affordable fees", "Quality education"],
    website: "https://www.vsku.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-ka-bel-02",
    name: "REVA University",
    location: "Bangalore, Karnataka, India",
    type: "Private",
    overallRanking: 48,
    establishedYear: 2013,
    courses: [
      { name: "Computer Science", ranking: 42, strength: "Good", fees: "₹3.2L", feeType: "per-year" },
      { name: "Engineering", ranking: 48, strength: "Good", fees: "₹2.8L", feeType: "per-year" },
      { name: "Management", ranking: 55, strength: "Good", fees: "₹8L", feeType: "total" }
    ],
    highlights: ["Private university", "Modern infrastructure", "Industry connect", "Research facilities"],
    website: "https://www.reva.edu.in",
    image: "/placeholder.svg"
  }
];
