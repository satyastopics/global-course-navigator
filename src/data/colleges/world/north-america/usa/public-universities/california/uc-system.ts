
import { College } from '../../../../../../types/collegeTypes';

export const ucSystemColleges: College[] = [
  {
    id: "uc-01",
    name: "University of California, Berkeley",
    location: "Berkeley, California, USA",
    type: "Public",
    overallRanking: 22,
    establishedYear: 1868,
    courses: [
      { name: "Computer Science", ranking: 3, strength: "Excellent", fees: "$45K", feeType: "per-year" },
      { name: "Engineering", ranking: 5, strength: "Excellent", fees: "$45K", feeType: "per-year" },
      { name: "Business", ranking: 8, strength: "Very Good", fees: "$65K", feeType: "per-year" }
    ],
    highlights: ["Top public university", "Research powerhouse", "Silicon Valley proximity", "Nobel laureates"],
    website: "https://www.berkeley.edu",
    image: "/placeholder.svg"
  },
  {
    id: "uc-02",
    name: "University of California, Los Angeles",
    location: "Los Angeles, California, USA",
    type: "Public",
    overallRanking: 25,
    establishedYear: 1919,
    courses: [
      { name: "Film Studies", ranking: 1, strength: "Excellent", fees: "$45K", feeType: "per-year" },
      { name: "Medicine", ranking: 12, strength: "Excellent", fees: "$55K", feeType: "per-year" },
      { name: "Engineering", ranking: 18, strength: "Very Good", fees: "$45K", feeType: "per-year" }
    ],
    highlights: ["Hollywood connection", "Medical excellence", "Diverse programs", "Research university"],
    website: "https://www.ucla.edu",
    image: "/placeholder.svg"
  }
];
