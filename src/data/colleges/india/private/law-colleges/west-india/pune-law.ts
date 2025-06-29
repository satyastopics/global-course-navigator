
import { College } from '../../../../../../types/collegeTypes';

export const puneLawColleges: College[] = [
  {
    id: "law-pun-01",
    name: "Symbiosis Law School",
    location: "Pune, Maharashtra, India",
    type: "Private",
    overallRanking: 15,
    establishedYear: 1977,
    courses: [
      { name: "Law", ranking: 10, strength: "Very Good", fees: "₹10L", feeType: "total" },
      { name: "LLM", ranking: 12, strength: "Very Good", fees: "₹6L", feeType: "total" }
    ],
    highlights: ["Premier law school", "Research excellence", "International programs", "Strong alumni"],
    website: "https://www.symlaw.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "law-pun-02",
    name: "Bharati Vidyapeeth New Law College",
    location: "Pune, Maharashtra, India",
    type: "Private",
    overallRanking: 32,
    establishedYear: 1978,
    courses: [
      { name: "Law", ranking: 25, strength: "Good", fees: "₹3L", feeType: "total" },
      { name: "LLM", ranking: 28, strength: "Good", fees: "₹2L", feeType: "total" }
    ],
    highlights: ["Deemed university", "Legal aid clinic", "Moot court", "Social service"],
    website: "https://www.bvunlcp.edu.in",
    image: "/placeholder.svg"
  }
];
