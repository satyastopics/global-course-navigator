
import { College } from '../../../../../../../types/collegeTypes';

export const rajasthanPrivateEngineering: College[] = [
  {
    id: "eng-raj-01",
    name: "Birla Institute of Technology and Science, Pilani",
    location: "Pilani, Rajasthan, India",
    type: "Private",
    overallRanking: 12,
    establishedYear: 1964,
    courses: [
      { name: "Computer Science", ranking: 8, strength: "Excellent", fees: "₹4.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 12, strength: "Very Good", fees: "₹4.2L", feeType: "per-year" },
      { name: "Management", ranking: 15, strength: "Very Good", fees: "₹18L", feeType: "total" }
    ],
    highlights: ["Deemed university", "Research excellence", "Industry partnerships", "Global recognition"],
    website: "https://www.bits-pilani.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "eng-raj-02",
    name: "Manipal University Jaipur",
    location: "Jaipur, Rajasthan, India",
    type: "Private",
    overallRanking: 38,
    establishedYear: 2011,
    courses: [
      { name: "Computer Science", ranking: 32, strength: "Good", fees: "₹3.8L", feeType: "per-year" },
      { name: "Engineering", ranking: 38, strength: "Good", fees: "₹3.5L", feeType: "per-year" },
      { name: "Management", ranking: 50, strength: "Good", fees: "₹12L", feeType: "total" }
    ],
    highlights: ["Manipal brand", "Modern infrastructure", "Industry connect", "Research focus"],
    website: "https://jaipur.manipal.edu",
    image: "/placeholder.svg"
  }
];
