
import { College } from '../../../../types/collegeTypes';

export const nitColleges: College[] = [
  {
    id: "47",
    name: "National Institute of Technology Trichy",
    location: "Tiruchirappalli, Tamil Nadu, India",
    type: "Government",
    overallRanking: 27,
    establishedYear: 1964,
    courses: [
      { name: "Engineering", ranking: 9, strength: "Excellent", fees: "₹1.8L", feeType: "per-year" },
      { name: "Computer Science", ranking: 12, strength: "Very Good", fees: "₹1.8L", feeType: "per-year" },
      { name: "Mechanical Engineering", ranking: 6, strength: "Very Good", fees: "₹1.8L", feeType: "per-year" },
      { name: "Electrical Engineering", ranking: 8, strength: "Very Good", fees: "₹1.8L", feeType: "per-year" }
    ],
    highlights: ["Top NIT", "Engineering excellence", "Strong alumni network", "Industry connections"],
    website: "https://www.nitt.edu",
    image: "/placeholder.svg"
  },
  {
    id: "48",
    name: "National Institute of Technology Warangal",
    location: "Warangal, Telangana, India",
    type: "Government",
    overallRanking: 28,
    establishedYear: 1959,
    courses: [
      { name: "Engineering", ranking: 10, strength: "Excellent", fees: "₹1.8L", feeType: "per-year" },
      { name: "Computer Science", ranking: 13, strength: "Very Good", fees: "₹1.8L", feeType: "per-year" },
      { name: "Civil Engineering", ranking: 5, strength: "Very Good", fees: "₹1.8L", feeType: "per-year" },
      { name: "Chemical Engineering", ranking: 7, strength: "Very Good", fees: "₹1.8L", feeType: "per-year" }
    ],
    highlights: ["Premier NIT", "Strong engineering programs", "Research excellence", "Industrial partnerships"],
    website: "https://www.nitw.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "49",
    name: "National Institute of Technology Karnataka",
    location: "Surathkal, Karnataka, India",
    type: "Government",
    overallRanking: 29,
    establishedYear: 1960,
    courses: [
      { name: "Engineering", ranking: 11, strength: "Very Good", fees: "₹1.8L", feeType: "per-year" },
      { name: "Computer Science", ranking: 14, strength: "Very Good", fees: "₹1.8L", feeType: "per-year" },
      { name: "Information Technology", ranking: 6, strength: "Very Good", fees: "₹1.8L", feeType: "per-year" },
      { name: "Mining Engineering", ranking: 3, strength: "Very Good", fees: "₹1.8L", feeType: "per-year" }
    ],
    highlights: ["Coastal location", "Strong technical programs", "Industry exposure", "Research focus"],
    website: "https://www.nitk.ac.in",
    image: "/placeholder.svg"
  }
];
