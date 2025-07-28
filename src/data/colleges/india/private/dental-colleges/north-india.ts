import { College } from '../../../../../types/collegeTypes';

export const northIndiaDentalColleges: College[] = [
  {
    id: "dental-north-01",
    name: "Maulana Azad Institute of Dental Sciences",
    location: "New Delhi, India",
    type: "Private",
    overallRanking: 2,
    establishedYear: 1920,
    courses: [
      { name: "BDS", ranking: 2, strength: "Excellent", fees: "₹85K", feeType: "per-year" },
      { name: "MDS", ranking: 2, strength: "Excellent", fees: "₹95K", feeType: "per-year" },
      { name: "Dental Surgery", ranking: 2, strength: "Excellent", fees: "₹85K", feeType: "per-year" }
    ],
    highlights: ["Premier dental institute", "AIIMS affiliated", "Research excellence", "Top placement"],
    website: "https://www.maids.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "dental-north-02",
    name: "Sudha Rustagi College of Dental Sciences",
    location: "Faridabad, Haryana, India",
    type: "Private",
    overallRanking: 15,
    establishedYear: 2003,
    courses: [
      { name: "BDS", ranking: 15, strength: "Very Good", fees: "₹4L", feeType: "per-year" },
      { name: "MDS", ranking: 18, strength: "Very Good", fees: "₹8L", feeType: "per-year" }
    ],
    highlights: ["Modern infrastructure", "Clinical excellence", "Research focus", "Industry partnerships"],
    website: "https://www.srcds.edu.in",
    image: "/placeholder.svg"
  },
  {
    id: "dental-north-03",
    name: "DJ College of Dental Sciences and Research",
    location: "Modinagar, Uttar Pradesh, India",
    type: "Private",
    overallRanking: 25,
    establishedYear: 2011,
    courses: [
      { name: "BDS", ranking: 22, strength: "Good", fees: "₹3.5L", feeType: "per-year" },
      { name: "MDS", ranking: 28, strength: "Good", fees: "₹7L", feeType: "per-year" }
    ],
    highlights: ["State-of-art facilities", "Clinical training", "Research programs", "Modern labs"],
    website: "https://www.djcds.org",
    image: "/placeholder.svg"
  },
  {
    id: "dental-north-04",
    name: "Teerthanker Mahaveer Dental College",
    location: "Moradabad, Uttar Pradesh, India",
    type: "Private",
    overallRanking: 35,
    establishedYear: 2008,
    courses: [
      { name: "BDS", ranking: 32, strength: "Good", fees: "₹3.2L", feeType: "per-year" },
      { name: "MDS", ranking: 38, strength: "Good", fees: "₹6.5L", feeType: "per-year" }
    ],
    highlights: ["Comprehensive dental care", "Modern equipment", "Clinical exposure", "Research opportunities"],
    website: "https://www.tmu.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "dental-north-05",
    name: "ITS Centre for Dental Studies and Research",
    location: "Ghaziabad, Uttar Pradesh, India",
    type: "Private",
    overallRanking: 42,
    establishedYear: 2005,
    courses: [
      { name: "BDS", ranking: 38, strength: "Good", fees: "₹3.8L", feeType: "per-year" },
      { name: "MDS", ranking: 45, strength: "Good", fees: "₹7.5L", feeType: "per-year" }
    ],
    highlights: ["ITS Group institution", "Advanced dental care", "Clinical training", "Research facilities"],
    website: "https://www.its.edu.in",
    image: "/placeholder.svg"
  }
];