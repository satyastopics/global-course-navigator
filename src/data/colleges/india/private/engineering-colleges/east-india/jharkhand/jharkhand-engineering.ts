
import { College } from '../../../../../../../types/collegeTypes';

export const jharkhandPrivateEngineering: College[] = [
  {
    id: "eng-jh-ran-01",
    name: "Birla Institute of Technology",
    location: "Ranchi, Jharkhand, India",
    type: "Private",
    overallRanking: 35,
    establishedYear: 1955,
    courses: [
      { name: "Computer Science", ranking: 28, strength: "Very Good", fees: "₹4.2L", feeType: "per-year" },
      { name: "Engineering", ranking: 35, strength: "Good", fees: "₹3.8L", feeType: "per-year" },
      { name: "Management", ranking: 45, strength: "Good", fees: "₹12L", feeType: "total" }
    ],
    highlights: ["Deemed university", "Strong alumni", "Industry partnerships", "Research excellence"],
    website: "https://www.bitmesra.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-jh-ran-02",
    name: "Usha Martin University",
    location: "Ranchi, Jharkhand, India",
    type: "Private",
    overallRanking: 65,
    establishedYear: 2012,
    courses: [
      { name: "Computer Science", ranking: 58, strength: "Good", fees: "₹2.8L", feeType: "per-year" },
      { name: "Engineering", ranking: 65, strength: "Good", fees: "₹2.5L", feeType: "per-year" }
    ],
    highlights: ["Private university", "Modern campus", "Industry focus", "Quality education"],
    website: "https://www.ushamartinuniversity.com",
    image: "/placeholder.svg"
  },
  {
    id: "eng-jh-ran-03",
    name: "Jharkhand Rai University",
    location: "Ranchi, Jharkhand, India",
    type: "Private",
    overallRanking: 72,
    establishedYear: 2016,
    courses: [
      { name: "Computer Science", ranking: 65, strength: "Good", fees: "₹2.2L", feeType: "per-year" },
      { name: "Engineering", ranking: 72, strength: "Good", fees: "₹2L", feeType: "per-year" }
    ],
    highlights: ["New university", "Growing reputation", "Modern facilities", "Industry partnerships"],
    website: "https://www.jru.edu.in",
    image: "/placeholder.svg"
  }
];
