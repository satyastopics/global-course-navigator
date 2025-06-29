
import { College } from '../../../../../../../types/collegeTypes';

export const madhyaPradeshPrivateBusinessSchools: College[] = [
  {
    id: "biz-mp-ind-01",
    name: "Prestige Institute of Management",
    location: "Indore, Madhya Pradesh, India",
    type: "Private",
    overallRanking: 42,
    establishedYear: 1994,
    courses: [
      { name: "MBA", ranking: 38, strength: "Good", fees: "₹8L", feeType: "total" },
      { name: "PGDM", ranking: 42, strength: "Good", fees: "₹7L", feeType: "total" },
      { name: "BBA", ranking: 35, strength: "Good", fees: "₹4L", feeType: "total" }
    ],
    highlights: ["Regional excellence", "Industry partnerships", "Affordable fees", "Strong placement"],
    website: "https://www.pimindore.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "biz-mp-ind-02",
    name: "Institute of Management Studies",
    location: "Indore, Madhya Pradesh, India",
    type: "Private",
    overallRanking: 55,
    establishedYear: 2001,
    courses: [
      { name: "MBA", ranking: 48, strength: "Good", fees: "₹6L", feeType: "total" },
      { name: "PGDM", ranking: 52, strength: "Good", fees: "₹5.5L", feeType: "total" },
      { name: "Executive MBA", ranking: 58, strength: "Average", fees: "₹8L", feeType: "total" }
    ],
    highlights: ["Established institution", "Industry connect", "Modern facilities", "Value education"],
    website: "https://www.ims-indore.com",
    image: "/placeholder.svg"
  }
];
