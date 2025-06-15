
import { College } from '../../../../../../types/collegeTypes';

export const utSystemColleges: College[] = [
  {
    id: "ut-01",
    name: "University of Texas at Austin",
    location: "Austin, Texas, USA",
    type: "Public",
    overallRanking: 38,
    establishedYear: 1883,
    courses: [
      { name: "Business", ranking: 6, strength: "Excellent", fees: "$40K", feeType: "per-year" },
      { name: "Engineering", ranking: 15, strength: "Very Good", fees: "$40K", feeType: "per-year" },
      { name: "Computer Science", ranking: 12, strength: "Very Good", fees: "$40K", feeType: "per-year" }
    ],
    highlights: ["Flagship university", "Tech hub", "Strong alumni network", "Research excellence"],
    website: "https://www.utexas.edu",
    image: "/placeholder.svg"
  }
];
