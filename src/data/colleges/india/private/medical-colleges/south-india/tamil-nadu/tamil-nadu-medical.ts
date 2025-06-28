
import { College } from '../../../../../../../types/collegeTypes';

export const tamilNaduPrivateMedical: College[] = [
  {
    id: "med-tn-01",
    name: "Sri Ramachandra Institute of Higher Education",
    location: "Chennai, Tamil Nadu, India",
    type: "Private",
    overallRanking: 18,
    establishedYear: 1985,
    courses: [
      { name: "Medicine", ranking: 15, strength: "Very Good", fees: "₹19L", feeType: "per-year" },
      { name: "Nursing", ranking: 12, strength: "Very Good", fees: "₹1.5L", feeType: "per-year" },
      { name: "Pharmacy", ranking: 18, strength: "Good", fees: "₹2L", feeType: "per-year" }
    ],
    highlights: ["Deemed university", "Multi-specialty hospital", "Research excellence", "International recognition"],
    website: "https://www.sriramachandra.edu.in",
    image: "/placeholder.svg"
  },
  {
    id: "med-tn-02",
    name: "Christian Medical College",
    location: "Vellore, Tamil Nadu, India",
    type: "Private",
    overallRanking: 8,
    establishedYear: 1900,
    courses: [
      { name: "Medicine", ranking: 5, strength: "Excellent", fees: "₹12L", feeType: "per-year" },
      { name: "Nursing", ranking: 3, strength: "Excellent", fees: "₹1.2L", feeType: "per-year" },
      { name: "Allied Health", ranking: 5, strength: "Very Good", fees: "₹1.5L", feeType: "per-year" }
    ],
    highlights: ["Christian minority institution", "Medical excellence", "Heritage institution", "Community service"],
    website: "https://www.cmch-vellore.edu",
    image: "/placeholder.svg"
  }
];
