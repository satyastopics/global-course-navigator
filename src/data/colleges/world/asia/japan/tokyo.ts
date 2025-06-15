
import { College } from '../../../../../types/collegeTypes';

export const tokyoUniversities: College[] = [
  {
    id: "jp-tokyo-01",
    name: "University of Tokyo",
    location: "Tokyo, Japan",
    type: "Public",
    overallRanking: 23,
    establishedYear: 1877,
    courses: [
      { name: "Engineering", ranking: 15, strength: "Excellent", fees: "$3,500", feeType: "per-year" },
      { name: "Medicine", ranking: 18, strength: "Excellent", fees: "$3,500", feeType: "per-year" },
      { name: "Liberal Arts", ranking: 25, strength: "Very Good", fees: "$3,500", feeType: "per-year" },
      { name: "Law", ranking: 20, strength: "Very Good", fees: "$3,500", feeType: "per-year" }
    ],
    highlights: ["Japan's top university", "Imperial university", "Research excellence", "Liberal education"],
    website: "https://www.u-tokyo.ac.jp",
    image: "/placeholder.svg"
  },
  {
    id: "jp-tokyo-02",
    name: "Tokyo Institute of Technology",
    location: "Tokyo, Japan",
    type: "Public",
    overallRanking: 58,
    establishedYear: 1881,
    courses: [
      { name: "Engineering", ranking: 25, strength: "Excellent", fees: "$3,500", feeType: "per-year" },
      { name: "Computer Science", ranking: 30, strength: "Very Good", fees: "$3,500", feeType: "per-year" },
      { name: "Science", ranking: 35, strength: "Very Good", fees: "$3,500", feeType: "per-year" }
    ],
    highlights: ["Technology focus", "Research excellence", "Industry partnerships", "Innovation hub"],
    website: "https://www.titech.ac.jp",
    image: "/placeholder.svg"
  }
];
