
import { College } from '../../../../../../types/collegeTypes';

export const oxfordColleges: College[] = [
  {
    id: "oxford-trinity",
    name: "Trinity College, Oxford",
    location: "Oxford, England, UK",
    type: "Public",
    overallRanking: 3,
    establishedYear: 1555,
    courses: [
      { name: "Philosophy", ranking: 1, strength: "Excellent", fees: "£35K", feeType: "per-year" },
      { name: "Mathematics", ranking: 2, strength: "Excellent", fees: "£35K", feeType: "per-year" },
      { name: "History", ranking: 1, strength: "Excellent", fees: "£35K", feeType: "per-year" }
    ],
    highlights: ["Historic college", "Outstanding tutoring", "Beautiful architecture", "Academic excellence"],
    website: "https://www.trinity.ox.ac.uk",
    image: "/placeholder.svg"
  },
  {
    id: "oxford-christ-church",
    name: "Christ Church, Oxford",
    location: "Oxford, England, UK",
    type: "Public",
    overallRanking: 3,
    establishedYear: 1546,
    courses: [
      { name: "Classics", ranking: 1, strength: "Excellent", fees: "£35K", feeType: "per-year" },
      { name: "English Literature", ranking: 1, strength: "Excellent", fees: "£35K", feeType: "per-year" },
      { name: "Law", ranking: 2, strength: "Excellent", fees: "£35K", feeType: "per-year" }
    ],
    highlights: ["Cathedral college", "Harry Potter filming", "Prime Ministers", "Academic prestige"],
    website: "https://www.chch.ox.ac.uk",
    image: "/placeholder.svg"
  }
];
