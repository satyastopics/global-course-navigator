
import { College } from '../../../../../../../types/collegeTypes';

export const ucSystemColleges: College[] = [
  {
    id: "uc-01",
    name: "University of California, Berkeley",
    location: "Berkeley, California, USA",
    type: "Public",
    overallRanking: 4,
    establishedYear: 1868,
    courses: [
      { name: "Computer Science", ranking: 4, strength: "Excellent", fees: "$14,000", feeType: "per-year" },
      { name: "Engineering", ranking: 3, strength: "Excellent", fees: "$14,000", feeType: "per-year" },
      { name: "Business", ranking: 7, strength: "Very Good", fees: "$60,000", feeType: "per-year" }
    ],
    highlights: ["Top public university", "Research excellence", "Silicon Valley proximity", "Diverse programs"],
    website: "https://www.berkeley.edu",
    image: "/placeholder.svg"
  },
  {
    id: "uc-02",
    name: "University of California, Los Angeles",
    location: "Los Angeles, California, USA",
    type: "Public",
    overallRanking: 20,
    establishedYear: 1919,
    courses: [
      { name: "Film Studies", ranking: 1, strength: "Excellent", fees: "$13,000", feeType: "per-year" },
      { name: "Medicine", ranking: 6, strength: "Excellent", fees: "$13,000", feeType: "per-year" },
      { name: "Engineering", ranking: 16, strength: "Very Good", fees: "$13,000", feeType: "per-year" }
    ],
    highlights: ["Hollywood proximity", "Strong arts programs", "Research university", "Beautiful campus"],
    website: "https://www.ucla.edu",
    image: "/placeholder.svg"
  }
];
