
import { College } from '../../../../../types/collegeTypes';

export const westIndiaPrivateDesign: College[] = [
  {
    id: "design-02",
    name: "MIT Institute of Design",
    location: "Pune, Maharashtra, India",
    type: "Private",
    overallRanking: 12,
    establishedYear: 2006,
    courses: [
      { name: "Product Design", ranking: 4, strength: "Excellent", fees: "₹8L", feeType: "total" },
      { name: "Communication Design", ranking: 6, strength: "Very Good", fees: "₹8L", feeType: "total" },
      { name: "Fashion Design", ranking: 10, strength: "Good", fees: "₹8L", feeType: "total" }
    ],
    highlights: ["Technology integration", "Innovation labs", "Industry connect", "Research focus"],
    website: "https://www.mitid.edu.in",
    image: "/placeholder.svg"
  }
];
