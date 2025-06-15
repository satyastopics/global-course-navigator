
import { College } from '../../../../../../../types/collegeTypes';

export const gujaratPrivateEngineering: College[] = [
  {
    id: "eng-guj-01",
    name: "Nirma University",
    location: "Ahmedabad, Gujarat, India",
    type: "Private",
    overallRanking: 26,
    establishedYear: 2003,
    courses: [
      { name: "Computer Science", ranking: 22, strength: "Good", fees: "₹3.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 26, strength: "Good", fees: "₹3.2L", feeType: "per-year" },
      { name: "Management", ranking: 35, strength: "Good", fees: "₹15L", feeType: "total" }
    ],
    highlights: ["Private university", "Industry partnerships", "Research focus", "Modern campus"],
    website: "https://www.nirmauni.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-guj-02",
    name: "Pandit Deendayal Energy University",
    location: "Gandhinagar, Gujarat, India",
    type: "Private",
    overallRanking: 48,
    establishedYear: 2007,
    courses: [
      { name: "Computer Science", ranking: 40, strength: "Good", fees: "₹2.8L", feeType: "per-year" },
      { name: "Engineering", ranking: 48, strength: "Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "Energy Management", ranking: 15, strength: "Very Good", fees: "₹10L", feeType: "total" }
    ],
    highlights: ["Energy specialization", "Government backing", "Industry focus", "Research facilities"],
    website: "https://www.pdpu.ac.in",
    image: "/placeholder.svg"
  }
];
