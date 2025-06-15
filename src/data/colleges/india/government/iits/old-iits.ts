
import { College } from '../../../../../types/collegeTypes';

export const oldIITs: College[] = [
  {
    id: "11",
    name: "Indian Institute of Technology Bombay",
    location: "Mumbai, Maharashtra, India",
    type: "Government",
    overallRanking: 1,
    establishedYear: 1958,
    courses: [
      { name: "Computer Science", ranking: 1, strength: "Excellent", fees: "₹2L", feeType: "per-year" },
      { name: "Engineering", ranking: 1, strength: "Excellent", fees: "₹2L", feeType: "per-year" },
      { name: "Management", ranking: 5, strength: "Very Good", fees: "₹5L", feeType: "per-year" },
      { name: "Design", ranking: 1, strength: "Excellent", fees: "₹2.5L", feeType: "per-year" }
    ],
    highlights: ["Top IIT", "Premier engineering institute", "Excellent placement record", "Strong alumni network"],
    website: "https://www.iitb.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "12",
    name: "Indian Institute of Technology Delhi",
    location: "New Delhi, India",
    type: "Government",
    overallRanking: 2,
    establishedYear: 1961,
    courses: [
      { name: "Computer Science", ranking: 2, strength: "Excellent", fees: "₹2L", feeType: "per-year" },
      { name: "Engineering", ranking: 2, strength: "Excellent", fees: "₹2L", feeType: "per-year" },
      { name: "Management", ranking: 8, strength: "Very Good", fees: "₹4L", feeType: "per-year" },
      { name: "Mathematics", ranking: 3, strength: "Very Good", fees: "₹1.5L", feeType: "per-year" }
    ],
    highlights: ["Capital location", "Research excellence", "Industry partnerships", "Innovation hub"],
    website: "https://www.iitd.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "13",
    name: "Indian Institute of Technology Madras",
    location: "Chennai, Tamil Nadu, India",
    type: "Government",
    overallRanking: 3,
    establishedYear: 1959,
    courses: [
      { name: "Computer Science", ranking: 3, strength: "Excellent", fees: "₹2L", feeType: "per-year" },
      { name: "Engineering", ranking: 3, strength: "Excellent", fees: "₹2L", feeType: "per-year" },
      { name: "Ocean Engineering", ranking: 1, strength: "Excellent", fees: "₹2L", feeType: "per-year" },
      { name: "Aerospace Engineering", ranking: 2, strength: "Excellent", fees: "₹2L", feeType: "per-year" }
    ],
    highlights: ["First IIT", "Research focused", "Strong in aerospace", "Beautiful campus"],
    website: "https://www.iitm.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "14",
    name: "Indian Institute of Technology Kanpur",
    location: "Kanpur, Uttar Pradesh, India",
    type: "Government",
    overallRanking: 4,
    establishedYear: 1959,
    courses: [
      { name: "Computer Science", ranking: 4, strength: "Excellent", fees: "₹2L", feeType: "per-year" },
      { name: "Engineering", ranking: 4, strength: "Excellent", fees: "₹2L", feeType: "per-year" },
      { name: "Materials Science", ranking: 2, strength: "Excellent", fees: "₹2L", feeType: "per-year" },
      { name: "Chemical Engineering", ranking: 3, strength: "Excellent", fees: "₹2L", feeType: "per-year" }
    ],
    highlights: ["Strong research culture", "Innovation excellence", "Industry collaboration", "Academic rigor"],
    website: "https://www.iitk.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "15",
    name: "Indian Institute of Technology Kharagpur",
    location: "Kharagpur, West Bengal, India",
    type: "Government",
    overallRanking: 5,
    establishedYear: 1951,
    courses: [
      { name: "Computer Science", ranking: 5, strength: "Excellent", fees: "₹2L", feeType: "per-year" },
      { name: "Engineering", ranking: 5, strength: "Excellent", fees: "₹2L", feeType: "per-year" },
      { name: "Mining Engineering", ranking: 1, strength: "Excellent", fees: "₹2L", feeType: "per-year" },
      { name: "Architecture", ranking: 3, strength: "Very Good", fees: "₹2L", feeType: "per-year" }
    ],
    highlights: ["Oldest IIT", "Largest campus", "Diverse programs", "Strong tradition"],
    website: "https://www.iitkgp.ac.in",
    image: "/placeholder.svg"
  }
];
