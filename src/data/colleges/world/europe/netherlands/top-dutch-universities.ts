import { College } from '../../../../../types/collegeTypes';

export const topDutchUniversities: College[] = [
  {
    id: "netherlands-01",
    name: "Delft University of Technology",
    location: "Delft, Netherlands",
    type: "Public",
    overallRanking: 54,
    establishedYear: 1842,
    courses: [
      { name: "Engineering", ranking: 3, strength: "Excellent", fees: "€2,314", feeType: "per-year" },
      { name: "Architecture", ranking: 2, strength: "Excellent", fees: "€2,314", feeType: "per-year" },
      { name: "Computer Science", ranking: 15, strength: "Excellent", fees: "€2,314", feeType: "per-year" },
      { name: "Aerospace Engineering", ranking: 1, strength: "Excellent", fees: "€2,314", feeType: "per-year" }
    ],
    highlights: ["World's top tech university", "Engineering excellence", "Innovation leader", "Industry partnerships"],
    website: "https://www.tudelft.nl",
    image: "/placeholder.svg"
  },
  {
    id: "netherlands-02",
    name: "University of Amsterdam",
    location: "Amsterdam, Netherlands",
    type: "Public",
    overallRanking: 58,
    establishedYear: 1632,
    courses: [
      { name: "Psychology", ranking: 8, strength: "Excellent", fees: "€2,314", feeType: "per-year" },
      { name: "Economics", ranking: 15, strength: "Excellent", fees: "€2,314", feeType: "per-year" },
      { name: "Computer Science", ranking: 22, strength: "Very Good", fees: "€2,314", feeType: "per-year" },
      { name: "Media Studies", ranking: 1, strength: "Excellent", fees: "€2,314", feeType: "per-year" }
    ],
    highlights: ["Research university", "Liberal arts excellence", "International outlook", "Historic institution"],
    website: "https://www.uva.nl",
    image: "/placeholder.svg"
  },
  {
    id: "netherlands-03",
    name: "Eindhoven University of Technology",
    location: "Eindhoven, Netherlands",
    type: "Public",
    overallRanking: 125,
    establishedYear: 1956,
    courses: [
      { name: "Engineering", ranking: 18, strength: "Very Good", fees: "€2,314", feeType: "per-year" },
      { name: "Computer Science", ranking: 25, strength: "Very Good", fees: "€2,314", feeType: "per-year" },
      { name: "Industrial Design", ranking: 5, strength: "Excellent", fees: "€2,314", feeType: "per-year" },
      { name: "Data Science", ranking: 12, strength: "Excellent", fees: "€2,314", feeType: "per-year" }
    ],
    highlights: ["Technology focus", "Innovation hub", "Industry collaboration", "Research excellence"],
    website: "https://www.tue.nl",
    image: "/placeholder.svg"
  }
];