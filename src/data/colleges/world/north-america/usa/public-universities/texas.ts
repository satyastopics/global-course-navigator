import { College } from '../../../../../../types/collegeTypes';

export const texasPublicUniversities: College[] = [
  {
    id: "tx-public-01",
    name: "University of Texas at Austin",
    location: "Austin, Texas, USA",
    type: "Public",
    overallRanking: 38,
    establishedYear: 1883,
    courses: [
      { name: "Engineering", ranking: 10, strength: "Excellent", fees: "$41,480", feeType: "per-year" },
      { name: "Business", ranking: 5, strength: "Excellent", fees: "$55,000", feeType: "per-year" },
      { name: "Computer Science", ranking: 11, strength: "Excellent", fees: "$41,480", feeType: "per-year" },
      { name: "Law", ranking: 14, strength: "Excellent", fees: "$58,000", feeType: "per-year" }
    ],
    highlights: ["Silicon Hills", "Tech startup hub", "Flagship university", "Research powerhouse"],
    website: "https://www.utexas.edu",
    image: "/placeholder.svg"
  },
  {
    id: "tx-public-02",
    name: "Texas A&M University",
    location: "College Station, Texas, USA",
    type: "Public",
    overallRanking: 47,
    establishedYear: 1876,
    courses: [
      { name: "Engineering", ranking: 18, strength: "Very Good", fees: "$38,602", feeType: "per-year" },
      { name: "Agriculture", ranking: 5, strength: "Excellent", fees: "$38,602", feeType: "per-year" },
      { name: "Veterinary Medicine", ranking: 5, strength: "Excellent", fees: "$48,000", feeType: "per-year" },
      { name: "Business", ranking: 25, strength: "Good", fees: "$52,000", feeType: "per-year" }
    ],
    highlights: ["Military tradition", "Aggie network", "Research excellence", "Conservative culture"],
    website: "https://www.tamu.edu",
    image: "/placeholder.svg"
  },
  {
    id: "tx-public-03",
    name: "Rice University",
    location: "Houston, Texas, USA",
    type: "Private",
    overallRanking: 16,
    establishedYear: 1912,
    courses: [
      { name: "Engineering", ranking: 17, strength: "Very Good", fees: "$58,128", feeType: "per-year" },
      { name: "Computer Science", ranking: 15, strength: "Very Good", fees: "$58,128", feeType: "per-year" },
      { name: "Business", ranking: 18, strength: "Very Good", fees: "$65,000", feeType: "per-year" },
      { name: "Architecture", ranking: 8, strength: "Excellent", fees: "$58,128", feeType: "per-year" }
    ],
    highlights: ["Small size", "Houston energy sector", "Residential college system", "Strong academics"],
    website: "https://www.rice.edu",
    image: "/placeholder.svg"
  },
  {
    id: "tx-public-04",
    name: "University of Texas at Dallas",
    location: "Richardson, Texas, USA",
    type: "Public",
    overallRanking: 115,
    establishedYear: 1969,
    courses: [
      { name: "Computer Science", ranking: 35, strength: "Good", fees: "$36,500", feeType: "per-year" },
      { name: "Engineering", ranking: 45, strength: "Good", fees: "$36,500", feeType: "per-year" },
      { name: "Business", ranking: 55, strength: "Average", fees: "$45,000", feeType: "per-year" },
      { name: "Management", ranking: 48, strength: "Good", fees: "$45,000", feeType: "per-year" }
    ],
    highlights: ["Tech corridor", "Growing reputation", "Modern campus", "Business focus"],
    website: "https://www.utdallas.edu",
    image: "/placeholder.svg"
  },
  {
    id: "tx-public-05",
    name: "University of Houston",
    location: "Houston, Texas, USA",
    type: "Public",
    overallRanking: 133,
    establishedYear: 1927,
    courses: [
      { name: "Engineering", ranking: 55, strength: "Average", fees: "$35,000", feeType: "per-year" },
      { name: "Business", ranking: 65, strength: "Average", fees: "$42,000", feeType: "per-year" },
      { name: "Hotel Management", ranking: 8, strength: "Excellent", fees: "$35,000", feeType: "per-year" },
      { name: "Law", ranking: 45, strength: "Good", fees: "$48,000", feeType: "per-year" }
    ],
    highlights: ["Energy capital", "Diverse student body", "Urban research", "Growing reputation"],
    website: "https://www.uh.edu",
    image: "/placeholder.svg"
  },
  {
    id: "tx-public-06",
    name: "Texas Tech University",
    location: "Lubbock, Texas, USA",
    type: "Public",
    overallRanking: 213,
    establishedYear: 1923,
    courses: [
      { name: "Engineering", ranking: 78, strength: "Average", fees: "$32,000", feeType: "per-year" },
      { name: "Business", ranking: 85, strength: "Average", fees: "$38,000", feeType: "per-year" },
      { name: "Agriculture", ranking: 35, strength: "Good", fees: "$32,000", feeType: "per-year" },
      { name: "Medicine", ranking: 65, strength: "Average", fees: "$45,000", feeType: "per-year" }
    ],
    highlights: ["Red Raiders", "Large campus", "Research growth", "West Texas"],
    website: "https://www.ttu.edu",
    image: "/placeholder.svg"
  }
];