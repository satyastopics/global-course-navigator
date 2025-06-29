
import { College } from '../../../../../../../types/collegeTypes';

export const upPrivateMedical: College[] = [
  {
    id: "med-up-01",
    name: "Sharda University School of Medical Sciences",
    location: "Greater Noida, Uttar Pradesh, India",
    type: "Private",
    overallRanking: 42,
    establishedYear: 2009,
    courses: [
      { name: "Medicine", ranking: 35, strength: "Good", fees: "₹25L", feeType: "per-year" },
      { name: "Nursing", ranking: 28, strength: "Good", fees: "₹3L", feeType: "per-year" },
      { name: "Pharmacy", ranking: 38, strength: "Good", fees: "₹2.5L", feeType: "per-year" }
    ],
    highlights: ["Modern hospital", "International faculty", "Research facilities", "Clinical excellence"],
    website: "https://www.sharda.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "med-up-02",
    name: "Integral University",
    location: "Lucknow, Uttar Pradesh, India",
    type: "Private",
    overallRanking: 58,
    establishedYear: 2004,
    courses: [
      { name: "Medicine", ranking: 52, strength: "Good", fees: "₹18L", feeType: "per-year" },
      { name: "Nursing", ranking: 45, strength: "Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "Pharmacy", ranking: 48, strength: "Good", fees: "₹2L", feeType: "per-year" }
    ],
    highlights: ["Multi-disciplinary university", "Good clinical training", "Modern facilities", "Affordable fees"],
    website: "https://www.iul.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "med-up-03",
    name: "Era University",
    location: "Lucknow, Uttar Pradesh, India",
    type: "Private",
    overallRanking: 65,
    establishedYear: 2017,
    courses: [
      { name: "Medicine", ranking: 58, strength: "Good", fees: "₹22L", feeType: "per-year" },
      { name: "Nursing", ranking: 52, strength: "Good", fees: "₹3.2L", feeType: "per-year" }
    ],
    highlights: ["New medical college", "Modern infrastructure", "Quality education", "Growing reputation"],
    website: "https://www.erauniversity.in",
    image: "/placeholder.svg"
  }
];
