import { College } from '../../../../../types/collegeTypes';

export const topCanadianUniversities: College[] = [
  {
    id: "ca-01",
    name: "University of Toronto",
    location: "Toronto, Ontario, Canada",
    type: "Public",
    overallRanking: 18,
    establishedYear: 1827,
    courses: [
      { name: "Medicine", ranking: 8, strength: "Excellent", fees: "CAD $64,020", feeType: "per-year" },
      { name: "Engineering", ranking: 25, strength: "Very Good", fees: "CAD $64,020", feeType: "per-year" },
      { name: "Business", ranking: 28, strength: "Good", fees: "CAD $70,000", feeType: "per-year" },
      { name: "Computer Science", ranking: 18, strength: "Very Good", fees: "CAD $64,020", feeType: "per-year" }
    ],
    highlights: ["Canada's top university", "Research powerhouse", "Urban campus", "International diversity"],
    website: "https://www.utoronto.ca",
    image: "/placeholder.svg"
  },
  {
    id: "ca-02",
    name: "University of British Columbia",
    location: "Vancouver, British Columbia, Canada",
    type: "Public",
    overallRanking: 47,
    establishedYear: 1908,
    courses: [
      { name: "Engineering", ranking: 35, strength: "Good", fees: "CAD $58,560", feeType: "per-year" },
      { name: "Business", ranking: 45, strength: "Good", fees: "CAD $65,000", feeType: "per-year" },
      { name: "Medicine", ranking: 28, strength: "Good", fees: "CAD $60,000", feeType: "per-year" },
      { name: "Environmental Sciences", ranking: 15, strength: "Very Good", fees: "CAD $58,560", feeType: "per-year" }
    ],
    highlights: ["Pacific coast", "Beautiful campus", "Research excellence", "International outlook"],
    website: "https://www.ubc.ca",
    image: "/placeholder.svg"
  },
  {
    id: "ca-03",
    name: "McGill University",
    location: "Montreal, Quebec, Canada",
    type: "Public",
    overallRanking: 54,
    establishedYear: 1821,
    courses: [
      { name: "Medicine", ranking: 18, strength: "Very Good", fees: "CAD $52,020", feeType: "per-year" },
      { name: "Engineering", ranking: 42, strength: "Good", fees: "CAD $52,020", feeType: "per-year" },
      { name: "Business", ranking: 55, strength: "Average", fees: "CAD $58,000", feeType: "per-year" },
      { name: "Law", ranking: 25, strength: "Good", fees: "CAD $48,000", feeType: "per-year" }
    ],
    highlights: ["Harvard of Canada", "Bilingual city", "Historic prestige", "Global reputation"],
    website: "https://www.mcgill.ca",
    image: "/placeholder.svg"
  },
  {
    id: "ca-04",
    name: "University of Alberta",
    location: "Edmonton, Alberta, Canada",
    type: "Public",
    overallRanking: 126,
    establishedYear: 1908,
    courses: [
      { name: "Engineering", ranking: 58, strength: "Average", fees: "CAD $45,000", feeType: "per-year" },
      { name: "Medicine", ranking: 45, strength: "Good", fees: "CAD $50,000", feeType: "per-year" },
      { name: "Business", ranking: 78, strength: "Average", fees: "CAD $52,000", feeType: "per-year" },
      { name: "Agriculture", ranking: 25, strength: "Good", fees: "CAD $45,000", feeType: "per-year" }
    ],
    highlights: ["Oil sands research", "Strong engineering", "Research intensive", "Western Canada"],
    website: "https://www.ualberta.ca",
    image: "/placeholder.svg"
  },
  {
    id: "ca-05",
    name: "University of Waterloo",
    location: "Waterloo, Ontario, Canada",
    type: "Public",
    overallRanking: 112,
    establishedYear: 1957,
    courses: [
      { name: "Computer Science", ranking: 22, strength: "Very Good", fees: "CAD $58,200", feeType: "per-year" },
      { name: "Engineering", ranking: 48, strength: "Good", fees: "CAD $58,200", feeType: "per-year" },
      { name: "Mathematics", ranking: 18, strength: "Very Good", fees: "CAD $58,200", feeType: "per-year" },
      { name: "Business", ranking: 65, strength: "Average", fees: "CAD $62,000", feeType: "per-year" }
    ],
    highlights: ["Co-op programs", "Tech innovation", "Silicon Valley North", "Entrepreneurship"],
    website: "https://www.uwaterloo.ca",
    image: "/placeholder.svg"
  }
];