
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
    id: "65",
    name: "Peking University",
    location: "Beijing, China",
    type: "Public",
    overallRanking: 12,
    establishedYear: 1898,
    courses: [
      { name: "Liberal Arts", ranking: 1, strength: "Excellent", fees: "$4,800", feeType: "per-year" },
      { name: "Law", ranking: 1, strength: "Excellent", fees: "$4,800", feeType: "per-year" },
      { name: "Economics", ranking: 1, strength: "Excellent", fees: "$4,800", feeType: "per-year" },
      { name: "Medicine", ranking: 1, strength: "Excellent", fees: "$6,000", feeType: "per-year" }
    ],
    highlights: ["China's Harvard", "Liberal arts leader", "Beautiful campus", "Top academic reputation"],
    website: "https://www.pku.edu.cn",
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
      { name: "Physics", ranking: 22, strength: "Very Good", fees: "$9,000", feeType: "per-year" }
    ],
    highlights: ["Science and technology focus", "Innovation leader", "Government support", "Research excellence"],
    website: "https://www.kaist.ac.kr",
    image: "/placeholder.svg"
  },
  {
    id: "78",
    name: "Nanyang Technological University",
    location: "Singapore",
    type: "Public",
    overallRanking: 26,
    establishedYear: 1991,
    courses: [
      { name: "Engineering", ranking: 10, strength: "Excellent", fees: "$35,000", feeType: "per-year" },
      { name: "Computer Science", ranking: 13, strength: "Excellent", fees: "$35,000", feeType: "per-year" },
      { name: "Materials Science", ranking: 3, strength: "Excellent", fees: "$35,000", feeType: "per-year" },
      { name: "Business", ranking: 18, strength: "Very Good", fees: "$42,000", feeType: "per-year" }
    ],
    highlights: ["Young university", "Technology focus", "Beautiful campus", "Global outlook"],
    website: "https://www.ntu.edu.sg",
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
      { name: "Engineering", ranking: 12, strength: "Excellent", fees: "HK$171,000", feeType: "per-year" },
      { name: "Computer Science", ranking: 11, strength: "Excellent", fees: "HK$171,000", feeType: "per-year" },
      { name: "Business", ranking: 14, strength: "Excellent", fees: "HK$195,000", feeType: "per-year" },
      { name: "Mathematics", ranking: 18, strength: "Very Good", fees: "HK$171,000", feeType: "per-year" }
    ],
    highlights: ["Young research university", "International faculty", "Beautiful campus", "Business excellence"],
    website: "https://www.ust.hk",
    image: "/placeholder.svg"
  },
  {
    id: "80",
    name: "University of Hong Kong",
    location: "Hong Kong",
    type: "Public",
    overallRanking: 21,
    establishedYear: 1911,
    courses: [
      { name: "Medicine", ranking: 20, strength: "Very Good", fees: "HK$456,000", feeType: "per-year" },
      { name: "Law", ranking: 18, strength: "Very Good", fees: "HK$171,000", feeType: "per-year" },
      { name: "Architecture", ranking: 12, strength: "Excellent", fees: "HK$171,000", feeType: "per-year" },
      { name: "Business", ranking: 28, strength: "Good", fees: "HK$195,000", feeType: "per-year" }
    ],
    highlights: ["Historic prestige", "International outlook", "Research excellence", "Gateway to China"],
    website: "https://www.hku.hk",
    image: "/placeholder.svg"
  },
  {
    id: "81",
    name: "Fudan University",
    location: "Shanghai, China",
    type: "Public",
    overallRanking: 40,
    establishedYear: 1905,
    courses: [
      { name: "Economics", ranking: 12, strength: "Excellent", fees: "$5,200", feeType: "per-year" },
      { name: "Medicine", ranking: 25, strength: "Very Good", fees: "$6,800", feeType: "per-year" },
      { name: "Liberal Arts", ranking: 18, strength: "Very Good", fees: "$4,800", feeType: "per-year" },
      { name: "Computer Science", ranking: 35, strength: "Good", fees: "$5,200", feeType: "per-year" }
    ],
    highlights: ["Shanghai location", "Comprehensive university", "Strong liberal arts", "International programs"],
    website: "https://www.fudan.edu.cn",
    image: "/placeholder.svg"
  },
  {
    id: "82",
    name: "Shanghai Jiao Tong University",
    location: "Shanghai, China",
    type: "Public",
    overallRanking: 46,
    establishedYear: 1896,
    courses: [
      { name: "Engineering", ranking: 22, strength: "Very Good", fees: "$5,500", feeType: "per-year" },
      { name: "Medicine", ranking: 28, strength: "Good", fees: "$6,500", feeType: "per-year" },
      { name: "Business", ranking: 32, strength: "Good", fees: "$12,000", feeType: "per-year" },
      { name: "Computer Science", ranking: 25, strength: "Very Good", fees: "$5,500", feeType: "per-year" }
    ],
    highlights: ["Engineering tradition", "Shanghai hub", "Innovation focus", "Industry partnerships"],
    website: "https://www.sjtu.edu.cn",
    image: "/placeholder.svg"
  },
  {
    id: "83",
    name: "Zhejiang University",
    location: "Hangzhou, China",
    type: "Public",
    overallRanking: 42,
    establishedYear: 1897,
    courses: [
      { name: "Engineering", ranking: 18, strength: "Very Good", fees: "$5,200", feeType: "per-year" },
      { name: "Computer Science", ranking: 20, strength: "Very Good", fees: "$5,200", feeType: "per-year" },
      { name: "Agriculture", ranking: 8, strength: "Excellent", fees: "$4,800", feeType: "per-year" },
      { name: "Medicine", ranking: 32, strength: "Good", fees: "$6,200", feeType: "per-year" }
    ],
    highlights: ["Comprehensive university", "Tech innovation", "Beautiful campus", "Strong research"],
    website: "https://www.zju.edu.cn",
    image: "/placeholder.svg"
  },
  {
    id: "84",
    name: "Indian Institute of Technology Bombay",
    location: "Mumbai, India",
    type: "Public",
    overallRanking: 149,
    establishedYear: 1958,
    courses: [
      { name: "Engineering", ranking: 42, strength: "Good", fees: "₹2.15L", feeType: "per-year" },
      { name: "Computer Science", ranking: 38, strength: "Good", fees: "₹2.15L", feeType: "per-year" },
      { name: "Business", ranking: 55, strength: "Average", fees: "₹15L", feeType: "per-year" },
      { name: "Mathematics", ranking: 48, strength: "Good", fees: "₹1.8L", feeType: "per-year" }
    ],
    highlights: ["Premier tech institute", "Mumbai location", "Industry connections", "Research excellence"],
    website: "https://www.iitb.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "85",
    name: "Indian Institute of Science",
    location: "Bangalore, India",
    type: "Public",
    overallRanking: 155,
    establishedYear: 1909,
    courses: [
      { name: "Engineering", ranking: 35, strength: "Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "Physics", ranking: 42, strength: "Good", fees: "₹1.5L", feeType: "per-year" },
      { name: "Chemistry", ranking: 38, strength: "Good", fees: "₹1.5L", feeType: "per-year" },
      { name: "Computer Science", ranking: 45, strength: "Good", fees: "₹2.5L", feeType: "per-year" }
    ],
    highlights: ["Research focus", "Science excellence", "Bangalore tech hub", "Graduate programs"],
    website: "https://www.iisc.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "86",
    name: "Yonsei University",
    location: "Seoul, South Korea",
    type: "Private",
    overallRanking: 73,
    establishedYear: 1885,
    courses: [
      { name: "Medicine", ranking: 25, strength: "Very Good", fees: "$14,000", feeType: "per-year" },
      { name: "Business", ranking: 32, strength: "Good", fees: "$12,000", feeType: "per-year" },
      { name: "Liberal Arts", ranking: 28, strength: "Good", fees: "$10,000", feeType: "per-year" },
      { name: "Engineering", ranking: 35, strength: "Good", fees: "$12,500", feeType: "per-year" }
    ],
    highlights: ["Historic university", "Seoul location", "International programs", "Strong alumni"],
    website: "https://www.yonsei.ac.kr",
    image: "/placeholder.svg"
  },
  {
    id: "87",
    name: "Korea University",
    location: "Seoul, South Korea",
    type: "Private",
    overallRanking: 79,
    establishedYear: 1905,
    courses: [
      { name: "Law", ranking: 15, strength: "Very Good", fees: "$11,500", feeType: "per-year" },
      { name: "Business", ranking: 28, strength: "Good", fees: "$11,000", feeType: "per-year" },
      { name: "Liberal Arts", ranking: 32, strength: "Good", fees: "$9,500", feeType: "per-year" },
      { name: "Engineering", ranking: 42, strength: "Good", fees: "$12,000", feeType: "per-year" }
    ],
    highlights: ["SKY university", "Law excellence", "Beautiful campus", "Strong traditions"],
    website: "https://www.korea.edu",
    image: "/placeholder.svg"
  },
  {
    id: "88",
    name: "Kyoto University",
    location: "Kyoto, Japan",
    type: "Public",
    overallRanking: 33,
    establishedYear: 1897,
    courses: [
      { name: "Engineering", ranking: 18, strength: "Very Good", fees: "$3,500", feeType: "per-year" },
      { name: "Medicine", ranking: 22, strength: "Very Good", fees: "$3,500", feeType: "per-year" },
      { name: "Liberal Arts", ranking: 35, strength: "Good", fees: "$3,500", feeType: "per-year" },
      { name: "Physics", ranking: 28, strength: "Good", fees: "$3,500", feeType: "per-year" }
    ],
    highlights: ["Imperial university", "Research excellence", "Historic Kyoto", "Nobel laureates"],
    website: "https://www.kyoto-u.ac.jp",
    image: "/placeholder.svg"
  },
  {
    id: "89",
    name: "Osaka University",
    location: "Osaka, Japan",
    type: "Public",
    overallRanking: 68,
    establishedYear: 1931,
    courses: [
      { name: "Medicine", ranking: 32, strength: "Good", fees: "$3,500", feeType: "per-year" },
      { name: "Engineering", ranking: 28, strength: "Good", fees: "$3,500", feeType: "per-year" },
      { name: "Liberal Arts", ranking: 45, strength: "Good", fees: "$3,500", feeType: "per-year" },
      { name: "Economics", ranking: 42, strength: "Good", fees: "$3,500", feeType: "per-year" }
    ],
    highlights: ["Osaka location", "Medical excellence", "Research university", "Industry partnerships"],
    website: "https://www.osaka-u.ac.jp",
    image: "/placeholder.svg"
  },
  {
    id: "90",
    name: "Tohoku University",
    location: "Sendai, Japan",
    type: "Public",
    overallRanking: 79,
    establishedYear: 1907,
    courses: [
      { name: "Engineering", ranking: 35, strength: "Good", fees: "$3,500", feeType: "per-year" },
      { name: "Physics", ranking: 32, strength: "Good", fees: "$3,500", feeType: "per-year" },
      { name: "Materials Science", ranking: 15, strength: "Very Good", fees: "$3,500", feeType: "per-year" },
      { name: "Medicine", ranking: 38, strength: "Good", fees: "$3,500", feeType: "per-year" }
    ],
    highlights: ["Research excellence", "Materials science leader", "International outlook", "Beautiful campus"],
    website: "https://www.tohoku.ac.jp",
    image: "/placeholder.svg"
  }
];
