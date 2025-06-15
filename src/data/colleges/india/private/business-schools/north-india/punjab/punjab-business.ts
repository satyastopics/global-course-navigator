
import { College } from '../../../../../../../types/collegeTypes';

export const punjabPrivateBusinessSchools: College[] = [
  {
    id: "business-02",
    name: "Chitkara Business School",
    location: "Chandigarh, Punjab, India",
    type: "Private",
    overallRanking: 45,
    establishedYear: 2002,
    courses: [
      { name: "MBA", ranking: 35, strength: "Good", fees: "₹12L", feeType: "total" },
      { name: "PGDM", ranking: 40, strength: "Good", fees: "₹10L", feeType: "total" },
      { name: "BBA", ranking: 25, strength: "Good", fees: "₹8L", feeType: "total" }
    ],
    highlights: ["Regional excellence", "Industry connect", "Affordable fees", "Strong alumni"],
    website: "https://www.chitkara.edu.in",
    image: "/placeholder.svg"
  }
];
