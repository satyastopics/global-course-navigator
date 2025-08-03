import { College } from '../../../../../types/collegeTypes';

export const beijingUniversities: College[] = [
  {
    id: "beijing-01",
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
    id: "beijing-02",
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
    id: "beijing-03",
    name: "Beijing Institute of Technology",
    location: "Beijing, China",
    type: "Public",
    overallRanking: 270,
    establishedYear: 1940,
    courses: [
      { name: "Engineering", ranking: 35, strength: "Good", fees: "$4,500", feeType: "per-year" },
      { name: "Computer Science", ranking: 42, strength: "Good", fees: "$4,500", feeType: "per-year" },
      { name: "Aerospace Engineering", ranking: 15, strength: "Very Good", fees: "$4,500", feeType: "per-year" },
      { name: "Materials Science", ranking: 25, strength: "Very Good", fees: "$4,500", feeType: "per-year" }
    ],
    highlights: ["Defense technology", "Aerospace excellence", "Innovation focus", "Strong research"],
    website: "https://www.bit.edu.cn",
    image: "/placeholder.svg"
  },
  {
    id: "beijing-04",
    name: "Beijing Normal University",
    location: "Beijing, China",
    type: "Public",
    overallRanking: 270,
    establishedYear: 1902,
    courses: [
      { name: "Education", ranking: 3, strength: "Excellent", fees: "$4,200", feeType: "per-year" },
      { name: "Psychology", ranking: 8, strength: "Excellent", fees: "$4,200", feeType: "per-year" },
      { name: "Liberal Arts", ranking: 15, strength: "Very Good", fees: "$4,200", feeType: "per-year" },
      { name: "Mathematics", ranking: 18, strength: "Very Good", fees: "$4,200", feeType: "per-year" }
    ],
    highlights: ["Teacher education leader", "Psychology excellence", "Research university", "Historic campus"],
    website: "https://www.bnu.edu.cn",
    image: "/placeholder.svg"
  },
  {
    id: "beijing-05",
    name: "Renmin University of China",
    location: "Beijing, China", 
    type: "Public",
    overallRanking: 440,
    establishedYear: 1937,
    courses: [
      { name: "Economics", ranking: 8, strength: "Excellent", fees: "$4,500", feeType: "per-year" },
      { name: "Political Science", ranking: 5, strength: "Excellent", fees: "$4,500", feeType: "per-year" },
      { name: "Law", ranking: 8, strength: "Excellent", fees: "$4,500", feeType: "per-year" },
      { name: "Journalism", ranking: 3, strength: "Excellent", fees: "$4,500", feeType: "per-year" }
    ],
    highlights: ["Social sciences leader", "Policy influence", "Government connections", "Research excellence"],
    website: "https://www.ruc.edu.cn",
    image: "/placeholder.svg"
  }
];