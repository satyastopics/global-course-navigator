
import { College } from '../../../../../../types/collegeTypes';

export const upPrivateLawColleges: College[] = [
  {
    id: "law-up-01",
    name: "Sharda University School of Law",
    location: "Greater Noida, Uttar Pradesh, India",
    type: "Private",
    overallRanking: 42,
    establishedYear: 2009,
    courses: [
      { name: "Law", ranking: 35, strength: "Good", fees: "₹10L", feeType: "total" },
      { name: "LLM", ranking: 38, strength: "Good", fees: "₹7L", feeType: "total" }
    ],
    highlights: ["Multi-disciplinary university", "Moot court", "Legal aid clinic", "Industry partnerships"],
    website: "https://www.sharda.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "law-up-02",
    name: "Galgotias University School of Law",
    location: "Greater Noida, Uttar Pradesh, India",
    type: "Private",
    overallRanking: 48,
    establishedYear: 2011,
    courses: [
      { name: "Law", ranking: 42, strength: "Good", fees: "₹9L", feeType: "total" },
      { name: "LLM", ranking: 45, strength: "Good", fees: "₹6L", feeType: "total" }
    ],
    highlights: ["Modern campus", "Industry connect", "Research facilities", "Placement support"],
    website: "https://www.galgotiasuniversity.edu.in",
    image: "/placeholder.svg"
  }
];
