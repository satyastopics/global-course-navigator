import { College } from '../../../../../../types/collegeTypes';

export const bitsPilaniColleges: College[] = [
  {
    id: "bits-01",
    name: "BITS Pilani",
    location: "Pilani, Rajasthan, India",
    type: "Private",
    overallRanking: 18,
    establishedYear: 1964,
    courses: [
      { name: "Computer Science", ranking: 12, strength: "Excellent", fees: "₹19L", feeType: "total" },
      { name: "Engineering", ranking: 15, strength: "Very Good", fees: "₹19L", feeType: "total" },
      { name: "Pharmacy", ranking: 8, strength: "Excellent", fees: "₹18L", feeType: "total" },
      { name: "Management", ranking: 25, strength: "Very Good", fees: "₹15L", feeType: "total" }
    ],
    highlights: ["Deemed university", "Industry partnerships", "Innovation focus", "High placements"],
    website: "https://www.bits-pilani.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "bits-02",
    name: "BITS Goa",
    location: "Goa, India",
    type: "Private",
    overallRanking: 22,
    establishedYear: 2004,
    courses: [
      { name: "Computer Science", ranking: 18, strength: "Very Good", fees: "₹19L", feeType: "total" },
      { name: "Engineering", ranking: 20, strength: "Very Good", fees: "₹19L", feeType: "total" },
      { name: "Biotechnology", ranking: 12, strength: "Excellent", fees: "₹18L", feeType: "total" }
    ],
    highlights: ["BITS campus", "Coastal location", "Research focus", "Industry connect"],
    website: "https://www.bits-pilani.ac.in/goa",
    image: "/placeholder.svg"
  },
  {
    id: "bits-03",
    name: "BITS Hyderabad",
    location: "Hyderabad, Telangana, India",
    type: "Private",
    overallRanking: 24,
    establishedYear: 2008,
    courses: [
      { name: "Computer Science", ranking: 20, strength: "Very Good", fees: "₹19L", feeType: "total" },
      { name: "Engineering", ranking: 22, strength: "Very Good", fees: "₹19L", feeType: "total" },
      { name: "Chemical Engineering", ranking: 15, strength: "Very Good", fees: "₹19L", feeType: "total" }
    ],
    highlights: ["BITS network", "Tech hub location", "Modern campus", "Industry partnerships"],
    website: "https://www.bits-pilani.ac.in/hyderabad",
    image: "/placeholder.svg"
  }
];