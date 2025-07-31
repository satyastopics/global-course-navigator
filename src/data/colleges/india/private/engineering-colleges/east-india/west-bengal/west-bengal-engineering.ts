import { College } from '../../../../../../../types/collegeTypes';

export const westBengalPrivateEngineering: College[] = [
  {
    id: "eng-wb-01",
    name: "Jadavpur University",
    location: "Kolkata, West Bengal, India",
    type: "Government",
    overallRanking: 17,
    establishedYear: 1955,
    courses: [
      { name: "Engineering", ranking: 13, strength: "Very Good", fees: "₹0.8L", feeType: "per-year" },
      { name: "Computer Science", ranking: 15, strength: "Very Good", fees: "₹0.8L", feeType: "per-year" },
      { name: "Arts", ranking: 8, strength: "Very Good", fees: "₹0.3L", feeType: "per-year" }
    ],
    highlights: ["State university", "Engineering excellence", "Arts and sciences", "Research focus"],
    website: "https://www.jaduniv.edu.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-wb-02",
    name: "Heritage Institute of Technology",
    location: "Kolkata, West Bengal, India",
    type: "Private",
    overallRanking: 45,
    establishedYear: 2001,
    courses: [
      { name: "Engineering", ranking: 38, strength: "Good", fees: "₹7L", feeType: "total" },
      { name: "Computer Science", ranking: 42, strength: "Good", fees: "₹7L", feeType: "total" },
      { name: "Management", ranking: 58, strength: "Good", fees: "₹5L", feeType: "total" }
    ],
    highlights: ["Modern infrastructure", "Industry partnerships", "Placement focus", "Quality education"],
    website: "https://www.heritageit.edu",
    image: "/placeholder.svg"
  },
  {
    id: "eng-wb-03",
    name: "Techno India University",
    location: "Kolkata, West Bengal, India",
    type: "Private",
    overallRanking: 58,
    establishedYear: 2012,
    courses: [
      { name: "Engineering", ranking: 52, strength: "Good", fees: "₹6L", feeType: "total" },
      { name: "Computer Science", ranking: 55, strength: "Good", fees: "₹6L", feeType: "total" },
      { name: "Management", ranking: 68, strength: "Average", fees: "₹4L", feeType: "total" }
    ],
    highlights: ["Private university", "Technology focus", "Industry connect", "Growing reputation"],
    website: "https://www.technoindiauniversity.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-wb-04",
    name: "Calcutta Institute of Engineering and Management",
    location: "Kolkata, West Bengal, India",
    type: "Private",
    overallRanking: 62,
    establishedYear: 2010,
    courses: [
      { name: "Engineering", ranking: 55, strength: "Good", fees: "₹5L", feeType: "total" },
      { name: "Computer Science", ranking: 58, strength: "Good", fees: "₹5L", feeType: "total" },
      { name: "Management", ranking: 72, strength: "Average", fees: "₹3L", feeType: "total" }
    ],
    highlights: ["Emerging institution", "Affordable fees", "Modern facilities", "Placement assistance"],
    website: "https://www.ciem.ac.in",
    image: "/placeholder.svg"
  }
];