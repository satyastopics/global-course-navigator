import { College } from '../../../../../../types/collegeTypes';

export const californiaPublicUniversities: College[] = [
  {
    id: "ca-public-01",
    name: "University of California, Berkeley",
    location: "Berkeley, California, USA",
    type: "Public",
    overallRanking: 22,
    establishedYear: 1868,
    courses: [
      { name: "Engineering", ranking: 3, strength: "Excellent", fees: "$47,644", feeType: "per-year" },
      { name: "Computer Science", ranking: 1, strength: "Excellent", fees: "$47,644", feeType: "per-year" },
      { name: "Business", ranking: 7, strength: "Excellent", fees: "$65,000", feeType: "per-year" },
      { name: "Law", ranking: 9, strength: "Excellent", fees: "$68,000", feeType: "per-year" }
    ],
    highlights: ["Silicon Valley proximity", "Public research powerhouse", "Nobel laureates", "Social activism heritage"],
    website: "https://www.berkeley.edu",
    image: "/placeholder.svg"
  },
  {
    id: "ca-public-02",
    name: "University of California, Los Angeles",
    location: "Los Angeles, California, USA",
    type: "Public",
    overallRanking: 20,
    establishedYear: 1919,
    courses: [
      { name: "Film & Television", ranking: 1, strength: "Excellent", fees: "$47,644", feeType: "per-year" },
      { name: "Medicine", ranking: 6, strength: "Excellent", fees: "$65,000", feeType: "per-year" },
      { name: "Engineering", ranking: 16, strength: "Very Good", fees: "$47,644", feeType: "per-year" },
      { name: "Business", ranking: 17, strength: "Very Good", fees: "$62,000", feeType: "per-year" }
    ],
    highlights: ["Hollywood connections", "Research excellence", "Athletic powerhouse", "Diverse student body"],
    website: "https://www.ucla.edu",
    image: "/placeholder.svg"
  },
  {
    id: "ca-public-03",
    name: "University of California, San Diego",
    location: "San Diego, California, USA",
    type: "Public",
    overallRanking: 34,
    establishedYear: 1960,
    courses: [
      { name: "Engineering", ranking: 11, strength: "Excellent", fees: "$47,644", feeType: "per-year" },
      { name: "Medicine", ranking: 15, strength: "Very Good", fees: "$62,000", feeType: "per-year" },
      { name: "Computer Science", ranking: 8, strength: "Excellent", fees: "$47,644", feeType: "per-year" },
      { name: "Marine Sciences", ranking: 2, strength: "Excellent", fees: "$47,644", feeType: "per-year" }
    ],
    highlights: ["Biotech hub", "Ocean proximity", "Research innovation", "STEM excellence"],
    website: "https://www.ucsd.edu",
    image: "/placeholder.svg"
  },
  {
    id: "ca-public-04",
    name: "University of California, San Francisco",
    location: "San Francisco, California, USA",
    type: "Public",
    overallRanking: 15,
    establishedYear: 1864,
    courses: [
      { name: "Medicine", ranking: 3, strength: "Excellent", fees: "$65,000", feeType: "per-year" },
      { name: "Pharmacy", ranking: 1, strength: "Excellent", fees: "$58,000", feeType: "per-year" },
      { name: "Nursing", ranking: 2, strength: "Excellent", fees: "$52,000", feeType: "per-year" },
      { name: "Dentistry", ranking: 3, strength: "Excellent", fees: "$68,000", feeType: "per-year" }
    ],
    highlights: ["Health sciences only", "Medical research leader", "Bay Area location", "Innovation center"],
    website: "https://www.ucsf.edu",
    image: "/placeholder.svg"
  },
  {
    id: "ca-public-05",
    name: "University of California, Irvine",
    location: "Irvine, California, USA",
    type: "Public",
    overallRanking: 36,
    establishedYear: 1965,
    courses: [
      { name: "Computer Science", ranking: 15, strength: "Very Good", fees: "$47,644", feeType: "per-year" },
      { name: "Engineering", ranking: 25, strength: "Very Good", fees: "$47,644", feeType: "per-year" },
      { name: "Business", ranking: 28, strength: "Good", fees: "$58,000", feeType: "per-year" },
      { name: "Medicine", ranking: 25, strength: "Very Good", fees: "$62,000", feeType: "per-year" }
    ],
    highlights: ["Young university", "Planned campus", "Innovation focus", "Diverse community"],
    website: "https://www.uci.edu",
    image: "/placeholder.svg"
  },
  {
    id: "ca-public-06",
    name: "University of California, Santa Barbara",
    location: "Santa Barbara, California, USA",
    type: "Public",
    overallRanking: 32,
    establishedYear: 1909,
    courses: [
      { name: "Engineering", ranking: 22, strength: "Very Good", fees: "$47,644", feeType: "per-year" },
      { name: "Physics", ranking: 8, strength: "Excellent", fees: "$47,644", feeType: "per-year" },
      { name: "Environmental Sciences", ranking: 12, strength: "Excellent", fees: "$47,644", feeType: "per-year" },
      { name: "Psychology", ranking: 18, strength: "Very Good", fees: "$47,644", feeType: "per-year" }
    ],
    highlights: ["Beach campus", "Party school reputation", "Research excellence", "Beautiful location"],
    website: "https://www.ucsb.edu",
    image: "/placeholder.svg"
  },
  {
    id: "ca-public-07",
    name: "University of California, Davis",
    location: "Davis, California, USA",
    type: "Public",
    overallRanking: 38,
    establishedYear: 1905,
    courses: [
      { name: "Agriculture", ranking: 1, strength: "Excellent", fees: "$47,644", feeType: "per-year" },
      { name: "Veterinary Medicine", ranking: 1, strength: "Excellent", fees: "$65,000", feeType: "per-year" },
      { name: "Engineering", ranking: 32, strength: "Good", fees: "$47,644", feeType: "per-year" },
      { name: "Environmental Sciences", ranking: 8, strength: "Excellent", fees: "$47,644", feeType: "per-year" }
    ],
    highlights: ["Agricultural excellence", "Bike-friendly campus", "Research university", "Sustainability focus"],
    website: "https://www.ucdavis.edu",
    image: "/placeholder.svg"
  },
  {
    id: "ca-public-08",
    name: "California Institute of Technology",
    location: "Pasadena, California, USA",
    type: "Private",
    overallRanking: 9,
    establishedYear: 1891,
    courses: [
      { name: "Engineering", ranking: 4, strength: "Excellent", fees: "$63,471", feeType: "per-year" },
      { name: "Physics", ranking: 1, strength: "Excellent", fees: "$63,471", feeType: "per-year" },
      { name: "Chemistry", ranking: 3, strength: "Excellent", fees: "$63,471", feeType: "per-year" },
      { name: "Computer Science", ranking: 10, strength: "Excellent", fees: "$63,471", feeType: "per-year" }
    ],
    highlights: ["Small size", "STEM focus", "JPL partnership", "Nobel laureates"],
    website: "https://www.caltech.edu",
    image: "/placeholder.svg"
  }
];