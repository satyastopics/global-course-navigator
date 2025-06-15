
import { College } from '../../../../../../types/collegeTypes';

export const iimLucknow: College[] = [
  {
    id: "12",
    name: "IIM Lucknow",
    location: "Lucknow, Uttar Pradesh, India",
    type: "Government",
    overallRanking: 6,
    establishedYear: 1984,
    courses: [
      { name: "MBA", ranking: 6, strength: "Excellent", fees: "₹19.25L", feeType: "total" },
      { name: "Executive MBA", ranking: 8, strength: "Very Good", fees: "₹15L", feeType: "total" },
      { name: "Fellow Program", ranking: 10, strength: "Very Good", fees: "₹8L", feeType: "total" }
    ],
    highlights: ["Tier 2 IIM", "Strong industry connections", "Excellent placements", "Research focus"],
    website: "https://www.iiml.ac.in",
    image: "/placeholder.svg"
  }
];
