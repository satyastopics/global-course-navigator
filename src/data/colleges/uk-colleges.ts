import { College } from '../../types/collegeTypes';

export const ukColleges: College[] = [
  {
    id: "5",
    name: "University of Oxford",
    location: "Oxford, UK",
    type: "Public",
    overallRanking: 5,
    establishedYear: 1096,
    courses: [
      { name: "Law", ranking: 1, strength: "Excellent", fees: "£26,770", feeType: "per-year" },
      { name: "Medicine", ranking: 3, strength: "Excellent", fees: "£36,065", feeType: "per-year" },
      { name: "Philosophy", ranking: 1, strength: "Excellent", fees: "£26,770", feeType: "per-year" },
      { name: "Politics", ranking: 2, strength: "Excellent", fees: "£26,770", feeType: "per-year" }
    ],
    highlights: ["Oldest English-speaking university", "Collegiate system", "Strong humanities", "Global reputation"],
    website: "https://www.ox.ac.uk",
    image: "/placeholder.svg"
  },
  {
    id: "6",
    name: "University of Cambridge",
    location: "Cambridge, UK",
    type: "Public",
    overallRanking: 6,
    establishedYear: 1209,
    courses: [
      { name: "Mathematics", ranking: 1, strength: "Excellent", fees: "£27,000", feeType: "per-year" },
      { name: "Engineering", ranking: 4, strength: "Excellent", fees: "£27,000", feeType: "per-year" },
      { name: "Physics", ranking: 3, strength: "Excellent", fees: "£27,000", feeType: "per-year" },
      { name: "Law", ranking: 2, strength: "Excellent", fees: "£27,000", feeType: "per-year" }
    ],
    highlights: ["Collegiate university", "Strong research", "Historic campus", "Global alumni"],
    website: "https://www.cam.ac.uk",
    image: "/placeholder.svg"
  },
  {
    id: "9",
    name: "Imperial College London",
    location: "London, UK",
    type: "Public",
    overallRanking: 9,
    establishedYear: 1907,
    courses: [
      { name: "Engineering", ranking: 7, strength: "Excellent", fees: "£31,750", feeType: "per-year" },
      { name: "Medicine", ranking: 10, strength: "Excellent", fees: "£41,250", feeType: "per-year" },
      { name: "Computer Science", ranking: 9, strength: "Excellent", fees: "£31,750", feeType: "per-year" },
      { name: "Business", ranking: 10, strength: "Very Good", fees: "£31,750", feeType: "per-year" }
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
      { name: "Medicine", ranking: 18, strength: "Excellent", fees: "£36,800", feeType: "per-year" },
      { name: "Computer Science", ranking: 28, strength: "Very Good", fees: "£34,800", feeType: "per-year" },
      { name: "Arts", ranking: 15, strength: "Very Good", fees: "£25,300", feeType: "per-year" },
      { name: "Business", ranking: 32, strength: "Good", fees: "£31,100", feeType: "per-year" }
    ],
    highlights: ["Ancient university", "Research excellence", "Beautiful city", "Strong alumni"],
    website: "https://www.ed.ac.uk",
    image: "/placeholder.svg"
  }
];
