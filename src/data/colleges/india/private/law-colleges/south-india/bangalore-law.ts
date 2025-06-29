
import { College } from '../../../../../../types/collegeTypes';

export const bangaloreLawColleges: College[] = [
  {
    id: "law-blr-01",
    name: "Christ University School of Law",
    location: "Bangalore, Karnataka, India",
    type: "Private",
    overallRanking: 12,
    establishedYear: 2008,
    courses: [
      { name: "Law", ranking: 8, strength: "Very Good", fees: "₹6L", feeType: "total" },
      { name: "LLM", ranking: 10, strength: "Very Good", fees: "₹4L", feeType: "total" }
    ],
    highlights: ["Deemed university", "Research excellence", "Moot court", "Social justice focus"],
    website: "https://www.christuniversity.in",
    image: "/placeholder.svg"
  },
  {
    id: "law-blr-02",
    name: "Alliance School of Law",
    location: "Bangalore, Karnataka, India",
    type: "Private",
    overallRanking: 28,
    establishedYear: 2010,
    courses: [
      { name: "Law", ranking: 22, strength: "Good", fees: "₹8L", feeType: "total" },
      { name: "LLM", ranking: 25, strength: "Good", fees: "₹5L", feeType: "total" }
    ],
    highlights: ["Alliance University", "Industry partnerships", "International exposure", "Modern curriculum"],
    website: "https://www.alliance.edu.in",
    image: "/placeholder.svg"
  }
];
