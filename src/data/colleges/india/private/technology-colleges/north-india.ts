import { College } from '../../../../../types/collegeTypes';

export const northIndiaTechnologyColleges: College[] = [
  {
    id: "tech-01",
    name: "Amity University School of Engineering & Technology",
    location: "Noida, Uttar Pradesh, India",
    type: "Private",
    overallRanking: 45,
    establishedYear: 2005,
    courses: [
      { name: "Computer Science", ranking: 35, strength: "Good", fees: "₹12L", feeType: "total" },
      { name: "Information Technology", ranking: 38, strength: "Good", fees: "₹12L", feeType: "total" },
      { name: "Data Science", ranking: 42, strength: "Good", fees: "₹14L", feeType: "total" }
    ],
    highlights: ["Modern curriculum", "Industry partnerships", "Research focus", "Global exposure"],
    website: "https://www.amity.edu",
    image: "/placeholder.svg"
  },
  {
    id: "tech-02",
    name: "Lovely Professional University",
    location: "Phagwara, Punjab, India",
    type: "Private",
    overallRanking: 52,
    establishedYear: 2005,
    courses: [
      { name: "Computer Science", ranking: 45, strength: "Good", fees: "₹10L", feeType: "total" },
      { name: "Artificial Intelligence", ranking: 48, strength: "Good", fees: "₹12L", feeType: "total" },
      { name: "Cybersecurity", ranking: 50, strength: "Good", fees: "₹11L", feeType: "total" }
    ],
    highlights: ["Large campus", "Diverse programs", "Industry connect", "Affordable fees"],
    website: "https://www.lpu.in",
    image: "/placeholder.svg"
  },
  {
    id: "tech-03",
    name: "Sharda University",
    location: "Greater Noida, Uttar Pradesh, India",
    type: "Private",
    overallRanking: 48,
    establishedYear: 2009,
    courses: [
      { name: "Computer Science", ranking: 42, strength: "Good", fees: "₹11L", feeType: "total" },
      { name: "Software Engineering", ranking: 45, strength: "Good", fees: "₹11L", feeType: "total" },
      { name: "Machine Learning", ranking: 50, strength: "Average", fees: "₹13L", feeType: "total" }
    ],
    highlights: ["Multi-disciplinary", "Research facilities", "International programs", "Modern infrastructure"],
    website: "https://www.sharda.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "tech-04",
    name: "Bennett University",
    location: "Greater Noida, Uttar Pradesh, India",
    type: "Private",
    overallRanking: 42,
    establishedYear: 2016,
    courses: [
      { name: "Computer Science", ranking: 38, strength: "Good", fees: "₹14L", feeType: "total" },
      { name: "Data Analytics", ranking: 40, strength: "Good", fees: "₹15L", feeType: "total" },
      { name: "Cybersecurity", ranking: 45, strength: "Good", fees: "₹13L", feeType: "total" }
    ],
    highlights: ["Times Group", "Industry partnerships", "Modern curriculum", "Research focus"],
    website: "https://www.bennett.edu.in",
    image: "/placeholder.svg"
  },
  {
    id: "tech-05",
    name: "Galgotias University",
    location: "Greater Noida, Uttar Pradesh, India",
    type: "Private",
    overallRanking: 55,
    establishedYear: 2011,
    courses: [
      { name: "Computer Science", ranking: 48, strength: "Good", fees: "₹9L", feeType: "total" },
      { name: "Information Technology", ranking: 52, strength: "Average", fees: "₹8.5L", feeType: "total" },
      { name: "Software Engineering", ranking: 55, strength: "Average", fees: "₹9L", feeType: "total" }
    ],
    highlights: ["Modern campus", "Industry connect", "Research facilities", "Placement support"],
    website: "https://www.galgotiasuniversity.edu.in",
    image: "/placeholder.svg"
  }
];