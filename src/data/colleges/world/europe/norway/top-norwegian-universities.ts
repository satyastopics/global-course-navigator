import { College } from '../../../../../types/collegeTypes';

export const topNorwegianUniversities: College[] = [
  {
    id: "no-01",
    name: "University of Oslo",
    location: "Oslo, Norway",
    type: "Public",
    overallRanking: 119,
    establishedYear: 1811,
    courses: [
      { name: "Medicine", ranking: 45, strength: "Good", fees: "NOK 0", feeType: "per-year" },
      { name: "Law", ranking: 35, strength: "Good", fees: "NOK 0", feeType: "per-year" },
      { name: "International Relations", ranking: 28, strength: "Good", fees: "NOK 0", feeType: "per-year" },
      { name: "Economics", ranking: 42, strength: "Good", fees: "NOK 0", feeType: "per-year" }
    ],
    highlights: ["Free tuition", "Nordic welfare model", "Research excellence", "Oslo fjord"],
    website: "https://www.uio.no",
    image: "/placeholder.svg"
  },
  {
    id: "no-02",
    name: "Norwegian University of Science and Technology",
    location: "Trondheim, Norway",
    type: "Public",
    overallRanking: 252,
    establishedYear: 1996,
    courses: [
      { name: "Engineering", ranking: 85, strength: "Average", fees: "NOK 0", feeType: "per-year" },
      { name: "Computer Science", ranking: 65, strength: "Average", fees: "NOK 0", feeType: "per-year" },
      { name: "Technology", ranking: 45, strength: "Good", fees: "NOK 0", feeType: "per-year" },
      { name: "Architecture", ranking: 55, strength: "Average", fees: "NOK 0", feeType: "per-year" }
    ],
    highlights: ["Tech focus", "Free education", "Innovation hub", "Scandinavian quality"],
    website: "https://www.ntnu.no",
    image: "/placeholder.svg"
  },
  {
    id: "no-03",
    name: "University of Bergen",
    location: "Bergen, Norway",
    type: "Public",
    overallRanking: 194,
    establishedYear: 1946,
    courses: [
      { name: "Marine Sciences", ranking: 15, strength: "Very Good", fees: "NOK 0", feeType: "per-year" },
      { name: "Medicine", ranking: 65, strength: "Average", fees: "NOK 0", feeType: "per-year" },
      { name: "Psychology", ranking: 48, strength: "Good", fees: "NOK 0", feeType: "per-year" },
      { name: "Geology", ranking: 35, strength: "Good", fees: "NOK 0", feeType: "per-year" }
    ],
    highlights: ["Coastal location", "Marine research", "Free tuition", "Natural beauty"],
    website: "https://www.uib.no",
    image: "/placeholder.svg"
  }
];