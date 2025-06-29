
import { College } from '../../../../../../../types/collegeTypes';

export const mumbaiPrivateEngineering: College[] = [
  {
    id: "eng-mh-mum-01",
    name: "DJ Sanghvi College of Engineering",
    location: "Mumbai, Maharashtra, India",
    type: "Private",
    overallRanking: 38,
    establishedYear: 1994,
    courses: [
      { name: "Computer Science", ranking: 32, strength: "Good", fees: "₹1.8L", feeType: "per-year" },
      { name: "Engineering", ranking: 38, strength: "Good", fees: "₹1.6L", feeType: "per-year" },
      { name: "Information Technology", ranking: 35, strength: "Good", fees: "₹1.7L", feeType: "per-year" }
    ],
    highlights: ["Autonomous college", "Industry partnerships", "Strong placement", "Research focus"],
    website: "https://www.djsce.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-mh-mum-02",
    name: "K.J. Somaiya College of Engineering",
    location: "Mumbai, Maharashtra, India",
    type: "Private",
    overallRanking: 42,
    establishedYear: 1983,
    courses: [
      { name: "Computer Science", ranking: 36, strength: "Good", fees: "₹2L", feeType: "per-year" },
      { name: "Engineering", ranking: 42, strength: "Good", fees: "₹1.8L", feeType: "per-year" },
      { name: "Electronics", ranking: 38, strength: "Good", fees: "₹1.9L", feeType: "per-year" }
    ],
    highlights: ["Somaiya group", "Modern facilities", "Industry connect", "Research programs"],
    website: "https://www.somaiya.edu",
    image: "/placeholder.svg"
  },
  {
    id: "eng-mh-mum-03",
    name: "Mukesh Patel School of Technology",
    location: "Mumbai, Maharashtra, India",
    type: "Private",
    overallRanking: 48,
    establishedYear: 2006,
    courses: [
      { name: "Computer Science", ranking: 42, strength: "Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 48, strength: "Good", fees: "₹2.2L", feeType: "per-year" },
      { name: "Management", ranking: 58, strength: "Average", fees: "₹12L", feeType: "total" }
    ],
    highlights: ["NMIMS group", "Industry exposure", "Modern campus", "Placement support"],
    website: "https://www.nmims.edu",
    image: "/placeholder.svg"
  }
];
