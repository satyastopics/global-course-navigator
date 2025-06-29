
import { College } from '../../../../../../../types/collegeTypes';

export const punjabPrivateMedical: College[] = [
  {
    id: "med-pj-01",
    name: "Adesh University",
    location: "Bathinda, Punjab, India",
    type: "Private",
    overallRanking: 58,
    establishedYear: 2012,
    courses: [
      { name: "Medicine", ranking: 45, strength: "Good", fees: "₹14L", feeType: "per-year" },
      { name: "Nursing", ranking: 42, strength: "Good", fees: "₹1.5L", feeType: "per-year" },
      { name: "Pharmacy", ranking: 48, strength: "Good", fees: "₹2L", feeType: "per-year" },
      { name: "Engineering", ranking: 65, strength: "Average", fees: "₹2.5L", feeType: "per-year" }
    ],
    highlights: ["Multi-disciplinary university", "Healthcare focus", "Modern facilities", "Research programs"],
    website: "https://www.adeshuniversity.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "med-pj-02",
    name: "Desh Bhagat University",
    location: "Mandi Gobindgarh, Punjab, India",
    type: "Private",
    overallRanking: 72,
    establishedYear: 2009,
    courses: [
      { name: "Medicine", ranking: 58, strength: "Average", fees: "₹12L", feeType: "per-year" },
      { name: "Nursing", ranking: 55, strength: "Average", fees: "₹1.8L", feeType: "per-year" },
      { name: "Pharmacy", ranking: 62, strength: "Average", fees: "₹1.5L", feeType: "per-year" }
    ],
    highlights: ["Regional university", "Affordable medical education", "Growing reputation", "Industry partnerships"],
    website: "https://www.deshbhagatuniversity.ac.in",
    image: "/placeholder.svg"
  }
];
