
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
      { name: "Business", ranking: 5, strength: "Excellent", fees: "$11,000", feeType: "per-year" },
      { name: "Engineering", ranking: 8, strength: "Excellent", fees: "$11,000", feeType: "per-year" },
      { name: "Computer Science", ranking: 9, strength: "Excellent", fees: "$11,000", feeType: "per-year" },
      { name: "Liberal Arts", ranking: 20, strength: "Very Good", fees: "$10,000", feeType: "per-year" }
    ],
    highlights: ["Flagship university", "Strong business program", "Austin tech scene", "Research excellence"],
    website: "https://www.utexas.edu",
    image: "/placeholder.svg"
  }
];
