
import { College } from '../../../../../../types/collegeTypes';

export const delhiPrivateLawColleges: College[] = [
  {
    id: "law-del-01",
    name: "O.P. Jindal Global Law School",
    location: "Sonipat, Haryana, India",
    type: "Private",
    overallRanking: 8,
    establishedYear: 2009,
    courses: [
      { name: "Law", ranking: 3, strength: "Excellent", fees: "₹18L", feeType: "total" },
      { name: "LLM", ranking: 5, strength: "Very Good", fees: "₹12L", feeType: "total" }
    ],
    highlights: ["Global law school", "International faculty", "Research excellence", "Liberal education"],
    website: "https://www.jgls.edu.in",
    image: "/placeholder.svg"
  },
  {
    id: "law-del-02",
    name: "Amity Law School Delhi",
    location: "New Delhi, India",
    type: "Private",
    overallRanking: 25,
    establishedYear: 1999,
    courses: [
      { name: "Law", ranking: 18, strength: "Good", fees: "₹8L", feeType: "total" },
      { name: "LLM", ranking: 22, strength: "Good", fees: "₹6L", feeType: "total" }
    ],
    highlights: ["Amity University", "Industry partnerships", "Moot court", "Clinical legal aid"],
    website: "https://www.amity.edu",
    image: "/placeholder.svg"
  },
  {
    id: "law-del-03",
    name: "Bennett University School of Law",
    location: "Greater Noida, Uttar Pradesh, India",
    type: "Private",
    overallRanking: 35,
    establishedYear: 2016,
    courses: [
      { name: "Law", ranking: 28, strength: "Good", fees: "₹12L", feeType: "total" },
      { name: "LLM", ranking: 32, strength: "Good", fees: "₹8L", feeType: "total" }
    ],
    highlights: ["Times Group", "Modern curriculum", "Industry connect", "International exposure"],
    website: "https://www.bennett.edu.in",
    image: "/placeholder.svg"
  }
];
