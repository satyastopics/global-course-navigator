
import { College } from '../../../../../../types/collegeTypes';

export const northIndiaPrivateBusinessSchools: College[] = [
  {
    id: "90",
    name: "Indian School of Business",
    location: "Gurgaon, Haryana, India",
    type: "Private",
    overallRanking: 7,
    establishedYear: 2001,
    courses: [
      { name: "Management", ranking: 4, strength: "Excellent", fees: "₹35L", feeType: "total" },
      { name: "Executive MBA", ranking: 3, strength: "Excellent", fees: "₹40L", feeType: "total" },
      { name: "PhD", ranking: 8, strength: "Very Good", fees: "₹2L", feeType: "per-year" }
    ],
    highlights: ["Top private B-school", "Global partnerships", "Industry focus", "International faculty"],
    website: "https://www.isb.edu",
    image: "/placeholder.svg"
  }
];
