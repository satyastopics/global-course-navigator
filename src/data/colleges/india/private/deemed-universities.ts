
import { College } from '../../../../types/collegeTypes';

export const deemedUniversities: College[] = [
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
  {
    id: "37",
    name: "Vellore Institute of Technology",
    location: "Vellore, Tamil Nadu, India",
    type: "Private",
    overallRanking: 17,
    establishedYear: 1984,
    courses: [
      { name: "Computer Science", ranking: 15, strength: "Very Good", fees: "₹2L", feeType: "per-year" },
      { name: "Engineering", ranking: 18, strength: "Good", fees: "₹1.8L", feeType: "per-year" },
      { name: "Management", ranking: 25, strength: "Good", fees: "₹8L", feeType: "total" },
      { name: "Law", ranking: 15, strength: "Good", fees: "₹2.5L", feeType: "per-year" }
    ],
    highlights: ["Large private university", "Industry partnerships", "International collaborations", "Modern facilities"],
    website: "https://vit.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "38",
    name: "Manipal Academy of Higher Education",
    location: "Manipal, Karnataka, India",
    type: "Private",
    overallRanking: 18,
    establishedYear: 1953,
    courses: [
      { name: "Medicine", ranking: 5, strength: "Very Good", fees: "₹18L", feeType: "per-year" },
      { name: "Engineering", ranking: 22, strength: "Good", fees: "₹3.5L", feeType: "per-year" },
      { name: "Management", ranking: 20, strength: "Good", fees: "₹12L", feeType: "total" },
      { name: "Pharmacy", ranking: 5, strength: "Very Good", fees: "₹2L", feeType: "per-year" }
    ],
    highlights: ["Healthcare excellence", "Multiple campuses", "International programs", "Strong alumni network"],
    website: "https://manipal.edu",
    image: "/placeholder.svg"
  }
];
