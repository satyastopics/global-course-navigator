import { College } from '../../../../../../types/collegeTypes';

export const virginiaPublicUniversities: College[] = [
  {
    id: "va-public-01",
    name: "University of Virginia",
    location: "Charlottesville, VA, USA",
    type: "Public",
    overallRanking: 25,
    establishedYear: 1819,
    courses: [
      { name: "Business", ranking: 5, strength: "Excellent", fees: "$56,837", feeType: "per-year" },
      { name: "Law", ranking: 8, strength: "Excellent", fees: "$56,837", feeType: "per-year" },
      { name: "Engineering", ranking: 25, strength: "Very Good", fees: "$56,837", feeType: "per-year" },
      { name: "Medicine", ranking: 28, strength: "Very Good", fees: "$56,837", feeType: "per-year" }
    ],
    highlights: ["Public Ivy", "Jefferson's university", "Honor code", "Business excellence"],
    website: "https://www.virginia.edu",
    image: "/placeholder.svg"
  },
  {
    id: "va-public-02",
    name: "Virginia Tech",
    location: "Blacksburg, VA, USA",
    type: "Public",
    overallRanking: 62,
    establishedYear: 1872,
    courses: [
      { name: "Engineering", ranking: 12, strength: "Excellent", fees: "$33,654", feeType: "per-year" },
      { name: "Architecture", ranking: 3, strength: "Excellent", fees: "$33,654", feeType: "per-year" },
      { name: "Agriculture", ranking: 15, strength: "Excellent", fees: "$33,654", feeType: "per-year" },
      { name: "Computer Science", ranking: 22, strength: "Very Good", fees: "$33,654", feeType: "per-year" }
    ],
    highlights: ["Engineering powerhouse", "Architecture excellence", "Research university", "Land-grant institution"],
    website: "https://vt.edu",
    image: "/placeholder.svg"
  }
];