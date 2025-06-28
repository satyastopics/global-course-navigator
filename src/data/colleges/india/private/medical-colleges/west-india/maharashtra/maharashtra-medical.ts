
import { College } from '../../../../../../../types/collegeTypes';

export const maharashtraPrivateMedical: College[] = [
  {
    id: "med-mh-01",
    name: "Bharati Vidyapeeth Medical College",
    location: "Pune, Maharashtra, India",
    type: "Private",
    overallRanking: 28,
    establishedYear: 1989,
    courses: [
      { name: "Medicine", ranking: 22, strength: "Good", fees: "₹16L", feeType: "per-year" },
      { name: "Nursing", ranking: 18, strength: "Good", fees: "₹1.8L", feeType: "per-year" },
      { name: "Pharmacy", ranking: 25, strength: "Good", fees: "₹2.2L", feeType: "per-year" }
    ],
    highlights: ["Deemed university", "Hospital attached", "Research facilities", "Clinical training"],
    website: "https://www.bharatividyapeeth.edu",
    image: "/placeholder.svg"
  },
  {
    id: "med-mh-02",
    name: "KJ Somaiya Medical College",
    location: "Mumbai, Maharashtra, India",
    type: "Private",
    overallRanking: 45,
    establishedYear: 1991,
    courses: [
      { name: "Medicine", ranking: 38, strength: "Good", fees: "₹22L", feeType: "per-year" },
      { name: "Nursing", ranking: 32, strength: "Good", fees: "₹2L", feeType: "per-year" },
      { name: "Pharmacy", ranking: 35, strength: "Good", fees: "₹2.5L", feeType: "per-year" }
    ],
    highlights: ["Trust-run institution", "Modern facilities", "Research focus", "Community service"],
    website: "https://www.somaiya.edu",
    image: "/placeholder.svg"
  }
];
