
import { College } from '../../../../../../../types/collegeTypes';

export const chandigarhPrivateMedical: College[] = [
  {
    id: "med-chd-01",
    name: "Dayanand Medical College and Hospital",
    location: "Ludhiana, Punjab, India",
    type: "Private",
    overallRanking: 28,
    establishedYear: 1946,
    courses: [
      { name: "Medicine", ranking: 18, strength: "Very Good", fees: "₹12L", feeType: "per-year" },
      { name: "Nursing", ranking: 12, strength: "Very Good", fees: "₹1.2L", feeType: "per-year" },
      { name: "Pharmacy", ranking: 20, strength: "Good", fees: "₹1.8L", feeType: "per-year" }
    ],
    highlights: ["Heritage institution", "Hospital attached", "Research facilities", "Strong reputation"],
    website: "https://www.dmch.edu",
    image: "/placeholder.svg"
  },
  {
    id: "med-chd-02",
    name: "Christian Medical College Ludhiana",
    location: "Ludhiana, Punjab, India",
    type: "Private",
    overallRanking: 38,
    establishedYear: 1894,
    courses: [
      { name: "Medicine", ranking: 32, strength: "Good", fees: "₹10L", feeType: "per-year" },
      { name: "Nursing", ranking: 18, strength: "Good", fees: "₹1L", feeType: "per-year" },
      { name: "Allied Health", ranking: 25, strength: "Good", fees: "₹1.5L", feeType: "per-year" }
    ],
    highlights: ["Christian minority college", "Historic institution", "Healthcare focus", "Community service"],
    website: "https://www.cmc-ludhiana.org",
    image: "/placeholder.svg"
  }
];
