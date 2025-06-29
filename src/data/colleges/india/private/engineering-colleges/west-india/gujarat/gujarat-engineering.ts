
import { College } from '../../../../../../../types/collegeTypes';

export const gujaratPrivateEngineering: College[] = [
  {
    id: "eng-gj-ahm-01",
    name: "Nirma University",
    location: "Ahmedabad, Gujarat, India",
    type: "Private",
    overallRanking: 38,
    establishedYear: 2003,
    courses: [
      { name: "Computer Science", ranking: 32, strength: "Good", fees: "₹4.2L", feeType: "per-year" },
      { name: "Engineering", ranking: 38, strength: "Good", fees: "₹3.8L", feeType: "per-year" },
      { name: "Management", ranking: 42, strength: "Good", fees: "₹12L", feeType: "total" }
    ],
    highlights: ["Deemed-to-be university", "Industry partnerships", "Research excellence", "Modern campus"],
    website: "https://www.nirmauni.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-gj-ahm-02",
    name: "Pandit Deendayal Energy University",
    location: "Gandhinagar, Gujarat, India",
    type: "Private",
    overallRanking: 45,
    establishedYear: 2007,
    courses: [
      { name: "Computer Science", ranking: 38, strength: "Good", fees: "₹3.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 45, strength: "Good", fees: "₹3.2L", feeType: "per-year" }
    ],
    highlights: ["Energy sector focus", "Government support", "Industry connect", "Research facilities"],
    website: "https://www.pdpu.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-gj-ahm-03",
    name: "Adani Institute of Infrastructure Engineering",
    location: "Ahmedabad, Gujarat, India",
    type: "Private",
    overallRanking: 55,
    establishedYear: 2016,
    courses: [
      { name: "Computer Science", ranking: 48, strength: "Good", fees: "₹4.8L", feeType: "per-year" },
      { name: "Engineering", ranking: 55, strength: "Good", fees: "₹4.5L", feeType: "per-year" }
    ],
    highlights: ["Adani Group backing", "Infrastructure focus", "Industry exposure", "Modern facilities"],
    website: "https://www.aiie.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-gj-ahm-04",
    name: "Ganpat University",
    location: "Mehsana, Gujarat, India",
    type: "Private",
    overallRanking: 68,
    establishedYear: 2005,
    courses: [
      { name: "Computer Science", ranking: 58, strength: "Good", fees: "₹2.8L", feeType: "per-year" },
      { name: "Engineering", ranking: 68, strength: "Good", fees: "₹2.5L", feeType: "per-year" }
    ],
    highlights: ["State private university", "Rural development focus", "Industry partnerships", "Value education"],
    website: "https://www.ganpatuniversity.ac.in",
    image: "/placeholder.svg"
  }
];
