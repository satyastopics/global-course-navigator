
import { College } from '../../../../../../../types/collegeTypes';

export const gujaratPrivateBusinessSchools: College[] = [
  {
    id: "biz-gj-ahm-01",
    name: "Indian Institute of Management Ahmedabad",
    location: "Ahmedabad, Gujarat, India",
    type: "Private",
    overallRanking: 3,
    establishedYear: 1961,
    courses: [
      { name: "MBA", ranking: 2, strength: "Excellent", fees: "₹23L", feeType: "total" },
      { name: "PGDM", ranking: 3, strength: "Excellent", fees: "₹21L", feeType: "total" },
      { name: "Executive MBA", ranking: 5, strength: "Excellent", fees: "₹25L", feeType: "total" }
    ],
    highlights: ["Premier IIM", "Top ranking", "Excellent faculty", "Strong alumni network"],
    website: "https://www.iima.ac.in",
    image: "/placeholder.svg"
  }
];
