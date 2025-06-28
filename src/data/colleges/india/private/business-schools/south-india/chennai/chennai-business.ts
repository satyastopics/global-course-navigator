
import { College } from '../../../../../../../types/collegeTypes';

export const chennaiPrivateBusinessSchools: College[] = [
  {
    id: "biz-che-01",
    name: "Great Lakes Institute of Management",
    location: "Chennai, Tamil Nadu, India",
    type: "Private",
    overallRanking: 16,
    establishedYear: 2004,
    courses: [
      { name: "MBA", ranking: 14, strength: "Very Good", fees: "₹24L", feeType: "total" },
      { name: "PGDM", ranking: 16, strength: "Good", fees: "₹22L", feeType: "total" },
      { name: "Executive MBA", ranking: 20, strength: "Good", fees: "₹26L", feeType: "total" }
    ],
    highlights: ["Premier business school", "International curriculum", "Industry partnerships", "Strong placement"],
    website: "https://www.greatlakes.edu.in",
    image: "/placeholder.svg"
  },
  {
    id: "biz-che-02",
    name: "SRM School of Management",
    location: "Chennai, Tamil Nadu, India",
    type: "Private",
    overallRanking: 38,
    establishedYear: 1985,
    courses: [
      { name: "MBA", ranking: 32, strength: "Good", fees: "₹8L", feeType: "total" },
      { name: "PGDM", ranking: 35, strength: "Good", fees: "₹7L", feeType: "total" },
      { name: "BBA", ranking: 28, strength: "Good", fees: "₹5L", feeType: "total" }
    ],
    highlights: ["Part of SRM University", "Industry exposure", "Affordable fees", "Good placement"],
    website: "https://www.srmist.edu.in",
    image: "/placeholder.svg"
  }
];
