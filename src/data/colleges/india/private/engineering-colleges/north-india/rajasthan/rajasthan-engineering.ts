
import { College } from '../../../../../../../types/collegeTypes';

export const rajasthanPrivateEngineering: College[] = [
  {
    id: "eng-rj-jpr-01",
    name: "BITS Pilani",
    location: "Pilani, Rajasthan, India",
    type: "Private",
    overallRanking: 8,
    establishedYear: 1964,
    courses: [
      { name: "Computer Science", ranking: 5, strength: "Excellent", fees: "₹4.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 8, strength: "Excellent", fees: "₹4.2L", feeType: "per-year" },
      { name: "Management", ranking: 12, strength: "Very Good", fees: "₹15L", feeType: "total" }
    ],
    highlights: ["Premier institute", "Research excellence", "Strong alumni", "Industry partnerships"],
    website: "https://www.bits-pilani.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-rj-jpr-02",
    name: "Manipal University Jaipur",
    location: "Jaipur, Rajasthan, India",
    type: "Private",
    overallRanking: 58,
    establishedYear: 2011,
    courses: [
      { name: "Computer Science", ranking: 50, strength: "Good", fees: "₹3L", feeType: "per-year" },
      { name: "Engineering", ranking: 58, strength: "Good", fees: "₹2.8L", feeType: "per-year" },
      { name: "Management", ranking: 60, strength: "Average", fees: "₹9L", feeType: "total" }
    ],
    highlights: ["Branch campus", "Modern facilities", "Industry partnerships", "Quality education"],
    website: "https://jaipur.manipal.edu",
    image: "/placeholder.svg"
  }
];
