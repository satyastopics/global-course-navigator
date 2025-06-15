
import { College } from '../../../../../../../types/collegeTypes';

export const ucSystemUniversities: College[] = [
  {
    id: "70",
    name: "University of California, Berkeley",
    location: "Berkeley, California, USA",
    type: "Public",
    overallRanking: 5,
    establishedYear: 1868,
    courses: [
      { name: "Computer Science", ranking: 3, strength: "Excellent", fees: "$45K", feeType: "per-year" },
      { name: "Engineering", ranking: 3, strength: "Excellent", fees: "$45K", feeType: "per-year" },
      { name: "Business", ranking: 8, strength: "Very Good", fees: "$65K", feeType: "per-year" },
      { name: "Law", ranking: 12, strength: "Very Good", fees: "$55K", feeType: "per-year" }
    ],
    highlights: ["Top public university", "Research powerhouse", "Silicon Valley connections", "Nobel laureates"],
    website: "https://www.berkeley.edu",
    image: "/placeholder.svg"
  }
];
