
import { College } from '../../../../../../../types/collegeTypes';

export const rajasthanPrivateEngineering: College[] = [
  {
    id: "eng-raj-01",
    name: "BITS Pilani",
    location: "Pilani, Rajasthan, India",
    type: "Private",
    overallRanking: 12,
    establishedYear: 1964,
    courses: [
      { name: "Computer Science", ranking: 10, strength: "Excellent", fees: "₹4.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 12, strength: "Very Good", fees: "₹4.2L", feeType: "per-year" },
      { name: "Management", ranking: 18, strength: "Very Good", fees: "₹16L", feeType: "total" }
    ],
    highlights: ["Deemed university", "Industry partnerships", "Research excellence", "Strong alumni network"],
    website: "https://www.bits-pilani.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-raj-02",
    name: "Banasthali Vidyapith",
    location: "Banasthali, Rajasthan, India",
    type: "Private",
    overallRanking: 38,
    establishedYear: 1935,
    courses: [
      { name: "Computer Science", ranking: 32, strength: "Good", fees: "₹2.8L", feeType: "per-year" },
      { name: "Engineering", ranking: 38, strength: "Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "Management", ranking: 48, strength: "Good", fees: "₹8L", feeType: "total" }
    ],
    highlights: ["Women's university", "Deemed university", "Comprehensive education", "Cultural heritage"],
    website: "https://www.banasthali.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-raj-03",
    name: "LNM Institute of Information Technology",
    location: "Jaipur, Rajasthan, India",
    type: "Private",
    overallRanking: 42,
    establishedYear: 2003,
    courses: [
      { name: "Computer Science", ranking: 35, strength: "Good", fees: "₹3.2L", feeType: "per-year" },
      { name: "Engineering", ranking: 42, strength: "Good", fees: "₹2.9L", feeType: "per-year" },
      { name: "Information Technology", ranking: 38, strength: "Good", fees: "₹3L", feeType: "per-year" }
    ],
    highlights: ["Deemed university", "Industry focus", "Modern infrastructure", "Research facilities"],
    website: "https://www.lnmiit.ac.in",
    image: "/placeholder.svg"
  }
];
