
import { College } from '../../../../../../../types/collegeTypes';

export const maharashtraPrivateMedical: College[] = [
  {
    id: "med-mh-pun-01",
    name: "Bharati Vidyapeeth Medical College",
    location: "Pune, Maharashtra, India",
    type: "Private",
    overallRanking: 32,
    establishedYear: 1989,
    courses: [
      { name: "Medicine", ranking: 28, strength: "Good", fees: "₹22L", feeType: "per-year" },
      { name: "Dental", ranking: 25, strength: "Good", fees: "₹18L", feeType: "per-year" },
      { name: "Nursing", ranking: 30, strength: "Good", fees: "₹3.2L", feeType: "per-year" }
    ],
    highlights: ["Deemed university", "Multi-specialty hospital", "Research excellence", "Clinical training"],
    website: "https://www.bharatividyapeeth.edu",
    image: "/placeholder.svg"
  },
  {
    id: "med-mh-mum-01",
    name: "Topiwala National Medical College",
    location: "Mumbai, Maharashtra, India",
    type: "Private",
    overallRanking: 38,
    establishedYear: 1946,
    courses: [
      { name: "Medicine", ranking: 32, strength: "Good", fees: "₹15L", feeType: "per-year" },
      { name: "Nursing", ranking: 35, strength: "Good", fees: "₹2.5L", feeType: "per-year" }
    ],
    highlights: ["Historic institution", "BYL Nair Hospital", "Clinical excellence", "Mumbai location"],
    website: "https://www.tnmc-bylnair.org",
    image: "/placeholder.svg"
  },
  {
    id: "med-mh-nag-01",
    name: "Jawaharlal Nehru Medical College",
    location: "Wardha, Maharashtra, India",
    type: "Private",
    overallRanking: 45,
    establishedYear: 1969,
    courses: [
      { name: "Medicine", ranking: 38, strength: "Good", fees: "₹12L", feeType: "per-year" },
      { name: "Nursing", ranking: 42, strength: "Good", fees: "₹2L", feeType: "per-year" }
    ],
    highlights: ["Deemed university", "Rural health focus", "Community medicine", "Affordable fees"],
    website: "https://www.dmimsu.edu.in",
    image: "/placeholder.svg"
  },
  {
    id: "med-mh-nas-01",
    name: "MGM Medical College",
    location: "Navi Mumbai, Maharashtra, India",
    type: "Private",
    overallRanking: 55,
    establishedYear: 1989,
    courses: [
      { name: "Medicine", ranking: 48, strength: "Good", fees: "₹20L", feeType: "per-year" },
      { name: "Dental", ranking: 52, strength: "Good", fees: "₹16L", feeType: "per-year" }
    ],
    highlights: ["MGM Institute of Health Sciences", "Modern facilities", "Clinical training", "Research focus"],
    website: "https://www.mgmihs.ac.in",
    image: "/placeholder.svg"
  }
];
