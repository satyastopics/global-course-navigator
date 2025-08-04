import { College } from '../../../../../../types/collegeTypes';

export const upPrivateMedical: College[] = [
  {
    id: "up-med-01",
    name: "Sharda University Medical College",
    location: "Greater Noida, Uttar Pradesh, India",
    type: "Private",
    overallRanking: 58,
    establishedYear: 2009,
    courses: [
      { name: "Medicine", ranking: 45, strength: "Good", fees: "₹75L", feeType: "total" },
      { name: "Dentistry", ranking: 42, strength: "Good", fees: "₹45L", feeType: "total" },
      { name: "Nursing", ranking: 35, strength: "Good", fees: "₹8L", feeType: "total" }
    ],
    highlights: ["Multi-disciplinary university", "Modern facilities", "Industry partnerships", "Research focus"],
    website: "https://www.sharda.ac.in",
    image: "/placeholder.svg"
  }
];