
import { College } from '../../../../../types/collegeTypes';

export const southIndiaPrivateDesign: College[] = [
  {
    id: "des-sou-01",
    name: "National Institute of Design",
    location: "Bangalore, Karnataka, India",
    type: "Private",
    overallRanking: 8,
    establishedYear: 1988,
    courses: [
      { name: "Product Design", ranking: 3, strength: "Excellent", fees: "₹3L", feeType: "per-year" },
      { name: "Communication Design", ranking: 5, strength: "Very Good", fees: "₹3L", feeType: "per-year" },
      { name: "Fashion Design", ranking: 8, strength: "Very Good", fees: "₹3L", feeType: "per-year" }
    ],
    highlights: ["Premier design institute", "Government backing", "Industry partnerships", "Innovation focus"],
    website: "https://www.nid.edu",
    image: "/placeholder.svg"
  },
  {
    id: "des-sou-02",
    name: "Srishti Manipal Institute of Art, Design and Technology",
    location: "Bangalore, Karnataka, India",
    type: "Private",
    overallRanking: 15,
    establishedYear: 1996,
    courses: [
      { name: "Design", ranking: 12, strength: "Very Good", fees: "₹8L", feeType: "per-year" },
      { name: "Digital Media", ranking: 10, strength: "Very Good", fees: "₹8.5L", feeType: "per-year" },
      { name: "Fine Arts", ranking: 15, strength: "Good", fees: "₹7.5L", feeType: "per-year" }
    ],
    highlights: ["Creative education", "Industry partnerships", "Modern facilities", "International exposure"],
    website: "https://srishtimanipalinstitute.in",
    image: "/placeholder.svg"
  }
];
