import { College } from '../../../../../types/collegeTypes';

export const topJapaneseUniversities: College[] = [
  {
    id: "japan-01",
    name: "University of Tokyo",
    location: "Tokyo, Japan",
    type: "Public",
    overallRanking: 23,
    establishedYear: 1877,
    courses: [
      { name: "Engineering", ranking: 8, strength: "Excellent", fees: "¥535,800", feeType: "per-year" },
      { name: "Medicine", ranking: 12, strength: "Excellent", fees: "¥535,800", feeType: "per-year" },
      { name: "Physics", ranking: 15, strength: "Excellent", fees: "¥535,800", feeType: "per-year" },
      { name: "Economics", ranking: 18, strength: "Very Good", fees: "¥535,800", feeType: "per-year" }
    ],
    highlights: ["Japan's top university", "Nobel laureates", "Research excellence", "Government partnerships"],
    website: "https://www.u-tokyo.ac.jp",
    image: "/placeholder.svg"
  },
  {
    id: "japan-02",
    name: "Kyoto University",
    location: "Kyoto, Japan",
    type: "Public",
    overallRanking: 36,
    establishedYear: 1897,
    courses: [
      { name: "Physics", ranking: 12, strength: "Excellent", fees: "¥535,800", feeType: "per-year" },
      { name: "Chemistry", ranking: 15, strength: "Excellent", fees: "¥535,800", feeType: "per-year" },
      { name: "Medicine", ranking: 20, strength: "Very Good", fees: "¥535,800", feeType: "per-year" },
      { name: "Engineering", ranking: 25, strength: "Very Good", fees: "¥535,800", feeType: "per-year" }
    ],
    highlights: ["Research university", "Nobel Prize winners", "Liberal tradition", "Academic freedom"],
    website: "https://www.kyoto-u.ac.jp",
    image: "/placeholder.svg"
  },
  {
    id: "japan-03",
    name: "Tokyo Institute of Technology",
    location: "Tokyo, Japan",
    type: "Public",
    overallRanking: 56,
    establishedYear: 1881,
    courses: [
      { name: "Engineering", ranking: 18, strength: "Very Good", fees: "¥535,800", feeType: "per-year" },
      { name: "Computer Science", ranking: 22, strength: "Very Good", fees: "¥535,800", feeType: "per-year" },
      { name: "Materials Science", ranking: 12, strength: "Excellent", fees: "¥535,800", feeType: "per-year" },
      { name: "Physics", ranking: 28, strength: "Very Good", fees: "¥535,800", feeType: "per-year" }
    ],
    highlights: ["Tech specialization", "Industry partnerships", "Innovation focus", "Engineering excellence"],
    website: "https://www.titech.ac.jp",
    image: "/placeholder.svg"
  },
  {
    id: "japan-04",
    name: "Osaka University",
    location: "Osaka, Japan",
    type: "Public",
    overallRanking: 68,
    establishedYear: 1931,
    courses: [
      { name: "Medicine", ranking: 18, strength: "Very Good", fees: "¥535,800", feeType: "per-year" },
      { name: "Engineering", ranking: 28, strength: "Very Good", fees: "¥535,800", feeType: "per-year" },
      { name: "Economics", ranking: 32, strength: "Good", fees: "¥535,800", feeType: "per-year" },
      { name: "Dentistry", ranking: 15, strength: "Excellent", fees: "¥535,800", feeType: "per-year" }
    ],
    highlights: ["Medical excellence", "Research university", "Innovation hub", "International programs"],
    website: "https://www.osaka-u.ac.jp",
    image: "/placeholder.svg"
  },
  {
    id: "japan-05",
    name: "Tohoku University",
    location: "Sendai, Japan",
    type: "Public",
    overallRanking: 79,
    establishedYear: 1907,
    courses: [
      { name: "Materials Science", ranking: 15, strength: "Excellent", fees: "¥535,800", feeType: "per-year" },
      { name: "Physics", ranking: 25, strength: "Very Good", fees: "¥535,800", feeType: "per-year" },
      { name: "Engineering", ranking: 35, strength: "Good", fees: "¥535,800", feeType: "per-year" },
      { name: "Medicine", ranking: 28, strength: "Very Good", fees: "¥535,800", feeType: "per-year" }
    ],
    highlights: ["Materials research", "Innovation leader", "Research excellence", "International cooperation"],
    website: "https://www.tohoku.ac.jp",
    image: "/placeholder.svg"
  }
];