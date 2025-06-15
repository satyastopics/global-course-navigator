import { College } from '../../../../../types/collegeTypes';

export const beijingUniversities: College[] = [
  {
    id: "beijing-01",
    name: "Peking University",
    location: "Beijing, China",
    type: "Public",
    overallRanking: 18,
    establishedYear: 1898,
    courses: [
      { name: "Computer Science", ranking: 15, strength: "Excellent", fees: "¥40K", feeType: "per-year" },
      { name: "Economics", ranking: 12, strength: "Excellent", fees: "¥35K", feeType: "per-year" },
      { name: "Liberal Arts", ranking: 8, strength: "Excellent", fees: "¥30K", feeType: "per-year" }
    ],
    highlights: ["Top Chinese university", "Ancient campus", "Academic excellence", "Research leader"],
    website: "https://www.pku.edu.cn",
    image: "/placeholder.svg"
  }
];
