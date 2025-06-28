
import { College } from '../../../../../types/collegeTypes';
import { karnatakaPrivateEngineering } from './south-india/bangalore';
import { tamilNaduEngineering } from './south-india/tamil-nadu';
import { andhraEngineering } from './south-india/andhra-pradesh';
import { keralaEngineering } from './south-india/kerala';

export const southIndiaPrivateEngineering: College[] = [
  {
    id: "37",
    name: "Vellore Institute of Technology",
    location: "Vellore, Tamil Nadu, India",
    type: "Private",
    overallRanking: 17,
    establishedYear: 1984,
    courses: [
      { name: "Computer Science", ranking: 15, strength: "Very Good", fees: "₹2L", feeType: "per-year" },
      { name: "Engineering", ranking: 18, strength: "Good", fees: "₹1.8L", feeType: "per-year" },
      { name: "Management", ranking: 25, strength: "Good", fees: "₹8L", feeType: "total" },
      { name: "Law", ranking: 15, strength: "Good", fees: "₹2.5L", feeType: "per-year" }
    ],
    highlights: ["Large private university", "Industry partnerships", "International collaborations", "Modern facilities"],
    website: "https://vit.ac.in",
    image: "/placeholder.svg"
  },
  ...karnatakaPrivateEngineering,
  ...tamilNaduEngineering,
  ...andhraEngineering,
  ...keralaEngineering
];
