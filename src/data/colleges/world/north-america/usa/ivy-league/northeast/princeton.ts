
import { College } from '../../../../../../../types/collegeTypes';

export const princetonUniversity: College[] = [
  {
    id: "61",
    name: "Princeton University",
    location: "Princeton, New Jersey, USA",
    type: "Ivy League",
    overallRanking: 2,
    establishedYear: 1746,
    courses: [
      { name: "Engineering", ranking: 8, strength: "Excellent", fees: "$58K", feeType: "per-year" },
      { name: "Economics", ranking: 1, strength: "Excellent", fees: "$58K", feeType: "per-year" },
      { name: "Public Policy", ranking: 1, strength: "Excellent", fees: "$58K", feeType: "per-year" },
      { name: "Mathematics", ranking: 2, strength: "Excellent", fees: "$58K", feeType: "per-year" }
    ],
    highlights: ["Undergraduate focus", "No graduate business school", "Beautiful campus", "Academic excellence"],
    website: "https://www.princeton.edu",
    image: "/placeholder.svg"
  }
];
