import { College } from '../../../../../types/collegeTypes';

export const northIndiaPharmacyColleges: College[] = [
  {
    id: "pharmacy-north-01",
    name: "Jamia Hamdard University",
    location: "New Delhi, India",
    type: "Private",
    overallRanking: 5,
    establishedYear: 1989,
    courses: [
      { name: "B.Pharm", ranking: 5, strength: "Excellent", fees: "₹3L", feeType: "per-year" },
      { name: "M.Pharm", ranking: 4, strength: "Excellent", fees: "₹4L", feeType: "per-year" },
      { name: "Pharm.D", ranking: 3, strength: "Excellent", fees: "₹5L", feeType: "per-year" }
    ],
    highlights: ["Premier pharmacy institute", "Research excellence", "Industry partnerships", "International collaborations"],
    website: "https://www.jamiahamdard.edu",
    image: "/placeholder.svg"
  },
  {
    id: "pharmacy-north-02",
    name: "Amity Institute of Pharmacy",
    location: "Noida, Uttar Pradesh, India",
    type: "Private",
    overallRanking: 12,
    establishedYear: 2002,
    courses: [
      { name: "B.Pharm", ranking: 12, strength: "Very Good", fees: "₹4L", feeType: "per-year" },
      { name: "M.Pharm", ranking: 15, strength: "Very Good", fees: "₹5L", feeType: "per-year" },
      { name: "Pharm.D", ranking: 18, strength: "Very Good", fees: "₹6L", feeType: "per-year" }
    ],
    highlights: ["Amity University", "Modern infrastructure", "Industry connect", "Research facilities"],
    website: "https://www.amity.edu",
    image: "/placeholder.svg"
  },
  {
    id: "pharmacy-north-03",
    name: "Delhi Institute of Pharmaceutical Sciences",
    location: "New Delhi, India",
    type: "Private",
    overallRanking: 18,
    establishedYear: 1998,
    courses: [
      { name: "B.Pharm", ranking: 18, strength: "Very Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "M.Pharm", ranking: 20, strength: "Good", fees: "₹3.5L", feeType: "per-year" }
    ],
    highlights: ["Delhi University affiliated", "Quality education", "Clinical training", "Research programs"],
    website: "https://www.dips.edu.in",
    image: "/placeholder.svg"
  },
  {
    id: "pharmacy-north-04",
    name: "Lloyd Institute of Management & Technology",
    location: "Greater Noida, Uttar Pradesh, India",
    type: "Private",
    overallRanking: 32,
    establishedYear: 2004,
    courses: [
      { name: "B.Pharm", ranking: 30, strength: "Good", fees: "₹3.2L", feeType: "per-year" },
      { name: "M.Pharm", ranking: 35, strength: "Good", fees: "₹4.2L", feeType: "per-year" }
    ],
    highlights: ["Modern facilities", "Industry partnerships", "Clinical exposure", "Research opportunities"],
    website: "https://www.lloyd.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "pharmacy-north-05",
    name: "Kharvel Subharti College of Pharmacy",
    location: "Meerut, Uttar Pradesh, India",
    type: "Private",
    overallRanking: 45,
    establishedYear: 1995,
    courses: [
      { name: "B.Pharm", ranking: 42, strength: "Good", fees: "₹2.8L", feeType: "per-year" },
      { name: "M.Pharm", ranking: 48, strength: "Good", fees: "₹3.8L", feeType: "per-year" }
    ],
    highlights: ["Subharti University", "Clinical training", "Research focus", "Industry connect"],
    website: "https://www.subharti.org",
    image: "/placeholder.svg"
  }
];