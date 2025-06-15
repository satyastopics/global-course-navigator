
import { College } from '../../../../../../types/collegeTypes';

export const csuSystemColleges: College[] = [
  {
    id: "csu-01",
    name: "California State University, Long Beach",
    location: "Long Beach, California, USA",
    type: "Public",
    overallRanking: 200,
    establishedYear: 1949,
    courses: [
      { name: "Business", ranking: 150, strength: "Good", fees: "$12,000", feeType: "per-year" },
      { name: "Engineering", ranking: 180, strength: "Good", fees: "$12,000", feeType: "per-year" },
      { name: "Liberal Arts", ranking: 160, strength: "Good", fees: "$10,000", feeType: "per-year" }
    ],
    highlights: ["Large student body", "Diverse programs", "Affordable education", "Strong alumni network"],
    website: "https://www.csulb.edu",
    image: "/placeholder.svg"
  }
];
