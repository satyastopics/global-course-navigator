
import { College } from '../../../../../../../types/collegeTypes';

export const kolkataPrivateBusinessSchools: College[] = [
  {
    id: "biz-kol-01",
    name: "Indian Institute of Social Welfare and Business Management",
    location: "Kolkata, West Bengal, India",
    type: "Private",
    overallRanking: 32,
    establishedYear: 1953,
    courses: [
      { name: "MBA", ranking: 28, strength: "Good", fees: "₹8L", feeType: "total" },
      { name: "PGDM", ranking: 32, strength: "Good", fees: "₹7L", feeType: "total" },
      { name: "Social Work", ranking: 12, strength: "Very Good", fees: "₹3L", feeType: "total" }
    ],
    highlights: ["Heritage institution", "Social work focus", "Industry connect", "Strong alumni"],
    website: "https://www.iiswbm.edu",
    image: "/placeholder.svg"
  },
  {
    id: "biz-kol-02",
    name: "Techno India Group",
    location: "Kolkata, West Bengal, India",
    type: "Private",
    overallRanking: 48,
    establishedYear: 1999,
    courses: [
      { name: "MBA", ranking: 42, strength: "Good", fees: "₹6L", feeType: "total" },
      { name: "PGDM", ranking: 45, strength: "Good", fees: "₹5.5L", feeType: "total" },
      { name: "BBA", ranking: 38, strength: "Good", fees: "₹4L", feeType: "total" }
    ],
    highlights: ["Multi-campus group", "Affordable fees", "Industry exposure", "Modern facilities"],
    website: "https://www.technoindiaeducation.com",
    image: "/placeholder.svg"
  }
];
