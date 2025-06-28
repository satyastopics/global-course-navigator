
import { College } from '../../../../../../../types/collegeTypes';

export const manipalPrivateEngineering: College[] = [
  {
    id: "eng-ka-man-01",
    name: "Manipal Institute of Technology",
    location: "Manipal, Karnataka, India",
    type: "Private",
    overallRanking: 25,
    establishedYear: 1957,
    courses: [
      { name: "Computer Science", ranking: 20, strength: "Very Good", fees: "₹3.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 25, strength: "Good", fees: "₹3.2L", feeType: "per-year" },
      { name: "Management", ranking: 30, strength: "Good", fees: "₹12L", feeType: "total" }
    ],
    highlights: ["Deemed university", "Legacy institution", "Strong alumni", "Research focus"],
    website: "https://manipal.edu/mit.html",
    image: "/placeholder.svg"
  }
];
