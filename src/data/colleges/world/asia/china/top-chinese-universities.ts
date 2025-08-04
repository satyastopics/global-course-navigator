import { College } from '../../../../../types/collegeTypes';

export const topChineseUniversities: College[] = [
  {
    id: "china-01",
    name: "Peking University",
    location: "Beijing, China",
    type: "Public",
    overallRanking: 12,
    establishedYear: 1898,
    courses: [
      { name: "Computer Science", ranking: 8, strength: "Excellent", fees: "¥45,000", feeType: "per-year" },
      { name: "Economics", ranking: 5, strength: "Excellent", fees: "¥40,000", feeType: "per-year" },
      { name: "Physics", ranking: 10, strength: "Excellent", fees: "¥40,000", feeType: "per-year" },
      { name: "Mathematics", ranking: 15, strength: "Excellent", fees: "¥40,000", feeType: "per-year" }
    ],
    highlights: ["Top Chinese university", "Research excellence", "International programs", "Historic campus"],
    website: "https://www.pku.edu.cn",
    image: "/placeholder.svg"
  },
  {
    id: "china-02",
    name: "Tsinghua University",
    location: "Beijing, China",
    type: "Public",
    overallRanking: 14,
    establishedYear: 1911,
    courses: [
      { name: "Engineering", ranking: 3, strength: "Excellent", fees: "¥50,000", feeType: "per-year" },
      { name: "Computer Science", ranking: 5, strength: "Excellent", fees: "¥50,000", feeType: "per-year" },
      { name: "Architecture", ranking: 8, strength: "Excellent", fees: "¥45,000", feeType: "per-year" },
      { name: "Business", ranking: 12, strength: "Excellent", fees: "¥55,000", feeType: "per-year" }
    ],
    highlights: ["Engineering excellence", "Silicon Valley partnerships", "Research leader", "Global rankings"],
    website: "https://www.tsinghua.edu.cn",
    image: "/placeholder.svg"
  },
  {
    id: "china-03",
    name: "Fudan University",
    location: "Shanghai, China",
    type: "Public",
    overallRanking: 34,
    establishedYear: 1905,
    courses: [
      { name: "Medicine", ranking: 15, strength: "Excellent", fees: "¥60,000", feeType: "per-year" },
      { name: "Economics", ranking: 12, strength: "Excellent", fees: "¥45,000", feeType: "per-year" },
      { name: "International Relations", ranking: 8, strength: "Excellent", fees: "¥40,000", feeType: "per-year" },
      { name: "Management", ranking: 18, strength: "Very Good", fees: "¥50,000", feeType: "per-year" }
    ],
    highlights: ["Medical excellence", "Business leadership", "International focus", "Research university"],
    website: "https://www.fudan.edu.cn",
    image: "/placeholder.svg"
  },
  {
    id: "china-04",
    name: "Shanghai Jiao Tong University",
    location: "Shanghai, China",
    type: "Public",
    overallRanking: 46,
    establishedYear: 1896,
    courses: [
      { name: "Engineering", ranking: 12, strength: "Excellent", fees: "¥48,000", feeType: "per-year" },
      { name: "Medicine", ranking: 18, strength: "Very Good", fees: "¥55,000", feeType: "per-year" },
      { name: "Business", ranking: 20, strength: "Very Good", fees: "¥45,000", feeType: "per-year" },
      { name: "Computer Science", ranking: 25, strength: "Very Good", fees: "¥48,000", feeType: "per-year" }
    ],
    highlights: ["Engineering powerhouse", "Medical school excellence", "Innovation hub", "Industry partnerships"],
    website: "https://www.sjtu.edu.cn",
    image: "/placeholder.svg"
  },
  {
    id: "china-05",
    name: "Zhejiang University",
    location: "Hangzhou, China",
    type: "Public",
    overallRanking: 52,
    establishedYear: 1897,
    courses: [
      { name: "Computer Science", ranking: 18, strength: "Very Good", fees: "¥45,000", feeType: "per-year" },
      { name: "Engineering", ranking: 22, strength: "Very Good", fees: "¥45,000", feeType: "per-year" },
      { name: "Agriculture", ranking: 8, strength: "Excellent", fees: "¥35,000", feeType: "per-year" },
      { name: "Medicine", ranking: 25, strength: "Very Good", fees: "¥50,000", feeType: "per-year" }
    ],
    highlights: ["Tech innovation", "Agricultural research", "Comprehensive university", "Entrepreneurship"],
    website: "https://www.zju.edu.cn",
    image: "/placeholder.svg"
  }
];