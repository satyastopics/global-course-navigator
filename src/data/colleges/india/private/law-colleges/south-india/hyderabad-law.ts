
import { College } from '../../../../../../types/collegeTypes';

export const hyderabadLawColleges: College[] = [
  {
    id: "law-hyd-01",
    name: "NALSAR University of Law",
    location: "Hyderabad, Telangana, India",
    type: "Private",
    overallRanking: 5,
    establishedYear: 1998,
    courses: [
      { name: "Law", ranking: 2, strength: "Excellent", fees: "₹2L", feeType: "per-year" },
      { name: "LLM", ranking: 3, strength: "Excellent", fees: "₹1.5L", feeType: "per-year" }
    ],
    highlights: ["National law university", "Research excellence", "Supreme Court judges", "Top placement"],
    website: "https://www.nalsar.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "law-hyd-02",
    name: "Osmania University College of Law",
    location: "Hyderabad, Telangana, India",
    type: "Private",
    overallRanking: 38,
    establishedYear: 1868,
    courses: [
      { name: "Law", ranking: 32, strength: "Good", fees: "₹50K", feeType: "total" },
      { name: "LLM", ranking: 35, strength: "Good", fees: "₹30K", feeType: "total" }
    ],
    highlights: ["Historic law college", "Alumni network", "Affordable fees", "Traditional excellence"],
    website: "https://www.osmania.ac.in",
    image: "/placeholder.svg"
  }
];
