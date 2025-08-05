import { College } from '../../../../../types/collegeTypes';

export const topFinnishUniversities: College[] = [
  {
    id: "fi-01",
    name: "University of Helsinki",
    location: "Helsinki, Finland",
    type: "Public",
    overallRanking: 104,
    establishedYear: 1640,
    courses: [
      { name: "Education", ranking: 8, strength: "Excellent", fees: "EUR 0", feeType: "per-year" },
      { name: "Social Sciences", ranking: 25, strength: "Good", fees: "EUR 0", feeType: "per-year" },
      { name: "Medicine", ranking: 48, strength: "Good", fees: "EUR 0", feeType: "per-year" },
      { name: "Law", ranking: 42, strength: "Good", fees: "EUR 0", feeType: "per-year" }
    ],
    highlights: ["Finland's oldest university", "Education excellence", "Free tuition", "Research focus"],
    website: "https://www.helsinki.fi",
    image: "/placeholder.svg"
  },
  {
    id: "fi-02",
    name: "Aalto University",
    location: "Espoo, Finland",
    type: "Public",
    overallRanking: 116,
    establishedYear: 2010,
    courses: [
      { name: "Engineering", ranking: 35, strength: "Good", fees: "EUR 0", feeType: "per-year" },
      { name: "Design", ranking: 15, strength: "Very Good", fees: "EUR 0", feeType: "per-year" },
      { name: "Business", ranking: 55, strength: "Average", fees: "EUR 0", feeType: "per-year" },
      { name: "Computer Science", ranking: 45, strength: "Good", fees: "EUR 0", feeType: "per-year" }
    ],
    highlights: ["Innovation university", "Design excellence", "Tech focus", "Free education"],
    website: "https://www.aalto.fi",
    image: "/placeholder.svg"
  },
  {
    id: "fi-03",
    name: "University of Turku",
    location: "Turku, Finland",
    type: "Public",
    overallRanking: 287,
    establishedYear: 1920,
    courses: [
      { name: "Medicine", ranking: 85, strength: "Average", fees: "EUR 0", feeType: "per-year" },
      { name: "Education", ranking: 45, strength: "Good", fees: "EUR 0", feeType: "per-year" },
      { name: "Social Sciences", ranking: 68, strength: "Average", fees: "EUR 0", feeType: "per-year" },
      { name: "Humanities", ranking: 55, strength: "Average", fees: "EUR 0", feeType: "per-year" }
    ],
    highlights: ["Historic city", "Medical research", "Free tuition", "Baltic Sea region"],
    website: "https://www.utu.fi",
    image: "/placeholder.svg"
  }
];