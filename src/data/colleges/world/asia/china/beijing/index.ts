
import { College } from '../../../../../../types/collegeTypes';

export const beijingUniversities: College[] = [
  {
    id: "100",
    name: "Peking University",
    location: "Beijing, China",
    type: "Public",
    overallRanking: 15,
    establishedYear: 1898,
    courses: [
      { name: "Computer Science", ranking: 12, strength: "Excellent", fees: "$8K", feeType: "per-year" },
      { name: "Engineering", ranking: 18, strength: "Very Good", fees: "$8K", feeType: "per-year" },
      { name: "Medicine", ranking: 20, strength: "Very Good", fees: "$10K", feeType: "per-year" },
      { name: "Business", ranking: 25, strength: "Good", fees: "$12K", feeType: "per-year" }
    ],
    highlights: ["Top Chinese university", "Research excellence", "Government support", "International programs"],
    website: "https://www.pku.edu.cn",
    image: "/placeholder.svg"
  }
];
