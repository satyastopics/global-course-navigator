import { College } from '../../../../types/collegeTypes';

export const russellGroupColleges: College[] = [
  {
    id: "9",
    name: "Imperial College London",
    location: "London, UK",
    type: "Public",
    overallRanking: 9,
    establishedYear: 1907,
    courses: [
      { name: "Engineering", ranking: 7, strength: "Excellent", fees: "£36,200", feeType: "per-year" },
      { name: "Medicine", ranking: 10, strength: "Excellent", fees: "£49,900", feeType: "per-year" },
      { name: "Computer Science", ranking: 9, strength: "Excellent", fees: "£36,200", feeType: "per-year" },
      { name: "Business", ranking: 10, strength: "Very Good", fees: "£59,500", feeType: "per-year" }
    ],
    highlights: ["STEM focus", "Central London location", "Research intensive", "Strong industry links"],
    website: "https://www.imperial.ac.uk",
    image: "/placeholder.svg"
  },
  {
    id: "65",
    name: "University of Edinburgh",
    location: "Edinburgh, UK",
    type: "Public",
    overallRanking: 22,
    establishedYear: 1583,
    courses: [
      { name: "Medicine", ranking: 18, strength: "Excellent", fees: "£54,200", feeType: "per-year" },
      { name: "Computer Science", ranking: 28, strength: "Very Good", fees: "£34,800", feeType: "per-year" },
      { name: "Liberal Arts", ranking: 15, strength: "Very Good", fees: "£25,300", feeType: "per-year" },
      { name: "Business", ranking: 32, strength: "Good", fees: "£35,000", feeType: "per-year" }
    ],
    highlights: ["Ancient university", "Research excellence", "Beautiful city", "Strong alumni"],
    website: "https://www.ed.ac.uk",
    image: "/placeholder.svg"
  }
];
