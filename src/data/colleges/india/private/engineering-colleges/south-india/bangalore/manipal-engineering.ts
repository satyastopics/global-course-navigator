
import { College } from '../../../../../../../types/collegeTypes';

export const manipalPrivateEngineering: College[] = [
  {
    id: "eng-kar-03",
    name: "Manipal Institute of Technology",
    location: "Manipal, Karnataka, India",
    type: "Private",
    overallRanking: 16,
    establishedYear: 1957,
    courses: [
      { name: "Computer Science", ranking: 12, strength: "Very Good", fees: "₹3.8L", feeType: "per-year" },
      { name: "Engineering", ranking: 16, strength: "Very Good", fees: "₹3.5L", feeType: "per-year" },
      { name: "Information Technology", ranking: 14, strength: "Very Good", fees: "₹3.6L", feeType: "per-year" }
    ],
    highlights: ["Deemed university", "Strong industry connect", "Research focus", "International programs"],
    website: "https://manipal.edu/mit.html",
    image: "/placeholder.svg"
  },
  {
    id: "eng-kar-04",
    name: "BMS College of Engineering",
    location: "Bangalore, Karnataka, India",
    type: "Private",
    overallRanking: 34,
    establishedYear: 1946,
    courses: [
      { name: "Computer Science", ranking: 28, strength: "Good", fees: "₹2.2L", feeType: "per-year" },
      { name: "Engineering", ranking: 34, strength: "Good", fees: "₹2L", feeType: "per-year" },
      { name: "Electronics", ranking: 30, strength: "Good", fees: "₹2.1L", feeType: "per-year" }
    ],
    highlights: ["Autonomous college", "Industry partnerships", "Strong alumni", "Placement record"],
    website: "https://www.bmsce.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-kar-05",
    name: "Dayananda Sagar College of Engineering",
    location: "Bangalore, Karnataka, India",
    type: "Private",
    overallRanking: 41,
    establishedYear: 1979,
    courses: [
      { name: "Computer Science", ranking: 35, strength: "Good", fees: "₹2.8L", feeType: "per-year" },
      { name: "Engineering", ranking: 41, strength: "Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "Information Science", ranking: 38, strength: "Good", fees: "₹2.6L", feeType: "per-year" }
    ],
    highlights: ["Autonomous college", "Modern infrastructure", "Industry exposure", "Research facilities"],
    website: "https://www.dsce.edu.in",
    image: "/placeholder.svg"
  }
];
