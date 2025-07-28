import { College } from '../../../../../types/collegeTypes';

export const southIndiaPharmacyColleges: College[] = [
  {
    id: "pharmacy-south-01",
    name: "Manipal College of Pharmaceutical Sciences",
    location: "Manipal, Karnataka, India",
    type: "Private",
    overallRanking: 2,
    establishedYear: 1963,
    courses: [
      { name: "B.Pharm", ranking: 2, strength: "Excellent", fees: "₹5L", feeType: "per-year" },
      { name: "M.Pharm", ranking: 2, strength: "Excellent", fees: "₹6L", feeType: "per-year" },
      { name: "Pharm.D", ranking: 1, strength: "Excellent", fees: "₹7L", feeType: "per-year" }
    ],
    highlights: ["Premier pharmacy college", "International collaborations", "Research excellence", "Top placements"],
    website: "https://manipal.edu/mcops.html",
    image: "/placeholder.svg"
  },
  {
    id: "pharmacy-south-02",
    name: "JSS College of Pharmacy",
    location: "Mysore, Karnataka, India",
    type: "Private",
    overallRanking: 8,
    establishedYear: 1963,
    courses: [
      { name: "B.Pharm", ranking: 8, strength: "Very Good", fees: "₹3.5L", feeType: "per-year" },
      { name: "M.Pharm", ranking: 10, strength: "Very Good", fees: "₹4.5L", feeType: "per-year" },
      { name: "Pharm.D", ranking: 12, strength: "Very Good", fees: "₹5.5L", feeType: "per-year" }
    ],
    highlights: ["JSS University", "Research focus", "Clinical training", "Industry partnerships"],
    website: "https://www.jssuni.edu.in",
    image: "/placeholder.svg"
  },
  {
    id: "pharmacy-south-03",
    name: "Acharya & BM Reddy College of Pharmacy",
    location: "Bangalore, Karnataka, India",
    type: "Private",
    overallRanking: 15,
    establishedYear: 1998,
    courses: [
      { name: "B.Pharm", ranking: 15, strength: "Very Good", fees: "₹4L", feeType: "per-year" },
      { name: "M.Pharm", ranking: 18, strength: "Very Good", fees: "₹5L", feeType: "per-year" }
    ],
    highlights: ["Acharya University", "Modern infrastructure", "Research facilities", "Industry connect"],
    website: "https://www.acharya.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "pharmacy-south-04",
    name: "SRM College of Pharmacy",
    location: "Chennai, Tamil Nadu, India",
    type: "Private",
    overallRanking: 22,
    establishedYear: 2005,
    courses: [
      { name: "B.Pharm", ranking: 22, strength: "Good", fees: "₹4.5L", feeType: "per-year" },
      { name: "M.Pharm", ranking: 25, strength: "Good", fees: "₹5.5L", feeType: "per-year" }
    ],
    highlights: ["SRM University", "Advanced technology", "Clinical training", "Research programs"],
    website: "https://www.srmist.edu.in",
    image: "/placeholder.svg"
  },
  {
    id: "pharmacy-south-05",
    name: "Amrita School of Pharmacy",
    location: "Kochi, Kerala, India",
    type: "Private",
    overallRanking: 28,
    establishedYear: 1998,
    courses: [
      { name: "B.Pharm", ranking: 28, strength: "Good", fees: "₹4.2L", feeType: "per-year" },
      { name: "M.Pharm", ranking: 30, strength: "Good", fees: "₹5.2L", feeType: "per-year" }
    ],
    highlights: ["Amrita University", "Spiritual environment", "Quality education", "Research focus"],
    website: "https://www.amrita.edu",
    image: "/placeholder.svg"
  }
];