
import { College } from '../../../../../../../types/collegeTypes';

export const upPrivateBusinessSchools: College[] = [
  {
    id: "biz-up-01",
    name: "Amity Business School",
    location: "Noida, Uttar Pradesh, India",
    type: "Private",
    overallRanking: 28,
    establishedYear: 2005,
    courses: [
      { name: "MBA", ranking: 24, strength: "Good", fees: "₹12L", feeType: "total" },
      { name: "PGDM", ranking: 28, strength: "Good", fees: "₹10L", feeType: "total" },
      { name: "BBA", ranking: 22, strength: "Good", fees: "₹8L", feeType: "total" }
    ],
    highlights: ["Part of Amity University", "Industry exposure", "International programs", "Modern facilities"],
    website: "https://www.amity.edu",
    image: "/placeholder.svg"
  },
  {
    id: "biz-up-02",
    name: "FORE School of Management",
    location: "New Delhi, India",
    type: "Private",
    overallRanking: 32,
    establishedYear: 1981,
    courses: [
      { name: "MBA", ranking: 28, strength: "Good", fees: "₹15L", feeType: "total" },
      { name: "PGDM", ranking: 32, strength: "Good", fees: "₹13L", feeType: "total" },
      { name: "Executive MBA", ranking: 38, strength: "Good", fees: "₹17L", feeType: "total" }
    ],
    highlights: ["Established institution", "Industry partnerships", "Research focus", "Strong placement"],
    website: "https://www.fsm.ac.in",
    image: "/placeholder.svg"
  }
];
