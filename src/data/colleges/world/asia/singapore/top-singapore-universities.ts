import { College } from '../../../../../types/collegeTypes';

export const topSingaporeUniversities: College[] = [
  {
    id: "singapore-01",
    name: "National University of Singapore",
    location: "Singapore",
    type: "Public",
    overallRanking: 11,
    establishedYear: 1905,
    courses: [
      { name: "Engineering", ranking: 5, strength: "Excellent", fees: "S$17,550", feeType: "per-year" },
      { name: "Business", ranking: 8, strength: "Excellent", fees: "S$17,550", feeType: "per-year" },
      { name: "Computer Science", ranking: 6, strength: "Excellent", fees: "S$17,550", feeType: "per-year" },
      { name: "Medicine", ranking: 18, strength: "Very Good", fees: "S$35,000", feeType: "per-year" }
    ],
    highlights: ["Top Asian university", "Research excellence", "Global partnerships", "Innovation hub"],
    website: "https://www.nus.edu.sg",
    image: "/placeholder.svg"
  },
  {
    id: "singapore-02",
    name: "Nanyang Technological University",
    location: "Singapore",
    type: "Public",
    overallRanking: 26,
    establishedYear: 1991,
    courses: [
      { name: "Engineering", ranking: 8, strength: "Excellent", fees: "S$17,550", feeType: "per-year" },
      { name: "Business", ranking: 15, strength: "Excellent", fees: "S$17,550", feeType: "per-year" },
      { name: "Computer Science", ranking: 12, strength: "Excellent", fees: "S$17,550", feeType: "per-year" },
      { name: "Materials Science", ranking: 3, strength: "Excellent", fees: "S$17,550", feeType: "per-year" }
    ],
    highlights: ["Young university excellence", "Technology focus", "Smart campus", "Industry partnerships"],
    website: "https://www.ntu.edu.sg",
    image: "/placeholder.svg"
  },
  {
    id: "singapore-03",
    name: "Singapore Management University",
    location: "Singapore",
    type: "Private",
    overallRanking: 477,
    establishedYear: 2000,
    courses: [
      { name: "Business", ranking: 35, strength: "Good", fees: "S$47,000", feeType: "per-year" },
      { name: "Economics", ranking: 28, strength: "Very Good", fees: "S$47,000", feeType: "per-year" },
      { name: "Law", ranking: 42, strength: "Good", fees: "S$47,000", feeType: "per-year" },
      { name: "Information Systems", ranking: 18, strength: "Very Good", fees: "S$47,000", feeType: "per-year" }
    ],
    highlights: ["Business specialization", "Liberal arts approach", "City campus", "Professional focus"],
    website: "https://www.smu.edu.sg",
    image: "/placeholder.svg"
  }
];