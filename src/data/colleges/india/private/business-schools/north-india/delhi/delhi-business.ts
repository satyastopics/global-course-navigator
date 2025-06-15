
import { College } from '../../../../../../../types/collegeTypes';

export const delhiPrivateBusinessSchools: College[] = [
  {
    id: "business-01",
    name: "Indian School of Business and Finance",
    location: "New Delhi, India",
    type: "Private",
    overallRanking: 15,
    establishedYear: 2009,
    courses: [
      { name: "MBA", ranking: 12, strength: "Very Good", fees: "₹18L", feeType: "total" },
      { name: "PGDM", ranking: 15, strength: "Good", fees: "₹16L", feeType: "total" },
      { name: "Executive MBA", ranking: 18, strength: "Good", fees: "₹20L", feeType: "total" }
    ],
    highlights: ["Industry partnerships", "International exposure", "Modern campus", "Strong placement"],
    website: "https://www.isbf.edu.in",
    image: "/placeholder.svg"
  }
];
