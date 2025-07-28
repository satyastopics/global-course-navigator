import { College } from '../../../../../types/collegeTypes';

export const eastIndiaDentalColleges: College[] = [
  {
    id: "dental-east-01",
    name: "Institute of Dental Sciences",
    location: "Bhubaneswar, Odisha, India",
    type: "Private",
    overallRanking: 24,
    establishedYear: 2005,
    courses: [
      { name: "BDS", ranking: 24, strength: "Good", fees: "₹8L", feeType: "total" },
      { name: "MDS", ranking: 26, strength: "Good", fees: "₹12L", feeType: "total" }
    ],
    highlights: ["SOA University", "Modern facilities", "Clinical training", "Research programs"],
    website: "https://www.soa.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "dental-east-02",
    name: "Institute of Dental Studies and Technologies",
    location: "Kalyani, West Bengal, India",
    type: "Private",
    overallRanking: 38,
    establishedYear: 2013,
    courses: [
      { name: "BDS", ranking: 35, strength: "Good", fees: "₹6L", feeType: "total" },
      { name: "MDS", ranking: 40, strength: "Good", fees: "₹10L", feeType: "total" }
    ],
    highlights: ["Modern infrastructure", "Clinical excellence", "Affordable fees", "Quality education"],
    website: "https://www.idst.edu.in",
    image: "/placeholder.svg"
  },
  {
    id: "dental-east-03",
    name: "Kalinga Institute of Dental Sciences",
    location: "Bhubaneswar, Odisha, India",
    type: "Private",
    overallRanking: 45,
    establishedYear: 2010,
    courses: [
      { name: "BDS", ranking: 42, strength: "Good", fees: "₹7L", feeType: "total" },
      { name: "MDS", ranking: 48, strength: "Average", fees: "₹11L", feeType: "total" }
    ],
    highlights: ["KIIT University", "Clinical training", "Modern labs", "Research opportunities"],
    website: "https://www.kiit.ac.in",
    image: "/placeholder.svg"
  }
];