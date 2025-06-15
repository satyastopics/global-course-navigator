
import { College } from '../../../../../types/collegeTypes';

export const eastCoastPrivate: College[] = [
  {
    id: "87",
    name: "Duke University",
    location: "Durham, North Carolina, USA",
    type: "Private",
    overallRanking: 10,
    establishedYear: 1838,
    courses: [
      { name: "Medicine", ranking: 8, strength: "Excellent", fees: "$62K", feeType: "per-year" },
      { name: "Business", ranking: 12, strength: "Excellent", fees: "$70K", feeType: "per-year" },
      { name: "Law", ranking: 10, strength: "Very Good", fees: "$68K", feeType: "per-year" },
      { name: "Engineering", ranking: 18, strength: "Good", fees: "$58K", feeType: "per-year" }
    ],
    highlights: ["Research university", "Beautiful campus", "Strong athletics", "Medical excellence"],
    website: "https://www.duke.edu",
    image: "/placeholder.svg"
  }
];
