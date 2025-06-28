
import { College } from '../../../../../types/collegeTypes';

export const southIndiaPrivateLiberalArts: College[] = [
  {
    id: "lib-sou-01",
    name: "Azim Premji University",
    location: "Bangalore, Karnataka, India",
    type: "Private",
    overallRanking: 12,
    establishedYear: 2010,
    courses: [
      { name: "Liberal Arts", ranking: 8, strength: "Very Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "Education", ranking: 5, strength: "Excellent", fees: "₹2L", feeType: "per-year" },
      { name: "Development Studies", ranking: 6, strength: "Very Good", fees: "₹2.3L", feeType: "per-year" }
    ],
    highlights: ["Philanthropic backing", "Social focus", "Research excellence", "Interdisciplinary approach"],
    website: "https://azimpremjiuniversity.edu.in",
    image: "/placeholder.svg"
  },
  {
    id: "lib-sou-02",
    name: "Flame University",
    location: "Pune, Maharashtra, India",
    type: "Private",
    overallRanking: 18,
    establishedYear: 2015,
    courses: [
      { name: "Liberal Arts", ranking: 15, strength: "Good", fees: "₹4L", feeType: "per-year" },
      { name: "Design", ranking: 20, strength: "Good", fees: "₹4.5L", feeType: "per-year" },
      { name: "Business", ranking: 25, strength: "Good", fees: "₹12L", feeType: "total" }
    ],
    highlights: ["Liberal education", "Interdisciplinary programs", "Modern campus", "Industry connect"],
    website: "https://www.flame.edu.in",
    image: "/placeholder.svg"
  }
];
