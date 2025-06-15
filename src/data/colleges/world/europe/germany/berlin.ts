
import { College } from '../../../../../types/collegeTypes';

export const berlinUniversities: College[] = [
  {
    id: "de-berlin-01",
    name: "Humboldt University of Berlin",
    location: "Berlin, Germany",
    type: "Public",
    overallRanking: 120,
    establishedYear: 1810,
    courses: [
      { name: "Liberal Arts", ranking: 45, strength: "Good", fees: "€3,000", feeType: "per-year" },
      { name: "Philosophy", ranking: 20, strength: "Excellent", fees: "€3,000", feeType: "per-year" },
      { name: "History", ranking: 25, strength: "Very Good", fees: "€3,000", feeType: "per-year" }
    ],
    highlights: ["Historic university", "Liberal arts tradition", "Philosophy excellence", "Cultural center"],
    website: "https://www.hu-berlin.de",
    image: "/placeholder.svg"
  }
];
