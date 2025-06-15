
import { College } from '../../../../../types/collegeTypes';

export const northIndiaPrivateLawColleges: College[] = [
  {
    id: "law-01",
    name: "Jindal Global Law School",
    location: "Sonipat, Haryana, India",
    type: "Private",
    overallRanking: 8,
    establishedYear: 2009,
    courses: [
      { name: "Law", ranking: 3, strength: "Excellent", fees: "₹18L", feeType: "total" },
      { name: "International Law", ranking: 2, strength: "Excellent", fees: "₹20L", feeType: "total" },
      { name: "Corporate Law", ranking: 4, strength: "Very Good", fees: "₹18L", feeType: "total" }
    ],
    highlights: ["Global outlook", "International partnerships", "Modern campus", "Industry connections"],
    website: "https://www.jgu.edu.in",
    image: "/placeholder.svg"
  }
];
