
import { College } from '../../../../../types/collegeTypes';

export const northIndiaPrivateLiberalArts: College[] = [
  {
    id: "liberal-01",
    name: "Ashoka University",
    location: "Sonipat, Haryana, India",
    type: "Private",
    overallRanking: 15,
    establishedYear: 2014,
    courses: [
      { name: "Liberal Arts", ranking: 1, strength: "Excellent", fees: "₹25L", feeType: "total" },
      { name: "Economics", ranking: 5, strength: "Excellent", fees: "₹25L", feeType: "total" },
      { name: "Political Science", ranking: 3, strength: "Excellent", fees: "₹25L", feeType: "total" }
    ],
    highlights: ["Liberal arts focus", "Research university", "International faculty", "Modern campus"],
    website: "https://www.ashoka.edu.in",
    image: "/placeholder.svg"
  }
];
