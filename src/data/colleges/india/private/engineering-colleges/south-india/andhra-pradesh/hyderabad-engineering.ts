
import { College } from '../../../../../../../types/collegeTypes';

export const hyderabadPrivateEngineering: College[] = [
  {
    id: "eng-ap-hyd-01",
    name: "BITS Pilani Hyderabad Campus",
    location: "Hyderabad, Telangana, India",
    type: "Private",
    overallRanking: 12,
    establishedYear: 2008,
    courses: [
      { name: "Computer Science", ranking: 8, strength: "Excellent", fees: "₹4.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 12, strength: "Very Good", fees: "₹4.2L", feeType: "per-year" },
      { name: "Management", ranking: 15, strength: "Very Good", fees: "₹15L", feeType: "total" }
    ],
    highlights: ["Premier institute", "Research excellence", "Industry partnerships", "Strong alumni"],
    website: "https://www.bits-pilani.ac.in/hyderabad",
    image: "/placeholder.svg"
  },
  {
    id: "eng-ap-hyd-02",
    name: "International Institute of Information Technology",
    location: "Hyderabad, Telangana, India",
    type: "Private",
    overallRanking: 18,
    establishedYear: 1998,
    courses: [
      { name: "Computer Science", ranking: 12, strength: "Very Good", fees: "₹3.8L", feeType: "per-year" },
      { name: "Engineering", ranking: 18, strength: "Very Good", fees: "₹3.5L", feeType: "per-year" },
      { name: "Research", ranking: 15, strength: "Very Good", fees: "₹2L", feeType: "per-year" }
    ],
    highlights: ["Research university", "IT specialization", "Industry partnerships", "Innovation focus"],
    website: "https://www.iiit.ac.in",
    image: "/placeholder.svg"
  }
];
