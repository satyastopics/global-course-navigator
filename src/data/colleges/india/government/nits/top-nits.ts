
import { College } from '../../../../../types/collegeTypes';

export const topNITs: College[] = [
  {
    id: "7",
    name: "National Institute of Technology Trichy",
    location: "Tiruchirappalli, Tamil Nadu, India",
    type: "Government",
    overallRanking: 9,
    establishedYear: 1964,
    courses: [
      { name: "Computer Science", ranking: 9, strength: "Very Good", fees: "₹1.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 12, strength: "Very Good", fees: "₹1.5L", feeType: "per-year" },
      { name: "Management", ranking: 18, strength: "Good", fees: "₹3L", feeType: "per-year" }
    ],
    highlights: ["Top NIT", "Strong placement record", "Research excellence", "Industry partnerships"],
    website: "https://www.nitt.edu",
    image: "/placeholder.svg"
  },
  {
    id: "8",
    name: "National Institute of Technology Warangal",
    location: "Warangal, Telangana, India",
    type: "Government",
    overallRanking: 19,
    establishedYear: 1959,
    courses: [
      { name: "Computer Science", ranking: 15, strength: "Very Good", fees: "₹1.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 19, strength: "Good", fees: "₹1.5L", feeType: "per-year" },
      { name: "Management", ranking: 25, strength: "Good", fees: "₹3L", feeType: "per-year" }
    ],
    highlights: ["Premier NIT", "Strong alumni network", "Research focus", "Modern facilities"],
    website: "https://www.nitw.ac.in",
    image: "/placeholder.svg"
  }
];
