import { College } from '../../../../../types/collegeTypes';

export const topSpanishUniversities: College[] = [
  {
    id: "spain-01",
    name: "IE University",
    location: "Madrid, Spain",
    type: "Private",
    overallRanking: 448,
    establishedYear: 1973,
    courses: [
      { name: "Business", ranking: 18, strength: "Very Good", fees: "€24,700", feeType: "per-year" },
      { name: "Law", ranking: 35, strength: "Good", fees: "€24,700", feeType: "per-year" },
      { name: "International Relations", ranking: 25, strength: "Very Good", fees: "€24,700", feeType: "per-year" },
      { name: "Design", ranking: 22, strength: "Very Good", fees: "€24,700", feeType: "per-year" }
    ],
    highlights: ["Business excellence", "International outlook", "Innovation focus", "Entrepreneurship"],
    website: "https://www.ie.edu",
    image: "/placeholder.svg"
  },
  {
    id: "spain-02",
    name: "Universitat de Barcelona",
    location: "Barcelona, Spain",
    type: "Public",
    overallRanking: 184,
    establishedYear: 1450,
    courses: [
      { name: "Medicine", ranking: 42, strength: "Good", fees: "€2,800", feeType: "per-year" },
      { name: "Psychology", ranking: 28, strength: "Very Good", fees: "€2,800", feeType: "per-year" },
      { name: "Mathematics", ranking: 45, strength: "Good", fees: "€2,800", feeType: "per-year" },
      { name: "Philosophy", ranking: 35, strength: "Good", fees: "€2,800", feeType: "per-year" }
    ],
    highlights: ["Research university", "Comprehensive programs", "Historic institution", "Cultural significance"],
    website: "https://www.ub.edu",
    image: "/placeholder.svg"
  },
  {
    id: "spain-03",
    name: "Universidad Autónoma de Madrid",
    location: "Madrid, Spain",
    type: "Public",
    overallRanking: 200,
    establishedYear: 1968,
    courses: [
      { name: "Medicine", ranking: 38, strength: "Good", fees: "€2,800", feeType: "per-year" },
      { name: "Biology", ranking: 45, strength: "Good", fees: "€2,800", feeType: "per-year" },
      { name: "Physics", ranking: 48, strength: "Good", fees: "€2,800", feeType: "per-year" },
      { name: "Economics", ranking: 42, strength: "Good", fees: "€2,800", feeType: "per-year" }
    ],
    highlights: ["Research focus", "Medical excellence", "Modern university", "Innovation hub"],
    website: "https://www.uam.es",
    image: "/placeholder.svg"
  }
];