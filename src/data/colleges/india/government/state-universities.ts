import { College } from '../../../../types/collegeTypes';

export const stateUniversities: College[] = [
  {
    id: "state-01",
    name: "University of Delhi",
    location: "New Delhi, India",
    type: "Government",
    overallRanking: 22,
    establishedYear: 1922,
    courses: [
      { name: "Arts", ranking: 8, strength: "Excellent", fees: "₹15,000", feeType: "per-year" },
      { name: "Science", ranking: 15, strength: "Very Good", fees: "₹20,000", feeType: "per-year" },
      { name: "Commerce", ranking: 12, strength: "Excellent", fees: "₹12,000", feeType: "per-year" }
    ],
    highlights: ["Central university", "Liberal arts excellence", "Research focus", "Affordable fees"],
    website: "https://www.du.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "state-02",
    name: "Jawaharlal Nehru University",
    location: "New Delhi, India",
    type: "Government",
    overallRanking: 28,
    establishedYear: 1969,
    courses: [
      { name: "Social Sciences", ranking: 5, strength: "Excellent", fees: "₹8,000", feeType: "per-year" },
      { name: "International Studies", ranking: 3, strength: "Excellent", fees: "₹8,000", feeType: "per-year" },
      { name: "Languages", ranking: 8, strength: "Excellent", fees: "₹8,000", feeType: "per-year" }
    ],
    highlights: ["Research university", "Social sciences leader", "Liberal tradition", "Academic excellence"],
    website: "https://www.jnu.ac.in",
    image: "/placeholder.svg"
  }
];