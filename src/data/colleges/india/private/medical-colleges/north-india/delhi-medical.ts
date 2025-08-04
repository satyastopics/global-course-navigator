import { College } from '../../../../../../types/collegeTypes';

export const delhiPrivateMedical: College[] = [
  {
    id: "delhi-med-01",
    name: "Jamia Hamdard University",
    location: "New Delhi, India",
    type: "Deemed",
    overallRanking: 45,
    establishedYear: 1989,
    courses: [
      { name: "Medicine", ranking: 35, strength: "Good", fees: "₹40L", feeType: "total" },
      { name: "Pharmacy", ranking: 25, strength: "Very Good", fees: "₹8L", feeType: "total" },
      { name: "Nursing", ranking: 28, strength: "Very Good", fees: "₹6L", feeType: "total" }
    ],
    highlights: ["Deemed university", "Research focus", "Unani medicine", "Government recognition"],
    website: "https://www.jamiahamdard.edu",
    image: "/placeholder.svg"
  }
];