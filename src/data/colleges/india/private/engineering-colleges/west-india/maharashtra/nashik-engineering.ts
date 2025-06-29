
import { College } from '../../../../../../../types/collegeTypes';

export const nashikPrivateEngineering: College[] = [
  {
    id: "eng-mh-nsk-01",
    name: "Sandip University",
    location: "Nashik, Maharashtra, India",
    type: "Private",
    overallRanking: 58,
    establishedYear: 2017,
    courses: [
      { name: "Computer Science", ranking: 52, strength: "Good", fees: "₹2.8L", feeType: "per-year" },
      { name: "Engineering", ranking: 58, strength: "Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "Management", ranking: 65, strength: "Good", fees: "₹6L", feeType: "total" }
    ],
    highlights: ["Multi-disciplinary university", "Modern campus", "Industry partnerships", "Research focus"],
    website: "https://www.sandipuniversity.edu.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-mh-nsk-02",
    name: "MET Institute of Engineering",
    location: "Nashik, Maharashtra, India",
    type: "Private",
    overallRanking: 68,
    establishedYear: 1989,
    courses: [
      { name: "Computer Science", ranking: 62, strength: "Good", fees: "₹2.2L", feeType: "per-year" },
      { name: "Engineering", ranking: 68, strength: "Good", fees: "₹2L", feeType: "per-year" }
    ],
    highlights: ["MET group", "Industry connect", "Quality education", "Strong placement"],
    website: "https://www.metnashik.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-mh-nsk-03",
    name: "Gokhale Education Society's College",
    location: "Nashik, Maharashtra, India",
    type: "Private",
    overallRanking: 75,
    establishedYear: 1984,
    courses: [
      { name: "Computer Science", ranking: 68, strength: "Good", fees: "₹1.8L", feeType: "per-year" },
      { name: "Engineering", ranking: 75, strength: "Good", fees: "₹1.6L", feeType: "per-year" }
    ],
    highlights: ["Autonomous college", "Affordable fees", "Quality education", "Industry partnerships"],
    website: "https://www.gescoe.com",
    image: "/placeholder.svg"
  }
];
