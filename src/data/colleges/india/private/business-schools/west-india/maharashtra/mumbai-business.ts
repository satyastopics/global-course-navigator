
import { College } from '../../../../../../../types/collegeTypes';

export const mumbaiPrivateBusinessSchools: College[] = [
  {
    id: "biz-mum-01",
    name: "SP Jain Institute of Management and Research",
    location: "Mumbai, Maharashtra, India",
    type: "Private",
    overallRanking: 18,
    establishedYear: 1981,
    courses: [
      { name: "MBA", ranking: 15, strength: "Very Good", fees: "₹20L", feeType: "total" },
      { name: "PGDM", ranking: 18, strength: "Good", fees: "₹18L", feeType: "total" },
      { name: "Executive MBA", ranking: 25, strength: "Good", fees: "₹22L", feeType: "total" }
    ],
    highlights: ["Premier business school", "Industry connections", "Mumbai advantage", "Strong alumni"],
    website: "https://www.spjimr.org",
    image: "/placeholder.svg"
  },
  {
    id: "biz-mum-02",
    name: "Narsee Monjee Institute of Management Studies",
    location: "Mumbai, Maharashtra, India",
    type: "Private",
    overallRanking: 22,
    establishedYear: 1981,
    courses: [
      { name: "MBA", ranking: 20, strength: "Good", fees: "₹22L", feeType: "total" },
      { name: "PGDM", ranking: 22, strength: "Good", fees: "₹20L", feeType: "total" },
      { name: "Executive MBA", ranking: 30, strength: "Good", fees: "₹25L", feeType: "total" }
    ],
    highlights: ["Deemed university", "Industry focus", "Multiple campuses", "Strong placement"],
    website: "https://www.nmims.edu",
    image: "/placeholder.svg"
  }
];
