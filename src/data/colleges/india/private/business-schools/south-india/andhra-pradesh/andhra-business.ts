
import { College } from '../../../../../../../types/collegeTypes';

export const andhraPrivateBusinessSchools: College[] = [
  {
    id: "biz-ap-01",
    name: "Great Lakes Institute of Management",
    location: "Chennai, Tamil Nadu, India",
    type: "Private",
    overallRanking: 18,
    establishedYear: 2004,
    courses: [
      { name: "MBA", ranking: 15, strength: "Very Good", fees: "₹23L", feeType: "total" },
      { name: "PGDM", ranking: 18, strength: "Very Good", fees: "₹21L", feeType: "total" }
    ],
    highlights: ["Premier business school", "International collaborations", "Strong placement", "Industry focus"],
    website: "https://www.greatlakes.edu.in",
    image: "/placeholder.svg"
  },
  {
    id: "biz-ap-02",
    name: "GITAM School of International Business",
    location: "Visakhapatnam, Andhra Pradesh, India",
    type: "Private",
    overallRanking: 48,
    establishedYear: 1980,
    courses: [
      { name: "MBA", ranking: 42, strength: "Good", fees: "₹8L", feeType: "total" },
      { name: "PGDM", ranking: 45, strength: "Good", fees: "₹7L", feeType: "total" }
    ],
    highlights: ["Deemed university", "International programs", "Coastal campus", "Industry partnerships"],
    website: "https://www.gitam.edu",
    image: "/placeholder.svg"
  },
  {
    id: "biz-ap-03",
    name: "Vignan University School of Management",
    location: "Guntur, Andhra Pradesh, India",
    type: "Private",
    overallRanking: 58,
    establishedYear: 2008,
    courses: [
      { name: "MBA", ranking: 52, strength: "Good", fees: "₹6L", feeType: "total" },
      { name: "PGDM", ranking: 55, strength: "Good", fees: "₹5.5L", feeType: "total" }
    ],
    highlights: ["Private university", "Affordable fees", "Industry connect", "Quality education"],
    website: "https://www.vignanuniversity.org",
    image: "/placeholder.svg"
  }
];
