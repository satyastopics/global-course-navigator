
import { College } from '../../../../../../../types/collegeTypes';

export const biharPrivateEngineering: College[] = [
  {
    id: "eng-bh-pat-01",
    name: "Darbhanga College of Engineering",
    location: "Darbhanga, Bihar, India",
    type: "Private",
    overallRanking: 78,
    establishedYear: 1960,
    courses: [
      { name: "Computer Science", ranking: 72, strength: "Good", fees: "₹1.2L", feeType: "per-year" },
      { name: "Engineering", ranking: 78, strength: "Good", fees: "₹1L", feeType: "per-year" }
    ],
    highlights: ["Government college", "Affordable fees", "Regional importance", "Quality education"],
    website: "https://www.dce.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-bh-pat-02",
    name: "Muzaffarpur Institute of Technology",
    location: "Muzaffarpur, Bihar, India",
    type: "Private",
    overallRanking: 82,
    establishedYear: 1998,
    courses: [
      { name: "Computer Science", ranking: 75, strength: "Good", fees: "₹1.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 82, strength: "Good", fees: "₹1.3L", feeType: "per-year" }
    ],
    highlights: ["Private institute", "Affordable fees", "Local importance", "Growing reputation"],
    website: "https://www.mitmusaffarpur.org",
    image: "/placeholder.svg"
  }
];
