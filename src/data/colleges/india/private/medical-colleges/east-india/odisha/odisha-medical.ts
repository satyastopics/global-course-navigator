
import { College } from '../../../../../../../types/collegeTypes';

export const odishaPrivateMedical: College[] = [
  {
    id: "med-odi-bhu-01",
    name: "Kalinga Institute of Medical Sciences",
    location: "Bhubaneswar, Odisha, India",
    type: "Private",
    overallRanking: 42,
    establishedYear: 2005,
    courses: [
      { name: "Medicine", ranking: 32, strength: "Very Good", fees: "₹22L", feeType: "per-year" },
      { name: "Nursing", ranking: 28, strength: "Very Good", fees: "₹3L", feeType: "per-year" },
      { name: "Pharmacy", ranking: 35, strength: "Good", fees: "₹2.5L", feeType: "per-year" }
    ],
    highlights: ["KIIT University", "Multi-specialty hospital", "Research excellence", "Modern facilities"],
    website: "https://www.kims.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "med-odi-bhu-02",
    name: "Siksha 'O' Anusandhan Medical College",
    location: "Bhubaneswar, Odisha, India",
    type: "Private",
    overallRanking: 55,
    establishedYear: 2010,
    courses: [
      { name: "Medicine", ranking: 42, strength: "Good", fees: "₹20L", feeType: "per-year" },
      { name: "Nursing", ranking: 38, strength: "Good", fees: "₹2.8L", feeType: "per-year" }
    ],
    highlights: ["SOA University", "Hospital attached", "Quality education", "Research focus"],
    website: "https://www.soa.ac.in",
    image: "/placeholder.svg"
  }
];
