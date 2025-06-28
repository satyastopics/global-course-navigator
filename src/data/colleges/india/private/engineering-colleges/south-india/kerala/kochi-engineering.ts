
import { College } from '../../../../../../../types/collegeTypes';

export const kochiPrivateEngineering: College[] = [
  {
    id: "eng-ker-01",
    name: "Cochin University of Science and Technology",
    location: "Kochi, Kerala, India",
    type: "Private",
    overallRanking: 33,
    establishedYear: 1971,
    courses: [
      { name: "Computer Science", ranking: 28, strength: "Good", fees: "₹1.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 33, strength: "Good", fees: "₹1.3L", feeType: "per-year" },
      { name: "Marine Engineering", ranking: 8, strength: "Very Good", fees: "₹1.8L", feeType: "per-year" }
    ],
    highlights: ["State university", "Marine engineering specialty", "Research focus", "Coastal location"],
    website: "https://www.cusat.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-ker-02",
    name: "Rajagiri School of Engineering & Technology",
    location: "Kochi, Kerala, India",
    type: "Private",
    overallRanking: 41,
    establishedYear: 2001,
    courses: [
      { name: "Computer Science", ranking: 35, strength: "Good", fees: "₹2.8L", feeType: "per-year" },
      { name: "Engineering", ranking: 41, strength: "Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "Electronics", ranking: 38, strength: "Good", fees: "₹2.6L", feeType: "per-year" }
    ],
    highlights: ["Autonomous college", "Christian institution", "Industry partnerships", "Modern facilities"],
    website: "https://www.rajagiritech.ac.in",
    image: "/placeholder.svg"
  }
];
