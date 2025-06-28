
import { College } from '../../../../../../../types/collegeTypes';

export const gujaratPrivateBusinessSchools: College[] = [
  {
    id: "biz-guj-01",
    name: "Nirma Institute of Management",
    location: "Ahmedabad, Gujarat, India",
    type: "Private",
    overallRanking: 28,
    establishedYear: 1996,
    courses: [
      { name: "MBA", ranking: 25, strength: "Good", fees: "₹16L", feeType: "total" },
      { name: "PGDM", ranking: 28, strength: "Good", fees: "₹14L", feeType: "total" },
      { name: "Executive MBA", ranking: 35, strength: "Good", fees: "₹18L", feeType: "total" }
    ],
    highlights: ["Part of Nirma University", "Industry partnerships", "Research focus", "Modern facilities"],
    website: "https://www.nirmauni.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "biz-guj-02",
    name: "Adani Institute of Infrastructure Management",
    location: "Ahmedabad, Gujarat, India",
    type: "Private",
    overallRanking: 42,
    establishedYear: 2000,
    courses: [
      { name: "MBA", ranking: 38, strength: "Good", fees: "₹12L", feeType: "total" },
      { name: "Infrastructure Management", ranking: 15, strength: "Very Good", fees: "₹14L", feeType: "total" },
      { name: "Project Management", ranking: 20, strength: "Good", fees: "₹13L", feeType: "total" }
    ],
    highlights: ["Infrastructure specialization", "Industry backing", "Unique programs", "Corporate connect"],
    website: "https://www.aiim.ac.in",
    image: "/placeholder.svg"
  }
];
