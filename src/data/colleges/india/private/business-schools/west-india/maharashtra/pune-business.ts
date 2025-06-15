
import { College } from '../../../../../../../types/collegeTypes';

export const punePrivateBusinessSchools: College[] = [
  {
    id: "biz-pun-01",
    name: "Symbiosis Institute of Business Management",
    location: "Pune, Maharashtra, India",
    type: "Private",
    overallRanking: 20,
    establishedYear: 1978,
    courses: [
      { name: "MBA", ranking: 18, strength: "Very Good", fees: "₹24L", feeType: "total" },
      { name: "PGDM", ranking: 20, strength: "Good", fees: "₹22L", feeType: "total" },
      { name: "Executive MBA", ranking: 28, strength: "Good", fees: "₹26L", feeType: "total" }
    ],
    highlights: ["Premier business school", "International exposure", "Industry partnerships", "Research focus"],
    website: "https://www.sibmpune.edu.in",
    image: "/placeholder.svg"
  }
];
