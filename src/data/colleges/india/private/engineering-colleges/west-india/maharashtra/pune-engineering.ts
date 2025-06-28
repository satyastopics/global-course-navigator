
import { College } from '../../../../../../../types/collegeTypes';

export const punePrivateEngineering: College[] = [
  {
    id: "eng-mh-02",
    name: "College of Engineering Pune",
    location: "Pune, Maharashtra, India",
    type: "Private",
    overallRanking: 19,
    establishedYear: 1854,
    courses: [
      { name: "Computer Science", ranking: 15, strength: "Very Good", fees: "₹1.2L", feeType: "per-year" },
      { name: "Engineering", ranking: 19, strength: "Very Good", fees: "₹1L", feeType: "per-year" },
      { name: "Information Technology", ranking: 17, strength: "Very Good", fees: "₹1.1L", feeType: "per-year" }
    ],
    highlights: ["Historic institution", "Government aided", "Strong alumni", "Research excellence"],
    website: "https://www.coep.org.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-mh-03",
    name: "Pune Institute of Computer Technology",
    location: "Pune, Maharashtra, India",
    type: "Private",
    overallRanking: 31,
    establishedYear: 1983,
    courses: [
      { name: "Computer Science", ranking: 25, strength: "Good", fees: "₹1.8L", feeType: "per-year" },
      { name: "Information Technology", ranking: 23, strength: "Good", fees: "₹1.7L", feeType: "per-year" },
      { name: "Electronics", ranking: 28, strength: "Good", fees: "₹1.75L", feeType: "per-year" }
    ],
    highlights: ["Autonomous college", "IT focus", "Industry partnerships", "Strong placement"],
    website: "https://www.pict.edu",
    image: "/placeholder.svg"
  },
  {
    id: "eng-mh-04",
    name: "Vishwakarma Institute of Technology",
    location: "Pune, Maharashtra, India",
    type: "Private",
    overallRanking: 37,
    establishedYear: 1983,
    courses: [
      { name: "Computer Science", ranking: 31, strength: "Good", fees: "₹2.1L", feeType: "per-year" },
      { name: "Engineering", ranking: 37, strength: "Good", fees: "₹1.9L", feeType: "per-year" },
      { name: "Information Technology", ranking: 34, strength: "Good", fees: "₹2L", feeType: "per-year" }
    ],
    highlights: ["Autonomous college", "Industry connect", "Research facilities", "Modern infrastructure"],
    website: "https://www.vit.edu",
    image: "/placeholder.svg"
  }
];
