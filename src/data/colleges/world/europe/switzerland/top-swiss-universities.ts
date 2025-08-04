import { College } from '../../../../../types/collegeTypes';

export const topSwissUniversities: College[] = [
  {
    id: "switzerland-01",
    name: "ETH Zurich",
    location: "Zurich, Switzerland",
    type: "Public",
    overallRanking: 7,
    establishedYear: 1855,
    courses: [
      { name: "Engineering", ranking: 4, strength: "Excellent", fees: "CHF 1,298", feeType: "per-year" },
      { name: "Computer Science", ranking: 8, strength: "Excellent", fees: "CHF 1,298", feeType: "per-year" },
      { name: "Architecture", ranking: 6, strength: "Excellent", fees: "CHF 1,298", feeType: "per-year" },
      { name: "Physics", ranking: 12, strength: "Excellent", fees: "CHF 1,298", feeType: "per-year" }
    ],
    highlights: ["Top European tech university", "Research excellence", "Innovation hub", "Industry partnerships"],
    website: "https://ethz.ch",
    image: "/placeholder.svg"
  },
  {
    id: "switzerland-02",
    name: "EPFL",
    location: "Lausanne, Switzerland",
    type: "Public",
    overallRanking: 31,
    establishedYear: 1969,
    courses: [
      { name: "Engineering", ranking: 10, strength: "Excellent", fees: "CHF 1,266", feeType: "per-year" },
      { name: "Computer Science", ranking: 12, strength: "Excellent", fees: "CHF 1,266", feeType: "per-year" },
      { name: "Life Sciences", ranking: 18, strength: "Very Good", fees: "CHF 1,266", feeType: "per-year" },
      { name: "Materials Science", ranking: 15, strength: "Excellent", fees: "CHF 1,266", feeType: "per-year" }
    ],
    highlights: ["Federal polytechnic", "Research focus", "Innovation excellence", "International outlook"],
    website: "https://www.epfl.ch",
    image: "/placeholder.svg"
  },
  {
    id: "switzerland-03",
    name: "University of Zurich",
    location: "Zurich, Switzerland",
    type: "Public",
    overallRanking: 70,
    establishedYear: 1833,
    courses: [
      { name: "Medicine", ranking: 28, strength: "Very Good", fees: "CHF 1,598", feeType: "per-year" },
      { name: "Life Sciences", ranking: 32, strength: "Good", fees: "CHF 1,598", feeType: "per-year" },
      { name: "Economics", ranking: 38, strength: "Good", fees: "CHF 1,598", feeType: "per-year" },
      { name: "Law", ranking: 45, strength: "Good", fees: "CHF 1,598", feeType: "per-year" }
    ],
    highlights: ["Research university", "Medical excellence", "Comprehensive programs", "Innovation focus"],
    website: "https://www.uzh.ch",
    image: "/placeholder.svg"
  }
];