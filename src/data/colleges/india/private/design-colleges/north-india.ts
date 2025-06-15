
import { College } from '../../../../../types/collegeTypes';

export const northIndiaPrivateDesign: College[] = [
  {
    id: "design-01",
    name: "Pearl Academy",
    location: "New Delhi, India",
    type: "Private",
    overallRanking: 8,
    establishedYear: 1993,
    courses: [
      { name: "Fashion Design", ranking: 3, strength: "Excellent", fees: "₹12L", feeType: "total" },
      { name: "Interior Design", ranking: 5, strength: "Very Good", fees: "₹10L", feeType: "total" },
      { name: "Product Design", ranking: 8, strength: "Good", fees: "₹10L", feeType: "total" }
    ],
    highlights: ["Fashion excellence", "Industry partnerships", "Multiple campuses", "Global collaborations"],
    website: "https://www.pearlacademy.com",
    image: "/placeholder.svg"
  }
];
