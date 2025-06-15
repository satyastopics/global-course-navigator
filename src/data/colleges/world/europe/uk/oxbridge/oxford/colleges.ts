
import { College } from '../../../../../../types/collegeTypes';

export const oxfordColleges: College[] = [
  {
    id: "oxford-01",
    name: "University of Oxford",
    location: "Oxford, United Kingdom",
    type: "Public",
    overallRanking: 1,
    establishedYear: 1096,
    courses: [
      { name: "Philosophy, Politics and Economics", ranking: 1, strength: "Excellent", fees: "£9,250", feeType: "per-year" },
      { name: "Medicine", ranking: 1, strength: "Excellent", fees: "£9,250", feeType: "per-year" },
      { name: "Law", ranking: 1, strength: "Excellent", fees: "£9,250", feeType: "per-year" },
      { name: "English Literature", ranking: 1, strength: "Excellent", fees: "£9,250", feeType: "per-year" }
    ],
    highlights: ["World's oldest English-speaking university", "Prime Ministers educated here", "Historic traditions", "Academic prestige"],
    website: "https://www.ox.ac.uk",
    image: "/placeholder.svg"
  }
];
