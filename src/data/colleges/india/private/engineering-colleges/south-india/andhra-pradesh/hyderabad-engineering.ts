
import { College } from '../../../../../../../types/collegeTypes';

export const hyderabadPrivateEngineering: College[] = [
  {
    id: "eng-ap-hyd-01",
    name: "International Institute of Information Technology",
    location: "Hyderabad, Telangana, India",
    type: "Private",
    overallRanking: 22,
    establishedYear: 1998,
    courses: [
      { name: "Computer Science", ranking: 18, strength: "Very Good", fees: "₹6.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 22, strength: "Very Good", fees: "₹5.8L", feeType: "per-year" }
    ],
    highlights: ["Deemed university", "IT excellence", "Research focus", "Industry partnerships"],
    website: "https://www.iiit.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-ap-hyd-02",
    name: "Mahindra University",
    location: "Hyderabad, Telangana, India",
    type: "Private",
    overallRanking: 38,
    establishedYear: 2020,
    courses: [
      { name: "Computer Science", ranking: 32, strength: "Good", fees: "₹8L", feeType: "per-year" },
      { name: "Engineering", ranking: 38, strength: "Good", fees: "₹7.5L", feeType: "per-year" }
    ],
    highlights: ["Mahindra Group backing", "Industry focus", "Modern campus", "Innovation hub"],
    website: "https://www.mahindrauniversity.edu.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-ap-hyd-03",
    name: "ICFAI Foundation for Higher Education",
    location: "Hyderabad, Telangana, India",
    type: "Private",
    overallRanking: 52,
    establishedYear: 2008,
    courses: [
      { name: "Computer Science", ranking: 45, strength: "Good", fees: "₹3.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 52, strength: "Good", fees: "₹3.2L", feeType: "per-year" }
    ],
    highlights: ["Deemed university", "Industry connect", "Research focus", "Quality education"],
    website: "https://www.ifheindia.org",
    image: "/placeholder.svg"
  },
  {
    id: "eng-ap-hyd-04",
    name: "Woxsen University",
    location: "Hyderabad, Telangana, India",
    type: "Private",
    overallRanking: 65,
    establishedYear: 2017,
    courses: [
      { name: "Computer Science", ranking: 58, strength: "Good", fees: "₹4.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 65, strength: "Good", fees: "₹4.2L", feeType: "per-year" }
    ],
    highlights: ["New-age university", "Industry partnerships", "Innovation focus", "Modern facilities"],
    website: "https://www.woxsen.edu.in",
    image: "/placeholder.svg"
  }
];
