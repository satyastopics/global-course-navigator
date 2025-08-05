import { College } from '../../../../../types/collegeTypes';

export const topNewZealandUniversities: College[] = [
  {
    id: "nz-01",
    name: "University of Auckland",
    location: "Auckland, New Zealand",
    type: "Public",
    overallRanking: 68,
    establishedYear: 1883,
    courses: [
      { name: "Engineering", ranking: 45, strength: "Good", fees: "NZ$45,000", feeType: "per-year" },
      { name: "Medicine", ranking: 32, strength: "Good", fees: "NZ$45,000", feeType: "per-year" },
      { name: "Business", ranking: 42, strength: "Good", fees: "NZ$45,000", feeType: "per-year" },
      { name: "Architecture", ranking: 28, strength: "Very Good", fees: "NZ$45,000", feeType: "per-year" }
    ],
    highlights: ["New Zealand's top university", "Research excellence", "International outlook", "Comprehensive programs"],
    website: "https://www.auckland.ac.nz",
    image: "/placeholder.svg"
  },
  {
    id: "nz-02",
    name: "University of Otago",
    location: "Dunedin, New Zealand",
    type: "Public",
    overallRanking: 194,
    establishedYear: 1869,
    courses: [
      { name: "Medicine", ranking: 28, strength: "Very Good", fees: "NZ$45,000", feeType: "per-year" },
      { name: "Dentistry", ranking: 12, strength: "Excellent", fees: "NZ$45,000", feeType: "per-year" },
      { name: "Pharmacy", ranking: 22, strength: "Very Good", fees: "NZ$45,000", feeType: "per-year" },
      { name: "Psychology", ranking: 38, strength: "Good", fees: "NZ$45,000", feeType: "per-year" }
    ],
    highlights: ["Medical excellence", "Oldest university in NZ", "Research tradition", "Health sciences leader"],
    website: "https://www.otago.ac.nz",
    image: "/placeholder.svg"
  },
  {
    id: "nz-03",
    name: "Victoria University of Wellington",
    location: "Wellington, New Zealand",
    type: "Public",
    overallRanking: 236,
    establishedYear: 1897,
    courses: [
      { name: "Law", ranking: 35, strength: "Good", fees: "NZ$45,000", feeType: "per-year" },
      { name: "Public Policy", ranking: 18, strength: "Very Good", fees: "NZ$45,000", feeType: "per-year" },
      { name: "Design", ranking: 42, strength: "Good", fees: "NZ$45,000", feeType: "per-year" },
      { name: "Psychology", ranking: 45, strength: "Good", fees: "NZ$45,000", feeType: "per-year" }
    ],
    highlights: ["Capital city university", "Law excellence", "Public policy leader", "Liberal arts focus"],
    website: "https://www.wgtn.ac.nz",
    image: "/placeholder.svg"
  }
];