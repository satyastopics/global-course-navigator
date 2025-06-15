
import { College } from '../../../../../types/collegeTypes';

export const westIndiaPrivateLiberalArts: College[] = [
  {
    id: "lib-west-01",
    name: "Flame University",
    location: "Pune, Maharashtra, India",
    type: "Private",
    overallRanking: 28,
    establishedYear: 2015,
    courses: [
      { name: "Liberal Arts", ranking: 12, strength: "Very Good", fees: "₹18L", feeType: "total" },
      { name: "Psychology", ranking: 8, strength: "Very Good", fees: "₹18L", feeType: "total" },
      { name: "Communication", ranking: 10, strength: "Very Good", fees: "₹18L", feeType: "total" }
    ],
    highlights: ["Liberal arts focus", "Interdisciplinary approach", "Industry partnerships", "Modern campus"],
    website: "https://www.flame.edu.in",
    image: "/placeholder.svg"
  }
];
