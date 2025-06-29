
import { College } from '../../../../../../../types/collegeTypes';

export const tamilNaduPrivateMedical: College[] = [
  {
    id: "med-tn-che-01",
    name: "Sri Ramachandra Institute of Higher Education",
    location: "Chennai, Tamil Nadu, India",
    type: "Private",
    overallRanking: 28,
    establishedYear: 1985,
    courses: [
      { name: "Medicine", ranking: 22, strength: "Very Good", fees: "₹22L", feeType: "per-year" },
      { name: "Dental", ranking: 18, strength: "Very Good", fees: "₹18L", feeType: "per-year" },
      { name: "Nursing", ranking: 25, strength: "Good", fees: "₹3L", feeType: "per-year" }
    ],
    highlights: ["Deemed university", "Super specialty hospital", "Research excellence", "International collaborations"],
    website: "https://www.sriramachandra.edu.in",
    image: "/placeholder.svg"
  },
  {
    id: "med-tn-che-02",
    name: "Dr. MGR Medical University",
    location: "Chennai, Tamil Nadu, India",
    type: "Private",
    overallRanking: 35,
    establishedYear: 1988,
    courses: [
      { name: "Medicine", ranking: 28, strength: "Good", fees: "₹20L", feeType: "per-year" },
      { name: "Dental", ranking: 32, strength: "Good", fees: "₹15L", feeType: "per-year" },
      { name: "Pharmacy", ranking: 25, strength: "Good", fees: "₹2.5L", feeType: "per-year" }
    ],
    highlights: ["State university", "Multiple affiliated colleges", "Strong clinical training", "Research focus"],
    website: "https://www.tnmgrmu.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "med-tn-vel-01",
    name: "Meenakshi Medical College",
    location: "Kanchipuram, Tamil Nadu, India",
    type: "Private",
    overallRanking: 48,
    establishedYear: 2001,
    courses: [
      { name: "Medicine", ranking: 42, strength: "Good", fees: "₹18L", feeType: "per-year" },
      { name: "Nursing", ranking: 38, strength: "Good", fees: "₹2.8L", feeType: "per-year" }
    ],
    highlights: ["Well-equipped hospital", "Clinical excellence", "Modern facilities", "Quality education"],
    website: "https://www.mmchri.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "med-tn-vel-02",
    name: "Saveetha Medical College",
    location: "Chennai, Tamil Nadu, India",
    type: "Private",
    overallRanking: 52,
    establishedYear: 2008,
    courses: [
      { name: "Medicine", ranking: 45, strength: "Good", fees: "₹25L", feeType: "per-year" },
      { name: "Dental", ranking: 48, strength: "Good", fees: "₹20L", feeType: "per-year" }
    ],
    highlights: ["Saveetha Institute of Medical Sciences", "Modern infrastructure", "Clinical training", "Research facilities"],
    website: "https://www.saveetha.ac.in",
    image: "/placeholder.svg"
  }
];
