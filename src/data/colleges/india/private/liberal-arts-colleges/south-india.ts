
import { College } from '../../../../../types/collegeTypes';

export const southIndiaPrivateLiberalArts: College[] = [
  {
    id: "liberal-02",
    name: "Azim Premji University",
    location: "Bangalore, Karnataka, India",
    type: "Private",
    overallRanking: 35,
    establishedYear: 2010,
    courses: [
      { name: "Liberal Arts", ranking: 8, strength: "Very Good", fees: "₹8L", feeType: "total" },
      { name: "Education", ranking: 3, strength: "Excellent", fees: "₹8L", feeType: "total" },
      { name: "Development Studies", ranking: 5, strength: "Very Good", fees: "₹8L", feeType: "total" }
    ],
    highlights: ["Education focus", "Development studies", "Research university", "Social impact"],
    website: "https://azimpremjiuniversity.edu.in",
    image: "/placeholder.svg"
  }
];
