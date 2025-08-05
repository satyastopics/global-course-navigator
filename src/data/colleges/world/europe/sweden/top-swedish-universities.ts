import { College } from '../../../../../types/collegeTypes';

export const topSwedishUniversities: College[] = [
  {
    id: "sweden-01",
    name: "KTH Royal Institute of Technology",
    location: "Stockholm, Sweden",
    type: "Public",
    overallRanking: 73,
    establishedYear: 1827,
    courses: [
      { name: "Engineering", ranking: 22, strength: "Very Good", fees: "SEK 0", feeType: "per-year" },
      { name: "Computer Science", ranking: 28, strength: "Very Good", fees: "SEK 0", feeType: "per-year" },
      { name: "Architecture", ranking: 18, strength: "Very Good", fees: "SEK 0", feeType: "per-year" },
      { name: "Environmental Engineering", ranking: 12, strength: "Excellent", fees: "SEK 0", feeType: "per-year" }
    ],
    highlights: ["Nordic tech leader", "Sustainability focus", "Innovation excellence", "Free tuition"],
    website: "https://www.kth.se",
    image: "/placeholder.svg"
  },
  {
    id: "sweden-02",
    name: "Lund University",
    location: "Lund, Sweden",
    type: "Public",
    overallRanking: 85,
    establishedYear: 1666,
    courses: [
      { name: "Engineering", ranking: 32, strength: "Good", fees: "SEK 0", feeType: "per-year" },
      { name: "Medicine", ranking: 28, strength: "Very Good", fees: "SEK 0", feeType: "per-year" },
      { name: "Business", ranking: 35, strength: "Good", fees: "SEK 0", feeType: "per-year" },
      { name: "Environmental Sciences", ranking: 15, strength: "Excellent", fees: "SEK 0", feeType: "per-year" }
    ],
    highlights: ["Research university", "Comprehensive programs", "International outlook", "Sustainability leader"],
    website: "https://www.lu.se",
    image: "/placeholder.svg"
  },
  {
    id: "sweden-03",
    name: "Karolinska Institute",
    location: "Stockholm, Sweden",
    type: "Public",
    overallRanking: 41,
    establishedYear: 1810,
    courses: [
      { name: "Medicine", ranking: 6, strength: "Excellent", fees: "SEK 0", feeType: "per-year" },
      { name: "Biomedicine", ranking: 8, strength: "Excellent", fees: "SEK 0", feeType: "per-year" },
      { name: "Public Health", ranking: 12, strength: "Excellent", fees: "SEK 0", feeType: "per-year" },
      { name: "Neuroscience", ranking: 15, strength: "Excellent", fees: "SEK 0", feeType: "per-year" }
    ],
    highlights: ["Medical excellence", "Nobel Prize committee", "Research leader", "Healthcare innovation"],
    website: "https://ki.se",
    image: "/placeholder.svg"
  }
];