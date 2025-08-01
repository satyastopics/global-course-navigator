import { College } from '../../../../../types/collegeTypes';

export const topAustralianUniversities: College[] = [
  {
    id: "australia-01",
    name: "University of Melbourne",
    location: "Melbourne, Victoria, Australia",
    type: "Public",
    overallRanking: 33,
    establishedYear: 1853,
    courses: [
      { name: "Medicine", ranking: 26, strength: "Very Good", fees: "AUD 73,536", feeType: "per-year" },
      { name: "Law", ranking: 8, strength: "Excellent", fees: "AUD 48,896", feeType: "per-year" },
      { name: "Engineering", ranking: 28, strength: "Very Good", fees: "AUD 48,736", feeType: "per-year" },
      { name: "Business", ranking: 22, strength: "Very Good", fees: "AUD 47,712", feeType: "per-year" }
    ],
    highlights: ["Australia's top university", "Research excellence", "Historic prestige", "Melbourne city campus"],
    website: "https://www.unimelb.edu.au",
    image: "/placeholder.svg"
  },
  {
    id: "australia-02",
    name: "Australian National University",
    location: "Canberra, ACT, Australia",
    type: "Public",
    overallRanking: 30,
    establishedYear: 1946,
    courses: [
      { name: "Political Science", ranking: 9, strength: "Excellent", fees: "AUD 47,940", feeType: "per-year" },
      { name: "International Relations", ranking: 7, strength: "Excellent", fees: "AUD 47,940", feeType: "per-year" },
      { name: "Economics", ranking: 24, strength: "Very Good", fees: "AUD 47,940", feeType: "per-year" },
      { name: "Physics", ranking: 32, strength: "Good", fees: "AUD 47,940", feeType: "per-year" }
    ],
    highlights: ["National university", "Policy research", "Government connections", "Capital city location"],
    website: "https://www.anu.edu.au",
    image: "/placeholder.svg"
  },
  {
    id: "australia-03",
    name: "University of Sydney",
    location: "Sydney, New South Wales, Australia",
    type: "Public",
    overallRanking: 41,
    establishedYear: 1850,
    courses: [
      { name: "Medicine", ranking: 30, strength: "Good", fees: "AUD 73,000", feeType: "per-year" },
      { name: "Engineering", ranking: 38, strength: "Good", fees: "AUD 50,500", feeType: "per-year" },
      { name: "Business", ranking: 28, strength: "Very Good", fees: "AUD 48,000", feeType: "per-year" },
      { name: "Architecture", ranking: 15, strength: "Excellent", fees: "AUD 48,000", feeType: "per-year" }
    ],
    highlights: ["Historic sandstone campus", "Sydney harbor proximity", "Research intensive", "Alumni network"],
    website: "https://www.sydney.edu.au", 
    image: "/placeholder.svg"
  },
  {
    id: "australia-04",
    name: "UNSW Sydney",
    location: "Sydney, New South Wales, Australia",
    type: "Public",
    overallRanking: 45,
    establishedYear: 1949,
    courses: [
      { name: "Engineering", ranking: 26, strength: "Very Good", fees: "AUD 49,370", feeType: "per-year" },
      { name: "Business", ranking: 25, strength: "Very Good", fees: "AUD 47,760", feeType: "per-year" },
      { name: "Law", ranking: 16, strength: "Excellent", fees: "AUD 47,760", feeType: "per-year" },
      { name: "Medicine", ranking: 35, strength: "Good", fees: "AUD 70,320", feeType: "per-year" }
    ],
    highlights: ["Innovation focus", "Industry partnerships", "Tech hub", "Research excellence"],
    website: "https://www.unsw.edu.au",
    image: "/placeholder.svg"
  }
];