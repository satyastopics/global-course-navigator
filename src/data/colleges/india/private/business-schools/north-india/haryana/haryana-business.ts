
import { College } from '../../../../../../../types/collegeTypes';

export const haryanaPrivateBusinessSchools: College[] = [
  {
    id: "biz-har-01",
    name: "Management Development Institute",
    location: "Gurgaon, Haryana, India",
    type: "Private",
    overallRanking: 8,
    establishedYear: 1973,
    courses: [
      { name: "MBA", ranking: 6, strength: "Excellent", fees: "₹21L", feeType: "total" },
      { name: "PGDM", ranking: 8, strength: "Very Good", fees: "₹20L", feeType: "total" },
      { name: "Executive MBA", ranking: 12, strength: "Very Good", fees: "₹25L", feeType: "total" }
    ],
    highlights: ["Premier business school", "Government support", "Industry partnerships", "Excellent placement"],
    website: "https://www.mdi.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "biz-har-02",
    name: "IMT Ghaziabad",
    location: "Ghaziabad, Haryana, India",
    type: "Private",
    overallRanking: 22,
    establishedYear: 1980,
    courses: [
      { name: "MBA", ranking: 18, strength: "Very Good", fees: "₹19L", feeType: "total" },
      { name: "PGDM", ranking: 22, strength: "Good", fees: "₹17.5L", feeType: "total" },
      { name: "Executive MBA", ranking: 28, strength: "Good", fees: "₹21L", feeType: "total" }
    ],
    highlights: ["Established business school", "Industry connect", "International programs", "Strong alumni"],
    website: "https://www.imt.edu",
    image: "/placeholder.svg"
  }
];
