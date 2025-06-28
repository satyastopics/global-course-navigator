
import { College } from '../../../../../../../types/collegeTypes';

export const chennaiPrivateEngineering: College[] = [
  {
    id: "eng-tn-che-01",
    name: "SRM Institute of Science and Technology",
    location: "Chennai, Tamil Nadu, India",
    type: "Private",
    overallRanking: 35,
    establishedYear: 1985,
    courses: [
      { name: "Computer Science", ranking: 28, strength: "Good", fees: "₹2.8L", feeType: "per-year" },
      { name: "Engineering", ranking: 35, strength: "Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "Medicine", ranking: 40, strength: "Good", fees: "₹16L", feeType: "per-year" }
    ],
    highlights: ["Deemed university", "International collaborations", "Strong placement", "Research focus"],
    website: "https://www.srmist.edu.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-tn-che-02",
    name: "Vellore Institute of Technology Chennai",
    location: "Chennai, Tamil Nadu, India",
    type: "Private",
    overallRanking: 40,
    establishedYear: 2010,
    courses: [
      { name: "Computer Science", ranking: 32, strength: "Good", fees: "₹2.6L", feeType: "per-year" },
      { name: "Engineering", ranking: 40, strength: "Good", fees: "₹2.3L", feeType: "per-year" },
      { name: "Management", ranking: 50, strength: "Good", fees: "₹8L", feeType: "total" }
    ],
    highlights: ["Branch campus of VIT", "Modern facilities", "Industry connect", "Quality education"],
    website: "https://chennai.vit.ac.in",
    image: "/placeholder.svg"
  }
];
