
import { College } from '../../../../../../../types/collegeTypes';

export const keralaPrivateBusinessSchools: College[] = [
  {
    id: "biz-ker-koc-01",
    name: "Cochin University of Science and Technology School of Management",
    location: "Kochi, Kerala, India",
    type: "Private",
    overallRanking: 48,
    establishedYear: 1971,
    courses: [
      { name: "MBA", ranking: 42, strength: "Good", fees: "₹8L", feeType: "total" },
      { name: "PGDM", ranking: 45, strength: "Good", fees: "₹7L", feeType: "total" }
    ],
    highlights: ["State university", "Industry partnerships", "IT hub location", "Research focus"],
    website: "https://www.cusat.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "biz-ker-trv-01",
    name: "Indian Institute of Management Kozhikode",
    location: "Kozhikode, Kerala, India",
    type: "Private",
    overallRanking: 12,
    establishedYear: 1996,
    courses: [
      { name: "MBA", ranking: 8, strength: "Excellent", fees: "₹20L", feeType: "total" },
      { name: "PGDM", ranking: 10, strength: "Very Good", fees: "₹18L", feeType: "total" },
      { name: "Executive MBA", ranking: 15, strength: "Very Good", fees: "₹22L", feeType: "total" }
    ],
    highlights: ["Premier IIM", "Top ranking", "Excellent faculty", "Strong alumni network"],
    website: "https://www.iimk.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "biz-ker-kan-01",
    name: "Rajagiri Centre for Business Studies",
    location: "Kochi, Kerala, India",
    type: "Private",
    overallRanking: 35,
    establishedYear: 1994,
    courses: [
      { name: "MBA", ranking: 30, strength: "Good", fees: "₹10L", feeType: "total" },
      { name: "PGDM", ranking: 35, strength: "Good", fees: "₹9L", feeType: "total" }
    ],
    highlights: ["Autonomous college", "Industry partnerships", "Quality education", "Strong placement"],
    website: "https://www.rajagiri.edu",
    image: "/placeholder.svg"
  }
];
