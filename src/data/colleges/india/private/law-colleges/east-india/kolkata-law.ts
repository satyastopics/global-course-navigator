
import { College } from '../../../../../../types/collegeTypes';

export const kolkataLawColleges: College[] = [
  {
    id: "law-kol-01",
    name: "The West Bengal National University of Juridical Sciences",
    location: "Kolkata, West Bengal, India",
    type: "Private",
    overallRanking: 10,
    establishedYear: 1999,
    courses: [
      { name: "Law", ranking: 6, strength: "Very Good", fees: "₹1.5L", feeType: "per-year" },
      { name: "LLM", ranking: 8, strength: "Very Good", fees: "₹1L", feeType: "per-year" }
    ],
    highlights: ["National law university", "Research excellence", "Strong judiciary alumni", "Affordable fees"],
    website: "https://www.nujs.edu",
    image: "/placeholder.svg"
  },
  {
    id: "law-kol-02",
    name: "Techno India University School of Law",
    location: "Kolkata, West Bengal, India",
    type: "Private",
    overallRanking: 55,
    establishedYear: 2012,
    courses: [
      { name: "Law", ranking: 45, strength: "Good", fees: "₹4L", feeType: "total" },
      { name: "LLM", ranking: 48, strength: "Good", fees: "₹3L", feeType: "total" }
    ],
    highlights: ["Multi-disciplinary university", "Modern curriculum", "Industry connect", "Research focus"],
    website: "https://www.technoindiauniversity.ac.in",
    image: "/placeholder.svg"
  }
];
