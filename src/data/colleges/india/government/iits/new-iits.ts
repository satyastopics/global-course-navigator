
import { College } from '../../../../../types/collegeTypes';

export const newIITs: College[] = [
  {
    id: "16",
    name: "Indian Institute of Technology Roorkee",
    location: "Roorkee, Uttarakhand, India",
    type: "Government",
    overallRanking: 6,
    establishedYear: 1847,
    courses: [
      { name: "Civil Engineering", ranking: 1, strength: "Excellent", fees: "₹2L", feeType: "per-year" },
      { name: "Engineering", ranking: 6, strength: "Excellent", fees: "₹2L", feeType: "per-year" },
      { name: "Computer Science", ranking: 6, strength: "Excellent", fees: "₹2L", feeType: "per-year" },
      { name: "Architecture", ranking: 2, strength: "Excellent", fees: "₹2L", feeType: "per-year" }
    ],
    highlights: ["Oldest technical institution", "Civil engineering excellence", "Heritage campus", "Strong alumni"],
    website: "https://www.iitr.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "17",
    name: "Indian Institute of Technology Guwahati",
    location: "Guwahati, Assam, India",
    type: "Government",
    overallRanking: 7,
    establishedYear: 1994,
    courses: [
      { name: "Computer Science", ranking: 7, strength: "Excellent", fees: "₹2L", feeType: "per-year" },
      { name: "Engineering", ranking: 7, strength: "Excellent", fees: "₹2L", feeType: "per-year" },
      { name: "Biotechnology", ranking: 3, strength: "Very Good", fees: "₹2L", feeType: "per-year" },
      { name: "Design", ranking: 4, strength: "Very Good", fees: "₹2.5L", feeType: "per-year" }
    ],
    highlights: ["Northeast hub", "Research focus", "Beautiful campus", "Growing reputation"],
    website: "https://www.iitg.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "18",
    name: "Indian Institute of Technology Hyderabad",
    location: "Hyderabad, Telangana, India",
    type: "Government",
    overallRanking: 8,
    establishedYear: 2008,
    courses: [
      { name: "Computer Science", ranking: 8, strength: "Excellent", fees: "₹2L", feeType: "per-year" },
      { name: "Engineering", ranking: 8, strength: "Excellent", fees: "₹2L", feeType: "per-year" },
      { name: "Artificial Intelligence", ranking: 2, strength: "Excellent", fees: "₹2L", feeType: "per-year" },
      { name: "Biomedical Engineering", ranking: 4, strength: "Very Good", fees: "₹2L", feeType: "per-year" }
    ],
    highlights: ["New generation IIT", "AI focus", "Modern facilities", "Industry partnerships"],
    website: "https://www.iith.ac.in",
    image: "/placeholder.svg"
  }
];
