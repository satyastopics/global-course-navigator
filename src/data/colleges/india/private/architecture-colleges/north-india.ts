import { College } from '../../../../../types/collegeTypes';

export const northIndiaArchitectureColleges: College[] = [
  {
    id: "arch-north-01",
    name: "Sushant School of Art and Architecture",
    location: "Gurgaon, Haryana, India",
    type: "Private",
    overallRanking: 8,
    establishedYear: 2009,
    courses: [
      { name: "B.Arch", ranking: 8, strength: "Very Good", fees: "₹6L", feeType: "per-year" },
      { name: "M.Arch", ranking: 10, strength: "Very Good", fees: "₹7L", feeType: "per-year" },
      { name: "Urban Planning", ranking: 12, strength: "Very Good", fees: "₹6.5L", feeType: "per-year" }
    ],
    highlights: ["Ansal University", "Modern design studios", "Industry partnerships", "International exposure"],
    website: "https://www.ansaluniversity.edu.in",
    image: "/placeholder.svg"
  },
  {
    id: "arch-north-02",
    name: "Amity School of Architecture and Planning",
    location: "Noida, Uttar Pradesh, India",
    type: "Private",
    overallRanking: 15,
    establishedYear: 2003,
    courses: [
      { name: "B.Arch", ranking: 15, strength: "Very Good", fees: "₹5.5L", feeType: "per-year" },
      { name: "M.Arch", ranking: 18, strength: "Good", fees: "₹6.5L", feeType: "per-year" }
    ],
    highlights: ["Amity University", "State-of-art studios", "Research focus", "Industry connect"],
    website: "https://www.amity.edu",
    image: "/placeholder.svg"
  },
  {
    id: "arch-north-03",
    name: "Chitkara School of Planning and Architecture",
    location: "Chandigarh, Punjab, India",
    type: "Private",
    overallRanking: 22,
    establishedYear: 2010,
    courses: [
      { name: "B.Arch", ranking: 22, strength: "Good", fees: "₹4.5L", feeType: "per-year" },
      { name: "M.Arch", ranking: 25, strength: "Good", fees: "₹5.5L", feeType: "per-year" }
    ],
    highlights: ["Chitkara University", "Modern facilities", "Industry exposure", "Design innovation"],
    website: "https://www.chitkara.edu.in",
    image: "/placeholder.svg"
  },
  {
    id: "arch-north-04",
    name: "Lovely Professional University School of Architecture",
    location: "Phagwara, Punjab, India",
    type: "Private",
    overallRanking: 28,
    establishedYear: 2005,
    courses: [
      { name: "B.Arch", ranking: 28, strength: "Good", fees: "₹4L", feeType: "per-year" },
      { name: "M.Arch", ranking: 30, strength: "Good", fees: "₹5L", feeType: "per-year" }
    ],
    highlights: ["LPU", "Extensive facilities", "International collaborations", "Modern curriculum"],
    website: "https://www.lpu.in",
    image: "/placeholder.svg"
  }
];