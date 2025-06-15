
import { College } from '../../../../../types/collegeTypes';

export const osakaUniversities: College[] = [
  {
    id: "jp-osaka-01",
    name: "Osaka University",
    location: "Osaka, Japan",
    type: "Public",
    overallRanking: 68,
    establishedYear: 1931,
    courses: [
      { name: "Medicine", ranking: 25, strength: "Excellent", fees: "$3,500", feeType: "per-year" },
      { name: "Engineering", ranking: 35, strength: "Very Good", fees: "$3,500", feeType: "per-year" },
      { name: "Science", ranking: 40, strength: "Good", fees: "$3,500", feeType: "per-year" }
    ],
    highlights: ["Imperial university", "Medical excellence", "Research university", "Regional leader"],
    website: "https://www.osaka-u.ac.jp",
    image: "/placeholder.svg"
  }
];
