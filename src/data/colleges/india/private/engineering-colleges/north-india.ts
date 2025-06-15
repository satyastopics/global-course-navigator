import { College } from '../../../../../types/collegeTypes';
import { delhiNCREngineering } from './north-india/delhi';
import { punjabEngineering } from './north-india/punjab';
import { uttarPradeshEngineering } from './north-india/uttar-pradesh';

// Keep existing BITS Pilani data
export const northIndiaPrivateEngineering: College[] = [
  {
    id: "33",
    name: "Birla Institute of Technology and Science",
    location: "Pilani, Rajasthan, India",
    type: "Private",
    overallRanking: 13,
    establishedYear: 1964,
    courses: [
      { name: "Computer Science", ranking: 10, strength: "Excellent", fees: "₹4.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 12, strength: "Very Good", fees: "₹4.5L", feeType: "per-year" },
      { name: "Pharmacy", ranking: 3, strength: "Very Good", fees: "₹4L", feeType: "per-year" },
      { name: "Management", ranking: 15, strength: "Good", fees: "₹18L", feeType: "total" }
    ],
    highlights: ["Deemed university", "Strong industry connections", "Multiple campuses", "Innovation culture"],
    website: "https://www.bits-pilani.ac.in",
    image: "/placeholder.svg"
  },
  ...delhiNCREngineering,
  ...punjabEngineering,
  ...uttarPradeshEngineering
];
