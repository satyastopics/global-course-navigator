
import { College } from '../../../../../types/collegeTypes';

export const northEnglandRussellGroup: College[] = [
  {
    id: "86",
    name: "University of Manchester",
    location: "Manchester, England, UK",
    type: "Public",
    overallRanking: 27,
    establishedYear: 1824,
    courses: [
      { name: "Engineering", ranking: 15, strength: "Very Good", fees: "£28K", feeType: "per-year" },
      { name: "Business", ranking: 25, strength: "Good", fees: "£45K", feeType: "per-year" },
      { name: "Computer Science", ranking: 20, strength: "Good", fees: "£28K", feeType: "per-year" }
    ],
    highlights: ["Large research university", "Industrial heritage", "Diverse programs", "Strong alumni network"],
    website: "https://www.manchester.ac.uk",
    image: "/placeholder.svg"
  }
];
