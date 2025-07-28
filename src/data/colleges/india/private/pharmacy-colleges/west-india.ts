import { College } from '../../../../../types/collegeTypes';

export const westIndiaPharmacyColleges: College[] = [
  {
    id: "pharmacy-west-01",
    name: "Bombay College of Pharmacy",
    location: "Mumbai, Maharashtra, India",
    type: "Private",
    overallRanking: 6,
    establishedYear: 1882,
    courses: [
      { name: "B.Pharm", ranking: 6, strength: "Excellent", fees: "₹2L", feeType: "per-year" },
      { name: "M.Pharm", ranking: 8, strength: "Very Good", fees: "₹3L", feeType: "per-year" },
      { name: "Pharm.D", ranking: 10, strength: "Very Good", fees: "₹4L", feeType: "per-year" }
    ],
    highlights: ["Heritage institution", "Research excellence", "Industry partnerships", "Alumni network"],
    website: "https://www.bcp.edu.in",
    image: "/placeholder.svg"
  },
  {
    id: "pharmacy-west-02",
    name: "Poona College of Pharmacy",
    location: "Pune, Maharashtra, India",
    type: "Private",
    overallRanking: 14,
    establishedYear: 1964,
    courses: [
      { name: "B.Pharm", ranking: 14, strength: "Very Good", fees: "₹3L", feeType: "per-year" },
      { name: "M.Pharm", ranking: 16, strength: "Very Good", fees: "₹4L", feeType: "per-year" }
    ],
    highlights: ["Bharati Vidyapeeth", "Clinical training", "Research programs", "Industry connect"],
    website: "https://www.bharatividyapeeth.edu",
    image: "/placeholder.svg"
  },
  {
    id: "pharmacy-west-03",
    name: "Institute of Chemical Technology",
    location: "Mumbai, Maharashtra, India",
    type: "Private",
    overallRanking: 10,
    establishedYear: 1933,
    courses: [
      { name: "B.Pharm", ranking: 10, strength: "Very Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "M.Pharm", ranking: 12, strength: "Very Good", fees: "₹3.5L", feeType: "per-year" }
    ],
    highlights: ["Premier chemical technology institute", "Research excellence", "Industry partnerships", "Innovation focus"],
    website: "https://www.ictmumbai.edu.in",
    image: "/placeholder.svg"
  },
  {
    id: "pharmacy-west-04",
    name: "Dr. D. Y. Patil Institute of Pharmaceutical Sciences",
    location: "Pune, Maharashtra, India",
    type: "Private",
    overallRanking: 26,
    establishedYear: 1998,
    courses: [
      { name: "B.Pharm", ranking: 26, strength: "Good", fees: "₹4L", feeType: "per-year" },
      { name: "M.Pharm", ranking: 28, strength: "Good", fees: "₹5L", feeType: "per-year" }
    ],
    highlights: ["D. Y. Patil University", "Modern infrastructure", "Clinical training", "Research facilities"],
    website: "https://www.dpu.edu.in",
    image: "/placeholder.svg"
  }
];