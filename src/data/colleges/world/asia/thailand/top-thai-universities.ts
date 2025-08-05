import { College } from '../../../../../types/collegeTypes';

export const topThaiUniversities: College[] = [
  {
    id: "thailand-01",
    name: "Chulalongkorn University",
    location: "Bangkok, Thailand",
    type: "Public",
    overallRanking: 208,
    establishedYear: 1917,
    courses: [
      { name: "Engineering", ranking: 45, strength: "Good", fees: "THB 150,000", feeType: "per-year" },
      { name: "Medicine", ranking: 42, strength: "Good", fees: "THB 150,000", feeType: "per-year" },
      { name: "Business", ranking: 48, strength: "Good", fees: "THB 150,000", feeType: "per-year" },
      { name: "Architecture", ranking: 35, strength: "Good", fees: "THB 150,000", feeType: "per-year" }
    ],
    highlights: ["Thailand's oldest university", "Royal institution", "Research excellence", "Regional leader"],
    website: "https://www.chula.ac.th",
    image: "/placeholder.svg"
  },
  {
    id: "thailand-02",
    name: "Mahidol University",
    location: "Bangkok, Thailand",
    type: "Public",
    overallRanking: 255,
    establishedYear: 1888,
    courses: [
      { name: "Medicine", ranking: 38, strength: "Good", fees: "THB 150,000", feeType: "per-year" },
      { name: "Pharmacy", ranking: 32, strength: "Good", fees: "THB 150,000", feeType: "per-year" },
      { name: "Public Health", ranking: 28, strength: "Very Good", fees: "THB 150,000", feeType: "per-year" },
      { name: "Tropical Medicine", ranking: 15, strength: "Excellent", fees: "THB 150,000", feeType: "per-year" }
    ],
    highlights: ["Medical excellence", "Health sciences leader", "Research focus", "International programs"],
    website: "https://www.mahidol.ac.th",
    image: "/placeholder.svg"
  },
  {
    id: "thailand-03",
    name: "King Mongkut's University of Technology Thonburi",
    location: "Bangkok, Thailand",
    type: "Public",
    overallRanking: 401,
    establishedYear: 1957,
    courses: [
      { name: "Engineering", ranking: 42, strength: "Good", fees: "THB 150,000", feeType: "per-year" },
      { name: "Computer Science", ranking: 48, strength: "Good", fees: "THB 150,000", feeType: "per-year" },
      { name: "Architecture", ranking: 45, strength: "Good", fees: "THB 150,000", feeType: "per-year" },
      { name: "Technology Management", ranking: 38, strength: "Good", fees: "THB 150,000", feeType: "per-year" }
    ],
    highlights: ["Technology focus", "Engineering excellence", "Innovation hub", "Industry partnerships"],
    website: "https://www.kmutt.ac.th",
    image: "/placeholder.svg"
  }
];