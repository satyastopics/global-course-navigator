import { College } from '../../../../types/collegeTypes';

export const usPrivateUniversities: College[] = [
  {
    id: "private-us-01",
    name: "University of Chicago",
    location: "Chicago, Illinois, USA",
    type: "Private",
    overallRanking: 6,
    establishedYear: 1890,
    courses: [
      { name: "Economics", ranking: 1, strength: "Excellent", fees: "$62,940", feeType: "per-year" },
      { name: "Business", ranking: 3, strength: "Excellent", fees: "$75,000", feeType: "per-year" },
      { name: "Law", ranking: 3, strength: "Excellent", fees: "$71,676", feeType: "per-year" }
    ],
    highlights: ["Nobel Prize winners", "Research excellence", "Urban campus", "Strong economics"],
    website: "https://www.uchicago.edu",
    image: "/placeholder.svg"
  },
  {
    id: "private-us-02",
    name: "Northwestern University",
    location: "Evanston, Illinois, USA",
    type: "Private",
    overallRanking: 9,
    establishedYear: 1851,
    courses: [
      { name: "Journalism", ranking: 1, strength: "Excellent", fees: "$63,468", feeType: "per-year" },
      { name: "Business", ranking: 5, strength: "Excellent", fees: "$76,000", feeType: "per-year" },
      { name: "Engineering", ranking: 13, strength: "Very Good", fees: "$63,468", feeType: "per-year" }
    ],
    highlights: ["Top journalism school", "Research university", "Lake campus", "Strong alumni"],
    website: "https://www.northwestern.edu",
    image: "/placeholder.svg"
  }
];
