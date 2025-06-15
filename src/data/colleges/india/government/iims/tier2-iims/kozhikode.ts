
import { College } from '../../../../../../types/collegeTypes';

export const iimKozhikode: College[] = [
  {
    id: "13",
    name: "IIM Kozhikode",
    location: "Kozhikode, Kerala, India",
    type: "Government",
    overallRanking: 7,
    establishedYear: 1996,
    courses: [
      { name: "MBA", ranking: 7, strength: "Excellent", fees: "₹20.5L", feeType: "total" },
      { name: "Executive MBA", ranking: 9, strength: "Very Good", fees: "₹16L", feeType: "total" },
      { name: "Fellow Program", ranking: 12, strength: "Good", fees: "₹9L", feeType: "total" }
    ],
    highlights: ["Newer IIM", "Beautiful campus", "Growing reputation", "Strong alumni network"],
    website: "https://www.iimk.ac.in",
    image: "/placeholder.svg"
  }
];
