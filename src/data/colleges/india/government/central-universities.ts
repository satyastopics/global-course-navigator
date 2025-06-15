
import { College } from '../../../../types/collegeTypes';

export const centralUniversities: College[] = [
  {
    id: "13",
    name: "Indian Institute of Science",
    location: "Bangalore, Karnataka, India",
    type: "Deemed",
    overallRanking: 3,
    establishedYear: 1909,
    courses: [
      { name: "Physics", ranking: 1, strength: "Excellent", fees: "₹25K", feeType: "per-year" },
      { name: "Computer Science", ranking: 3, strength: "Excellent", fees: "₹25K", feeType: "per-year" },
      { name: "Engineering", ranking: 4, strength: "Excellent", fees: "₹25K", feeType: "per-year" },
      { name: "Mathematics", ranking: 2, strength: "Excellent", fees: "₹25K", feeType: "per-year" }
    ],
    highlights: ["Research-focused", "Oldest science institute", "Low fees", "PhD programs"],
    website: "https://www.iisc.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "16",
    name: "All India Institute of Medical Sciences",
    location: "New Delhi, Delhi, India",
    type: "Government",
    overallRanking: 6,
    establishedYear: 1956,
    courses: [
      { name: "Medicine", ranking: 1, strength: "Excellent", fees: "₹6K", feeType: "per-year" },
      { name: "Nursing", ranking: 1, strength: "Excellent", fees: "₹3K", feeType: "per-year" },
      { name: "Biotechnology", ranking: 3, strength: "Very Good", fees: "₹6K", feeType: "per-year" },
      { name: "Pharmacy", ranking: 2, strength: "Very Good", fees: "₹6K", feeType: "per-year" }
    ],
    highlights: ["Premier medical institute", "Extremely low fees", "Top healthcare", "Research excellence"],
    website: "https://www.aiims.edu",
    image: "/placeholder.svg"
  },
  {
    id: "31",
    name: "Jawaharlal Nehru University",
    location: "New Delhi, Delhi, India",
    type: "Government",
    overallRanking: 11,
    establishedYear: 1969,
    courses: [
      { name: "Political Science", ranking: 1, strength: "Excellent", fees: "₹500", feeType: "per-year" },
      { name: "International Relations", ranking: 1, strength: "Excellent", fees: "₹500", feeType: "per-year" },
      { name: "Social Sciences", ranking: 2, strength: "Excellent", fees: "₹500", feeType: "per-year" },
      { name: "Languages", ranking: 3, strength: "Very Good", fees: "₹500", feeType: "per-year" }
    ],
    highlights: ["Social sciences leader", "Very low fees", "Research university", "Political science excellence"],
    website: "https://www.jnu.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "32",
    name: "University of Delhi",
    location: "New Delhi, Delhi, India",
    type: "Government",
    overallRanking: 12,
    establishedYear: 1922,
    courses: [
      { name: "Arts", ranking: 2, strength: "Excellent", fees: "₹15K", feeType: "per-year" },
      { name: "Science", ranking: 5, strength: "Very Good", fees: "₹25K", feeType: "per-year" },
      { name: "Commerce", ranking: 1, strength: "Excellent", fees: "₹18K", feeType: "per-year" },
      { name: "Law", ranking: 4, strength: "Very Good", fees: "₹35K", feeType: "per-year" }
    ],
    highlights: ["Large university system", "Affordable education", "Central location", "Diverse programs"],
    website: "https://www.du.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "34",
    name: "Indian Statistical Institute",
    location: "Kolkata, West Bengal, India",
    type: "Deemed",
    overallRanking: 14,
    establishedYear: 1931,
    courses: [
      { name: "Statistics", ranking: 1, strength: "Excellent", fees: "₹2K", feeType: "per-year" },
      { name: "Mathematics", ranking: 1, strength: "Excellent", fees: "₹2K", feeType: "per-year" },
      { name: "Computer Science", ranking: 12, strength: "Very Good", fees: "₹25K", feeType: "per-year" },
      { name: "Economics", ranking: 5, strength: "Very Good", fees: "₹2K", feeType: "per-year" }
    ],
    highlights: ["Statistics excellence", "Very low fees", "Research focus", "Unique programs"],
    website: "https://www.isical.ac.in",
    image: "/placeholder.svg"
  }
];
