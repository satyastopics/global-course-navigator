
import { College } from '../../../../../../../types/collegeTypes';

export const aurangabadPrivateEngineering: College[] = [
  {
    id: "eng-mh-aur-01",
    name: "Dr. Babasaheb Ambedkar Marathwada University",
    location: "Aurangabad, Maharashtra, India",
    type: "Private",
    overallRanking: 65,
    establishedYear: 1958,
    courses: [
      { name: "Computer Science", ranking: 55, strength: "Good", fees: "₹1.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 65, strength: "Average", fees: "₹1.2L", feeType: "per-year" },
      { name: "Management", ranking: 70, strength: "Average", fees: "₹4L", feeType: "total" }
    ],
    highlights: ["State university", "Affordable fees", "Regional importance", "Research programs"],
    website: "https://www.bamu.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-mh-aur-02",
    name: "MIT Academy of Engineering",
    location: "Aurangabad, Maharashtra, India",
    type: "Private",
    overallRanking: 72,
    establishedYear: 2001,
    courses: [
      { name: "Computer Science", ranking: 60, strength: "Average", fees: "₹2L", feeType: "per-year" },
      { name: "Engineering", ranking: 72, strength: "Average", fees: "₹1.8L", feeType: "per-year" },
      { name: "Management", ranking: 75, strength: "Average", fees: "₹5L", feeType: "total" }
    ],
    highlights: ["Private engineering college", "Industry connect", "Modern labs", "Placement support"],
    website: "https://www.mitaoe.ac.in",
    image: "/placeholder.svg"
  }
];
