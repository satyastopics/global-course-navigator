import { College } from '../../../../../types/collegeTypes';

export const topFrenchUniversities: College[] = [
  {
    id: "france-01",
    name: "Sorbonne University",
    location: "Paris, France",
    type: "Public",
    overallRanking: 44,
    establishedYear: 1150,
    courses: [
      { name: "Literature", ranking: 8, strength: "Excellent", fees: "€170", feeType: "per-year" },
      { name: "Medicine", ranking: 25, strength: "Very Good", fees: "€2,770", feeType: "per-year" },
      { name: "Physics", ranking: 32, strength: "Good", fees: "€170", feeType: "per-year" },
      { name: "History", ranking: 15, strength: "Excellent", fees: "€170", feeType: "per-year" }
    ],
    highlights: ["Historic university", "Liberal arts excellence", "Research tradition", "Cultural heritage"],
    website: "https://www.sorbonne-universite.fr",
    image: "/placeholder.svg"
  },
  {
    id: "france-02",
    name: "École Normale Supérieure",
    location: "Paris, France",
    type: "Public",
    overallRanking: 51,
    establishedYear: 1794,
    courses: [
      { name: "Philosophy", ranking: 3, strength: "Excellent", fees: "€0", feeType: "per-year" },
      { name: "Mathematics", ranking: 8, strength: "Excellent", fees: "€0", feeType: "per-year" },
      { name: "Physics", ranking: 12, strength: "Excellent", fees: "€0", feeType: "per-year" },
      { name: "Literature", ranking: 5, strength: "Excellent", fees: "€0", feeType: "per-year" }
    ],
    highlights: ["Elite institution", "Academic excellence", "Research focus", "Intellectual tradition"],
    website: "https://www.ens.psl.eu",
    image: "/placeholder.svg"
  },
  {
    id: "france-03",
    name: "École Polytechnique",
    location: "Palaiseau, France",
    type: "Public",
    overallRanking: 61,
    establishedYear: 1794,
    courses: [
      { name: "Engineering", ranking: 15, strength: "Excellent", fees: "€0", feeType: "per-year" },
      { name: "Mathematics", ranking: 18, strength: "Very Good", fees: "€0", feeType: "per-year" },
      { name: "Physics", ranking: 22, strength: "Very Good", fees: "€0", feeType: "per-year" },
      { name: "Computer Science", ranking: 28, strength: "Very Good", fees: "€0", feeType: "per-year" }
    ],
    highlights: ["Grande École", "Military tradition", "Engineering excellence", "Elite education"],
    website: "https://www.polytechnique.edu",
    image: "/placeholder.svg"
  },
  {
    id: "france-04",
    name: "Sciences Po",
    location: "Paris, France",
    type: "Public",
    overallRanking: 220,
    establishedYear: 1872,
    courses: [
      { name: "Political Science", ranking: 5, strength: "Excellent", fees: "€13,870", feeType: "per-year" },
      { name: "International Relations", ranking: 3, strength: "Excellent", fees: "€13,870", feeType: "per-year" },
      { name: "Economics", ranking: 35, strength: "Good", fees: "€13,870", feeType: "per-year" },
      { name: "Public Administration", ranking: 8, strength: "Excellent", fees: "€13,870", feeType: "per-year" }
    ],
    highlights: ["Political science leader", "International focus", "Alumni network", "Policy influence"],
    website: "https://www.sciencespo.fr",
    image: "/placeholder.svg"
  },
  {
    id: "france-05",
    name: "University of Paris-Saclay",
    location: "Gif-sur-Yvette, France",
    type: "Public",
    overallRanking: 69,
    establishedYear: 2019,
    courses: [
      { name: "Mathematics", ranking: 12, strength: "Excellent", fees: "€170", feeType: "per-year" },
      { name: "Physics", ranking: 15, strength: "Excellent", fees: "€170", feeType: "per-year" },
      { name: "Computer Science", ranking: 32, strength: "Good", fees: "€170", feeType: "per-year" },
      { name: "Agriculture", ranking: 18, strength: "Very Good", fees: "€170", feeType: "per-year" }
    ],
    highlights: ["Research cluster", "Innovation focus", "Science excellence", "Modern university"],
    website: "https://www.universite-paris-saclay.fr",
    image: "/placeholder.svg"
  }
];