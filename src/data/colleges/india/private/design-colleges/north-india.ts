
import { College } from '../../../../../types/collegeTypes';

export const northIndiaPrivateDesign: College[] = [
  {
    id: "des-nor-01",
    name: "National Institute of Design Delhi",
    location: "New Delhi, India",
    type: "Private",
    overallRanking: 8,
    establishedYear: 2008,
    courses: [
      { name: "Product Design", ranking: 5, strength: "Excellent", fees: "₹3.5L", feeType: "per-year" },
      { name: "Communication Design", ranking: 6, strength: "Very Good", fees: "₹3.2L", feeType: "per-year" },
      { name: "Fashion Design", ranking: 8, strength: "Very Good", fees: "₹3.8L", feeType: "per-year" }
    ],
    highlights: ["Premier design institute", "Industry partnerships", "Innovation focus", "Government backing"],
    website: "https://www.nid.edu",
    image: "/placeholder.svg"
  },
  {
    id: "des-nor-02",
    name: "Pearl Academy",
    location: "New Delhi, India",
    type: "Private",
    overallRanking: 15,
    establishedYear: 1993,
    courses: [
      { name: "Fashion Design", ranking: 12, strength: "Very Good", fees: "₹4.5L", feeType: "per-year" },
      { name: "Interior Design", ranking: 10, strength: "Very Good", fees: "₹4.2L", feeType: "per-year" },
      { name: "Product Design", ranking: 15, strength: "Good", fees: "₹4L", feeType: "per-year" }
    ],
    highlights: ["Fashion focus", "Industry partnerships", "Modern facilities", "International exposure"],
    website: "https://www.pearlacademy.com",
    image: "/placeholder.svg"
  }
];
