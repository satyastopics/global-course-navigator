
import { College } from '../../../../../../../types/collegeTypes';

export const westBengalPrivateMedical: College[] = [
  {
    id: "med-wb-kol-01",
    name: "Techno India University",
    location: "Kolkata, West Bengal, India",
    type: "Private",
    overallRanking: 58,
    establishedYear: 2012,
    courses: [
      { name: "Medicine", ranking: 45, strength: "Good", fees: "₹16L", feeType: "per-year" },
      { name: "Engineering", ranking: 55, strength: "Good", fees: "₹2.8L", feeType: "per-year" },
      { name: "Management", ranking: 65, strength: "Good", fees: "₹7L", feeType: "total" }
    ],
    highlights: ["Multi-disciplinary university", "Modern facilities", "Industry partnerships", "Research focus"],
    website: "https://www.technoindiauniversity.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "med-wb-kol-02",
    name: "IQ City Medical College",
    location: "Durgapur, West Bengal, India",
    type: "Private",
    overallRanking: 68,
    establishedYear: 2014,
    courses: [
      { name: "Medicine", ranking: 52, strength: "Good", fees: "₹18L", feeType: "per-year" },
      { name: "Nursing", ranking: 45, strength: "Good", fees: "₹2.5L", feeType: "per-year" }
    ],
    highlights: ["Modern medical college", "Hospital attached", "Quality education", "Clinical training"],
    website: "https://www.iqcitymedicalcollege.com",
    image: "/placeholder.svg"
  },
  {
    id: "med-wb-kol-03",
    name: "Calcutta Institute of Engineering and Management",
    location: "Kolkata, West Bengal, India",
    type: "Private",
    overallRanking: 75,
    establishedYear: 2010,
    courses: [
      { name: "Medicine", ranking: 58, strength: "Good", fees: "₹15L", feeType: "per-year" },
      { name: "Engineering", ranking: 68, strength: "Good", fees: "₹2.2L", feeType: "per-year" }
    ],
    highlights: ["Multi-disciplinary institute", "Industry connect", "Modern infrastructure", "Quality education"],
    website: "https://www.ciem.ac.in",
    image: "/placeholder.svg"
  }
];
