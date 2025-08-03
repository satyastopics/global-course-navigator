import { College } from '../../../../../../types/collegeTypes';

export const californiaPublicUniversities: College[] = [
  {
    id: "uc-01",
    name: "University of California, Berkeley",
    location: "Berkeley, California, USA",
    type: "Public",
    overallRanking: 22,
    establishedYear: 1868,
    courses: [
      { name: "Engineering", ranking: 3, strength: "Excellent", fees: "$46,326", feeType: "per-year" },
      { name: "Computer Science", ranking: 1, strength: "Excellent", fees: "$46,326", feeType: "per-year" },
      { name: "Business", ranking: 7, strength: "Excellent", fees: "$65,000", feeType: "per-year" },
      { name: "Economics", ranking: 3, strength: "Excellent", fees: "$46,326", feeType: "per-year" }
    ],
    highlights: ["Top public university", "Silicon Valley proximity", "Nobel Prize winners", "Free speech movement"],
    website: "https://www.berkeley.edu",
    image: "/placeholder.svg"
  },
  {
    id: "uc-02", 
    name: "University of California, Los Angeles",
    location: "Los Angeles, California, USA",
    type: "Public",
    overallRanking: 20,
    establishedYear: 1919,
    courses: [
      { name: "Film & Television", ranking: 1, strength: "Excellent", fees: "$46,326", feeType: "per-year" },
      { name: "Medicine", ranking: 6, strength: "Excellent", fees: "$46,755", feeType: "per-year" },
      { name: "Engineering", ranking: 16, strength: "Very Good", fees: "$46,326", feeType: "per-year" },
      { name: "Business", ranking: 15, strength: "Very Good", fees: "$61,000", feeType: "per-year" }
    ],
    highlights: ["Hollywood connections", "Research powerhouse", "Beautiful campus", "Athletic excellence"],
    website: "https://www.ucla.edu",
    image: "/placeholder.svg"
  }
];