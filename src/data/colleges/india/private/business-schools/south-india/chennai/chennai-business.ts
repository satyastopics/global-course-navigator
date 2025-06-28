
import { College } from '../../../../../../../types/collegeTypes';

export const chennaiPrivateBusinessSchools: College[] = [
  {
    id: "biz-tn-che-01",
    name: "Great Lakes Institute of Management",
    location: "Chennai, Tamil Nadu, India",
    type: "Private",
    overallRanking: 32,
    establishedYear: 2004,
    courses: [
      { name: "MBA", ranking: 28, strength: "Good", fees: "₹20L", feeType: "total" },
      { name: "PGDM", ranking: 30, strength: "Good", fees: "₹18L", feeType: "total" },
      { name: "Executive MBA", ranking: 35, strength: "Good", fees: "₹22L", feeType: "total" }
    ],
    highlights: ["Industry partnerships", "International exposure", "Modern campus", "Quality faculty"],
    website: "https://www.greatlakes.edu.in",
    image: "/placeholder.svg"
  }
];
