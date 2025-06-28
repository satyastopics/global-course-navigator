
import { College } from '../../../../../../../types/collegeTypes';

export const maharashtraPrivateDesign: College[] = [
  {
    id: "des-mh-01",
    name: "MIT Institute of Design",
    location: "Pune, Maharashtra, India",
    type: "Private",
    overallRanking: 18,
    establishedYear: 2006,
    courses: [
      { name: "Industrial Design", ranking: 12, strength: "Very Good", fees: "₹8L", feeType: "per-year" },
      { name: "Communication Design", ranking: 15, strength: "Good", fees: "₹7.5L", feeType: "per-year" },
      { name: "Fashion Design", ranking: 20, strength: "Good", fees: "₹8.5L", feeType: "per-year" }
    ],
    highlights: ["Design excellence", "Industry partnerships", "Modern facilities", "Innovation focus"],
    website: "https://www.mitid.edu.in",
    image: "/placeholder.svg"
  },
  {
    id: "des-mh-02",
    name: "Symbiosis Institute of Design",
    location: "Pune, Maharashtra, India",
    type: "Private",
    overallRanking: 28,
    establishedYear: 2002,
    courses: [
      { name: "Fashion Design", ranking: 18, strength: "Good", fees: "₹6L", feeType: "per-year" },
      { name: "Interior Design", ranking: 22, strength: "Good", fees: "₹5.5L", feeType: "per-year" },
      { name: "Product Design", ranking: 25, strength: "Good", fees: "₹6.5L", feeType: "per-year" }
    ],
    highlights: ["Part of Symbiosis", "Creative education", "Industry exposure", "Modern studios"],
    website: "https://www.sid.edu.in",
    image: "/placeholder.svg"
  }
];
