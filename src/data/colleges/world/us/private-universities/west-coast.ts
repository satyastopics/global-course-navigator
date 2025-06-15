
import { College } from '../../../../../types/collegeTypes';

export const westCoastPrivate: College[] = [
  {
    id: "88",
    name: "University of Southern California",
    location: "Los Angeles, California, USA",
    type: "Private",
    overallRanking: 25,
    establishedYear: 1880,
    courses: [
      { name: "Film", ranking: 1, strength: "Excellent", fees: "$60K", feeType: "per-year" },
      { name: "Business", ranking: 18, strength: "Very Good", fees: "$65K", feeType: "per-year" },
      { name: "Engineering", ranking: 25, strength: "Good", fees: "$58K", feeType: "per-year" },
      { name: "Communications", ranking: 8, strength: "Very Good", fees: "$56K", feeType: "per-year" }
    ],
    highlights: ["Film school excellence", "LA location", "Industry connections", "Strong alumni network"],
    website: "https://www.usc.edu",
    image: "/placeholder.svg"
  }
];
