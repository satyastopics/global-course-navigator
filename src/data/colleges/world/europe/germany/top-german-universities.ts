import { College } from '../../../../../types/collegeTypes';

export const topGermanUniversities: College[] = [
  {
    id: "germany-01",
    name: "Technical University of Munich",
    location: "Munich, Germany",
    type: "Public",
    overallRanking: 37,
    establishedYear: 1868,
    courses: [
      { name: "Engineering", ranking: 12, strength: "Excellent", fees: "€3,000", feeType: "per-year" },
      { name: "Computer Science", ranking: 18, strength: "Very Good", fees: "€3,000", feeType: "per-year" },
      { name: "Architecture", ranking: 15, strength: "Excellent", fees: "€3,000", feeType: "per-year" },
      { name: "Management", ranking: 25, strength: "Very Good", fees: "€3,000", feeType: "per-year" }
    ],
    highlights: ["Technical excellence", "Industry partnerships", "Research focus", "Innovation hub"],
    website: "https://www.tum.de",
    image: "/placeholder.svg"
  },
  {
    id: "germany-02",
    name: "LMU Munich",
    location: "Munich, Germany",
    type: "Public",
    overallRanking: 46,
    establishedYear: 1472,
    courses: [
      { name: "Medicine", ranking: 22, strength: "Very Good", fees: "€3,000", feeType: "per-year" },
      { name: "Physics", ranking: 18, strength: "Very Good", fees: "€3,000", feeType: "per-year" },
      { name: "Philosophy", ranking: 8, strength: "Excellent", fees: "€3,000", feeType: "per-year" },
      { name: "Law", ranking: 25, strength: "Very Good", fees: "€3,000", feeType: "per-year" }
    ],
    highlights: ["Historic university", "Research excellence", "Comprehensive programs", "Liberal arts focus"],
    website: "https://www.lmu.de",
    image: "/placeholder.svg"
  },
  {
    id: "germany-03",
    name: "Heidelberg University",
    location: "Heidelberg, Germany",
    type: "Public",
    overallRanking: 64,
    establishedYear: 1386,
    courses: [
      { name: "Medicine", ranking: 18, strength: "Very Good", fees: "€3,000", feeType: "per-year" },
      { name: "Life Sciences", ranking: 25, strength: "Very Good", fees: "€3,000", feeType: "per-year" },
      { name: "Physics", ranking: 28, strength: "Very Good", fees: "€3,000", feeType: "per-year" },
      { name: "Chemistry", ranking: 32, strength: "Good", fees: "€3,000", feeType: "per-year" }
    ],
    highlights: ["Germany's oldest university", "Medical excellence", "Research tradition", "Historic significance"],
    website: "https://www.uni-heidelberg.de",
    image: "/placeholder.svg"
  },
  {
    id: "germany-04",
    name: "Humboldt University Berlin",
    location: "Berlin, Germany",
    type: "Public",
    overallRanking: 87,
    establishedYear: 1810,
    courses: [
      { name: "Philosophy", ranking: 12, strength: "Excellent", fees: "€3,000", feeType: "per-year" },
      { name: "History", ranking: 15, strength: "Excellent", fees: "€3,000", feeType: "per-year" },
      { name: "Physics", ranking: 35, strength: "Good", fees: "€3,000", feeType: "per-year" },
      { name: "Economics", ranking: 42, strength: "Good", fees: "€3,000", feeType: "per-year" }
    ],
    highlights: ["Humboldt model", "Research university", "Liberal education", "Historical importance"],
    website: "https://www.hu-berlin.de",
    image: "/placeholder.svg"
  },
  {
    id: "germany-05",
    name: "RWTH Aachen University",
    location: "Aachen, Germany",
    type: "Public",
    overallRanking: 99,
    establishedYear: 1870,
    courses: [
      { name: "Engineering", ranking: 18, strength: "Very Good", fees: "€3,000", feeType: "per-year" },
      { name: "Computer Science", ranking: 25, strength: "Very Good", fees: "€3,000", feeType: "per-year" },
      { name: "Materials Science", ranking: 22, strength: "Very Good", fees: "€3,000", feeType: "per-year" },
      { name: "Business", ranking: 45, strength: "Good", fees: "€3,000", feeType: "per-year" }
    ],
    highlights: ["Engineering excellence", "Industry cooperation", "Research focus", "Technology leadership"],
    website: "https://www.rwth-aachen.de",
    image: "/placeholder.svg"
  }
];