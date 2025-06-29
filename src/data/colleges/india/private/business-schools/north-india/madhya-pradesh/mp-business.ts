
import { College } from '../../../../../../../types/collegeTypes';

export const madhyaPradeshPrivateBusinessSchools: College[] = [
  {
    id: "biz-mp-bho-01",
    name: "RKDF University",
    location: "Bhopal, Madhya Pradesh, India",
    type: "Private",
    overallRanking: 78,
    establishedYear: 2012,
    courses: [
      { name: "MBA", ranking: 68, strength: "Good", fees: "₹4L", feeType: "total" },
      { name: "PGDM", ranking: 72, strength: "Good", fees: "₹3.5L", feeType: "total" }
    ],
    highlights: ["Private university", "Industry partnerships", "Affordable fees", "Modern facilities"],
    website: "https://www.rkdf.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "biz-mp-ind-01",
    name: "Prestige Institute of Management",
    location: "Indore, Madhya Pradesh, India",
    type: "Private",
    overallRanking: 85,
    establishedYear: 1994,
    courses: [
      { name: "MBA", ranking: 75, strength: "Good", fees: "₹6L", feeType: "total" },
      { name: "PGDM", ranking: 78, strength: "Good", fees: "₹5.5L", feeType: "total" }
    ],
    highlights: ["AICTE approved", "Industry connect", "Quality education", "Strong placement"],
    website: "https://www.pim.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "biz-mp-gwa-01",
    name: "Amity University Gwalior",
    location: "Gwalior, Madhya Pradesh, India",
    type: "Private",
    overallRanking: 72,
    establishedYear: 2010,
    courses: [
      { name: "MBA", ranking: 62, strength: "Good", fees: "₹8L", feeType: "total" },
      { name: "PGDM", ranking: 68, strength: "Good", fees: "₹7L", feeType: "total" }
    ],
    highlights: ["Amity group", "Modern campus", "Industry partnerships", "International exposure"],
    website: "https://www.amity.edu",
    image: "/placeholder.svg"
  }
];
