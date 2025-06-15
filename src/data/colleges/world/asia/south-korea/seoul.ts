
import { College } from '../../../../../types/collegeTypes';

export const seoulUniversities: College[] = [
  {
    id: "kr-seoul-01",
    name: "Seoul National University",
    location: "Seoul, South Korea",
    type: "Public",
    overallRanking: 29,
    establishedYear: 1946,
    courses: [
      { name: "Engineering", ranking: 20, strength: "Excellent", fees: "$8,200", feeType: "per-year" },
      { name: "Computer Science", ranking: 22, strength: "Very Good", fees: "$8,200", feeType: "per-year" },
      { name: "Medicine", ranking: 15, strength: "Excellent", fees: "$12,400", feeType: "per-year" },
      { name: "Liberal Arts", ranking: 35, strength: "Good", fees: "$6,500", feeType: "per-year" }
    ],
    highlights: ["Korea's top university", "Strong in STEM", "Government support", "Research focused"],
    website: "https://www.snu.ac.kr",
    image: "/placeholder.svg"
  },
  {
    id: "kr-seoul-02",
    name: "Yonsei University",
    location: "Seoul, South Korea",
    type: "Private",
    overallRanking: 85,
    establishedYear: 1885,
    courses: [
      { name: "Medicine", ranking: 25, strength: "Very Good", fees: "$15,000", feeType: "per-year" },
      { name: "Business", ranking: 40, strength: "Good", fees: "$12,000", feeType: "per-year" },
      { name: "Liberal Arts", ranking: 50, strength: "Good", fees: "$10,000", feeType: "per-year" }
    ],
    highlights: ["Historic university", "Medical excellence", "International programs", "Beautiful campus"],
    website: "https://www.yonsei.ac.kr",
    image: "/placeholder.svg"
  }
];
