
import { College } from '../../../../types/collegeTypes';
import { northIndiaPrivateTechnology } from './technology-colleges/north-india';

export const privateTechnologyColleges: College[] = [
  {
    id: "tech-01",
    name: "International Institute of Information Technology, Bangalore",
    location: "Bangalore, Karnataka, India",
    type: "Private",
    overallRanking: 24,
    establishedYear: 1999,
    courses: [
      { name: "Computer Science", ranking: 18, strength: "Very Good", fees: "₹14L", feeType: "per-year" },
      { name: "Data Science", ranking: 12, strength: "Very Good", fees: "₹15L", feeType: "per-year" },
      { name: "Artificial Intelligence", ranking: 10, strength: "Excellent", fees: "₹16L", feeType: "per-year" }
    ],
    highlights: ["IT specialization", "Industry partnerships", "Research focus", "High placements"],
    website: "https://www.iiitb.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "tech-02",
    name: "Indraprastha Institute of Information Technology Delhi",
    location: "New Delhi, India",
    type: "Private",
    overallRanking: 21,
    establishedYear: 2008,
    courses: [
      { name: "Computer Science", ranking: 16, strength: "Very Good", fees: "₹13L", feeType: "per-year" },
      { name: "Electronics", ranking: 20, strength: "Good", fees: "₹12L", feeType: "per-year" },
      { name: "Design", ranking: 8, strength: "Excellent", fees: "₹14L", feeType: "per-year" }
    ],
    highlights: ["State-private partnership", "Research excellence", "Industry connect", "Innovation focus"],
    website: "https://www.iiitd.ac.in",
    image: "/placeholder.svg"
  },
  ...northIndiaPrivateTechnology
];
