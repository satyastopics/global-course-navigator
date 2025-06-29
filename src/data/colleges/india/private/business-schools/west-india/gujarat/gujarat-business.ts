
import { College } from '../../../../../../../types/collegeTypes';

export const gujaratPrivateBusinessSchools: College[] = [
  {
    id: "biz-gj-01",
    name: "Ahmedabad University School of Management",
    location: "Ahmedabad, Gujarat, India",
    type: "Private",
    overallRanking: 35,
    establishedYear: 2009,
    courses: [
      { name: "MBA", ranking: 28, strength: "Very Good", fees: "₹18L", feeType: "total" },
      { name: "PGDM", ranking: 32, strength: "Good", fees: "₹16L", feeType: "total" }
    ],
    highlights: ["Liberal arts focus", "International faculty", "Research excellence", "Industry partnerships"],
    website: "https://ahduni.edu.in",
    image: "/placeholder.svg"
  },
  {
    id: "biz-gj-02",
    name: "Nirma University Institute of Management",
    location: "Ahmedabad, Gujarat, India",
    type: "Private",
    overallRanking: 42,
    establishedYear: 1996,
    courses: [
      { name: "MBA", ranking: 36, strength: "Good", fees: "₹14L", feeType: "total" },
      { name: "PGDM", ranking: 40, strength: "Good", fees: "₹12L", feeType: "total" }
    ],
    highlights: ["Established business school", "Strong industry connect", "Quality faculty", "Modern facilities"],
    website: "https://www.nirmauni.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "biz-gj-03",
    name: "Pandit Deendayal Energy University School of Management",
    location: "Gandhinagar, Gujarat, India",
    type: "Private",
    overallRanking: 52,
    establishedYear: 2007,
    courses: [
      { name: "MBA", ranking: 45, strength: "Good", fees: "₹12L", feeType: "total" },
      { name: "PGDM", ranking: 48, strength: "Good", fees: "₹10L", feeType: "total" }
    ],
    highlights: ["Energy sector focus", "Government backing", "Industry partnerships", "Specialized programs"],
    website: "https://www.pdpu.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "biz-gj-04",
    name: "Gujarat Technological University MBA",
    location: "Ahmedabad, Gujarat, India",
    type: "Private",
    overallRanking: 65,
    establishedYear: 2007,
    courses: [
      { name: "MBA", ranking: 58, strength: "Good", fees: "₹8L", feeType: "total" },
      { name: "PGDM", ranking: 62, strength: "Good", fees: "₹7L", feeType: "total" }
    ],
    highlights: ["State university", "Technology focus", "Affordable fees", "Industry connect"],
    website: "https://www.gtu.ac.in",
    image: "/placeholder.svg"
  }
];
