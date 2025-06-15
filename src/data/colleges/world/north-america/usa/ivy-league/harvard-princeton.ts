
import { College } from '../../../../../../types/collegeTypes';

export const harvardPrincetonGroup: College[] = [
  {
    id: "1",
    name: "Harvard University",
    location: "Cambridge, Massachusetts, USA",
    type: "Ivy League",
    overallRanking: 1,
    establishedYear: 1636,
    courses: [
      { name: "Business", ranking: 1, strength: "Excellent", fees: "$73,600", feeType: "per-year" },
      { name: "Law", ranking: 2, strength: "Excellent", fees: "$70,430", feeType: "per-year" },
      { name: "Medicine", ranking: 1, strength: "Excellent", fees: "$68,123", feeType: "per-year" },
      { name: "Computer Science", ranking: 5, strength: "Excellent", fees: "$55,510", feeType: "per-year" }
    ],
    highlights: ["Oldest institution in the US", "Largest academic library", "Generous financial aid", "Strong alumni network"],
    website: "https://www.harvard.edu",
    image: "/placeholder.svg"
  },
  {
    id: "4",
    name: "Princeton University",
    location: "Princeton, New Jersey, USA",
    type: "Ivy League",
    overallRanking: 4,
    establishedYear: 1746,
    courses: [
      { name: "Mathematics", ranking: 2, strength: "Excellent", fees: "$56,010", feeType: "per-year" },
      { name: "Economics", ranking: 1, strength: "Excellent", fees: "$56,010", feeType: "per-year" },
      { name: "Public Policy", ranking: 4, strength: "Excellent", fees: "$56,010", feeType: "per-year" },
      { name: "Engineering", ranking: 10, strength: "Very Good", fees: "$56,010", feeType: "per-year" }
    ],
    highlights: ["No graduate business or medical school", "Strong focus on undergraduate teaching", "Generous financial aid", "Close student-faculty interaction"],
    website: "https://www.princeton.edu",
    image: "/placeholder.svg"
  }
];
