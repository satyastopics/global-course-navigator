import { College } from '../../../../../types/collegeTypes';

export const topTaiwaneseUniversities: College[] = [
  {
    id: "taiwan-01",
    name: "National Taiwan University",
    location: "Taipei, Taiwan",
    type: "Public",
    overallRanking: 68,
    establishedYear: 1928,
    courses: [
      { name: "Engineering", ranking: 22, strength: "Very Good", fees: "TWD 56,000", feeType: "per-year" },
      { name: "Medicine", ranking: 35, strength: "Good", fees: "TWD 56,000", feeType: "per-year" },
      { name: "Computer Science", ranking: 28, strength: "Very Good", fees: "TWD 56,000", feeType: "per-year" },
      { name: "Business", ranking: 42, strength: "Good", fees: "TWD 56,000", feeType: "per-year" }
    ],
    highlights: ["Taiwan's top university", "Research excellence", "Comprehensive programs", "Regional leader"],
    website: "https://www.ntu.edu.tw",
    image: "/placeholder.svg"
  },
  {
    id: "taiwan-02",
    name: "National Tsing Hua University",
    location: "Hsinchu, Taiwan",
    type: "Public",
    overallRanking: 180,
    establishedYear: 1911,
    courses: [
      { name: "Engineering", ranking: 35, strength: "Good", fees: "TWD 56,000", feeType: "per-year" },
      { name: "Computer Science", ranking: 42, strength: "Good", fees: "TWD 56,000", feeType: "per-year" },
      { name: "Physics", ranking: 38, strength: "Good", fees: "TWD 56,000", feeType: "per-year" },
      { name: "Materials Science", ranking: 25, strength: "Very Good", fees: "TWD 56,000", feeType: "per-year" }
    ],
    highlights: ["Technology focus", "Research university", "Science excellence", "Innovation hub"],
    website: "https://www.nthu.edu.tw",
    image: "/placeholder.svg"
  },
  {
    id: "taiwan-03",
    name: "National Chiao Tung University",
    location: "Hsinchu, Taiwan",
    type: "Public",
    overallRanking: 200,
    establishedYear: 1896,
    courses: [
      { name: "Engineering", ranking: 38, strength: "Good", fees: "TWD 56,000", feeType: "per-year" },
      { name: "Computer Science", ranking: 45, strength: "Good", fees: "TWD 56,000", feeType: "per-year" },
      { name: "Electrical Engineering", ranking: 32, strength: "Good", fees: "TWD 56,000", feeType: "per-year" },
      { name: "Management", ranking: 48, strength: "Good", fees: "TWD 56,000", feeType: "per-year" }
    ],
    highlights: ["Engineering excellence", "Technology leadership", "Innovation focus", "Industry partnerships"],
    website: "https://www.nctu.edu.tw",
    image: "/placeholder.svg"
  }
];