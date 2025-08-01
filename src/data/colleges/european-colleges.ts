
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
  },
  {
    id: "euro-001",
    name: "University of Cambridge",
    location: "Cambridge, United Kingdom",
    type: "Public",
    overallRanking: 2,
    establishedYear: 1209,
    courses: [
      { name: "Mathematics", ranking: 1, strength: "Excellent", fees: "£33,825", feeType: "per-year" },
      { name: "Engineering", ranking: 3, strength: "Excellent", fees: "£37,293", feeType: "per-year" },
      { name: "Medicine", ranking: 3, strength: "Excellent", fees: "£63,990", feeType: "per-year" },
      { name: "Computer Science", ranking: 5, strength: "Excellent", fees: "£37,293", feeType: "per-year" }
    ],
    highlights: ["Ancient university", "Oxbridge prestige", "Tutorial system", "Nobel laureates"],
    website: "https://www.cam.ac.uk",
    image: "/placeholder.svg"
  },
  {
    id: "euro-002",
    name: "University of Oxford",
    location: "Oxford, United Kingdom", 
    type: "Public",
    overallRanking: 4,
    establishedYear: 1096,
    courses: [
      { name: "Liberal Arts", ranking: 1, strength: "Excellent", fees: "£33,050", feeType: "per-year" },
      { name: "Law", ranking: 2, strength: "Excellent", fees: "£33,050", feeType: "per-year" },
      { name: "Medicine", ranking: 2, strength: "Excellent", fees: "£54,240", feeType: "per-year" },
      { name: "Philosophy", ranking: 1, strength: "Excellent", fees: "£33,050", feeType: "per-year" }
    ],
    highlights: ["World's oldest English university", "Tutorial system", "Prime ministers", "Literary tradition"],
    website: "https://www.ox.ac.uk",
    image: "/placeholder.svg"
  },
  {
    id: "euro-003",
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
    id: "euro-004",
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
    id: "euro-005",
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
    id: "euro-006",
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
    id: "euro-007",
    name: "Technical University of Denmark",
    location: "Copenhagen, Denmark",
    type: "Public",
    overallRanking: 103,
    establishedYear: 1829,
    courses: [
      { name: "Engineering", ranking: 22, strength: "Very Good", fees: "€15,000", feeType: "per-year" },
      { name: "Computer Science", ranking: 28, strength: "Good", fees: "€15,000", feeType: "per-year" },
      { name: "Environmental Science", ranking: 12, strength: "Excellent", fees: "€15,000", feeType: "per-year" },
      { name: "Physics", ranking: 35, strength: "Good", fees: "€15,000", feeType: "per-year" }
    ],
    highlights: ["Scandinavian excellence", "Sustainability focus", "Tech innovation", "Quality of life"],
    website: "https://www.dtu.dk",
    image: "/placeholder.svg"
  },
  {
    id: "euro-008",
    name: "KU Leuven",
    location: "Leuven, Belgium",
    type: "Public",
    overallRanking: 70,
    establishedYear: 1425,
    courses: [
      { name: "Engineering", ranking: 24, strength: "Very Good", fees: "€4,000", feeType: "per-year" },
      { name: "Medicine", ranking: 28, strength: "Good", fees: "€4,000", feeType: "per-year" },
      { name: "Liberal Arts", ranking: 32, strength: "Good", fees: "€4,000", feeType: "per-year" },
      { name: "Business", ranking: 35, strength: "Good", fees: "€4,000", feeType: "per-year" }
    ],
    highlights: ["Historic university", "European research", "Affordable", "International"],
    website: "https://www.kuleuven.be",
    image: "/placeholder.svg"
  },
  {
    id: "euro-009",
    name: "University of Vienna",
    location: "Vienna, Austria",
    type: "Public",
    overallRanking: 154,
    establishedYear: 1365,
    courses: [
      { name: "Liberal Arts", ranking: 35, strength: "Good", fees: "€1,500", feeType: "per-year" },
      { name: "Psychology", ranking: 25, strength: "Very Good", fees: "€1,500", feeType: "per-year" },
      { name: "Medicine", ranking: 42, strength: "Good", fees: "€1,500", feeType: "per-year" },
      { name: "Law", ranking: 38, strength: "Good", fees: "€1,500", feeType: "per-year" }
    ],
    highlights: ["Historic charm", "Central Europe", "Affordable", "Cultural richness"],
    website: "https://www.univie.ac.at",
    image: "/placeholder.svg"
  },
  {
    id: "euro-010",
    name: "Stockholm University",
    location: "Stockholm, Sweden",
    type: "Public",
    overallRanking: 148,
    establishedYear: 1878,
    courses: [
      { name: "Environmental Science", ranking: 18, strength: "Very Good", fees: "€0", feeType: "per-year" },
      { name: "Liberal Arts", ranking: 28, strength: "Good", fees: "€0", feeType: "per-year" },
      { name: "Computer Science", ranking: 35, strength: "Good", fees: "€0", feeType: "per-year" },
      { name: "Economics", ranking: 32, strength: "Good", fees: "€0", feeType: "per-year" }
    ],
    highlights: ["Scandinavian model", "Free education", "Research focus", "Quality of life"],
    website: "https://www.su.se",
    image: "/placeholder.svg"
  }
];
