
import { College } from '../../../../../types/collegeTypes';

export const westIndiaPrivateLawColleges: College[] = [
  {
    id: "law-03",
    name: "Government Law College",
    location: "Mumbai, Maharashtra, India",
    type: "Private",
    overallRanking: 12,
    establishedYear: 1855,
    courses: [
      { name: "Law", ranking: 8, strength: "Very Good", fees: "₹2L", feeType: "total" },
      { name: "Commercial Law", ranking: 10, strength: "Good", fees: "₹2L", feeType: "total" },
      { name: "Criminal Law", ranking: 12, strength: "Good", fees: "₹2L", feeType: "total" }
    ],
    highlights: ["Historic institution", "Affordable fees", "Mumbai legal hub", "Strong placement"],
    website: "https://www.glcmumbai.gov.in",
    image: "/placeholder.svg"
  }
];
