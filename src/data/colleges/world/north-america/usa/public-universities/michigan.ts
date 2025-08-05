import { College } from '../../../../../../types/collegeTypes';

export const michiganPublicUniversities: College[] = [
  {
    id: "mi-public-01",
    name: "University of Michigan",
    location: "Ann Arbor, MI, USA",
    type: "Public",
    overallRanking: 23,
    establishedYear: 1817,
    courses: [
      { name: "Engineering", ranking: 4, strength: "Excellent", fees: "$51,200", feeType: "per-year" },
      { name: "Business", ranking: 3, strength: "Excellent", fees: "$51,200", feeType: "per-year" },
      { name: "Medicine", ranking: 6, strength: "Excellent", fees: "$51,200", feeType: "per-year" },
      { name: "Computer Science", ranking: 8, strength: "Excellent", fees: "$51,200", feeType: "per-year" }
    ],
    highlights: ["Public Ivy", "Research powerhouse", "Engineering excellence", "Top business school"],
    website: "https://umich.edu",
    image: "/placeholder.svg"
  },
  {
    id: "mi-public-02",
    name: "Michigan State University",
    location: "East Lansing, MI, USA",
    type: "Public",
    overallRanking: 83,
    establishedYear: 1855,
    courses: [
      { name: "Agriculture", ranking: 8, strength: "Excellent", fees: "$39,766", feeType: "per-year" },
      { name: "Engineering", ranking: 45, strength: "Good", fees: "$39,766", feeType: "per-year" },
      { name: "Education", ranking: 18, strength: "Very Good", fees: "$39,766", feeType: "per-year" },
      { name: "Veterinary Medicine", ranking: 2, strength: "Excellent", fees: "$39,766", feeType: "per-year" }
    ],
    highlights: ["Land-grant university", "Agriculture leader", "Research university", "Veterinary excellence"],
    website: "https://msu.edu",
    image: "/placeholder.svg"
  }
];