
import { College } from '../../../../../../../types/collegeTypes';

export const coimbatorePrivateEngineering: College[] = [
  {
    id: "eng-tn-02",
    name: "PSG College of Technology",
    location: "Coimbatore, Tamil Nadu, India",
    type: "Private",
    overallRanking: 24,
    establishedYear: 1951,
    courses: [
      { name: "Computer Science", ranking: 20, strength: "Very Good", fees: "₹1.8L", feeType: "per-year" },
      { name: "Engineering", ranking: 24, strength: "Good", fees: "₹1.6L", feeType: "per-year" },
      { name: "Electronics", ranking: 22, strength: "Good", fees: "₹1.7L", feeType: "per-year" }
    ],
    highlights: ["Deemed university", "Industry connect", "Research excellence", "Strong placement"],
    website: "https://www.psgtech.edu",
    image: "/placeholder.svg"
  },
  {
    id: "eng-tn-03",
    name: "Kumaraguru College of Technology",
    location: "Coimbatore, Tamil Nadu, India",
    type: "Private",
    overallRanking: 39,
    establishedYear: 1984,
    courses: [
      { name: "Computer Science", ranking: 33, strength: "Good", fees: "₹2.2L", feeType: "per-year" },
      { name: "Engineering", ranking: 39, strength: "Good", fees: "₹2L", feeType: "per-year" },
      { name: "Information Technology", ranking: 35, strength: "Good", fees: "₹2.1L", feeType: "per-year" }
    ],
    highlights: ["Autonomous college", "Industry partnerships", "Innovation focus", "Modern campus"],
    website: "https://www.kct.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-tn-04",
    name: "Vel Tech Rangarajan Dr. Sagunthala R&D Institute",
    location: "Chennai, Tamil Nadu, India",
    type: "Private",
    overallRanking: 47,
    establishedYear: 1997,
    courses: [
      { name: "Computer Science", ranking: 40, strength: "Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 47, strength: "Good", fees: "₹2.3L", feeType: "per-year" },
      { name: "Electronics", ranking: 44, strength: "Good", fees: "₹2.4L", feeType: "per-year" }
    ],
    highlights: ["Deemed university", "Research focus", "Industry exposure", "Multi-campus"],
    website: "https://www.veltech.edu.in",
    image: "/placeholder.svg"
  }
];
