
import { College } from '../../../../../../../types/collegeTypes';

export const bangalorePrivateMedical: College[] = [
  {
    id: "med-ban-01",
    name: "St. John's Medical College",
    location: "Bangalore, Karnataka, India",
    type: "Private",
    overallRanking: 22,
    establishedYear: 1963,
    courses: [
      { name: "Medicine", ranking: 12, strength: "Very Good", fees: "₹14L", feeType: "per-year" },
      { name: "Nursing", ranking: 8, strength: "Very Good", fees: "₹1.5L", feeType: "per-year" },
      { name: "Pharmacy", ranking: 15, strength: "Good", fees: "₹2L", feeType: "per-year" }
    ],
    highlights: ["Christian minority institution", "Excellent clinical training", "Research facilities", "Strong reputation"],
    website: "https://www.sjmc.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "med-ban-02",
    name: "MS Ramaiah Medical College",
    location: "Bangalore, Karnataka, India",
    type: "Private",
    overallRanking: 35,
    establishedYear: 1979,
    courses: [
      { name: "Medicine", ranking: 28, strength: "Good", fees: "₹18L", feeType: "per-year" },
      { name: "Nursing", ranking: 20, strength: "Good", fees: "₹1.8L", feeType: "per-year" },
      { name: "Pharmacy", ranking: 25, strength: "Good", fees: "₹2.2L", feeType: "per-year" }
    ],
    highlights: ["Deemed university", "Hospital attached", "Research focus", "Modern facilities"],
    website: "https://www.msrmc.ac.in",
    image: "/placeholder.svg"
  }
];
