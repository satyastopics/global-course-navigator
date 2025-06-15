
import { College } from '../../types/collegeTypes';

export const otherColleges: College[] = [
  {
    id: "61",
    name: "University of Toronto",
    location: "Toronto, Canada",
    type: "Public",
    overallRanking: 18,
    establishedYear: 1827,
    courses: [
      { name: "Computer Science", ranking: 15, strength: "Excellent", fees: "CAD 58,160", feeType: "per-year" },
      { name: "Engineering", ranking: 12, strength: "Excellent", fees: "CAD 59,310", feeType: "per-year" },
      { name: "Medicine", ranking: 8, strength: "Excellent", fees: "CAD 89,680", feeType: "per-year" },
      { name: "Business", ranking: 20, strength: "Very Good", fees: "CAD 61,890", feeType: "per-year" }
    ],
    highlights: ["Top Canadian university", "Research intensive", "Diverse student body", "Strong alumni network"],
    website: "https://www.utoronto.ca",
    image: "/placeholder.svg"
  },
  {
    id: "62",
    name: "University of Melbourne",
    location: "Melbourne, Australia",
    type: "Public",
    overallRanking: 33,
    establishedYear: 1853,
    courses: [
      { name: "Medicine", ranking: 12, strength: "Excellent", fees: "AUD 89,824", feeType: "per-year" },
      { name: "Engineering", ranking: 25, strength: "Very Good", fees: "AUD 48,736", feeType: "per-year" },
      { name: "Liberal Arts", ranking: 18, strength: "Very Good", fees: "AUD 33,344", feeType: "per-year" },
      { name: "Business", ranking: 28, strength: "Very Good", fees: "AUD 47,712", feeType: "per-year" }
    ],
    highlights: ["Go8 member", "Research excellence", "International outlook", "Beautiful campus"],
    website: "https://www.unimelb.edu.au",
    image: "/placeholder.svg"
  },
  {
    id: "67",
    name: "University of São Paulo",
    location: "São Paulo, Brazil",
    type: "Public",
    overallRanking: 115,
    establishedYear: 1934,
    courses: [
      { name: "Medicine", ranking: 45, strength: "Good", fees: "Free", feeType: "total" },
      { name: "Engineering", ranking: 55, strength: "Good", fees: "Free", feeType: "total" },
      { name: "Business", ranking: 65, strength: "Average", fees: "Free", feeType: "total" },
      { name: "Liberal Arts", ranking: 48, strength: "Good", fees: "Free", feeType: "total" }
    ],
    highlights: ["Top Brazilian university", "Free education", "Large research output", "Diverse programs"],
    website: "https://www.usp.br",
    image: "/placeholder.svg"
  },
  {
    id: "69",
    name: "University of Cape Town",
    location: "Cape Town, South Africa",
    type: "Public",
    overallRanking: 194,
    establishedYear: 1829,
    courses: [
      { name: "Medicine", ranking: 85, strength: "Good", fees: "$6,200", feeType: "per-year" },
      { name: "Engineering", ranking: 120, strength: "Average", fees: "$5,500", feeType: "per-year" },
      { name: "Business", ranking: 95, strength: "Good", fees: "$4,700", feeType: "per-year" },
      { name: "Law", ranking: 88, strength: "Good", fees: "$4,000", feeType: "per-year" }
    ],
    highlights: ["Top African university", "Diverse student body", "Beautiful location", "Research focused"],
    website: "https://www.uct.ac.za",
    image: "/placeholder.svg"
  },
  {
    id: "70",
    name: "American University of Beirut",
    location: "Beirut, Lebanon",
    type: "Private",
    overallRanking: 226,
    establishedYear: 1866,
    courses: [
      { name: "Medicine", ranking: 150, strength: "Average", fees: "$32,000", feeType: "per-year" },
      { name: "Engineering", ranking: 180, strength: "Average", fees: "$28,000", feeType: "per-year" },
      { name: "Business", ranking: 165, strength: "Average", fees: "$25,000", feeType: "per-year" },
      { name: "Liberal Arts", ranking: 145, strength: "Average", fees: "$22,000", feeType: "per-year" }
    ],
    highlights: ["Liberal arts tradition", "American model", "Regional leader", "Diverse programs"],
    website: "https://www.aub.edu.lb",
    image: "/placeholder.svg"
  },
  {
    id: "71",
    name: "Technion - Israel Institute of Technology",
    location: "Haifa, Israel",
    type: "Public",
    overallRanking: 77,
    establishedYear: 1912,
    courses: [
      { name: "Engineering", ranking: 35, strength: "Very Good", fees: "$3,000", feeType: "per-year" },
      { name: "Computer Science", ranking: 32, strength: "Very Good", fees: "$3,000", feeType: "per-year" },
      { name: "Architecture", ranking: 45, strength: "Good", fees: "$3,000", feeType: "per-year" },
      { name: "Medicine", ranking: 55, strength: "Good", fees: "$7,500", feeType: "per-year" }
    ],
    highlights: ["Israel's MIT", "Innovation hub", "Startup ecosystem", "Nobel laureates"],
    website: "https://www.technion.ac.il",
    image: "/placeholder.svg"
  },
  {
    id: "72",
    name: "University of Buenos Aires",
    location: "Buenos Aires, Argentina",
    type: "Public",
    overallRanking: 67,
    establishedYear: 1821,
    courses: [
      { name: "Medicine", ranking: 42, strength: "Good", fees: "Free", feeType: "total" },
      { name: "Law", ranking: 38, strength: "Very Good", fees: "Free", feeType: "total" },
      { name: "Economics", ranking: 55, strength: "Good", fees: "Free", feeType: "total" },
      { name: "Liberal Arts", ranking: 48, strength: "Good", fees: "Free", feeType: "total" }
    ],
    highlights: ["Free education", "Large enrollment", "Strong in humanities", "Regional influence"],
    website: "https://www.uba.ar",
    image: "/placeholder.svg"
  },
  {
    id: "74",
    name: "University of Auckland",
    location: "Auckland, New Zealand",
    type: "Public",
    overallRanking: 68,
    establishedYear: 1883,
    courses: [
      { name: "Medicine", ranking: 48, strength: "Good", fees: "NZD 76,269", feeType: "per-year" },
      { name: "Engineering", ranking: 65, strength: "Good", fees: "NZD 43,166", feeType: "per-year" },
      { name: "Business", ranking: 85, strength: "Good", fees: "NZD 35,742", feeType: "per-year" },
      { name: "Liberal Arts", ranking: 78, strength: "Good", fees: "NZD 28,390", feeType: "per-year" }
    ],
    highlights: ["Top NZ university", "Research intensive", "Multicultural", "Beautiful campus"],
    website: "https://www.auckland.ac.nz",
    image: "/placeholder.svg"
  }
];
