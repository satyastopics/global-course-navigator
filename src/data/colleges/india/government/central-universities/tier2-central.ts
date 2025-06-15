
import { College } from '../../../../../types/collegeTypes';

export const tier2CentralUniversities: College[] = [
  {
    id: "11",
    name: "University of Hyderabad",
    location: "Hyderabad, Telangana, India",
    type: "Government",
    overallRanking: 35,
    establishedYear: 1974,
    courses: [
      { name: "Computer Science", ranking: 30, strength: "Good", fees: "₹0.8L", feeType: "per-year" },
      { name: "Social Sciences", ranking: 15, strength: "Good", fees: "₹0.5L", feeType: "per-year" },
      { name: "Liberal Arts", ranking: 20, strength: "Good", fees: "₹0.5L", feeType: "per-year" }
    ],
    highlights: ["Research university", "Beautiful campus", "Diverse disciplines", "Strong faculty"],
    website: "https://www.uohyd.ac.in",
    image: "/placeholder.svg"
  }
];
