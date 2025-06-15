import { College } from '../../../../types/collegeTypes';

export const swissColleges: College[] = [
  {
    id: "7",
    name: "ETH Zurich",
    location: "Zurich, Switzerland",
    type: "Public",
    overallRanking: 7,
    establishedYear: 1855,
    courses: [
      { name: "Engineering", ranking: 6, strength: "Excellent", fees: "CHF 1,298", feeType: "per-year" },
      { name: "Computer Science", ranking: 7, strength: "Excellent", fees: "CHF 1,298", feeType: "per-year" },
      { name: "Physics", ranking: 5, strength: "Excellent", fees: "CHF 1,298", feeType: "per-year" },
      { name: "Mathematics", ranking: 6, strength: "Excellent", fees: "CHF 1,298", feeType: "per-year" }
    ],
    highlights: ["Top Swiss university", "Strong STEM focus", "Research excellence", "International environment"],
    website: "https://ethz.ch",
    image: "/placeholder.svg"
  }
];
