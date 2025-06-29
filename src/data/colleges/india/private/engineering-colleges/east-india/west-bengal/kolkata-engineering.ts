
import { College } from '../../../../../../../types/collegeTypes';

export const kolkataPrivateEngineering: College[] = [
  {
    id: "eng-wb-kol-01",
    name: "Techno India University",
    location: "Kolkata, West Bengal, India",
    type: "Private",
    overallRanking: 65,
    establishedYear: 2012,
    courses: [
      { name: "Computer Science", ranking: 55, strength: "Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 65, strength: "Good", fees: "₹2.2L", feeType: "per-year" }
    ],
    highlights: ["State private university", "Industry partnerships", "Modern facilities", "Strong placement"],
    website: "https://www.technoindiauniversity.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-wb-kol-02",
    name: "Heritage Institute of Technology",
    location: "Kolkata, West Bengal, India",
    type: "Private",
    overallRanking: 72,
    establishedYear: 2001,
    courses: [
      { name: "Computer Science", ranking: 62, strength: "Good", fees: "₹2.8L", feeType: "per-year" },
      { name: "Engineering", ranking: 72, strength: "Good", fees: "₹2.5L", feeType: "per-year" }
    ],
    highlights: ["Autonomous college", "Industry connect", "Quality education", "Research focus"],
    website: "https://www.heritageit.edu",
    image: "/placeholder.svg"
  },
  {
    id: "eng-wb-kol-03",
    name: "Netaji Subhash Engineering College",
    location: "Kolkata, West Bengal, India",
    type: "Private",
    overallRanking: 78,
    establishedYear: 1999,
    courses: [
      { name: "Computer Science", ranking: 68, strength: "Good", fees: "₹2.2L", feeType: "per-year" },
      { name: "Engineering", ranking: 78, strength: "Good", fees: "₹2L", feeType: "per-year" }
    ],
    highlights: ["Established college", "Industry partnerships", "Modern labs", "Quality faculty"],
    website: "https://www.nsec.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-wb-kol-04",
    name: "Meghnad Saha Institute of Technology",
    location: "Kolkata, West Bengal, India",
    type: "Private",
    overallRanking: 85,
    establishedYear: 1996,
    courses: [
      { name: "Computer Science", ranking: 75, strength: "Good", fees: "₹2L", feeType: "per-year" },
      { name: "Engineering", ranking: 85, strength: "Good", fees: "₹1.8L", feeType: "per-year" }
    ],
    highlights: ["AICTE approved", "Industry connect", "Affordable fees", "Quality education"],
    website: "https://www.msit.edu.in",
    image: "/placeholder.svg"
  }
];
