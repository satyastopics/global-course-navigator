
import { College } from '../../../../../../types/collegeTypes';

export const mumbaiLawColleges: College[] = [
  {
    id: "law-mum-01",
    name: "Rajiv Gandhi School of Intellectual Property Law",
    location: "Kharghar, Maharashtra, India",
    type: "Private",
    overallRanking: 18,
    establishedYear: 2003,
    courses: [
      { name: "Law", ranking: 12, strength: "Very Good", fees: "₹4L", feeType: "total" },
      { name: "LLM", ranking: 15, strength: "Very Good", fees: "₹3L", feeType: "total" }
    ],
    highlights: ["IP law specialization", "Research excellence", "Industry partnerships", "Innovation focus"],
    website: "https://www.rgipl.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "law-mum-02",
    name: "Symbiosis Law School Pune (Mumbai Campus)",
    location: "Mumbai, Maharashtra, India",
    type: "Private",
    overallRanking: 22,
    establishedYear: 2010,
    courses: [
      { name: "Law", ranking: 16, strength: "Very Good", fees: "₹12L", feeType: "total" },
      { name: "LLM", ranking: 18, strength: "Good", fees: "₹8L", feeType: "total" }
    ],
    highlights: ["Symbiosis International", "Industry connect", "International exposure", "Modern curriculum"],
    website: "https://www.symlaw.ac.in",
    image: "/placeholder.svg"
  }
];
