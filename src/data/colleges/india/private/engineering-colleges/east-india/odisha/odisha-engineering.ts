
import { College } from '../../../../../../../types/collegeTypes';

export const odishaPrivateEngineering: College[] = [
  {
    id: "eng-odi-bhu-01",
    name: "Kalinga Institute of Industrial Technology",
    location: "Bhubaneswar, Odisha, India",
    type: "Private",
    overallRanking: 38,
    establishedYear: 1992,
    courses: [
      { name: "Computer Science", ranking: 32, strength: "Good", fees: "₹3.2L", feeType: "per-year" },
      { name: "Engineering", ranking: 38, strength: "Good", fees: "₹2.8L", feeType: "per-year" },
      { name: "Management", ranking: 45, strength: "Good", fees: "₹9L", feeType: "total" }
    ],
    highlights: ["Deemed university", "Large campus", "Industry partnerships", "International programs"],
    website: "https://www.kiit.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-odi-bhu-02",
    name: "Siksha 'O' Anusandhan University",
    location: "Bhubaneswar, Odisha, India",
    type: "Private",
    overallRanking: 48,
    establishedYear: 2007,
    courses: [
      { name: "Computer Science", ranking: 42, strength: "Good", fees: "₹2.8L", feeType: "per-year" },
      { name: "Engineering", ranking: 48, strength: "Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "Medical", ranking: 55, strength: "Good", fees: "₹18L", feeType: "per-year" }
    ],
    highlights: ["Deemed university", "Multi-disciplinary", "Research excellence", "Modern facilities"],
    website: "https://www.soa.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-odi-bhu-03",
    name: "Centurion University of Technology",
    location: "Bhubaneswar, Odisha, India",
    type: "Private",
    overallRanking: 65,
    establishedYear: 2010,
    courses: [
      { name: "Computer Science", ranking: 55, strength: "Good", fees: "₹2.2L", feeType: "per-year" },
      { name: "Engineering", ranking: 65, strength: "Good", fees: "₹2L", feeType: "per-year" }
    ],
    highlights: ["Private university", "Industry focus", "Modern campus", "Skill development"],
    website: "https://www.cutm.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-odi-rou-01",
    name: "Gandhi Institute of Engineering and Technology",
    location: "Gunupur, Odisha, India",
    type: "Private",
    overallRanking: 75,
    establishedYear: 1980,
    courses: [
      { name: "Computer Science", ranking: 65, strength: "Good", fees: "₹1.8L", feeType: "per-year" },
      { name: "Engineering", ranking: 75, strength: "Good", fees: "₹1.6L", feeType: "per-year" }
    ],
    highlights: ["Autonomous college", "Rural development focus", "Industry connect", "Quality education"],
    website: "https://www.giet.edu",
    image: "/placeholder.svg"
  }
];
