
import { College } from '../../../../../../../types/collegeTypes';

export const gujaratPrivateEngineering: College[] = [
  {
    id: "eng-gj-ahm-01",
    name: "Nirma University",
    location: "Ahmedabad, Gujarat, India",
    type: "Private",
    overallRanking: 42,
    establishedYear: 2003,
    courses: [
      { name: "Computer Science", ranking: 35, strength: "Good", fees: "₹2.8L", feeType: "per-year" },
      { name: "Engineering", ranking: 42, strength: "Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "Management", ranking: 40, strength: "Good", fees: "₹9L", feeType: "total" }
    ],
    highlights: ["Private university", "Industry partnerships", "Modern campus", "Quality education"],
    website: "https://www.nirmauni.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-gj-ahm-02",
    name: "Pandit Deendayal Energy University",
    location: "Gandhinagar, Gujarat, India",
    type: "Private",
    overallRanking: 55,
    establishedYear: 2007,
    courses: [
      { name: "Computer Science", ranking: 48, strength: "Good", fees: "₹2.2L", feeType: "per-year" },
      { name: "Engineering", ranking: 55, strength: "Good", fees: "₹2L", feeType: "per-year" },
      { name: "Management", ranking: 60, strength: "Average", fees: "₹7L", feeType: "total" }
    ],
    highlights: ["Energy specialization", "Government-private partnership", "Modern facilities", "Industry focus"],
    website: "https://www.pdpu.ac.in",
    image: "/placeholder.svg"
  }
];
