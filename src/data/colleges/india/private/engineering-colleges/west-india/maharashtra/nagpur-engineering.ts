
import { College } from '../../../../../../../types/collegeTypes';

export const nagpurPrivateEngineering: College[] = [
  {
    id: "eng-mh-ngp-01",
    name: "Visvesvaraya National Institute of Technology",
    location: "Nagpur, Maharashtra, India",
    type: "Private",
    overallRanking: 35,
    establishedYear: 1960,
    courses: [
      { name: "Computer Science", ranking: 28, strength: "Good", fees: "₹1.8L", feeType: "per-year" },
      { name: "Engineering", ranking: 35, strength: "Good", fees: "₹1.5L", feeType: "per-year" },
      { name: "Management", ranking: 40, strength: "Good", fees: "₹4L", feeType: "total" }
    ],
    highlights: ["National importance", "Research excellence", "Strong placement", "Government funded"],
    website: "https://www.vnit.ac.in",
    image: "/placeholder.svg"
  }
];
