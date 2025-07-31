import { College } from '../../../../types/collegeTypes';

export const nluColleges: College[] = [
  {
    id: "nlu-01",
    name: "National Law School of India University",
    location: "Bangalore, Karnataka, India",
    type: "Government",
    overallRanking: 3,
    establishedYear: 1987,
    courses: [
      { name: "Law", ranking: 1, strength: "Excellent", fees: "₹2.5L", feeType: "per-year" },
      { name: "Legal Studies", ranking: 1, strength: "Excellent", fees: "₹2.5L", feeType: "per-year" }
    ],
    highlights: ["Premier law school", "Judicial excellence", "Top faculty", "Strong alumni network"],
    website: "https://www.nls.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "nlu-02",
    name: "NALSAR University of Law",
    location: "Hyderabad, Telangana, India",
    type: "Government",
    overallRanking: 6,
    establishedYear: 1998,
    courses: [
      { name: "Law", ranking: 2, strength: "Excellent", fees: "₹2.8L", feeType: "per-year" },
      { name: "Legal Studies", ranking: 2, strength: "Excellent", fees: "₹2.8L", feeType: "per-year" }
    ],
    highlights: ["Top NLU", "Corporate law focus", "International programs", "Research excellence"],
    website: "https://www.nalsar.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "nlu-03",
    name: "West Bengal National University of Juridical Sciences",
    location: "Kolkata, West Bengal, India",
    type: "Government",
    overallRanking: 8,
    establishedYear: 1999,
    courses: [
      { name: "Law", ranking: 3, strength: "Excellent", fees: "₹2.2L", feeType: "per-year" },
      { name: "Legal Studies", ranking: 3, strength: "Excellent", fees: "₹2.2L", feeType: "per-year" }
    ],
    highlights: ["Eastern India's premier law school", "High Court proximity", "Academic excellence", "Moot court champions"],
    website: "https://www.nujs.edu",
    image: "/placeholder.svg"
  },
  {
    id: "nlu-04",
    name: "Gujarat National Law University",
    location: "Gandhinagar, Gujarat, India",
    type: "Government",
    overallRanking: 12,
    establishedYear: 2003,
    courses: [
      { name: "Law", ranking: 4, strength: "Very Good", fees: "₹3L", feeType: "per-year" },
      { name: "Legal Studies", ranking: 4, strength: "Very Good", fees: "₹3L", feeType: "per-year" }
    ],
    highlights: ["Gujarat's premier law university", "Corporate law specialization", "Modern infrastructure", "Industry connect"],
    website: "https://www.gnlu.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "nlu-05",
    name: "Rajiv Gandhi School of Intellectual Property Law",
    location: "Kharagpur, West Bengal, India",
    type: "Government",
    overallRanking: 15,
    establishedYear: 2006,
    courses: [
      { name: "Law", ranking: 6, strength: "Very Good", fees: "₹2L", feeType: "per-year" },
      { name: "Intellectual Property Law", ranking: 1, strength: "Excellent", fees: "₹2L", feeType: "per-year" }
    ],
    highlights: ["IP law specialization", "IIT Kharagpur collaboration", "Technology law focus", "Research oriented"],
    website: "https://www.iitkgp.ac.in/department/LS",
    image: "/placeholder.svg"
  },
  {
    id: "nlu-06",
    name: "Hidayatullah National Law University",
    location: "Raipur, Chhattisgarh, India",
    type: "Government",
    overallRanking: 18,
    establishedYear: 2003,
    courses: [
      { name: "Law", ranking: 8, strength: "Very Good", fees: "₹1.8L", feeType: "per-year" },
      { name: "Legal Studies", ranking: 8, strength: "Very Good", fees: "₹1.8L", feeType: "per-year" }
    ],
    highlights: ["Central India law education", "Affordable quality education", "Rural law focus", "Social justice orientation"],
    website: "https://www.hnlu.ac.in",
    image: "/placeholder.svg"
  }
];