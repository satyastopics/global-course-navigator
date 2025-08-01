
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
      { name: "Liberal Arts", ranking: 35, strength: "Good", fees: "$6,500", feeType: "per-year" }
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
      { name: "Business", ranking: 25, strength: "Very Good", fees: "$15,000", feeType: "per-year" }
    ],
    highlights: ["China's MIT", "Engineering excellence", "Strong industry ties", "Innovation hub"],
    website: "https://www.tsinghua.edu.cn",
    image: "/placeholder.svg"
  },
  {
    id: "73",
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
    id: "75",
    name: "National University of Singapore",
    location: "Singapore",
    type: "Public",
    overallRanking: 11,
    establishedYear: 1905,
    courses: [
      { name: "Engineering", ranking: 8, strength: "Excellent", fees: "$39,000", feeType: "per-year" },
      { name: "Computer Science", ranking: 10, strength: "Excellent", fees: "$39,000", feeType: "per-year" },
      { name: "Business", ranking: 12, strength: "Excellent", fees: "$45,000", feeType: "per-year" },
      { name: "Medicine", ranking: 22, strength: "Very Good", fees: "$65,000", feeType: "per-year" }
    ],
    highlights: ["Asia's top university", "Global city campus", "Strong research", "International outlook"],
    website: "https://www.nus.edu.sg",
    image: "/placeholder.svg"
  },
  {
    id: "76",
    name: "Tokyo Institute of Technology",
    location: "Tokyo, Japan",
    type: "Public",
    overallRanking: 55,
    establishedYear: 1881,
    courses: [
      { name: "Engineering", ranking: 13, strength: "Excellent", fees: "$3,500", feeType: "per-year" },
      { name: "Computer Science", ranking: 18, strength: "Excellent", fees: "$3,500", feeType: "per-year" },
      { name: "Materials Science", ranking: 8, strength: "Excellent", fees: "$3,500", feeType: "per-year" },
      { name: "Physics", ranking: 25, strength: "Very Good", fees: "$3,500", feeType: "per-year" }
    ],
    highlights: ["Top tech institute", "Innovation leader", "Industry partnerships", "Research excellence"],
    website: "https://www.titech.ac.jp",
    image: "/placeholder.svg"
  },
  {
    id: "77",
    name: "KAIST (Korea Advanced Institute of Science and Technology)",
    location: "Daejeon, South Korea",
    type: "Public",
    overallRanking: 42,
    establishedYear: 1971,
    courses: [
      { name: "Engineering", ranking: 14, strength: "Excellent", fees: "$9,000", feeType: "per-year" },
      { name: "Computer Science", ranking: 16, strength: "Excellent", fees: "$9,000", feeType: "per-year" },
      { name: "Materials Science", ranking: 12, strength: "Excellent", fees: "$9,000", feeType: "per-year" },
      { name: "Business", ranking: 28, strength: "Very Good", fees: "$12,000", feeType: "per-year" }
    ],
    highlights: ["Tech innovation hub", "Research excellence", "Startup ecosystem", "Government support"],
    website: "https://www.kaist.ac.kr",
    image: "/placeholder.svg"
  },
  {
    id: "78",
    name: "Peking University",
    location: "Beijing, China",
    type: "Public",
    overallRanking: 12,
    establishedYear: 1898,
    courses: [
      { name: "Liberal Arts", ranking: 8, strength: "Excellent", fees: "$5,500", feeType: "per-year" },
      { name: "Economics", ranking: 15, strength: "Excellent", fees: "$5,500", feeType: "per-year" },
      { name: "International Relations", ranking: 12, strength: "Excellent", fees: "$5,500", feeType: "per-year" },
      { name: "Mathematics", ranking: 18, strength: "Excellent", fees: "$5,500", feeType: "per-year" }
    ],
    highlights: ["China's Harvard", "Liberal arts focus", "Historic prestige", "Cultural significance"],
    website: "https://www.pku.edu.cn",
    image: "/placeholder.svg"
  },
  {
    id: "79",
    name: "Hong Kong University of Science and Technology",
    location: "Hong Kong",
    type: "Public",
    overallRanking: 27,
    establishedYear: 1991,
    courses: [
      { name: "Business", ranking: 14, strength: "Excellent", fees: "$31,000", feeType: "per-year" },
      { name: "Engineering", ranking: 19, strength: "Excellent", fees: "$31,000", feeType: "per-year" },
      { name: "Computer Science", ranking: 20, strength: "Excellent", fees: "$31,000", feeType: "per-year" },
      { name: "Economics", ranking: 22, strength: "Very Good", fees: "$31,000", feeType: "per-year" }
    ],
    highlights: ["Young and dynamic", "Business excellence", "International outlook", "Innovation focus"],
    website: "https://www.ust.hk",
    image: "/placeholder.svg"
  },
  {
    id: "80",
    name: "Nanyang Technological University",
    location: "Singapore",
    type: "Public",
    overallRanking: 26,
    establishedYear: 1981,
    courses: [
      { name: "Engineering", ranking: 11, strength: "Excellent", fees: "$37,000", feeType: "per-year" },
      { name: "Business", ranking: 16, strength: "Excellent", fees: "$42,000", feeType: "per-year" },
      { name: "Communication", ranking: 5, strength: "Excellent", fees: "$35,000", feeType: "per-year" },
      { name: "Materials Science", ranking: 3, strength: "Excellent", fees: "$37,000", feeType: "per-year" }
    ],
    highlights: ["Smart campus", "Innovation hub", "Industry partnerships", "Research excellence"],
    website: "https://www.ntu.edu.sg",
    image: "/placeholder.svg"
  }
];
