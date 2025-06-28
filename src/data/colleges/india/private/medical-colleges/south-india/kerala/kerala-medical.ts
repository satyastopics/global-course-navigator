
import { College } from '../../../../../../../types/collegeTypes';

export const keralaPrivateMedical: College[] = [
  {
    id: "med-kl-koc-01",
    name: "Amrita Institute of Medical Sciences",
    location: "Kochi, Kerala, India",
    type: "Private",
    overallRanking: 28,
    establishedYear: 1998,
    courses: [
      { name: "Medicine", ranking: 18, strength: "Very Good", fees: "₹22L", feeType: "per-year" },
      { name: "Nursing", ranking: 12, strength: "Very Good", fees: "₹2L", feeType: "per-year" },
      { name: "Pharmacy", ranking: 15, strength: "Very Good", fees: "₹1.8L", feeType: "per-year" }
    ],
    highlights: ["Premier medical college", "Advanced healthcare", "Research excellence", "Spiritual foundation"],
    website: "https://www.amrita.edu/school/medicine",
    image: "/placeholder.svg"
  },
  {
    id: "med-kl-tri-01",
    name: "Jubilee Mission Medical College",
    location: "Thrissur, Kerala, India",
    type: "Private",
    overallRanking: 58,
    establishedYear: 2008,
    courses: [
      { name: "Medicine", ranking: 48, strength: "Good", fees: "₹18L", feeType: "per-year" },
      { name: "Nursing", ranking: 25, strength: "Good", fees: "₹1.5L", feeType: "per-year" },
      { name: "Pharmacy", ranking: 35, strength: "Good", fees: "₹1.2L", feeType: "per-year" }
    ],
    highlights: ["Christian minority institution", "Healthcare focus", "Community service", "Modern facilities"],
    website: "https://www.jmmc.ac.in",
    image: "/placeholder.svg"
  }
];
