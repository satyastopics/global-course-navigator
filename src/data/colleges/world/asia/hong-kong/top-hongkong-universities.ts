import { College } from '../../../../../types/collegeTypes';

export const topHongKongUniversities: College[] = [
  {
    id: "hk-01",
    name: "University of Hong Kong",
    location: "Hong Kong",
    type: "Public",
    overallRanking: 26,
    establishedYear: 1911,
    courses: [
      { name: "Medicine", ranking: 4, strength: "Excellent", fees: "HK$164,000", feeType: "per-year" },
      { name: "Dentistry", ranking: 1, strength: "Excellent", fees: "HK$164,000", feeType: "per-year" },
      { name: "Law", ranking: 18, strength: "Very Good", fees: "HK$164,000", feeType: "per-year" },
      { name: "Architecture", ranking: 12, strength: "Excellent", fees: "HK$164,000", feeType: "per-year" }
    ],
    highlights: ["Oldest university in HK", "Medical excellence", "Research university", "Global outlook"],
    website: "https://www.hku.hk",
    image: "/placeholder.svg"
  },
  {
    id: "hk-02",
    name: "Hong Kong University of Science and Technology",
    location: "Hong Kong",
    type: "Public",
    overallRanking: 40,
    establishedYear: 1991,
    courses: [
      { name: "Engineering", ranking: 15, strength: "Excellent", fees: "HK$164,000", feeType: "per-year" },
      { name: "Business", ranking: 18, strength: "Very Good", fees: "HK$164,000", feeType: "per-year" },
      { name: "Computer Science", ranking: 20, strength: "Very Good", fees: "HK$164,000", feeType: "per-year" },
      { name: "Economics", ranking: 25, strength: "Very Good", fees: "HK$164,000", feeType: "per-year" }
    ],
    highlights: ["Young university", "Technology focus", "Research excellence", "International outlook"],
    website: "https://www.ust.hk",
    image: "/placeholder.svg"
  },
  {
    id: "hk-03",
    name: "Chinese University of Hong Kong",
    location: "Hong Kong",
    type: "Public",
    overallRanking: 47,
    establishedYear: 1963,
    courses: [
      { name: "Medicine", ranking: 25, strength: "Very Good", fees: "HK$164,000", feeType: "per-year" },
      { name: "Business", ranking: 32, strength: "Good", fees: "HK$164,000", feeType: "per-year" },
      { name: "Engineering", ranking: 35, strength: "Good", fees: "HK$164,000", feeType: "per-year" },
      { name: "Social Sciences", ranking: 28, strength: "Very Good", fees: "HK$164,000", feeType: "per-year" }
    ],
    highlights: ["Bilingual education", "Research university", "Comprehensive programs", "Cultural bridge"],
    website: "https://www.cuhk.edu.hk",
    image: "/placeholder.svg"
  }
];