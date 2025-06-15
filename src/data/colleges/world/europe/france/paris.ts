
import { College } from '../../../../../types/collegeTypes';

export const parisUniversities: College[] = [
  {
    id: "fr-paris-01",
    name: "Sorbonne University",
    location: "Paris, France",
    type: "Public",
    overallRanking: 44,
    establishedYear: 1257,
    courses: [
      { name: "Liberal Arts", ranking: 15, strength: "Excellent", fees: "€170", feeType: "per-year" },
      { name: "Medicine", ranking: 30, strength: "Very Good", fees: "€170", feeType: "per-year" },
      { name: "Science", ranking: 25, strength: "Very Good", fees: "€170", feeType: "per-year" },
      { name: "Law", ranking: 35, strength: "Good", fees: "€170", feeType: "per-year" }
    ],
    highlights: ["Historic university", "Liberal arts excellence", "EU fees", "Cultural heritage"],
    website: "https://www.sorbonne-universite.fr",
    image: "/placeholder.svg"
  }
];
