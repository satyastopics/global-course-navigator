import { College } from '../../../../../types/collegeTypes';

export const eastIndiaArchitectureColleges: College[] = [
  {
    id: "arch-east-01",
    name: "Academy of Architecture",
    location: "Kolkata, West Bengal, India",
    type: "Private",
    overallRanking: 35,
    establishedYear: 1980,
    courses: [
      { name: "B.Arch", ranking: 32, strength: "Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "M.Arch", ranking: 38, strength: "Good", fees: "₹3.5L", feeType: "per-year" }
    ],
    highlights: ["Heritage institution", "Design tradition", "Cultural architecture", "Regional focus"],
    website: "https://www.academyofarchitecture.org",
    image: "/placeholder.svg"
  },
  {
    id: "arch-east-02",
    name: "KIIT School of Architecture",
    location: "Bhubaneswar, Odisha, India",
    type: "Private",
    overallRanking: 42,
    establishedYear: 2008,
    courses: [
      { name: "B.Arch", ranking: 40, strength: "Good", fees: "₹3.5L", feeType: "per-year" },
      { name: "M.Arch", ranking: 45, strength: "Good", fees: "₹4.5L", feeType: "per-year" }
    ],
    highlights: ["KIIT University", "Modern facilities", "Technology integration", "Research programs"],
    website: "https://www.kiit.ac.in",
    image: "/placeholder.svg"
  }
];