
import { College } from '../../../../../../../types/collegeTypes';

export const noidaUPPrivateEngineering: College[] = [
  {
    id: "55",
    name: "Jaypee Institute of Information Technology",
    location: "Noida, Uttar Pradesh, India",
    type: "Private",
    overallRanking: 32,
    establishedYear: 2001,
    courses: [
      { name: "Computer Science", ranking: 26, strength: "Good", fees: "₹2.8L", feeType: "per-year" },
      { name: "Engineering", ranking: 32, strength: "Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "Management", ranking: 50, strength: "Good", fees: "₹9L", feeType: "total" }
    ],
    highlights: ["Deemed university", "Modern infrastructure", "Industry connect", "Research facilities"],
    website: "https://www.jiit.ac.in",
    image: "/placeholder.svg"
  }
];
