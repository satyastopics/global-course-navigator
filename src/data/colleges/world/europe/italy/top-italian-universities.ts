import { College } from '../../../../../types/collegeTypes';

export const topItalianUniversities: College[] = [
  {
    id: "italy-01",
    name: "Sapienza University of Rome",
    location: "Rome, Italy",
    type: "Public",
    overallRanking: 134,
    establishedYear: 1303,
    courses: [
      { name: "Archaeology", ranking: 1, strength: "Excellent", fees: "€3,000", feeType: "per-year" },
      { name: "Classical Studies", ranking: 2, strength: "Excellent", fees: "€3,000", feeType: "per-year" },
      { name: "Physics", ranking: 28, strength: "Very Good", fees: "€3,000", feeType: "per-year" },
      { name: "Engineering", ranking: 45, strength: "Good", fees: "€3,000", feeType: "per-year" }
    ],
    highlights: ["Historic university", "Archaeology leader", "Research excellence", "Cultural heritage"],
    website: "https://www.uniroma1.it",
    image: "/placeholder.svg"
  },
  {
    id: "italy-02",
    name: "Politecnico di Milano",
    location: "Milan, Italy",
    type: "Public",
    overallRanking: 139,
    establishedYear: 1863,
    courses: [
      { name: "Engineering", ranking: 18, strength: "Very Good", fees: "€3,900", feeType: "per-year" },
      { name: "Architecture", ranking: 9, strength: "Excellent", fees: "€3,900", feeType: "per-year" },
      { name: "Design", ranking: 5, strength: "Excellent", fees: "€3,900", feeType: "per-year" },
      { name: "Computer Science", ranking: 35, strength: "Good", fees: "€3,900", feeType: "per-year" }
    ],
    highlights: ["Technical excellence", "Design leader", "Engineering focus", "Industry partnerships"],
    website: "https://www.polimi.it",
    image: "/placeholder.svg"
  },
  {
    id: "italy-03",
    name: "University of Bologna",
    location: "Bologna, Italy",
    type: "Public",
    overallRanking: 154,
    establishedYear: 1088,
    courses: [
      { name: "Law", ranking: 22, strength: "Very Good", fees: "€3,000", feeType: "per-year" },
      { name: "Medicine", ranking: 45, strength: "Good", fees: "€3,000", feeType: "per-year" },
      { name: "Business", ranking: 35, strength: "Good", fees: "€3,000", feeType: "per-year" },
      { name: "Agriculture", ranking: 28, strength: "Very Good", fees: "€3,000", feeType: "per-year" }
    ],
    highlights: ["World's oldest university", "Historic significance", "Research tradition", "Comprehensive programs"],
    website: "https://www.unibo.it",
    image: "/placeholder.svg"
  }
];