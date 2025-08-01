import { College } from '../../../../../types/collegeTypes';

export const topCanadianUniversities: College[] = [
  {
    id: "canada-01",
    name: "University of Toronto",
    location: "Toronto, Ontario, Canada",
    type: "Public",
    overallRanking: 18,
    establishedYear: 1827,
    courses: [
      { name: "Medicine", ranking: 11, strength: "Excellent", fees: "CAD 64,760", feeType: "per-year" },
      { name: "Engineering", ranking: 25, strength: "Very Good", fees: "CAD 58,160", feeType: "per-year" },
      { name: "Business", ranking: 19, strength: "Excellent", fees: "CAD 52,560", feeType: "per-year" },
      { name: "Computer Science", ranking: 28, strength: "Very Good", fees: "CAD 54,880", feeType: "per-year" }
    ],
    highlights: ["Canada's top university", "Research intensive", "Diverse programs", "Global reputation"],
    website: "https://www.utoronto.ca",
    image: "/placeholder.svg"
  },
  {
    id: "canada-02", 
    name: "McGill University",
    location: "Montreal, Quebec, Canada",
    type: "Public",
    overallRanking: 31,
    establishedYear: 1821,
    courses: [
      { name: "Medicine", ranking: 24, strength: "Very Good", fees: "CAD 55,880", feeType: "per-year" },
      { name: "Law", ranking: 18, strength: "Excellent", fees: "CAD 43,220", feeType: "per-year" },
      { name: "Engineering", ranking: 35, strength: "Good", fees: "CAD 47,110", feeType: "per-year" },
      { name: "Liberal Arts", ranking: 22, strength: "Very Good", fees: "CAD 41,850", feeType: "per-year" }
    ],
    highlights: ["Historic prestige", "Bilingual environment", "Research excellence", "International diversity"],
    website: "https://www.mcgill.ca",
    image: "/placeholder.svg"
  },
  {
    id: "canada-03",
    name: "University of British Columbia",
    location: "Vancouver, British Columbia, Canada", 
    type: "Public",
    overallRanking: 47,
    establishedYear: 1908,
    courses: [
      { name: "Engineering", ranking: 32, strength: "Good", fees: "CAD 48,250", feeType: "per-year" },
      { name: "Business", ranking: 26, strength: "Very Good", fees: "CAD 45,220", feeType: "per-year" },
      { name: "Medicine", ranking: 28, strength: "Very Good", fees: "CAD 52,440", feeType: "per-year" },
      { name: "Computer Science", ranking: 35, strength: "Good", fees: "CAD 46,110", feeType: "per-year" }
    ],
    highlights: ["Beautiful campus", "Research intensive", "Pacific Rim focus", "Innovation hub"],
    website: "https://www.ubc.ca",
    image: "/placeholder.svg"
  },
  {
    id: "canada-04",
    name: "University of Waterloo",
    location: "Waterloo, Ontario, Canada",
    type: "Public", 
    overallRanking: 112,
    establishedYear: 1957,
    courses: [
      { name: "Computer Science", ranking: 18, strength: "Excellent", fees: "CAD 57,330", feeType: "per-year" },
      { name: "Engineering", ranking: 22, strength: "Very Good", fees: "CAD 55,450", feeType: "per-year" },
      { name: "Mathematics", ranking: 24, strength: "Very Good", fees: "CAD 49,780", feeType: "per-year" },
      { name: "Business", ranking: 45, strength: "Good", fees: "CAD 48,990", feeType: "per-year" }
    ],
    highlights: ["Co-op program leader", "Tech innovation", "Startup ecosystem", "Industry partnerships"],
    website: "https://uwaterloo.ca",
    image: "/placeholder.svg"
  },
  {
    id: "canada-05",
    name: "University of Alberta",
    location: "Edmonton, Alberta, Canada",
    type: "Public",
    overallRanking: 110,
    establishedYear: 1908,
    courses: [
      { name: "Engineering", ranking: 40, strength: "Good", fees: "CAD 34,500", feeType: "per-year" },
      { name: "Medicine", ranking: 35, strength: "Good", fees: "CAD 42,000", feeType: "per-year" },
      { name: "Business", ranking: 55, strength: "Average", fees: "CAD 32,000", feeType: "per-year" },
      { name: "Computer Science", ranking: 45, strength: "Good", fees: "CAD 34,500", feeType: "per-year" }
    ],
    highlights: ["Research intensive", "Energy sector ties", "Strong alumni", "Western Canada hub"],
    website: "https://www.ualberta.ca",
    image: "/placeholder.svg"
  },
  {
    id: "canada-06",
    name: "McMaster University",
    location: "Hamilton, Ontario, Canada",
    type: "Public",
    overallRanking: 144,
    establishedYear: 1887,
    courses: [
      { name: "Medicine", ranking: 32, strength: "Good", fees: "CAD 72,393", feeType: "per-year" },
      { name: "Engineering", ranking: 38, strength: "Good", fees: "CAD 52,698", feeType: "per-year" },
      { name: "Business", ranking: 48, strength: "Good", fees: "CAD 34,578", feeType: "per-year" },
      { name: "Liberal Arts", ranking: 42, strength: "Good", fees: "CAD 31,234", feeType: "per-year" }
    ],
    highlights: ["Medical innovation", "Research excellence", "Problem-based learning", "Health sciences"],
    website: "https://www.mcmaster.ca",
    image: "/placeholder.svg"
  },
  {
    id: "canada-07",
    name: "Queen's University",
    location: "Kingston, Ontario, Canada",
    type: "Public",
    overallRanking: 209,
    establishedYear: 1841,
    courses: [
      { name: "Business", ranking: 42, strength: "Good", fees: "CAD 52,926", feeType: "per-year" },
      { name: "Engineering", ranking: 45, strength: "Good", fees: "CAD 54,192", feeType: "per-year" },
      { name: "Medicine", ranking: 38, strength: "Good", fees: "CAD 85,974", feeType: "per-year" },
      { name: "Law", ranking: 25, strength: "Very Good", fees: "CAD 52,926", feeType: "per-year" }
    ],
    highlights: ["Historic campus", "Business excellence", "Alumni network", "Traditions"],
    website: "https://www.queensu.ca",
    image: "/placeholder.svg"
  },
  {
    id: "canada-08",
    name: "Western University",
    location: "London, Ontario, Canada",
    type: "Public",
    overallRanking: 203,
    establishedYear: 1878,
    courses: [
      { name: "Business", ranking: 38, strength: "Good", fees: "CAD 35,658", feeType: "per-year" },
      { name: "Medicine", ranking: 40, strength: "Good", fees: "CAD 89,194", feeType: "per-year" },
      { name: "Engineering", ranking: 48, strength: "Good", fees: "CAD 58,404", feeType: "per-year" },
      { name: "Liberal Arts", ranking: 45, strength: "Good", fees: "CAD 33,768", feeType: "per-year" }
    ],
    highlights: ["Beautiful campus", "Business school", "Research university", "Student experience"],
    website: "https://www.uwo.ca",
    image: "/placeholder.svg"
  },
  {
    id: "canada-09",
    name: "University of Calgary",
    location: "Calgary, Alberta, Canada",
    type: "Public",
    overallRanking: 235,
    establishedYear: 1966,
    courses: [
      { name: "Engineering", ranking: 42, strength: "Good", fees: "CAD 36,072", feeType: "per-year" },
      { name: "Medicine", ranking: 45, strength: "Good", fees: "CAD 82,251", feeType: "per-year" },
      { name: "Business", ranking: 58, strength: "Average", fees: "CAD 34,200", feeType: "per-year" },
      { name: "Computer Science", ranking: 52, strength: "Average", fees: "CAD 36,072", feeType: "per-year" }
    ],
    highlights: ["Energy sector hub", "Research intensive", "Innovation", "Western Canada"],
    website: "https://www.ucalgary.ca",
    image: "/placeholder.svg"
  },
  {
    id: "canada-10",
    name: "Simon Fraser University",
    location: "Burnaby, British Columbia, Canada",
    type: "Public",
    overallRanking: 298,
    establishedYear: 1965,
    courses: [
      { name: "Computer Science", ranking: 48, strength: "Good", fees: "CAD 35,778", feeType: "per-year" },
      { name: "Business", ranking: 52, strength: "Average", fees: "CAD 33,426", feeType: "per-year" },
      { name: "Engineering", ranking: 55, strength: "Average", fees: "CAD 38,394", feeType: "per-year" },
      { name: "Liberal Arts", ranking: 58, strength: "Average", fees: "CAD 29,586", feeType: "per-year" }
    ],
    highlights: ["Mountain campus", "Co-op programs", "Innovation", "Vancouver proximity"],
    website: "https://www.sfu.ca",
    image: "/placeholder.svg"
  }
];