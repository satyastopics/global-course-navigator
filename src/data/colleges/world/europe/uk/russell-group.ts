import { College } from '../../../../../types/collegeTypes';

export const russellGroupColleges: College[] = [
  {
    id: "russell-01",
    name: "Imperial College London",
    location: "London, United Kingdom",
    type: "Public",
    overallRanking: 6,
    establishedYear: 1907,
    courses: [
      { name: "Engineering", ranking: 4, strength: "Excellent", fees: "£38,400", feeType: "per-year" },
      { name: "Medicine", ranking: 5, strength: "Excellent", fees: "£49,900", feeType: "per-year" },
      { name: "Physics", ranking: 4, strength: "Excellent", fees: "£38,400", feeType: "per-year" },
      { name: "Computer Science", ranking: 9, strength: "Excellent", fees: "£38,400", feeType: "per-year" }
    ],
    highlights: ["STEM focus", "Research intensive", "London location", "Industry partnerships"],
    website: "https://www.imperial.ac.uk",
    image: "/placeholder.svg"
  },
  {
    id: "russell-02",
    name: "University College London",
    location: "London, United Kingdom",
    type: "Public",
    overallRanking: 8,
    establishedYear: 1826,
    courses: [
      { name: "Architecture", ranking: 2, strength: "Excellent", fees: "£31,200", feeType: "per-year" },
      { name: "Medicine", ranking: 8, strength: "Excellent", fees: "£49,900", feeType: "per-year" },
      { name: "Psychology", ranking: 3, strength: "Excellent", fees: "£31,200", feeType: "per-year" },
      { name: "Engineering", ranking: 11, strength: "Excellent", fees: "£35,100", feeType: "per-year" }
    ],
    highlights: ["First university to admit all", "Research excellence", "Central London", "Innovation"],
    website: "https://www.ucl.ac.uk",
    image: "/placeholder.svg"
  },
  {
    id: "russell-03",
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
    id: "russell-04",
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
  },
  {
    id: "russell-05",
    name: "University of Edinburgh",
    location: "Edinburgh, Scotland",
    type: "Public",
    overallRanking: 22,
    establishedYear: 1583,
    courses: [
      { name: "Medicine", ranking: 14, strength: "Excellent", fees: "£38,500", feeType: "per-year" },
      { name: "Liberal Arts", ranking: 8, strength: "Excellent", fees: "£26,500", feeType: "per-year" },
      { name: "Engineering", ranking: 20, strength: "Very Good", fees: "£34,800", feeType: "per-year" },
      { name: "Business", ranking: 18, strength: "Very Good", fees: "£32,100", feeType: "per-year" }
    ],
    highlights: ["Historic Scottish university", "Research excellence", "Beautiful city", "International"],
    website: "https://www.ed.ac.uk",
    image: "/placeholder.svg"
  },
  {
    id: "russell-06",
    name: "University of Manchester",
    location: "Manchester, United Kingdom",
    type: "Public",
    overallRanking: 27,
    establishedYear: 1824,
    courses: [
      { name: "Engineering", ranking: 14, strength: "Excellent", fees: "£29,000", feeType: "per-year" },
      { name: "Computer Science", ranking: 16, strength: "Very Good", fees: "£29,000", feeType: "per-year" },
      { name: "Business", ranking: 24, strength: "Very Good", fees: "£25,000", feeType: "per-year" },
      { name: "Medicine", ranking: 20, strength: "Very Good", fees: "£47,000", feeType: "per-year" }
    ],
    highlights: ["Large research university", "Industrial heritage", "Innovation", "Student city"],
    website: "https://www.manchester.ac.uk",
    image: "/placeholder.svg"
  },
  {
    id: "russell-07",
    name: "University of Bristol",
    location: "Bristol, United Kingdom",
    type: "Public",
    overallRanking: 62,
    establishedYear: 1876,
    courses: [
      { name: "Engineering", ranking: 18, strength: "Very Good", fees: "£29,300", feeType: "per-year" },
      { name: "Medicine", ranking: 24, strength: "Very Good", fees: "£42,200", feeType: "per-year" },
      { name: "Liberal Arts", ranking: 22, strength: "Very Good", fees: "£24,700", feeType: "per-year" },
      { name: "Economics", ranking: 18, strength: "Very Good", fees: "£24,700", feeType: "per-year" }
    ],
    highlights: ["Red brick university", "Research excellence", "Student city", "Innovation quarter"],
    website: "https://www.bristol.ac.uk",
    image: "/placeholder.svg"
  },
  {
    id: "russell-08",
    name: "University of Warwick",
    location: "Coventry, United Kingdom",
    type: "Public",
    overallRanking: 64,
    establishedYear: 1965,
    courses: [
      { name: "Business", ranking: 8, strength: "Excellent", fees: "£28,390", feeType: "per-year" },
      { name: "Economics", ranking: 9, strength: "Excellent", fees: "£28,390", feeType: "per-year" },
      { name: "Mathematics", ranking: 6, strength: "Excellent", fees: "£28,390", feeType: "per-year" },
      { name: "Engineering", ranking: 22, strength: "Very Good", fees: "£31,620", feeType: "per-year" }
    ],
    highlights: ["Business school excellence", "Modern campus", "Research intensive", "Industry links"],
    website: "https://warwick.ac.uk",
    image: "/placeholder.svg"
  }
];