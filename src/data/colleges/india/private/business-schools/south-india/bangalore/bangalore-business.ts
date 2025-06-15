
import { College } from '../../../../../../../types/collegeTypes';

export const bangalorePrivateBusinessSchools: College[] = [
  {
    id: "business-03",
    name: "Christ University School of Business",
    location: "Bangalore, Karnataka, India",
    type: "Private",
    overallRanking: 25,
    establishedYear: 1969,
    courses: [
      { name: "MBA", ranking: 20, strength: "Good", fees: "₹8L", feeType: "total" },
      { name: "PGDM", ranking: 25, strength: "Good", fees: "₹7L", feeType: "total" },
      { name: "BBA", ranking: 15, strength: "Very Good", fees: "₹5L", feeType: "total" }
    ],
    highlights: ["Deemed university", "IT hub location", "Strong placement", "Value for money"],
    website: "https://www.christuniversity.in",
    image: "/placeholder.svg"
  }
];
