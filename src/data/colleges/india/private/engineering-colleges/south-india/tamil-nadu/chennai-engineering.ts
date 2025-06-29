
import { College } from '../../../../../../../types/collegeTypes';

export const chennaiPrivateEngineering: College[] = [
  {
    id: "eng-tn-che-01",
    name: "SRM Institute of Science and Technology",
    location: "Chennai, Tamil Nadu, India",
    type: "Private",
    overallRanking: 28,
    establishedYear: 1985,
    courses: [
      { name: "Computer Science", ranking: 22, strength: "Very Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 28, strength: "Good", fees: "₹2.2L", feeType: "per-year" },
      { name: "Management", ranking: 35, strength: "Good", fees: "₹10L", feeType: "total" }
    ],
    highlights: ["Deemed university", "International collaborations", "Strong research", "Industry partnerships"],
    website: "https://www.srmist.edu.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-tn-che-02",
    name: "Hindustan Institute of Technology",
    location: "Chennai, Tamil Nadu, India",
    type: "Private",
    overallRanking: 42,
    establishedYear: 1985,
    courses: [
      { name: "Computer Science", ranking: 35, strength: "Good", fees: "₹3.2L", feeType: "per-year" },
      { name: "Engineering", ranking: 42, strength: "Good", fees: "₹2.8L", feeType: "per-year" },
      { name: "Management", ranking: 45, strength: "Good", fees: "₹8L", feeType: "total" }
    ],
    highlights: ["Deemed university", "Aerospace focus", "Industry connect", "Research excellence"],
    website: "https://www.hindustanuniv.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-tn-che-03",
    name: "Saveetha Engineering College",
    location: "Chennai, Tamil Nadu, India",
    type: "Private",
    overallRanking: 55,
    establishedYear: 2001,
    courses: [
      { name: "Computer Science", ranking: 48, strength: "Good", fees: "₹2.8L", feeType: "per-year" },
      { name: "Engineering", ranking: 55, strength: "Good", fees: "₹2.5L", feeType: "per-year" }
    ],
    highlights: ["Autonomous college", "Strong placement", "Modern facilities", "Industry partnerships"],
    website: "https://www.saveetha.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-tn-che-04",
    name: "St. Joseph's College of Engineering",
    location: "Chennai, Tamil Nadu, India",
    type: "Private",
    overallRanking: 68,
    establishedYear: 1994,
    courses: [
      { name: "Computer Science", ranking: 58, strength: "Good", fees: "₹2.2L", feeType: "per-year" },
      { name: "Engineering", ranking: 68, strength: "Good", fees: "₹2L", feeType: "per-year" }
    ],
    highlights: ["Autonomous college", "Strong alumni", "Industry connect", "Quality education"],
    website: "https://www.sjce.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-tn-che-05",
    name: "Veltech Rangarajan Dr. Sagunthala R&D Institute",
    location: "Chennai, Tamil Nadu, India",
    type: "Private",
    overallRanking: 75,
    establishedYear: 1997,
    courses: [
      { name: "Computer Science", ranking: 65, strength: "Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 75, strength: "Good", fees: "₹2.2L", feeType: "per-year" }
    ],
    highlights: ["Deemed university", "Research focus", "Industry partnerships", "Modern labs"],
    website: "https://www.veltech.edu.in",
    image: "/placeholder.svg"
  }
];
