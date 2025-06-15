
import { College } from '../../../../../types/collegeTypes';

export const beijingUniversities: College[] = [
  {
    id: "china-01",
    name: "Peking University",
    location: "Beijing, China",
    type: "Public",
    overallRanking: 12,
    establishedYear: 1898,
    courses: [
      { name: "Economics", ranking: 8, strength: "Excellent", fees: "$8K", feeType: "per-year" },
      { name: "Computer Science", ranking: 15, strength: "Very Good", fees: "$8K", feeType: "per-year" },
      { name: "Mathematics", ranking: 10, strength: "Excellent", fees: "$8K", feeType: "per-year" }
    ],
    highlights: ["Top Chinese university", "Research excellence", "Historic campus", "International programs"],
    website: "https://www.pku.edu.cn",
    image: "/placeholder.svg"
  },
  {
    id: "china-02",
    name: "Tsinghua University",
    location: "Beijing, China",
    type: "Public",
    overallRanking: 15,
    establishedYear: 1911,
    courses: [
      { name: "Engineering", ranking: 5, strength: "Excellent", fees: "$8K", feeType: "per-year" },
      { name: "Computer Science", ranking: 8, strength: "Excellent", fees: "$8K", feeType: "per-year" },
      { name: "Architecture", ranking: 3, strength: "Excellent", fees: "$8K", feeType: "per-year" }
    ],
    highlights: ["Engineering excellence", "Silicon Valley partnerships", "Innovation hub", "Tech leaders"],
    website: "https://www.tsinghua.edu.cn",
    image: "/placeholder.svg"
  }
];
