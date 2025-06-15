
import { College } from '../../../../../types/collegeTypes';

export const centralIndiaPrivateMedical: College[] = [
  {
    id: "med-cen-01",
    name: "All India Institute of Medical Sciences, Bhopal",
    location: "Bhopal, Madhya Pradesh, India",
    type: "Private",
    overallRanking: 45,
    establishedYear: 2012,
    courses: [
      { name: "Medicine", ranking: 30, strength: "Good", fees: "₹16L", feeType: "per-year" },
      { name: "Nursing", ranking: 25, strength: "Good", fees: "₹2L", feeType: "per-year" },
      { name: "Pharmacy", ranking: 35, strength: "Good", fees: "₹2.5L", feeType: "per-year" }
    ],
    highlights: ["AIIMS brand", "Government backing", "Research facilities", "Modern infrastructure"],
    website: "https://www.aiimsbhopal.edu.in",
    image: "/placeholder.svg"
  },
  {
    id: "med-cen-02",
    name: "Mahatma Gandhi Institute of Medical Sciences",
    location: "Wardha, Maharashtra, India",
    type: "Private",
    overallRanking: 52,
    establishedYear: 1969,
    courses: [
      { name: "Medicine", ranking: 40, strength: "Good", fees: "₹12L", feeType: "per-year" },
      { name: "Nursing", ranking: 30, strength: "Good", fees: "₹1.8L", feeType: "per-year" },
      { name: "Pharmacy", ranking: 38, strength: "Good", fees: "₹2.2L", feeType: "per-year" }
    ],
    highlights: ["Rural healthcare focus", "Community medicine", "Affordable fees", "Social impact"],
    website: "https://www.mgims.ac.in",
    image: "/placeholder.svg"
  }
];
