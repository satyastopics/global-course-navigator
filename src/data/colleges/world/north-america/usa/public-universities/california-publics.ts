import { College } from '../../../../../../types/collegeTypes';

export const californiaPublicUniversities: College[] = [
  {
    id: "cal-01",
    name: "University of California, Berkeley",
    location: "Berkeley, California, USA",
    type: "Public",
    overallRanking: 20,
    establishedYear: 1868,
    courses: [
      { name: "Computer Science", ranking: 3, strength: "Excellent", fees: "$47,760", feeType: "per-year" },
      { name: "Engineering", ranking: 4, strength: "Excellent", fees: "$47,760", feeType: "per-year" },
      { name: "Business", ranking: 7, strength: "Excellent", fees: "$70,000", feeType: "per-year" },
      { name: "Economics", ranking: 8, strength: "Excellent", fees: "$47,760", feeType: "per-year" }
    ],
    highlights: ["Top public university", "Silicon Valley proximity", "Research powerhouse", "Innovation hub"],
    website: "https://www.berkeley.edu",
    image: "/placeholder.svg"
  },
  {
    id: "cal-02",
    name: "University of California, Los Angeles",
    location: "Los Angeles, California, USA",
    type: "Public",
    overallRanking: 21,
    establishedYear: 1919,
    courses: [
      { name: "Film Studies", ranking: 1, strength: "Excellent", fees: "$45,518", feeType: "per-year" },
      { name: "Medicine", ranking: 12, strength: "Excellent", fees: "$61,294", feeType: "per-year" },
      { name: "Engineering", ranking: 16, strength: "Excellent", fees: "$45,518", feeType: "per-year" },
      { name: "Psychology", ranking: 6, strength: "Excellent", fees: "$45,518", feeType: "per-year" }
    ],
    highlights: ["Entertainment industry connections", "Beautiful campus", "Research excellence", "Diverse programs"],
    website: "https://www.ucla.edu",
    image: "/placeholder.svg"
  },
  {
    id: "cal-03",
    name: "University of California, San Diego",
    location: "San Diego, California, USA",
    type: "Public",
    overallRanking: 34,
    establishedYear: 1960,
    courses: [
      { name: "Bioengineering", ranking: 2, strength: "Excellent", fees: "$44,487", feeType: "per-year" },
      { name: "Computer Science", ranking: 14, strength: "Excellent", fees: "$44,487", feeType: "per-year" },
      { name: "Medicine", ranking: 16, strength: "Excellent", fees: "$58,109", feeType: "per-year" },
      { name: "Economics", ranking: 18, strength: "Excellent", fees: "$44,487", feeType: "per-year" }
    ],
    highlights: ["Biotech research hub", "Pacific coast campus", "Innovation focus", "STEM excellence"],
    website: "https://www.ucsd.edu",
    image: "/placeholder.svg"
  }
];