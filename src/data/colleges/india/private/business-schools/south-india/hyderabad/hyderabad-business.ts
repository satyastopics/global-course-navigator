
import { College } from '../../../../../../../types/collegeTypes';

export const hyderabadPrivateBusinessSchools: College[] = [
  {
    id: "business-04",
    name: "ICFAI Business School",
    location: "Hyderabad, Telangana, India",
    type: "Private",
    overallRanking: 35,
    establishedYear: 1995,
    courses: [
      { name: "MBA", ranking: 28, strength: "Good", fees: "₹14L", feeType: "total" },
      { name: "PGDM", ranking: 32, strength: "Good", fees: "₹12L", feeType: "total" },
      { name: "Executive MBA", ranking: 40, strength: "Average", fees: "₹15L", feeType: "total" }
    ],
    highlights: ["Research focus", "Case study method", "Industry partnerships", "Global exposure"],
    website: "https://www.ibsindia.org",
    image: "/placeholder.svg"
  }
];
