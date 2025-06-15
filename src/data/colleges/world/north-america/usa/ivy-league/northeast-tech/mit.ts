
import { College } from '../../../../../../../types/collegeTypes';

export const mitUniversity: College[] = [
  {
    id: "78",
    name: "Massachusetts Institute of Technology",
    location: "Cambridge, Massachusetts, USA",
    type: "Private",
    overallRanking: 1,
    establishedYear: 1861,
    courses: [
      { name: "Engineering", ranking: 1, strength: "Excellent", fees: "$57K", feeType: "per-year" },
      { name: "Computer Science", ranking: 2, strength: "Excellent", fees: "$57K", feeType: "per-year" },
      { name: "Physics", ranking: 1, strength: "Excellent", fees: "$57K", feeType: "per-year" },
      { name: "Mathematics", ranking: 2, strength: "Excellent", fees: "$57K", feeType: "per-year" }
    ],
    highlights: ["World's top tech school", "Innovation leader", "Nobel laureates", "Research excellence"],
    website: "https://www.mit.edu",
    image: "/placeholder.svg"
  }
];
