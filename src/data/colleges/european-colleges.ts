
import { College } from '../../types/collegeTypes';

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
      { name: "Engineering", ranking: 18, strength: "Excellent", fees: "€3,000", feeType: "per-year" },
      { name: "Computer Science", ranking: 25, strength: "Very Good", fees: "€3,000", feeType: "per-year" },
      { name: "Physics", ranking: 22, strength: "Very Good", fees: "€3,000", feeType: "per-year" },
      { name: "Business", ranking: 35, strength: "Good", fees: "€25,000", feeType: "per-year" }
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
      { name: "Medicine", ranking: 6, strength: "Excellent", fees: "€22,000", feeType: "per-year" },
      { name: "Biomedical Sciences", ranking: 8, strength: "Excellent", fees: "€22,000", feeType: "per-year" },
      { name: "Public Health", ranking: 12, strength: "Excellent", fees: "€18,000", feeType: "per-year" },
      { name: "Pharmacy", ranking: 15, strength: "Very Good", fees: "€20,000", feeType: "per-year" }
    ],
    highlights: ["Nobel Prize selection", "Medical excellence", "Research intensive", "EU student rates available"],
    website: "https://ki.se",
    image: "/placeholder.svg"
  },
  {
    id: "69",
    name: "EPFL (École Polytechnique Fédérale de Lausanne)",
    location: "Lausanne, Switzerland",
    type: "Public",
    overallRanking: 14,
    establishedYear: 1969,
    courses: [
      { name: "Computer Science", ranking: 8, strength: "Excellent", fees: "CHF 1,266", feeType: "per-year" },
      { name: "Engineering", ranking: 12, strength: "Excellent", fees: "CHF 1,266", feeType: "per-year" },
      { name: "Architecture", ranking: 7, strength: "Excellent", fees: "CHF 1,266", feeType: "per-year" },
      { name: "Data Science", ranking: 5, strength: "Excellent", fees: "CHF 1,266", feeType: "per-year" }
    ],
    highlights: ["Top tech university", "Innovation campus", "Research excellence", "Startup ecosystem"],
    website: "https://www.epfl.ch",
    image: "/placeholder.svg"
  },
  {
    id: "70",
    name: "Sorbonne University",
    location: "Paris, France",
    type: "Public",
    overallRanking: 44,
    establishedYear: 1257,
    courses: [
      { name: "Medicine", ranking: 18, strength: "Excellent", fees: "€2,770", feeType: "per-year" },
      { name: "Literature", ranking: 8, strength: "Excellent", fees: "€2,770", feeType: "per-year" },
      { name: "Mathematics", ranking: 15, strength: "Excellent", fees: "€2,770", feeType: "per-year" },
      { name: "Physics", ranking: 20, strength: "Very Good", fees: "€2,770", feeType: "per-year" }
    ],
    highlights: ["Historic prestige", "Central Paris", "Research tradition", "Cultural heritage"],
    website: "https://www.sorbonne-universite.fr",
    image: "/placeholder.svg"
  },
  {
    id: "71",
    name: "TU Delft",
    location: "Delft, Netherlands",
    type: "Public",
    overallRanking: 57,
    establishedYear: 1842,
    courses: [
      { name: "Engineering", ranking: 16, strength: "Excellent", fees: "€18,750", feeType: "per-year" },
      { name: "Architecture", ranking: 4, strength: "Excellent", fees: "€18,750", feeType: "per-year" },
      { name: "Computer Science", ranking: 24, strength: "Very Good", fees: "€18,750", feeType: "per-year" },
      { name: "Aerospace Engineering", ranking: 3, strength: "Excellent", fees: "€18,750", feeType: "per-year" }
    ],
    highlights: ["Top engineering school", "Innovation hub", "Sustainable technology", "Industry partnerships"],
    website: "https://www.tudelft.nl",
    image: "/placeholder.svg"
  },
  {
    id: "72",
    name: "London School of Economics",
    location: "London, United Kingdom",
    type: "Public",
    overallRanking: 56,
    establishedYear: 1895,
    courses: [
      { name: "Economics", ranking: 2, strength: "Excellent", fees: "£23,330", feeType: "per-year" },
      { name: "Political Science", ranking: 3, strength: "Excellent", fees: "£23,330", feeType: "per-year" },
      { name: "International Relations", ranking: 2, strength: "Excellent", fees: "£23,330", feeType: "per-year" },
      { name: "Sociology", ranking: 4, strength: "Excellent", fees: "£23,330", feeType: "per-year" }
    ],
    highlights: ["Social sciences excellence", "Central London", "Global network", "Policy influence"],
    website: "https://www.lse.ac.uk",
    image: "/placeholder.svg"
  },
  {
    id: "74",
    name: "King's College London",
    location: "London, United Kingdom",
    type: "Public",
    overallRanking: 35,
    establishedYear: 1829,
    courses: [
      { name: "Medicine", ranking: 16, strength: "Excellent", fees: "£46,650", feeType: "per-year" },
      { name: "Law", ranking: 7, strength: "Excellent", fees: "£28,050", feeType: "per-year" },
      { name: "International Relations", ranking: 6, strength: "Excellent", fees: "£28,050", feeType: "per-year" },
      { name: "Psychology", ranking: 12, strength: "Excellent", fees: "£28,050", feeType: "per-year" }
    ],
    highlights: ["Central London location", "Research excellence", "Historic prestige", "Global reputation"],
    website: "https://www.kcl.ac.uk",
    image: "/placeholder.svg"
  }
];
