import { College } from '../../../../../types/collegeTypes';

export const topMalaysianUniversities: College[] = [
  {
    id: "malaysia-01",
    name: "University of Malaya",
    location: "Kuala Lumpur, Malaysia",
    type: "Public",
    overallRanking: 65,
    establishedYear: 1905,
    courses: [
      { name: "Engineering", ranking: 35, strength: "Good", fees: "MYR 25,000", feeType: "per-year" },
      { name: "Medicine", ranking: 42, strength: "Good", fees: "MYR 25,000", feeType: "per-year" },
      { name: "Business", ranking: 45, strength: "Good", fees: "MYR 25,000", feeType: "per-year" },
      { name: "Computer Science", ranking: 38, strength: "Good", fees: "MYR 25,000", feeType: "per-year" }
    ],
    highlights: ["Malaysia's oldest university", "Research excellence", "Comprehensive programs", "Regional leader"],
    website: "https://www.um.edu.my",
    image: "/placeholder.svg"
  },
  {
    id: "malaysia-02",
    name: "Universiti Teknologi Malaysia",
    location: "Johor Bahru, Malaysia",
    type: "Public",
    overallRanking: 203,
    establishedYear: 1904,
    courses: [
      { name: "Engineering", ranking: 32, strength: "Good", fees: "MYR 25,000", feeType: "per-year" },
      { name: "Computer Science", ranking: 42, strength: "Good", fees: "MYR 25,000", feeType: "per-year" },
      { name: "Architecture", ranking: 38, strength: "Good", fees: "MYR 25,000", feeType: "per-year" },
      { name: "Technology Management", ranking: 45, strength: "Good", fees: "MYR 25,000", feeType: "per-year" }
    ],
    highlights: ["Technology focus", "Engineering excellence", "Research university", "Innovation hub"],
    website: "https://www.utm.my",
    image: "/placeholder.svg"
  },
  {
    id: "malaysia-03",
    name: "Universiti Putra Malaysia",
    location: "Serdang, Malaysia",
    type: "Public",
    overallRanking: 158,
    establishedYear: 1971,
    courses: [
      { name: "Agriculture", ranking: 22, strength: "Very Good", fees: "MYR 25,000", feeType: "per-year" },
      { name: "Forestry", ranking: 18, strength: "Very Good", fees: "MYR 25,000", feeType: "per-year" },
      { name: "Engineering", ranking: 45, strength: "Good", fees: "MYR 25,000", feeType: "per-year" },
      { name: "Veterinary Science", ranking: 28, strength: "Very Good", fees: "MYR 25,000", feeType: "per-year" }
    ],
    highlights: ["Agriculture leader", "Research university", "Sustainability focus", "Life sciences excellence"],
    website: "https://www.upm.edu.my",
    image: "/placeholder.svg"
  }
];