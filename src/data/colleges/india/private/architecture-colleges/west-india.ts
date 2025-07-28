import { College } from '../../../../../types/collegeTypes';

export const westIndiaArchitectureColleges: College[] = [
  {
    id: "arch-west-01",
    name: "Kamla Raheja Vidyanidhi Institute for Architecture",
    location: "Mumbai, Maharashtra, India",
    type: "Private",
    overallRanking: 5,
    establishedYear: 1992,
    courses: [
      { name: "B.Arch", ranking: 5, strength: "Excellent", fees: "₹4L", feeType: "per-year" },
      { name: "M.Arch", ranking: 6, strength: "Excellent", fees: "₹5L", feeType: "per-year" },
      { name: "Urban Design", ranking: 8, strength: "Very Good", fees: "₹4.5L", feeType: "per-year" }
    ],
    highlights: ["Premier architecture institute", "Design excellence", "Industry partnerships", "Research focus"],
    website: "https://www.krvia.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "arch-west-02",
    name: "Bharati Vidyapeeth College of Architecture",
    location: "Pune, Maharashtra, India",
    type: "Private",
    overallRanking: 16,
    establishedYear: 1983,
    courses: [
      { name: "B.Arch", ranking: 16, strength: "Very Good", fees: "₹3.5L", feeType: "per-year" },
      { name: "M.Arch", ranking: 18, strength: "Good", fees: "₹4.5L", feeType: "per-year" }
    ],
    highlights: ["Bharati Vidyapeeth", "Design studios", "Industry exposure", "Quality education"],
    website: "https://www.bharatividyapeeth.edu",
    image: "/placeholder.svg"
  },
  {
    id: "arch-west-03",
    name: "Rizvi College of Architecture",
    location: "Mumbai, Maharashtra, India",
    type: "Private",
    overallRanking: 32,
    establishedYear: 1998,
    courses: [
      { name: "B.Arch", ranking: 30, strength: "Good", fees: "₹3L", feeType: "per-year" },
      { name: "M.Arch", ranking: 35, strength: "Good", fees: "₹4L", feeType: "per-year" }
    ],
    highlights: ["Rizvi Educational Complex", "Modern facilities", "Industry connect", "Design focus"],
    website: "https://www.rizvi.edu.in",
    image: "/placeholder.svg"
  }
];