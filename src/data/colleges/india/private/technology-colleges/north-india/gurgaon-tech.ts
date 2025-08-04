import { College } from '../../../../../../types/collegeTypes';

export const gurgaonTechnologyColleges: College[] = [
  {
    id: "gurgaon-tech-01",
    name: "Amity University Gurgaon",
    location: "Gurgaon, Haryana, India",
    type: "Private",
    overallRanking: 65,
    establishedYear: 2010,
    courses: [
      { name: "Computer Science", ranking: 45, strength: "Good", fees: "₹12L", feeType: "total" },
      { name: "Engineering", ranking: 48, strength: "Good", fees: "₹12L", feeType: "total" },
      { name: "Business", ranking: 55, strength: "Average", fees: "₹10L", feeType: "total" }
    ],
    highlights: ["Corporate hub location", "Industry partnerships", "Modern campus", "Placement focus"],
    website: "https://www.amity.edu/gurgaon",
    image: "/placeholder.svg"
  }
];