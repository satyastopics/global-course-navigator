
import { College } from '../../../../../../types/collegeTypes';

export const iimBangalore: College[] = [
  {
    id: "6",
    name: "Indian Institute of Management Bangalore",
    location: "Bangalore, Karnataka, India",
    type: "Government",
    overallRanking: 5,
    establishedYear: 1973,
    courses: [
      { name: "Management", ranking: 2, strength: "Excellent", fees: "₹24L", feeType: "total" },
      { name: "Executive MBA", ranking: 2, strength: "Excellent", fees: "₹28L", feeType: "total" },
      { name: "PhD", ranking: 3, strength: "Excellent", fees: "₹50K", feeType: "per-year" }
    ],
    highlights: ["Premier B-school", "Innovation focus", "Technology integration", "Global partnerships"],
    website: "https://www.iimb.ac.in",
    image: "/placeholder.svg"
  }
];
