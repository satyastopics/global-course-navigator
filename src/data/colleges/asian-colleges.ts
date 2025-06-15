
import { College } from '../../types/collegeTypes';

export const asianColleges: College[] = [
  {
    id: "63",
    name: "Seoul National University",
    location: "Seoul, South Korea",
    type: "Public",
    overallRanking: 29,
    establishedYear: 1946,
    courses: [
      { name: "Engineering", ranking: 20, strength: "Excellent", fees: "$8,200", feeType: "per-year" },
      { name: "Computer Science", ranking: 22, strength: "Very Good", fees: "$8,200", feeType: "per-year" },
      { name: "Medicine", ranking: 15, strength: "Excellent", fees: "$12,400", feeType: "per-year" },
      { name: "Business", ranking: 35, strength: "Good", fees: "$8,200", feeType: "per-year" }
    ],
    highlights: ["Korea's top university", "Strong in STEM", "Government support", "Research focused"],
    website: "https://www.snu.ac.kr",
    image: "/placeholder.svg"
  },
  {
    id: "64",
    name: "Tsinghua University",
    location: "Beijing, China",
    type: "Public",
    overallRanking: 17,
    establishedYear: 1911,
    courses: [
      { name: "Engineering", ranking: 5, strength: "Excellent", fees: "$5,500", feeType: "per-year" },
      { name: "Computer Science", ranking: 8, strength: "Excellent", fees: "$5,500", feeType: "per-year" },
      { name: "Architecture", ranking: 3, strength: "Excellent", fees: "$5,500", feeType: "per-year" },
      { name: "Physics", ranking: 12, strength: "Excellent", fees: "$5,500", feeType: "per-year" }
    ],
    highlights: ["China's MIT", "Engineering excellence", "Strong industry ties", "Innovation hub"],
    website: "https://www.tsinghua.edu.cn",
    image: "/placeholder.svg"
  },
  {
    id: "73",
    name: "Waseda University",
    location: "Tokyo, Japan",
    type: "Private",
    overallRanking: 203,
    establishedYear: 1882,
    courses: [
      { name: "Political Science", ranking: 85, strength: "Good", fees: "$12,800", feeType: "per-year" },
      { name: "Business", ranking: 120, strength: "Average", fees: "$12,100", feeType: "per-year" },
      { name: "Engineering", ranking: 145, strength: "Average", fees: "$16,000", feeType: "per-year" },
      { name: "International Studies", ranking: 95, strength: "Good", fees: "$12,800", feeType: "per-year" }
    ],
    highlights: ["Strong alumni network", "International programs", "Central Tokyo location", "Liberal education"],
    website: "https://www.waseda.jp",
    image: "/placeholder.svg"
  },
  {
    id: "75",
    name: "Chulalongkorn University",
    location: "Bangkok, Thailand",
    type: "Public",
    overallRanking: 208,
    establishedYear: 1917,
    courses: [
      { name: "Medicine", ranking: 180, strength: "Average", fees: "$9,800", feeType: "per-year" },
      { name: "Engineering", ranking: 195, strength: "Average", fees: "$5,000", feeType: "per-year" },
      { name: "Business", ranking: 185, strength: "Average", fees: "$4,200", feeType: "per-year" },
      { name: "Arts", ranking: 175, strength: "Average", fees: "$3,400", feeType: "per-year" }
    ],
    highlights: ["Thailand's oldest university", "Royal patronage", "Central Bangkok", "Strong traditions"],
    website: "https://www.chula.ac.th",
    image: "/placeholder.svg"
  }
];
