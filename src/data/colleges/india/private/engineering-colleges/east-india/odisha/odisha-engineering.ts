
import { College } from '../../../../../../../types/collegeTypes';

export const odishaEngineering: College[] = [
  {
    id: "eng-od-bbr-01",
    name: "Kalinga Institute of Industrial Technology",
    location: "Bhubaneswar, Odisha, India",
    type: "Private",
    overallRanking: 62,
    establishedYear: 1992,
    courses: [
      { name: "Computer Science", ranking: 52, strength: "Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 62, strength: "Average", fees: "₹2.2L", feeType: "per-year" },
      { name: "Management", ranking: 65, strength: "Average", fees: "₹7L", feeType: "total" }
    ],
    highlights: ["Deemed university", "Large campus", "Multi-disciplinary", "Industry partnerships"],
    website: "https://www.kiit.ac.in",
    image: "/placeholder.svg"
  }
];
