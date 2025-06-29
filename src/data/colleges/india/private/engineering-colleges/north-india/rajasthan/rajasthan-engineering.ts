
import { College } from '../../../../../../../types/collegeTypes';

export const rajasthanPrivateEngineering: College[] = [
  {
    id: "eng-raj-jai-01",
    name: "Poornima College of Engineering",
    location: "Jaipur, Rajasthan, India",
    type: "Private",
    overallRanking: 68,
    establishedYear: 2007,
    courses: [
      { name: "Computer Science", ranking: 58, strength: "Good", fees: "₹2.2L", feeType: "per-year" },
      { name: "Engineering", ranking: 68, strength: "Good", fees: "₹2L", feeType: "per-year" }
    ],
    highlights: ["AICTE approved", "Industry partnerships", "Modern labs", "Strong placement"],
    website: "https://www.poornima.org",
    image: "/placeholder.svg"
  },
  {
    id: "eng-raj-jai-02",
    name: "Arya College of Engineering",
    location: "Jaipur, Rajasthan, India",
    type: "Private",
    overallRanking: 75,
    establishedYear: 2000,
    courses: [
      { name: "Computer Science", ranking: 65, strength: "Good", fees: "₹1.8L", feeType: "per-year" },
      { name: "Engineering", ranking: 75, strength: "Good", fees: "₹1.6L", feeType: "per-year" }
    ],
    highlights: ["Established college", "Industry connect", "Affordable fees", "Quality education"],
    website: "https://www.aryacollege.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-raj-jod-01",
    name: "Jodhpur Institute of Engineering and Technology",
    location: "Jodhpur, Rajasthan, India",
    type: "Private",
    overallRanking: 82,
    establishedYear: 1999,
    courses: [
      { name: "Computer Science", ranking: 72, strength: "Good", fees: "₹2L", feeType: "per-year" },
      { name: "Engineering", ranking: 82, strength: "Good", fees: "₹1.8L", feeType: "per-year" }
    ],
    highlights: ["Regional excellence", "Industry partnerships", "Modern facilities", "Placement support"],
    website: "https://www.jiet.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-raj-kot-01",
    name: "Rajasthan Technical University",
    location: "Kota, Rajasthan, India",
    type: "Private",
    overallRanking: 88,
    establishedYear: 2006,
    courses: [
      { name: "Computer Science", ranking: 78, strength: "Good", fees: "₹1.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 88, strength: "Good", fees: "₹1.3L", feeType: "per-year" }
    ],
    highlights: ["State technical university", "Multiple affiliated colleges", "Quality education", "Affordable fees"],
    website: "https://www.rtu.ac.in",
    image: "/placeholder.svg"
  }
];
