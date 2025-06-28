
import { College } from '../../../../../../../types/collegeTypes';

export const nagpurPrivateEngineering: College[] = [
  {
    id: "eng-mh-05",
    name: "Shri Ramdeobaba College of Engineering and Management",
    location: "Nagpur, Maharashtra, India",
    type: "Private",
    overallRanking: 44,
    establishedYear: 1984,
    courses: [
      { name: "Computer Science", ranking: 38, strength: "Good", fees: "₹1.9L", feeType: "per-year" },
      { name: "Engineering", ranking: 44, strength: "Good", fees: "₹1.7L", feeType: "per-year" },
      { name: "Information Technology", ranking: 40, strength: "Good", fees: "₹1.8L", feeType: "per-year" }
    ],
    highlights: ["Autonomous college", "Industry partnerships", "Strong alumni", "Research facilities"],
    website: "https://www.rknec.edu",
    image: "/placeholder.svg"
  },
  {
    id: "eng-mh-06",
    name: "G.H. Raisoni College of Engineering",
    location: "Nagpur, Maharashtra, India",
    type: "Private",
    overallRanking: 49,
    establishedYear: 1996,
    courses: [
      { name: "Computer Science", ranking: 42, strength: "Good", fees: "₹2.1L", feeType: "per-year" },
      { name: "Engineering", ranking: 49, strength: "Good", fees: "₹1.9L", feeType: "per-year" },
      { name: "Electronics", ranking: 45, strength: "Good", fees: "₹2L", feeType: "per-year" }
    ],
    highlights: ["Multi-campus university", "Industry connect", "Modern infrastructure", "Placement support"],
    website: "https://www.ghrce.raisoni.net",
    image: "/placeholder.svg"
  }
];
