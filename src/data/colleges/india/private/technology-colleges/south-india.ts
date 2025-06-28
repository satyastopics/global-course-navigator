
import { College } from '../../../../../types/collegeTypes';

export const southIndiaPrivateTechnology: College[] = [
  {
    id: "tech-sou-01",
    name: "International Institute of Information Technology Bangalore",
    location: "Bangalore, Karnataka, India",
    type: "Private",
    overallRanking: 24,
    establishedYear: 1999,
    courses: [
      { name: "Computer Science", ranking: 18, strength: "Very Good", fees: "₹4.5L", feeType: "per-year" },
      { name: "Information Technology", ranking: 20, strength: "Good", fees: "₹4.2L", feeType: "per-year" },
      { name: "Data Science", ranking: 12, strength: "Very Good", fees: "₹5L", feeType: "per-year" }
    ],
    highlights: ["Research focus", "Industry partnerships", "Innovation labs", "International collaborations"],
    website: "https://www.iiitb.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "tech-sou-02",
    name: "Indian Institute of Information Technology Design and Manufacturing Kancheepuram",
    location: "Chennai, Tamil Nadu, India",
    type: "Private",
    overallRanking: 29,
    establishedYear: 2007,
    courses: [
      { name: "Computer Science", ranking: 23, strength: "Good", fees: "₹2.8L", feeType: "per-year" },
      { name: "Design", ranking: 15, strength: "Very Good", fees: "₹3L", feeType: "per-year" },
      { name: "Manufacturing", ranking: 18, strength: "Good", fees: "₹2.5L", feeType: "per-year" }
    ],
    highlights: ["IIIT brand", "Design focus", "Manufacturing emphasis", "Government backed"],
    website: "https://www.iiitdm.ac.in",
    image: "/placeholder.svg"
  }
];
