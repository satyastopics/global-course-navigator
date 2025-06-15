
import { College } from '../../../../../types/collegeTypes';
import { delhiNCREngineering } from './delhi';
import { punjabEngineering } from './punjab';
import { haryanaEngineering } from './haryana';
import { rajasthanEngineering } from './rajasthan';

export const northIndiaPrivateEngineering: College[] = [
  {
    id: "36",
    name: "Bennett University",
    location: "Greater Noida, Uttar Pradesh, India",
    type: "Private",
    overallRanking: 31,
    establishedYear: 2016,
    courses: [
      { name: "Computer Science", ranking: 25, strength: "Good", fees: "₹3.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 31, strength: "Good", fees: "₹3.2L", feeType: "per-year" },
      { name: "Management", ranking: 45, strength: "Good", fees: "₹12L", feeType: "total" },
      { name: "Journalism", ranking: 8, strength: "Very Good", fees: "₹4L", feeType: "per-year" }
    ],
    highlights: ["Times Group backing", "Media focus", "Industry partnerships", "Modern campus"],
    website: "https://www.bennett.edu.in",
    image: "/placeholder.svg"
  },
  ...delhiNCREngineering,
  ...punjabEngineering,
  ...haryanaEngineering,
  ...rajasthanEngineering
];
