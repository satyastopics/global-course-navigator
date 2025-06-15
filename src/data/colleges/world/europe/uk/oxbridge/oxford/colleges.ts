
import { College } from '../../../../../../../types/collegeTypes';

export const oxfordColleges: College[] = [
  {
    id: "80",
    name: "University of Oxford",
    location: "Oxford, England, UK",
    type: "Public",
    overallRanking: 2,
    establishedYear: 1096,
    courses: [
      { name: "Medicine", ranking: 2, strength: "Excellent", fees: "£35K", feeType: "per-year" },
      { name: "Law", ranking: 3, strength: "Excellent", fees: "£32K", feeType: "per-year" },
      { name: "Business", ranking: 5, strength: "Excellent", fees: "£65K", feeType: "per-year" },
      { name: "Engineering", ranking: 8, strength: "Very Good", fees: "£35K", feeType: "per-year" }
    ],
    highlights: ["World's oldest English university", "Tutorial system", "Global prestige", "Nobel laureates"],
    website: "https://www.ox.ac.uk",
    image: "/placeholder.svg"
  }
];
