import { College } from '../../../../../types/collegeTypes';

export const eastIndiaPharmacyColleges: College[] = [
  {
    id: "pharmacy-east-01",
    name: "NSHM Knowledge Campus",
    location: "Kolkata, West Bengal, India",
    type: "Private",
    overallRanking: 38,
    establishedYear: 2008,
    courses: [
      { name: "B.Pharm", ranking: 35, strength: "Good", fees: "₹3L", feeType: "per-year" },
      { name: "M.Pharm", ranking: 40, strength: "Good", fees: "₹4L", feeType: "per-year" }
    ],
    highlights: ["NSHM Group", "Modern facilities", "Industry partnerships", "Clinical training"],
    website: "https://www.nshm.com",
    image: "/placeholder.svg"
  },
  {
    id: "pharmacy-east-02",
    name: "Institute of Pharmacy, KIIT University",
    location: "Bhubaneswar, Odisha, India",
    type: "Private",
    overallRanking: 42,
    establishedYear: 2009,
    courses: [
      { name: "B.Pharm", ranking: 40, strength: "Good", fees: "₹3.5L", feeType: "per-year" },
      { name: "M.Pharm", ranking: 45, strength: "Good", fees: "₹4.5L", feeType: "per-year" }
    ],
    highlights: ["KIIT University", "Research focus", "Modern labs", "Industry connect"],
    website: "https://www.kiit.ac.in",
    image: "/placeholder.svg"
  }
];