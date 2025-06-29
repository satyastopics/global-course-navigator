
import { College } from '../../../../../../../types/collegeTypes';

export const gujaratPrivateMedical: College[] = [
  {
    id: "med-gj-01",
    name: "Karnavati School of Dentistry",
    location: "Gandhinagar, Gujarat, India",
    type: "Private",
    overallRanking: 48,
    establishedYear: 2006,
    courses: [
      { name: "Dentistry", ranking: 22, strength: "Very Good", fees: "₹8L", feeType: "per-year" },
      { name: "Medicine", ranking: 45, strength: "Good", fees: "₹20L", feeType: "per-year" }
    ],
    highlights: ["Dental excellence", "Modern facilities", "Clinical training", "Research focus"],
    website: "https://www.karnavatiuniversity.edu.in",
    image: "/placeholder.svg"
  },
  {
    id: "med-gj-02",
    name: "Parul University Faculty of Medicine",
    location: "Vadodara, Gujarat, India",
    type: "Private",
    overallRanking: 52,
    establishedYear: 2015,
    courses: [
      { name: "Medicine", ranking: 48, strength: "Good", fees: "₹18L", feeType: "per-year" },
      { name: "Nursing", ranking: 42, strength: "Good", fees: "₹2.8L", feeType: "per-year" },
      { name: "Pharmacy", ranking: 45, strength: "Good", fees: "₹2.2L", feeType: "per-year" }
    ],
    highlights: ["Multi-disciplinary university", "Modern hospital", "Clinical excellence", "Research facilities"],
    website: "https://www.paruluniversity.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "med-gj-03",
    name: "Sumandeep Vidyapeeth",
    location: "Vadodara, Gujarat, India",
    type: "Private",
    overallRanking: 58,
    establishedYear: 2007,
    courses: [
      { name: "Medicine", ranking: 52, strength: "Good", fees: "₹19L", feeType: "per-year" },
      { name: "Dentistry", ranking: 35, strength: "Good", fees: "₹6L", feeType: "per-year" },
      { name: "Nursing", ranking: 48, strength: "Good", fees: "₹2.5L", feeType: "per-year" }
    ],
    highlights: ["Deemed university", "Healthcare focus", "Clinical training", "Modern facilities"],
    website: "https://www.sumandeepuniversity.co.in",
    image: "/placeholder.svg"
  }
];
