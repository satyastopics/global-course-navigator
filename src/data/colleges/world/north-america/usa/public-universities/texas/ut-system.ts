
import { College } from '../../../../../../../types/collegeTypes';

export const utSystemColleges: College[] = [
  {
    id: "ut-01",
    name: "University of Texas at Austin",
    location: "Austin, Texas, USA",
    type: "Public",
    overallRanking: 38,
    establishedYear: 1883,
    courses: [
      { name: "Business", ranking: 16, strength: "Very Good", fees: "$11,000", feeType: "per-year" },
      { name: "Engineering", ranking: 10, strength: "Excellent", fees: "$11,000", feeType: "per-year" },
      { name: "Computer Science", ranking: 10, strength: "Very Good", fees: "$11,000", feeType: "per-year" }
    ],
    highlights: ["Strong engineering", "Business excellence", "Research university", "Tech hub location"],
    website: "https://www.utexas.edu",
    image: "/placeholder.svg"
  }
];
