
import { College } from '../../../../../../../types/collegeTypes';

export const delhiPrivateMedical: College[] = [
  {
    id: "60",
    name: "Jamia Hamdard University",
    location: "New Delhi, India",
    type: "Private",
    overallRanking: 42,
    establishedYear: 1989,
    courses: [
      { name: "Medicine", ranking: 25, strength: "Good", fees: "₹15L", feeType: "per-year" },
      { name: "Pharmacy", ranking: 8, strength: "Very Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "Nursing", ranking: 15, strength: "Good", fees: "₹1.8L", feeType: "per-year" }
    ],
    highlights: ["Deemed university", "Healthcare focus", "Research facilities", "Hospital attached"],
    website: "https://www.jamiahamdard.edu",
    image: "/placeholder.svg"
  }
];
