
import { College } from '../../../../../../../types/collegeTypes';

export const visakhapatnamPrivateEngineering: College[] = [
  {
    id: "eng-ap-02",
    name: "GITAM University",
    location: "Visakhapatnam, Andhra Pradesh, India",
    type: "Private",
    overallRanking: 43,
    establishedYear: 1980,
    courses: [
      { name: "Computer Science", ranking: 37, strength: "Good", fees: "₹3.2L", feeType: "per-year" },
      { name: "Engineering", ranking: 43, strength: "Good", fees: "₹2.9L", feeType: "per-year" },
      { name: "Information Technology", ranking: 40, strength: "Good", fees: "₹3L", feeType: "per-year" }
    ],
    highlights: ["Deemed university", "Multi-campus", "Industry partnerships", "Research facilities"],
    website: "https://www.gitam.edu",
    image: "/placeholder.svg"
  },
  {
    id: "eng-ap-03",
    name: "VIT-AP University",
    location: "Amaravati, Andhra Pradesh, India",
    type: "Private",
    overallRanking: 36,
    establishedYear: 2017,
    courses: [
      { name: "Computer Science", ranking: 30, strength: "Good", fees: "₹4.2L", feeType: "per-year" },
      { name: "Engineering", ranking: 36, strength: "Good", fees: "₹3.9L", feeType: "per-year" },
      { name: "Electronics", ranking: 33, strength: "Good", fees: "₹4L", feeType: "per-year" }
    ],
    highlights: ["VIT brand", "Modern campus", "International programs", "Research focus"],
    website: "https://vitap.ac.in",
    image: "/placeholder.svg"
  }
];
