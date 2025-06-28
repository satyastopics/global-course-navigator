
import { College } from '../../../../../types/collegeTypes';

export const northIndiaPrivateTechnology: College[] = [
  {
    id: "tech-nor-01",
    name: "Netaji Subhas Institute of Technology",
    location: "New Delhi, India",
    type: "Private",
    overallRanking: 28,
    establishedYear: 1983,
    courses: [
      { name: "Computer Science", ranking: 22, strength: "Good", fees: "₹1.2L", feeType: "per-year" },
      { name: "Information Technology", ranking: 25, strength: "Good", fees: "₹1.1L", feeType: "per-year" },
      { name: "Electronics", ranking: 28, strength: "Good", fees: "₹1L", feeType: "per-year" }
    ],
    highlights: ["Delhi government college", "Industry partnerships", "Research focus", "Strong placement"],
    website: "https://www.nsit.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "tech-nor-02",
    name: "Guru Gobind Singh Indraprastha University",
    location: "New Delhi, India",
    type: "Private",
    overallRanking: 52,
    establishedYear: 1998,
    courses: [
      { name: "Computer Science", ranking: 45, strength: "Good", fees: "₹2L", feeType: "per-year" },
      { name: "Information Technology", ranking: 48, strength: "Good", fees: "₹1.9L", feeType: "per-year" },
      { name: "Electronics", ranking: 50, strength: "Good", fees: "₹1.8L", feeType: "per-year" }
    ],
    highlights: ["State university", "Multiple campuses", "Industry connect", "Diverse programs"],
    website: "https://www.ipu.ac.in",
    image: "/placeholder.svg"
  }
];
