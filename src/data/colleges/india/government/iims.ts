
import { College } from '../../../../types/collegeTypes';

export const iimColleges: College[] = [
  {
    id: "20",
    name: "Indian Institute of Management Ahmedabad",
    location: "Ahmedabad, Gujarat, India",
    type: "Government",
    overallRanking: 10,
    establishedYear: 1961,
    courses: [
      { name: "MBA", ranking: 1, strength: "Excellent", fees: "₹25L", feeType: "total" },
      { name: "Executive MBA", ranking: 1, strength: "Excellent", fees: "₹15L", feeType: "total" },
      { name: "PhD Management", ranking: 1, strength: "Excellent", fees: "₹50K", feeType: "per-year" },
      { name: "Public Policy", ranking: 2, strength: "Very Good", fees: "₹8L", feeType: "total" }
    ],
    highlights: ["Top business school", "Premier management institute", "Strong industry connect", "Global recognition"],
    website: "https://www.iima.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "41",
    name: "Indian Institute of Management Bangalore",
    location: "Bangalore, Karnataka, India",
    type: "Government",
    overallRanking: 21,
    establishedYear: 1973,
    courses: [
      { name: "MBA", ranking: 2, strength: "Excellent", fees: "₹24L", feeType: "total" },
      { name: "Executive MBA", ranking: 2, strength: "Excellent", fees: "₹15L", feeType: "total" },
      { name: "PhD Management", ranking: 2, strength: "Excellent", fees: "₹50K", feeType: "per-year" },
      { name: "Management Studies", ranking: 3, strength: "Very Good", fees: "₹12L", feeType: "total" }
    ],
    highlights: ["Top management school", "IT capital location", "Strong placement record", "International collaborations"],
    website: "https://www.iimb.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "42",
    name: "Indian Institute of Management Calcutta",
    location: "Kolkata, West Bengal, India",
    type: "Government",
    overallRanking: 22,
    establishedYear: 1961,
    courses: [
      { name: "MBA", ranking: 3, strength: "Excellent", fees: "₹23L", feeType: "total" },
      { name: "Executive MBA", ranking: 3, strength: "Excellent", fees: "₹14L", feeType: "total" },
      { name: "PhD Management", ranking: 3, strength: "Excellent", fees: "₹50K", feeType: "per-year" },
      { name: "Finance", ranking: 2, strength: "Excellent", fees: "₹10L", feeType: "total" }
    ],
    highlights: ["Finance excellence", "Oldest IIM", "Strong alumni network", "Research focus"],
    website: "https://www.iimcal.ac.in",
    image: "/placeholder.svg"
  }
];
