
import { College } from '../../../../../../../types/collegeTypes';

export const mumbaiPrivateBusinessSchools: College[] = [
  {
    id: "biz-mh-mum-01",
    name: "Narsee Monjee Institute of Management Studies",
    location: "Mumbai, Maharashtra, India",
    type: "Private",
    overallRanking: 22,
    establishedYear: 1981,
    courses: [
      { name: "MBA", ranking: 18, strength: "Very Good", fees: "₹22L", feeType: "total" },
      { name: "PGDM", ranking: 20, strength: "Good", fees: "₹20L", feeType: "total" },
      { name: "Executive MBA", ranking: 25, strength: "Good", fees: "₹24L", feeType: "total" }
    ],
    highlights: ["Premier business school", "Industry partnerships", "Strong placement", "Mumbai location"],
    website: "https://www.nmims.edu",
    image: "/placeholder.svg"
  },
  {
    id: "biz-mh-mum-02",
    name: "SP Jain School of Global Management",
    location: "Mumbai, Maharashtra, India",
    type: "Private",
    overallRanking: 28,
    establishedYear: 1981,
    courses: [
      { name: "MBA", ranking: 25, strength: "Good", fees: "₹18L", feeType: "total" },
      { name: "PGDM", ranking: 28, strength: "Good", fees: "₹16L", feeType: "total" },
      { name: "Executive MBA", ranking: 32, strength: "Good", fees: "₹20L", feeType: "total" }
    ],
    highlights: ["Global exposure", "Multi-city campuses", "Industry focus", "Innovation"],
    website: "https://www.spjain.org",
    image: "/placeholder.svg"
  }
];
