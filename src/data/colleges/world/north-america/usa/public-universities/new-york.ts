import { College } from '../../../../../../types/collegeTypes';

export const newYorkPublicUniversities: College[] = [
  {
    id: "ny-public-01",
    name: "SUNY Stony Brook University",
    location: "Stony Brook, NY, USA",
    type: "Public",
    overallRanking: 88,
    establishedYear: 1957,
    courses: [
      { name: "Computer Science", ranking: 35, strength: "Good", fees: "$27,845", feeType: "per-year" },
      { name: "Medicine", ranking: 42, strength: "Good", fees: "$27,845", feeType: "per-year" },
      { name: "Engineering", ranking: 45, strength: "Good", fees: "$27,845", feeType: "per-year" },
      { name: "Physics", ranking: 32, strength: "Good", fees: "$27,845", feeType: "per-year" }
    ],
    highlights: ["Research university", "Medical excellence", "SUNY flagship", "Science programs"],
    website: "https://www.stonybrook.edu",
    image: "/placeholder.svg"
  },
  {
    id: "ny-public-02",
    name: "University at Buffalo (SUNY)",
    location: "Buffalo, NY, USA",
    type: "Public",
    overallRanking: 89,
    establishedYear: 1846,
    courses: [
      { name: "Engineering", ranking: 42, strength: "Good", fees: "$27,845", feeType: "per-year" },
      { name: "Medicine", ranking: 45, strength: "Good", fees: "$27,845", feeType: "per-year" },
      { name: "Business", ranking: 48, strength: "Good", fees: "$27,845", feeType: "per-year" },
      { name: "Computer Science", ranking: 42, strength: "Good", fees: "$27,845", feeType: "per-year" }
    ],
    highlights: ["AAU member", "Research university", "Public Ivy", "Comprehensive programs"],
    website: "https://www.buffalo.edu",
    image: "/placeholder.svg"
  },
  {
    id: "ny-public-03",
    name: "Binghamton University (SUNY)",
    location: "Binghamton, NY, USA",
    type: "Public",
    overallRanking: 83,
    establishedYear: 1946,
    courses: [
      { name: "Engineering", ranking: 38, strength: "Good", fees: "$27,845", feeType: "per-year" },
      { name: "Business", ranking: 42, strength: "Good", fees: "$27,845", feeType: "per-year" },
      { name: "Computer Science", ranking: 45, strength: "Good", fees: "$27,845", feeType: "per-year" },
      { name: "Psychology", ranking: 35, strength: "Good", fees: "$27,845", feeType: "per-year" }
    ],
    highlights: ["Public Ivy", "Premier SUNY", "Research excellence", "Selective admissions"],
    website: "https://www.binghamton.edu",
    image: "/placeholder.svg"
  }
];