
import { College } from '../../../../../types/collegeTypes';

export const tier1CentralUniversities: College[] = [
  {
    id: "10",
    name: "Jawaharlal Nehru University",
    location: "New Delhi, India",
    type: "Government",
    overallRanking: 16,
    establishedYear: 1969,
    courses: [
      { name: "Social Sciences", ranking: 2, strength: "Excellent", fees: "₹0.5L", feeType: "per-year" },
      { name: "Liberal Arts", ranking: 5, strength: "Very Good", fees: "₹0.5L", feeType: "per-year" },
      { name: "International Studies", ranking: 1, strength: "Excellent", fees: "₹0.5L", feeType: "per-year" }
    ],
    highlights: ["Premier central university", "Research excellence", "Diverse programs", "Liberal atmosphere"],
    website: "https://www.jnu.ac.in",
    image: "/placeholder.svg"
  }
];
