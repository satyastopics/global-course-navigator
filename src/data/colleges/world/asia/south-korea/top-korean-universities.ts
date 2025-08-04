import { College } from '../../../../../types/collegeTypes';

export const topKoreanUniversities: College[] = [
  {
    id: "korea-01",
    name: "Seoul National University",
    location: "Seoul, South Korea",
    type: "Public",
    overallRanking: 29,
    establishedYear: 1946,
    courses: [
      { name: "Engineering", ranking: 12, strength: "Excellent", fees: "₩4,200,000", feeType: "per-year" },
      { name: "Medicine", ranking: 15, strength: "Excellent", fees: "₩5,500,000", feeType: "per-year" },
      { name: "Business", ranking: 18, strength: "Very Good", fees: "₩4,000,000", feeType: "per-year" },
      { name: "Law", ranking: 8, strength: "Excellent", fees: "₩4,000,000", feeType: "per-year" }
    ],
    highlights: ["Korea's top university", "Research excellence", "Government partnerships", "Global rankings"],
    website: "https://www.snu.ac.kr",
    image: "/placeholder.svg"
  },
  {
    id: "korea-02",
    name: "KAIST",
    location: "Daejeon, South Korea",
    type: "Public",
    overallRanking: 41,
    establishedYear: 1971,
    courses: [
      { name: "Engineering", ranking: 8, strength: "Excellent", fees: "₩8,000,000", feeType: "per-year" },
      { name: "Computer Science", ranking: 10, strength: "Excellent", fees: "₩8,000,000", feeType: "per-year" },
      { name: "Business", ranking: 25, strength: "Very Good", fees: "₩9,000,000", feeType: "per-year" },
      { name: "Applied Sciences", ranking: 12, strength: "Excellent", fees: "₩8,000,000", feeType: "per-year" }
    ],
    highlights: ["Science & technology focus", "Innovation leader", "Research university", "Industry partnerships"],
    website: "https://www.kaist.ac.kr",
    image: "/placeholder.svg"
  },
  {
    id: "korea-03",
    name: "Yonsei University",
    location: "Seoul, South Korea",
    type: "Private",
    overallRanking: 76,
    establishedYear: 1885,
    courses: [
      { name: "Medicine", ranking: 20, strength: "Very Good", fees: "₩12,000,000", feeType: "per-year" },
      { name: "Business", ranking: 28, strength: "Very Good", fees: "₩8,500,000", feeType: "per-year" },
      { name: "International Studies", ranking: 15, strength: "Excellent", fees: "₩8,000,000", feeType: "per-year" },
      { name: "Engineering", ranking: 35, strength: "Good", fees: "₩9,000,000", feeType: "per-year" }
    ],
    highlights: ["Private excellence", "International programs", "Medical school", "Liberal arts tradition"],
    website: "https://www.yonsei.ac.kr",
    image: "/placeholder.svg"
  },
  {
    id: "korea-04",
    name: "Korea University",
    location: "Seoul, South Korea",
    type: "Private",
    overallRanking: 86,
    establishedYear: 1905,
    courses: [
      { name: "Law", ranking: 12, strength: "Excellent", fees: "₩8,000,000", feeType: "per-year" },
      { name: "Business", ranking: 32, strength: "Good", fees: "₩8,500,000", feeType: "per-year" },
      { name: "Political Science", ranking: 18, strength: "Very Good", fees: "₩7,500,000", feeType: "per-year" },
      { name: "Engineering", ranking: 42, strength: "Good", fees: "₩8,500,000", feeType: "per-year" }
    ],
    highlights: ["Legal education leader", "Alumni network", "Research university", "Traditional excellence"],
    website: "https://www.korea.ac.kr",
    image: "/placeholder.svg"
  },
  {
    id: "korea-05",
    name: "POSTECH",
    location: "Pohang, South Korea",
    type: "Private",
    overallRanking: 71,
    establishedYear: 1986,
    courses: [
      { name: "Engineering", ranking: 15, strength: "Excellent", fees: "₩10,000,000", feeType: "per-year" },
      { name: "Materials Science", ranking: 8, strength: "Excellent", fees: "₩10,000,000", feeType: "per-year" },
      { name: "Physics", ranking: 18, strength: "Very Good", fees: "₩10,000,000", feeType: "per-year" },
      { name: "Chemistry", ranking: 22, strength: "Very Good", fees: "₩10,000,000", feeType: "per-year" }
    ],
    highlights: ["Technology focus", "Research excellence", "Industry partnerships", "Innovation hub"],
    website: "https://www.postech.ac.kr",
    image: "/placeholder.svg"
  }
];