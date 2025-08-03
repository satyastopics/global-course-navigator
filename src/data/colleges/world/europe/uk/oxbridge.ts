import { College } from '../../../../../types/collegeTypes';

export const oxbridgeColleges: College[] = [
  {
    id: "oxbridge-01",
    name: "University of Cambridge",
    location: "Cambridge, United Kingdom",
    type: "Public",
    overallRanking: 2,
    establishedYear: 1209,
    courses: [
      { name: "Mathematics", ranking: 1, strength: "Excellent", fees: "£33,825", feeType: "per-year" },
      { name: "Engineering", ranking: 3, strength: "Excellent", fees: "£37,293", feeType: "per-year" },
      { name: "Medicine", ranking: 3, strength: "Excellent", fees: "£63,990", feeType: "per-year" },
      { name: "Computer Science", ranking: 5, strength: "Excellent", fees: "£37,293", feeType: "per-year" }
    ],
    highlights: ["Ancient university", "Oxbridge prestige", "Tutorial system", "Nobel laureates"],
    website: "https://www.cam.ac.uk",
    image: "/placeholder.svg"
  },
  {
    id: "oxbridge-02",
    name: "University of Oxford",
    location: "Oxford, United Kingdom", 
    type: "Public",
    overallRanking: 4,
    establishedYear: 1096,
    courses: [
      { name: "Liberal Arts", ranking: 1, strength: "Excellent", fees: "£33,050", feeType: "per-year" },
      { name: "Law", ranking: 2, strength: "Excellent", fees: "£33,050", feeType: "per-year" },
      { name: "Medicine", ranking: 2, strength: "Excellent", fees: "£54,240", feeType: "per-year" },
      { name: "Philosophy", ranking: 1, strength: "Excellent", fees: "£33,050", feeType: "per-year" }
    ],
    highlights: ["World's oldest English university", "Tutorial system", "Prime ministers", "Literary tradition"],
    website: "https://www.ox.ac.uk",
    image: "/placeholder.svg"
  }
];