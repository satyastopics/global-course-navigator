
import { College } from '../../../../../types/collegeTypes';

export const eastIndiaPrivateLawColleges: College[] = [
  {
    id: "law-04",
    name: "The West Bengal University of Juridical Sciences",
    location: "Kolkata, West Bengal, India",
    type: "Private",
    overallRanking: 25,
    establishedYear: 1999,
    courses: [
      { name: "Law", ranking: 20, strength: "Good", fees: "₹8L", feeType: "total" },
      { name: "Criminal Law", ranking: 18, strength: "Good", fees: "₹8L", feeType: "total" },
      { name: "Cyber Law", ranking: 15, strength: "Good", fees: "₹8L", feeType: "total" }
    ],
    highlights: ["Specialized university", "Research focus", "Regional recognition", "Cyber law expertise"],
    website: "https://www.wbnujs.ac.in",
    image: "/placeholder.svg"
  }
];
