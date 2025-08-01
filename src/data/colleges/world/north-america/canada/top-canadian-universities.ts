import { College } from '../../../../../types/collegeTypes';

export const topCanadianUniversities: College[] = [
  {
    id: "canada-01",
    name: "University of Toronto",
    location: "Toronto, Ontario, Canada",
    type: "Public",
    overallRanking: 18,
    establishedYear: 1827,
    courses: [
      { name: "Medicine", ranking: 11, strength: "Excellent", fees: "CAD 64,760", feeType: "per-year" },
      { name: "Engineering", ranking: 25, strength: "Very Good", fees: "CAD 58,160", feeType: "per-year" },
      { name: "Business", ranking: 19, strength: "Excellent", fees: "CAD 52,560", feeType: "per-year" },
      { name: "Computer Science", ranking: 28, strength: "Very Good", fees: "CAD 54,880", feeType: "per-year" }
    ],
    highlights: ["Canada's top university", "Research intensive", "Diverse programs", "Global reputation"],
    website: "https://www.utoronto.ca",
    image: "/placeholder.svg"
  },
  {
    id: "canada-02", 
    name: "McGill University",
    location: "Montreal, Quebec, Canada",
    type: "Public",
    overallRanking: 31,
    establishedYear: 1821,
    courses: [
      { name: "Medicine", ranking: 24, strength: "Very Good", fees: "CAD 55,880", feeType: "per-year" },
      { name: "Law", ranking: 18, strength: "Excellent", fees: "CAD 43,220", feeType: "per-year" },
      { name: "Engineering", ranking: 35, strength: "Good", fees: "CAD 47,110", feeType: "per-year" },
      { name: "Liberal Arts", ranking: 22, strength: "Very Good", fees: "CAD 41,850", feeType: "per-year" }
    ],
    highlights: ["Historic prestige", "Bilingual environment", "Research excellence", "International diversity"],
    website: "https://www.mcgill.ca",
    image: "/placeholder.svg"
  },
  {
    id: "canada-03",
    name: "University of British Columbia",
    location: "Vancouver, British Columbia, Canada", 
    type: "Public",
    overallRanking: 47,
    establishedYear: 1908,
    courses: [
      { name: "Engineering", ranking: 32, strength: "Good", fees: "CAD 48,250", feeType: "per-year" },
      { name: "Business", ranking: 26, strength: "Very Good", fees: "CAD 45,220", feeType: "per-year" },
      { name: "Medicine", ranking: 28, strength: "Very Good", fees: "CAD 52,440", feeType: "per-year" },
      { name: "Computer Science", ranking: 35, strength: "Good", fees: "CAD 46,110", feeType: "per-year" }
    ],
    highlights: ["Beautiful campus", "Research intensive", "Pacific Rim focus", "Innovation hub"],
    website: "https://www.ubc.ca",
    image: "/placeholder.svg"
  },
  {
    id: "canada-04",
    name: "University of Waterloo",
    location: "Waterloo, Ontario, Canada",
    type: "Public", 
    overallRanking: 112,
    establishedYear: 1957,
    courses: [
      { name: "Computer Science", ranking: 18, strength: "Excellent", fees: "CAD 57,330", feeType: "per-year" },
      { name: "Engineering", ranking: 22, strength: "Very Good", fees: "CAD 55,450", feeType: "per-year" },
      { name: "Mathematics", ranking: 24, strength: "Very Good", fees: "CAD 49,780", feeType: "per-year" },
      { name: "Business", ranking: 45, strength: "Good", fees: "CAD 48,990", feeType: "per-year" }
    ],
    highlights: ["Co-op program leader", "Tech innovation", "Startup ecosystem", "Industry partnerships"],
    website: "https://uwaterloo.ca",
    image: "/placeholder.svg"
  }
];