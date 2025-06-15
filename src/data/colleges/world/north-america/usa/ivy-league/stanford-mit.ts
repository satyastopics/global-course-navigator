
import { College } from '../../../../../../types/collegeTypes';

export const stanfordMitGroup: College[] = [
  {
    id: "2",
    name: "Stanford University",
    location: "Stanford, California, USA",
    type: "Private",
    overallRanking: 2,
    establishedYear: 1885,
    courses: [
      { name: "Computer Science", ranking: 1, strength: "Excellent", fees: "$56,169", feeType: "per-year" },
      { name: "Engineering", ranking: 2, strength: "Excellent", fees: "$56,169", feeType: "per-year" },
      { name: "Business", ranking: 2, strength: "Excellent", fees: "$76,950", feeType: "per-year" },
      { name: "Medicine", ranking: 4, strength: "Excellent", fees: "$60,234", feeType: "per-year" }
    ],
    highlights: ["Silicon Valley location", "Entrepreneurial culture", "Research powerhouse", "Interdisciplinary programs"],
    website: "https://www.stanford.edu",
    image: "/placeholder.svg"
  },
  {
    id: "3",
    name: "Massachusetts Institute of Technology",
    location: "Cambridge, Massachusetts, USA",
    type: "Private",
    overallRanking: 3,
    establishedYear: 1861,
    courses: [
      { name: "Engineering", ranking: 1, strength: "Excellent", fees: "$55,878", feeType: "per-year" },
      { name: "Computer Science", ranking: 2, strength: "Excellent", fees: "$55,878", feeType: "per-year" },
      { name: "Physics", ranking: 1, strength: "Excellent", fees: "$55,878", feeType: "per-year" },
      { name: "Business", ranking: 5, strength: "Excellent", fees: "$77,168", feeType: "per-year" }
    ],
    highlights: ["STEM focused", "Research excellence", "Innovation ecosystem", "Competitive admission"],
    website: "https://www.mit.edu",
    image: "/placeholder.svg"
  }
];
