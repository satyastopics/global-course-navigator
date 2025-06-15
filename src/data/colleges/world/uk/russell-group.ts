import { College } from '../../../../types/collegeTypes';

export const russellGroupColleges: College[] = [
  {
    id: "russell-01",
    name: "Imperial College London",
    location: "London, United Kingdom",
    type: "Public",
    overallRanking: 9,
    establishedYear: 1907,
    courses: [
      { name: "Engineering", ranking: 7, strength: "Excellent", fees: "£36,200", feeType: "per-year" },
      { name: "Medicine", ranking: 10, strength: "Excellent", fees: "£49,900", feeType: "per-year" },
      { name: "Computer Science", ranking: 9, strength: "Excellent", fees: "£36,200", feeType: "per-year" }
    ],
    highlights: ["STEM focus", "Central London", "Research intensive", "Strong industry links"],
    website: "https://www.imperial.ac.uk",
    image: "/placeholder.svg"
  },
  {
    id: "russell-02",
    name: "University College London",
    location: "London, United Kingdom",
    type: "Public",
    overallRanking: 8,
    establishedYear: 1826,
    courses: [
      { name: "Medicine", ranking: 8, strength: "Excellent", fees: "£28,500", feeType: "per-year" },
      { name: "Law", ranking: 5, strength: "Excellent", fees: "£24,000", feeType: "per-year" },
      { name: "Architecture", ranking: 3, strength: "Excellent", fees: "£28,500", feeType: "per-year" }
    ],
    highlights: ["Central London", "Research excellence", "Diverse programs", "Global reputation"],
    website: "https://www.ucl.ac.uk",
    image: "/placeholder.svg"
  }
];
