import { College } from '../../../../../../types/collegeTypes';

export const cambridgeColleges: College[] = [
  {
    id: "cambridge-trinity",
    name: "Trinity College, Cambridge",
    location: "Cambridge, England, UK",
    type: "Public",
    overallRanking: 2,
    establishedYear: 1546,
    courses: [
      { name: "Mathematics", ranking: 1, strength: "Excellent", fees: "£35K", feeType: "per-year" },
      { name: "Natural Sciences", ranking: 1, strength: "Excellent", fees: "£35K", feeType: "per-year" },
      { name: "Computer Science", ranking: 2, strength: "Excellent", fees: "£35K", feeType: "per-year" }
    ],
    highlights: ["Largest college", "Newton's apple tree", "Nobel Prize winners", "Scientific excellence"],
    website: "https://www.trin.cam.ac.uk",
    image: "/placeholder.svg"
  },
  {
    id: "cambridge-kings",
    name: "King's College, Cambridge",
    location: "Cambridge, England, UK",
    type: "Public",
    overallRanking: 2,
    establishedYear: 1441,
    courses: [
      { name: "Economics", ranking: 1, strength: "Excellent", fees: "£35K", feeType: "per-year" },
      { name: "History", ranking: 1, strength: "Excellent", fees: "£35K", feeType: "per-year" },
      { name: "Modern Languages", ranking: 1, strength: "Excellent", fees: "£35K", feeType: "per-year" }
    ],
    highlights: ["Gothic chapel", "Choir excellence", "Progressive traditions", "Academic distinction"],
    website: "https://www.kings.cam.ac.uk",
    image: "/placeholder.svg"
  }
];
