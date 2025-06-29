
import { College } from '../../../../../../../types/collegeTypes';

export const mysorePrivateEngineering: College[] = [
  {
    id: "eng-ka-mys-01",
    name: "JSS Science and Technology University",
    location: "Mysore, Karnataka, India",
    type: "Private",
    overallRanking: 52,
    establishedYear: 1963,
    courses: [
      { name: "Computer Science", ranking: 45, strength: "Good", fees: "₹2.8L", feeType: "per-year" },
      { name: "Engineering", ranking: 52, strength: "Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "Medicine", ranking: 38, strength: "Good", fees: "₹12L", feeType: "per-year" },
      { name: "Pharmacy", ranking: 28, strength: "Good", fees: "₹1.8L", feeType: "per-year" }
    ],
    highlights: ["Deemed university", "Multi-disciplinary", "Strong alumni", "Research focus"],
    website: "https://www.jssuni.edu.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-ka-mys-02",
    name: "Vidyavardhaka College of Engineering",
    location: "Mysore, Karnataka, India",
    type: "Private",
    overallRanking: 68,
    establishedYear: 1997,
    courses: [
      { name: "Computer Science", ranking: 62, strength: "Average", fees: "₹1.8L", feeType: "per-year" },
      { name: "Engineering", ranking: 68, strength: "Average", fees: "₹1.6L", feeType: "per-year" },
      { name: "Electronics", ranking: 65, strength: "Average", fees: "₹1.7L", feeType: "per-year" }
    ],
    highlights: ["Autonomous college", "Affordable fees", "Industry partnerships", "Placement support"],
    website: "https://www.vvce.ac.in",
    image: "/placeholder.svg"
  }
];
