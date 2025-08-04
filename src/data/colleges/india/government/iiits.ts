import { College } from '../../../../types/collegeTypes';

export const iiitColleges: College[] = [
  {
    id: "iiit-01",
    name: "IIIT Hyderabad",
    location: "Hyderabad, Telangana, India",
    type: "Deemed",
    overallRanking: 25,
    establishedYear: 1998,
    courses: [
      { name: "Computer Science", ranking: 8, strength: "Excellent", fees: "₹9L", feeType: "total" },
      { name: "Electronics", ranking: 12, strength: "Excellent", fees: "₹9L", feeType: "total" },
      { name: "Computational Sciences", ranking: 6, strength: "Excellent", fees: "₹9L", feeType: "total" }
    ],
    highlights: ["Research focus", "Industry partnerships", "Innovation hub", "Startup ecosystem"],
    website: "https://www.iiit.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "iiit-02",
    name: "IIIT Bangalore",
    location: "Bangalore, Karnataka, India",
    type: "Deemed",
    overallRanking: 32,
    establishedYear: 1999,
    courses: [
      { name: "Computer Science", ranking: 15, strength: "Very Good", fees: "₹8L", feeType: "total" },
      { name: "Information Technology", ranking: 10, strength: "Excellent", fees: "₹8L", feeType: "total" },
      { name: "Data Science", ranking: 8, strength: "Excellent", fees: "₹8L", feeType: "total" }
    ],
    highlights: ["IT hub location", "Industry connect", "Research excellence", "Innovation focus"],
    website: "https://www.iiitb.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "iiit-03",
    name: "IIIT Delhi",
    location: "New Delhi, India",
    type: "Government",
    overallRanking: 35,
    establishedYear: 2008,
    courses: [
      { name: "Computer Science", ranking: 18, strength: "Very Good", fees: "₹6L", feeType: "total" },
      { name: "Electronics", ranking: 20, strength: "Very Good", fees: "₹6L", feeType: "total" },
      { name: "Design", ranking: 12, strength: "Excellent", fees: "₹6L", feeType: "total" }
    ],
    highlights: ["Capital advantage", "Government backing", "Research focus", "Industry partnerships"],
    website: "https://www.iiitd.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "iiit-04",
    name: "IIIT Allahabad",
    location: "Allahabad, Uttar Pradesh, India",
    type: "Government",
    overallRanking: 42,
    establishedYear: 1999,
    courses: [
      { name: "Information Technology", ranking: 25, strength: "Very Good", fees: "₹5.4L", feeType: "total" },
      { name: "Computer Science", ranking: 28, strength: "Very Good", fees: "₹5.4L", feeType: "total" },
      { name: "Electronics", ranking: 30, strength: "Good", fees: "₹5.4L", feeType: "total" }
    ],
    highlights: ["Affordable excellence", "Government institute", "Technical focus", "Alumni network"],
    website: "https://www.iiita.ac.in",
    image: "/placeholder.svg"
  }
];