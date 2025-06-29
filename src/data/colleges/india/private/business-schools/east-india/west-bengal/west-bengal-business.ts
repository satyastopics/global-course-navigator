
import { College } from '../../../../../../../types/collegeTypes';

export const westBengalPrivateBusinessSchools: College[] = [
  {
    id: "biz-wb-kol-01",
    name: "Xavier Labour Relations Institute",
    location: "Jamshedpur, West Bengal, India",
    type: "Private",
    overallRanking: 18,
    establishedYear: 1955,
    courses: [
      { name: "MBA", ranking: 15, strength: "Very Good", fees: "₹16L", feeType: "total" },
      { name: "PGDM", ranking: 18, strength: "Very Good", fees: "₹14L", feeType: "total" }
    ],
    highlights: ["Premier business school", "HR excellence", "Jesuit tradition", "Strong alumni"],
    website: "https://www.xlri.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "biz-wb-kol-02",
    name: "Institute of Engineering and Management",
    location: "Kolkata, West Bengal, India",
    type: "Private",
    overallRanking: 52,
    establishedYear: 1989,
    courses: [
      { name: "MBA", ranking: 45, strength: "Good", fees: "₹7L", feeType: "total" },
      { name: "PGDM", ranking: 48, strength: "Good", fees: "₹6L", feeType: "total" }
    ],
    highlights: ["Multi-disciplinary institute", "Industry partnerships", "Modern facilities", "Affordable fees"],
    website: "https://www.iem.edu.in",
    image: "/placeholder.svg"
  },
  {
    id: "biz-wb-kol-03",
    name: "Calcutta Business School",
    location: "Kolkata, West Bengal, India",
    type: "Private",
    overallRanking: 58,
    establishedYear: 2008,
    courses: [
      { name: "MBA", ranking: 52, strength: "Good", fees: "₹8L", feeType: "total" },
      { name: "PGDM", ranking: 55, strength: "Good", fees: "₹7L", feeType: "total" }
    ],
    highlights: ["Business school focus", "Industry connect", "Quality faculty", "Strong placement"],
    website: "https://www.calcuttabusinessschool.org",
    image: "/placeholder.svg"
  }
];
