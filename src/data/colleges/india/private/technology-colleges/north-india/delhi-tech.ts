import { College } from '../../../../../../types/collegeTypes';

export const delhiTechnologyColleges: College[] = [
  {
    id: "delhi-tech-01",
    name: "Delhi Technological University",
    location: "New Delhi, India",
    type: "Government",
    overallRanking: 55,
    establishedYear: 1941,
    courses: [
      { name: "Computer Science", ranking: 35, strength: "Good", fees: "₹2L", feeType: "total" },
      { name: "Engineering", ranking: 40, strength: "Good", fees: "₹2L", feeType: "total" },
      { name: "Electronics", ranking: 38, strength: "Good", fees: "₹2L", feeType: "total" }
    ],
    highlights: ["State university", "Technical focus", "Industry connect", "Affordable fees"],
    website: "https://www.dtu.ac.in",
    image: "/placeholder.svg"
  }
];