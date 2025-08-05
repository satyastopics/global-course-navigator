import { College } from '../../../../../types/collegeTypes';

export const topDanishUniversities: College[] = [
  {
    id: "dk-01",
    name: "University of Copenhagen",
    location: "Copenhagen, Denmark",
    type: "Public",
    overallRanking: 76,
    establishedYear: 1479,
    courses: [
      { name: "Medicine", ranking: 22, strength: "Very Good", fees: "DKK 0", feeType: "per-year" },
      { name: "Law", ranking: 28, strength: "Good", fees: "DKK 0", feeType: "per-year" },
      { name: "Social Sciences", ranking: 25, strength: "Good", fees: "DKK 0", feeType: "per-year" },
      { name: "Theology", ranking: 8, strength: "Excellent", fees: "DKK 0", feeType: "per-year" }
    ],
    highlights: ["Oldest university in Denmark", "Free education", "Nordic model", "Research excellence"],
    website: "https://www.ku.dk",
    image: "/placeholder.svg"
  },
  {
    id: "dk-02",
    name: "Technical University of Denmark",
    location: "Kongens Lyngby, Denmark",
    type: "Public",
    overallRanking: 103,
    establishedYear: 1829,
    courses: [
      { name: "Engineering", ranking: 32, strength: "Good", fees: "DKK 0", feeType: "per-year" },
      { name: "Computer Science", ranking: 42, strength: "Good", fees: "DKK 0", feeType: "per-year" },
      { name: "Environmental Engineering", ranking: 18, strength: "Very Good", fees: "DKK 0", feeType: "per-year" },
      { name: "Biotechnology", ranking: 25, strength: "Good", fees: "DKK 0", feeType: "per-year" }
    ],
    highlights: ["Engineering excellence", "Innovation focus", "Free tuition", "Sustainability leader"],
    website: "https://www.dtu.dk",
    image: "/placeholder.svg"
  },
  {
    id: "dk-03",
    name: "Aarhus University",
    location: "Aarhus, Denmark",
    type: "Public",
    overallRanking: 155,
    establishedYear: 1928,
    courses: [
      { name: "Business", ranking: 45, strength: "Good", fees: "DKK 0", feeType: "per-year" },
      { name: "Economics", ranking: 38, strength: "Good", fees: "DKK 0", feeType: "per-year" },
      { name: "Medicine", ranking: 55, strength: "Average", fees: "DKK 0", feeType: "per-year" },
      { name: "Psychology", ranking: 35, strength: "Good", fees: "DKK 0", feeType: "per-year" }
    ],
    highlights: ["Second largest city", "Business focus", "Free education", "Modern campus"],
    website: "https://www.au.dk",
    image: "/placeholder.svg"
  },
  {
    id: "dk-04",
    name: "Copenhagen Business School",
    location: "Copenhagen, Denmark",
    type: "Public",
    overallRanking: 201,
    establishedYear: 1917,
    courses: [
      { name: "Business", ranking: 22, strength: "Very Good", fees: "DKK 0", feeType: "per-year" },
      { name: "Economics", ranking: 18, strength: "Very Good", fees: "DKK 0", feeType: "per-year" },
      { name: "Finance", ranking: 25, strength: "Good", fees: "DKK 0", feeType: "per-year" },
      { name: "Management", ranking: 32, strength: "Good", fees: "DKK 0", feeType: "per-year" }
    ],
    highlights: ["Business specialization", "Corporate connections", "Free tuition", "International focus"],
    website: "https://www.cbs.dk",
    image: "/placeholder.svg"
  }
];