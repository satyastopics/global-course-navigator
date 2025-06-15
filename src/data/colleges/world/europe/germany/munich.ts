
import { College } from '../../../../../types/collegeTypes';

export const munichUniversities: College[] = [
  {
    id: "de-munich-01",
    name: "Technical University of Munich",
    location: "Munich, Germany",
    type: "Public",
    overallRanking: 50,
    establishedYear: 1868,
    courses: [
      { name: "Engineering", ranking: 18, strength: "Excellent", fees: "€3,000", feeType: "per-year" },
      { name: "Computer Science", ranking: 25, strength: "Very Good", fees: "€3,000", feeType: "per-year" },
      { name: "Physics", ranking: 22, strength: "Very Good", fees: "€3,000", feeType: "per-year" },
      { name: "Business", ranking: 35, strength: "Good", fees: "€25,000", feeType: "per-year" }
    ],
    highlights: ["Top German tech university", "Industry partnerships", "Affordable fees", "Research focus"],
    website: "https://www.tum.de",
    image: "/placeholder.svg"
  }
];
