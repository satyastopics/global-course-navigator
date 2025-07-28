import { College } from '../../../../../types/collegeTypes';

export const southIndiaArchitectureColleges: College[] = [
  {
    id: "arch-south-01",
    name: "RV School of Architecture",
    location: "Bangalore, Karnataka, India",
    type: "Private",
    overallRanking: 12,
    establishedYear: 1994,
    courses: [
      { name: "B.Arch", ranking: 12, strength: "Very Good", fees: "₹3L", feeType: "per-year" },
      { name: "M.Arch", ranking: 15, strength: "Very Good", fees: "₹4L", feeType: "per-year" }
    ],
    highlights: ["RV Educational Consortium", "Excellence in design", "Industry partnerships", "Research focus"],
    website: "https://www.rvce.edu.in",
    image: "/placeholder.svg"
  },
  {
    id: "arch-south-02",
    name: "SRM School of Architecture",
    location: "Chennai, Tamil Nadu, India",
    type: "Private",
    overallRanking: 18,
    establishedYear: 2008,
    courses: [
      { name: "B.Arch", ranking: 18, strength: "Good", fees: "₹4.5L", feeType: "per-year" },
      { name: "M.Arch", ranking: 20, strength: "Good", fees: "₹5.5L", feeType: "per-year" }
    ],
    highlights: ["SRM University", "Modern studios", "Technology integration", "International exposure"],
    website: "https://www.srmist.edu.in",
    image: "/placeholder.svg"
  },
  {
    id: "arch-south-03",
    name: "Acharya School of Architecture",
    location: "Bangalore, Karnataka, India",
    type: "Private",
    overallRanking: 25,
    establishedYear: 2000,
    courses: [
      { name: "B.Arch", ranking: 25, strength: "Good", fees: "₹4L", feeType: "per-year" },
      { name: "M.Arch", ranking: 28, strength: "Good", fees: "₹5L", feeType: "per-year" }
    ],
    highlights: ["Acharya University", "Design innovation", "Industry connect", "Modern facilities"],
    website: "https://www.acharya.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "arch-south-04",
    name: "Vellore Institute of Technology School of Architecture",
    location: "Vellore, Tamil Nadu, India",
    type: "Private",
    overallRanking: 20,
    establishedYear: 2010,
    courses: [
      { name: "B.Arch", ranking: 20, strength: "Good", fees: "₹3.5L", feeType: "per-year" },
      { name: "M.Arch", ranking: 22, strength: "Good", fees: "₹4.5L", feeType: "per-year" }
    ],
    highlights: ["VIT University", "Technology focus", "Research programs", "Industry partnerships"],
    website: "https://vit.ac.in",
    image: "/placeholder.svg"
  }
];