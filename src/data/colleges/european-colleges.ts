
import { College } from '../collegeTypes';

export const europeanColleges: College[] = [
  {
    id: "7",
    name: "ETH Zurich",
    location: "Zurich, Switzerland",
    type: "Public",
    overallRanking: 7,
    establishedYear: 1855,
    courses: [
      { name: "Engineering", ranking: 6, strength: "Excellent", fees: "CHF 1,298", feeType: "per-year" },
      { name: "Computer Science", ranking: 7, strength: "Excellent", fees: "CHF 1,298", feeType: "per-year" },
      { name: "Physics", ranking: 5, strength: "Excellent", fees: "CHF 1,298", feeType: "per-year" },
      { name: "Mathematics", ranking: 6, strength: "Excellent", fees: "CHF 1,298", feeType: "per-year" }
    ],
    highlights: ["Top Swiss university", "Strong STEM focus", "Research excellence", "International environment"],
    website: "https://ethz.ch",
    image: "/placeholder.svg"
  },
  {
    id: "66",
    name: "Technical University of Munich",
    location: "Munich, Germany",
    type: "Public",
    overallRanking: 50,
    establishedYear: 1868,
    courses: [
      { name: "Engineering", ranking: 18, strength: "Excellent", fees: "€150", feeType: "per-year" },
      { name: "Computer Science", ranking: 25, strength: "Very Good", fees: "€150", feeType: "per-year" },
      { name: "Physics", ranking: 22, strength: "Very Good", fees: "€150", feeType: "per-year" },
      { name: "Mathematics", ranking: 28, strength: "Very Good", fees: "€150", feeType: "per-year" }
    ],
    highlights: ["Top German tech university", "Industry partnerships", "Affordable fees", "Research focus"],
    website: "https://www.tum.de",
    image: "/placeholder.svg"
  },
  {
    id: "68",
    name: "Karolinska Institute",
    location: "Stockholm, Sweden",
    type: "Public",
    overallRanking: 38,
    establishedYear: 1810,
    courses: [
      { name: "Medicine", ranking: 6, strength: "Excellent", fees: "SEK 0", feeType: "per-year" },
      { name: "Biomedical Sciences", ranking: 8, strength: "Excellent", fees: "SEK 0", feeType: "per-year" },
      { name: "Public Health", ranking: 12, strength: "Excellent", fees: "SEK 0", feeType: "per-year" },
      { name: "Nursing", ranking: 15, strength: "Very Good", fees: "SEK 0", feeType: "per-year" }
    ],
    highlights: ["Nobel Prize selection", "Medical excellence", "Research intensive", "Free for EU students"],
    website: "https://ki.se",
    image: "/placeholder.svg"
  }
];
