
import { College } from '../../../../../types/collegeTypes';

export const southIndiaPrivateLawColleges: College[] = [
  {
    id: "law-02",
    name: "NALSAR University of Law",
    location: "Hyderabad, Telangana, India",
    type: "Private",
    overallRanking: 5,
    establishedYear: 1998,
    courses: [
      { name: "Law", ranking: 1, strength: "Excellent", fees: "₹15L", feeType: "total" },
      { name: "Corporate Law", ranking: 1, strength: "Excellent", fees: "₹15L", feeType: "total" },
      { name: "Constitutional Law", ranking: 2, strength: "Excellent", fees: "₹15L", feeType: "total" }
    ],
    highlights: ["Top law university", "Constitutional law excellence", "Strong alumni", "Government recognition"],
    website: "https://www.nalsar.ac.in",
    image: "/placeholder.svg"
  }
];
