
import { College } from '../../../../types/collegeTypes';

export const stateUniversities: College[] = [
  {
    id: "36",
    name: "Banaras Hindu University",
    location: "Varanasi, Uttar Pradesh, India",
    type: "Government",
    overallRanking: 16,
    establishedYear: 1916,
    courses: [
      { name: "Arts", ranking: 5, strength: "Very Good", fees: "₹5K", feeType: "per-year" },
      { name: "Science", ranking: 8, strength: "Very Good", fees: "₹12K", feeType: "per-year" },
      { name: "Engineering", ranking: 20, strength: "Good", fees: "₹1.5L", feeType: "per-year" },
      { name: "Medicine", ranking: 8, strength: "Very Good", fees: "₹15K", feeType: "per-year" }
    ],
    highlights: ["Large residential university", "Very affordable", "Cultural heritage", "Diverse programs"],
    website: "https://www.bhu.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "39",
    name: "Jadavpur University",
    location: "Kolkata, West Bengal, India",
    type: "Government",
    overallRanking: 19,
    establishedYear: 1955,
    courses: [
      { name: "Engineering", ranking: 16, strength: "Very Good", fees: "₹12K", feeType: "per-year" },
      { name: "Arts", ranking: 8, strength: "Very Good", fees: "₹1.5K", feeType: "per-year" },
      { name: "Science", ranking: 12, strength: "Good", fees: "₹3K", feeType: "per-year" },
      { name: "Film Studies", ranking: 1, strength: "Excellent", fees: "₹5K", feeType: "per-year" }
    ],
    highlights: ["Film studies leader", "Very affordable", "Strong in humanities", "Cultural hub"],
    website: "https://www.jaduniv.edu.in",
    image: "/placeholder.svg"
  },
  {
    id: "40",
    name: "Anna University",
    location: "Chennai, Tamil Nadu, India",
    type: "Government",
    overallRanking: 20,
    establishedYear: 1978,
    courses: [
      { name: "Engineering", ranking: 25, strength: "Good", fees: "₹25K", feeType: "per-year" },
      { name: "Computer Science", ranking: 18, strength: "Good", fees: "₹25K", feeType: "per-year" },
      { name: "Architecture", ranking: 5, strength: "Very Good", fees: "₹30K", feeType: "per-year" },
      { name: "Technology", ranking: 15, strength: "Good", fees: "₹25K", feeType: "per-year" }
    ],
    highlights: ["Technical university", "Affordable engineering", "Strong industry ties", "Large alumni base"],
    website: "https://www.annauniv.edu",
    image: "/placeholder.svg"
  },
  {
    id: "45",
    name: "Delhi Technological University",
    location: "New Delhi, Delhi, India",
    type: "Government",
    overallRanking: 25,
    establishedYear: 1941,
    courses: [
      { name: "Engineering", ranking: 21, strength: "Good", fees: "₹1.8L", feeType: "per-year" },
      { name: "Computer Science", ranking: 16, strength: "Very Good", fees: "₹1.8L", feeType: "per-year" },
      { name: "Electronics", ranking: 8, strength: "Very Good", fees: "₹1.8L", feeType: "per-year" },
      { name: "Mechanical Engineering", ranking: 12, strength: "Good", fees: "₹1.8L", feeType: "per-year" }
    ],
    highlights: ["Delhi government university", "Strong placement record", "Industry connections", "Research focus"],
    website: "https://www.dtu.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "46",
    name: "Netaji Subhas University of Technology",
    location: "New Delhi, Delhi, India",
    type: "Government",
    overallRanking: 26,
    establishedYear: 1983,
    courses: [
      { name: "Engineering", ranking: 23, strength: "Good", fees: "₹1.5L", feeType: "per-year" },
      { name: "Computer Science", ranking: 19, strength: "Good", fees: "₹1.5L", feeType: "per-year" },
      { name: "Information Technology", ranking: 10, strength: "Good", fees: "₹1.5L", feeType: "per-year" },
      { name: "Electronics", ranking: 15, strength: "Good", fees: "₹1.5L", feeType: "per-year" }
    ],
    highlights: ["Affordable engineering", "Good placement record", "Multiple campuses", "Industry partnerships"],
    website: "https://www.nsut.ac.in",
    image: "/placeholder.svg"
  }
];
