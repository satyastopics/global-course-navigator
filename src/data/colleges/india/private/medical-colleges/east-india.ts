
import { College } from '../../../../../types/collegeTypes';

export const eastIndiaPrivateMedical: College[] = [
  {
    id: "62",
    name: "Techno India University",
    location: "Kolkata, West Bengal, India",
    type: "Private",
    overallRanking: 75,
    establishedYear: 2012,
    courses: [
      { name: "Medicine", ranking: 50, strength: "Average", fees: "₹12L", feeType: "per-year" },
      { name: "Engineering", ranking: 80, strength: "Average", fees: "₹2L", feeType: "per-year" },
      { name: "Management", ranking: 85, strength: "Average", fees: "₹6L", feeType: "total" }
    ],
    highlights: ["Regional university", "Affordable medical education", "Multi-campus", "Growing reputation"],
    website: "https://www.tiu.edu.in",
    image: "/placeholder.svg"
  }
];
