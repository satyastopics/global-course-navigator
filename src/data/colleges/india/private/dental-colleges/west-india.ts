import { College } from '../../../../../types/collegeTypes';

export const westIndiaDentalColleges: College[] = [
  {
    id: "dental-west-01",
    name: "Dr. D. Y. Patil Dental College",
    location: "Pune, Maharashtra, India",
    type: "Private",
    overallRanking: 6,
    establishedYear: 1989,
    courses: [
      { name: "BDS", ranking: 6, strength: "Excellent", fees: "₹20L", feeType: "total" },
      { name: "MDS", ranking: 8, strength: "Very Good", fees: "₹22L", feeType: "total" },
      { name: "Dental Surgery", ranking: 5, strength: "Excellent", fees: "₹20L", feeType: "total" }
    ],
    highlights: ["Premier dental institute", "Advanced technology", "Research excellence", "International collaborations"],
    website: "https://www.dpu.edu.in",
    image: "/placeholder.svg"
  },
  {
    id: "dental-west-02",
    name: "Bharati Vidyapeeth Dental College",
    location: "Pune, Maharashtra, India",
    type: "Private",
    overallRanking: 10,
    establishedYear: 1989,
    courses: [
      { name: "BDS", ranking: 10, strength: "Very Good", fees: "₹16L", feeType: "total" },
      { name: "MDS", ranking: 12, strength: "Very Good", fees: "₹18L", feeType: "total" }
    ],
    highlights: ["Deemed university", "Clinical excellence", "Research programs", "Modern facilities"],
    website: "https://www.bharatividyapeeth.edu",
    image: "/placeholder.svg"
  },
  {
    id: "dental-west-03",
    name: "MGM Dental College",
    location: "Mumbai, Maharashtra, India",
    type: "Private",
    overallRanking: 14,
    establishedYear: 1982,
    courses: [
      { name: "BDS", ranking: 14, strength: "Very Good", fees: "₹18L", feeType: "total" },
      { name: "MDS", ranking: 16, strength: "Very Good", fees: "₹20L", feeType: "total" }
    ],
    highlights: ["MGM University", "Clinical training", "Research focus", "Industry partnerships"],
    website: "https://www.mgmmumbai.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "dental-west-04",
    name: "Terna Dental College",
    location: "Mumbai, Maharashtra, India",
    type: "Private",
    overallRanking: 26,
    establishedYear: 2005,
    courses: [
      { name: "BDS", ranking: 26, strength: "Good", fees: "₹15L", feeType: "total" },
      { name: "MDS", ranking: 28, strength: "Good", fees: "₹17L", feeType: "total" }
    ],
    highlights: ["Modern infrastructure", "Clinical excellence", "Research opportunities", "Quality education"],
    website: "https://www.terna.org",
    image: "/placeholder.svg"
  },
  {
    id: "dental-west-05",
    name: "KLE VK Institute of Dental Sciences",
    location: "Belgaum, Karnataka, India",
    type: "Private",
    overallRanking: 32,
    establishedYear: 1963,
    courses: [
      { name: "BDS", ranking: 30, strength: "Good", fees: "₹10L", feeType: "total" },
      { name: "MDS", ranking: 35, strength: "Good", fees: "₹14L", feeType: "total" }
    ],
    highlights: ["KLE University", "Established institution", "Clinical training", "Research programs"],
    website: "https://www.kleuniversity.edu.in",
    image: "/placeholder.svg"
  }
];