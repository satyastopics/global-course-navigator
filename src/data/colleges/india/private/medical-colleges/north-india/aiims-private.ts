import { College } from '../../../../../../types/collegeTypes';

export const privateAiimsAffiliated: College[] = [
  {
    id: "priv-med-01",
    name: "Kasturba Medical College Manipal",
    location: "Manipal, Karnataka, India",
    type: "Private",
    overallRanking: 28,
    establishedYear: 1953,
    courses: [
      { name: "Medicine", ranking: 18, strength: "Very Good", fees: "₹65L", feeType: "total" },
      { name: "Dentistry", ranking: 15, strength: "Very Good", fees: "₹45L", feeType: "total" },
      { name: "Nursing", ranking: 12, strength: "Excellent", fees: "₹8L", feeType: "total" },
      { name: "Pharmacy", ranking: 20, strength: "Very Good", fees: "₹12L", feeType: "total" }
    ],
    highlights: ["Deemed university", "Medical excellence", "Research focus", "Clinical training"],
    website: "https://www.manipal.edu",
    image: "/placeholder.svg"
  },
  {
    id: "priv-med-02",
    name: "Christian Medical College Vellore",
    location: "Vellore, Tamil Nadu, India",
    type: "Private",
    overallRanking: 12,
    establishedYear: 1900,
    courses: [
      { name: "Medicine", ranking: 8, strength: "Excellent", fees: "₹18L", feeType: "total" },
      { name: "Nursing", ranking: 3, strength: "Excellent", fees: "₹4L", feeType: "total" },
      { name: "Allied Health", ranking: 5, strength: "Excellent", fees: "₹6L", feeType: "total" }
    ],
    highlights: ["Premier medical college", "Affordable fees", "Research excellence", "Social service"],
    website: "https://www.cmch-vellore.edu",
    image: "/placeholder.svg"
  },
  {
    id: "priv-med-03",
    name: "Armed Forces Medical College",
    location: "Pune, Maharashtra, India",
    type: "Government",
    overallRanking: 15,
    establishedYear: 1962,
    courses: [
      { name: "Medicine", ranking: 12, strength: "Excellent", fees: "₹0", feeType: "total" },
      { name: "Military Medicine", ranking: 1, strength: "Excellent", fees: "₹0", feeType: "total" }
    ],
    highlights: ["Military medical college", "Free education", "Service commitment", "Discipline focus"],
    website: "https://www.afmc.nic.in",
    image: "/placeholder.svg"
  },
  {
    id: "priv-med-04",
    name: "St. John's Medical College",
    location: "Bangalore, Karnataka, India",
    type: "Private",
    overallRanking: 32,
    establishedYear: 1963,
    courses: [
      { name: "Medicine", ranking: 25, strength: "Very Good", fees: "₹45L", feeType: "total" },
      { name: "Nursing", ranking: 18, strength: "Very Good", fees: "₹6L", feeType: "total" }
    ],
    highlights: ["Christian minority institution", "Medical excellence", "Research focus", "Community service"],
    website: "https://www.stjohns.in",
    image: "/placeholder.svg"
  }
];