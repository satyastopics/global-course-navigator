import { College } from '../../../../../types/collegeTypes';

export const southIndiaTechnologyColleges: College[] = [
  {
    id: "tech-06",
    name: "VIT University",
    location: "Vellore, Tamil Nadu, India",
    type: "Private",
    overallRanking: 15,
    establishedYear: 1984,
    courses: [
      { name: "Computer Science", ranking: 12, strength: "Very Good", fees: "₹8L", feeType: "per-year" },
      { name: "Information Technology", ranking: 15, strength: "Very Good", fees: "₹7.5L", feeType: "per-year" },
      { name: "Data Science", ranking: 18, strength: "Good", fees: "₹8.5L", feeType: "per-year" }
    ],
    highlights: ["Premier institution", "Strong placement", "Research excellence", "Global recognition"],
    website: "https://www.vit.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "tech-07",
    name: "SRM Institute of Science and Technology",
    location: "Chennai, Tamil Nadu, India",
    type: "Private",
    overallRanking: 18,
    establishedYear: 1985,
    courses: [
      { name: "Computer Science", ranking: 15, strength: "Very Good", fees: "₹9L", feeType: "per-year" },
      { name: "Software Engineering", ranking: 18, strength: "Good", fees: "₹8.5L", feeType: "per-year" },
      { name: "Artificial Intelligence", ranking: 22, strength: "Good", fees: "₹9.5L", feeType: "per-year" }
    ],
    highlights: ["Deemed university", "Industry partnerships", "International programs", "Modern facilities"],
    website: "https://www.srmist.edu.in",
    image: "/placeholder.svg"
  },
  {
    id: "tech-08",
    name: "Kalinga Institute of Industrial Technology",
    location: "Bhubaneswar, Odisha, India",
    type: "Private",
    overallRanking: 25,
    establishedYear: 1992,
    courses: [
      { name: "Computer Science", ranking: 22, strength: "Good", fees: "₹7L", feeType: "per-year" },
      { name: "Information Technology", ranking: 25, strength: "Good", fees: "₹6.5L", feeType: "per-year" },
      { name: "Cybersecurity", ranking: 28, strength: "Good", fees: "₹7.5L", feeType: "per-year" }
    ],
    highlights: ["Deemed university", "Research focus", "Industry connect", "Value for money"],
    website: "https://www.kiit.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "tech-09",
    name: "PES University",
    location: "Bangalore, Karnataka, India",
    type: "Private",
    overallRanking: 22,
    establishedYear: 1972,
    courses: [
      { name: "Computer Science", ranking: 18, strength: "Good", fees: "₹10L", feeType: "total" },
      { name: "Information Science", ranking: 20, strength: "Good", fees: "₹9.5L", feeType: "total" },
      { name: "Software Engineering", ranking: 25, strength: "Good", fees: "₹10.5L", feeType: "total" }
    ],
    highlights: ["Bangalore location", "Industry partnerships", "Strong alumni", "Tech focus"],
    website: "https://www.pes.edu",
    image: "/placeholder.svg"
  },
  {
    id: "tech-10",
    name: "Amrita Vishwa Vidyapeetham",
    location: "Coimbatore, Tamil Nadu, India",
    type: "Private",
    overallRanking: 20,
    establishedYear: 1994,
    courses: [
      { name: "Computer Science", ranking: 16, strength: "Good", fees: "₹8L", feeType: "per-year" },
      { name: "Artificial Intelligence", ranking: 20, strength: "Good", fees: "₹8.5L", feeType: "per-year" },
      { name: "Cybersecurity", ranking: 22, strength: "Good", fees: "₹9L", feeType: "per-year" }
    ],
    highlights: ["Spiritual foundation", "Research excellence", "Value-based education", "Modern curriculum"],
    website: "https://www.amrita.edu",
    image: "/placeholder.svg"
  }
];