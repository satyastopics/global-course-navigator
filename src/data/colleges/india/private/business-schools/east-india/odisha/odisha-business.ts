
import { College } from '../../../../../../../types/collegeTypes';

export const odishaPrivateBusinessSchools: College[] = [
  {
    id: "biz-odi-bhu-01",
    name: "KIIT School of Management",
    location: "Bhubaneswar, Odisha, India",
    type: "Private",
    overallRanking: 58,
    establishedYear: 2006,
    courses: [
      { name: "MBA", ranking: 48, strength: "Good", fees: "₹9L", feeType: "total" },
      { name: "PGDM", ranking: 52, strength: "Good", fees: "₹8L", feeType: "total" },
      { name: "Executive MBA", ranking: 62, strength: "Good", fees: "₹11L", feeType: "total" }
    ],
    highlights: ["KIIT University", "Industry partnerships", "Research focus", "Modern facilities"],
    website: "https://www.ksom.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "biz-odi-bhu-02",
    name: "SOA School of Management",
    location: "Bhubaneswar, Odisha, India",
    type: "Private",
    overallRanking: 68,
    establishedYear: 2008,
    courses: [
      { name: "MBA", ranking: 58, strength: "Good", fees: "₹7L", feeType: "total" },
      { name: "PGDM", ranking: 62, strength: "Good", fees: "₹6L", feeType: "total" }
    ],
    highlights: ["SOA University", "Industry connect", "Quality education", "Placement support"],
    website: "https://www.soa.ac.in",
    image: "/placeholder.svg"
  }
];
