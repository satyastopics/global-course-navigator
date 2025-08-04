import { College } from '../../../../types/collegeTypes';

export const iiscBangalore: College[] = [
  {
    id: "iisc-01",
    name: "Indian Institute of Science",
    location: "Bangalore, Karnataka, India",
    type: "Government",
    overallRanking: 1,
    establishedYear: 1909,
    courses: [
      { name: "Physics", ranking: 1, strength: "Excellent", fees: "₹25,000", feeType: "per-year" },
      { name: "Chemistry", ranking: 1, strength: "Excellent", fees: "₹25,000", feeType: "per-year" },
      { name: "Computer Science", ranking: 2, strength: "Excellent", fees: "₹25,000", feeType: "per-year" },
      { name: "Engineering", ranking: 3, strength: "Excellent", fees: "₹25,000", feeType: "per-year" },
      { name: "Mathematics", ranking: 2, strength: "Excellent", fees: "₹25,000", feeType: "per-year" },
      { name: "Biological Sciences", ranking: 1, strength: "Excellent", fees: "₹25,000", feeType: "per-year" }
    ],
    highlights: ["India's premier research institute", "Nobel laureate faculty", "World-class research", "Top global rankings"],
    website: "https://www.iisc.ac.in",
    image: "/placeholder.svg"
  }
];