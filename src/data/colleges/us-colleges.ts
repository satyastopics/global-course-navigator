
import { College } from '../../types/collegeTypes';

export const usColleges: College[] = [
  {
    id: "1",
    name: "Massachusetts Institute of Technology",
    location: "Cambridge, MA, USA",
    type: "Private",
    overallRanking: 1,
    establishedYear: 1861,
    courses: [
      { name: "Computer Science", ranking: 1, strength: "Excellent", fees: "$58,240", feeType: "per-year" },
      { name: "Engineering", ranking: 1, strength: "Excellent", fees: "$58,240", feeType: "per-year" },
      { name: "Physics", ranking: 2, strength: "Excellent", fees: "$58,240", feeType: "per-year" },
      { name: "Mathematics", ranking: 3, strength: "Excellent", fees: "$58,240", feeType: "per-year" }
    ],
    highlights: ["Top-ranked university", "Strong STEM focus", "Innovative research", "Global alumni network"],
    website: "https://web.mit.edu",
    image: "/placeholder.svg"
  },
  {
    id: "2",
    name: "Stanford University",
    location: "Stanford, CA, USA",
    type: "Private",
    overallRanking: 2,
    establishedYear: 1885,
    courses: [
      { name: "Computer Science", ranking: 2, strength: "Excellent", fees: "$61,731", feeType: "per-year" },
      { name: "Engineering", ranking: 2, strength: "Excellent", fees: "$61,731", feeType: "per-year" },
      { name: "Business", ranking: 1, strength: "Excellent", fees: "$78,898", feeType: "per-year" },
      { name: "Medicine", ranking: 3, strength: "Excellent", fees: "$66,996", feeType: "per-year" }
    ],
    highlights: ["Silicon Valley proximity", "Entrepreneurial culture", "Strong research", "Diverse programs"],
    website: "https://www.stanford.edu",
    image: "/placeholder.svg"
  },
  {
    id: "3",
    name: "Harvard University",
    location: "Cambridge, MA, USA",
    type: "Private",
    overallRanking: 3,
    establishedYear: 1636,
    courses: [
      { name: "Law", ranking: 1, strength: "Excellent", fees: "$70,430", feeType: "per-year" },
      { name: "Business", ranking: 2, strength: "Excellent", fees: "$73,440", feeType: "per-year" },
      { name: "Medicine", ranking: 1, strength: "Excellent", fees: "$69,300", feeType: "per-year" },
      { name: "Liberal Arts", ranking: 1, strength: "Excellent", fees: "$56,550", feeType: "per-year" }
    ],
    highlights: ["Oldest US university", "Prestigious faculty", "Extensive library", "Strong global influence"],
    website: "https://www.harvard.edu",
    image: "/placeholder.svg"
  },
  {
    id: "4",
    name: "California Institute of Technology",
    location: "Pasadena, CA, USA",
    type: "Private",
    overallRanking: 4,
    establishedYear: 1891,
    courses: [
      { name: "Physics", ranking: 1, strength: "Excellent", fees: "$60,864", feeType: "per-year" },
      { name: "Engineering", ranking: 3, strength: "Excellent", fees: "$60,864", feeType: "per-year" },
      { name: "Computer Science", ranking: 5, strength: "Excellent", fees: "$60,864", feeType: "per-year" },
      { name: "Mathematics", ranking: 2, strength: "Excellent", fees: "$60,864", feeType: "per-year" }
    ],
    highlights: ["Small student body", "Research intensive", "Strong STEM focus", "Nobel laureates"],
    website: "https://www.caltech.edu",
    image: "/placeholder.svg"
  },
  {
    id: "8",
    name: "University of Chicago",
    location: "Chicago, IL, USA",
    type: "Private",
    overallRanking: 8,
    establishedYear: 1890,
    courses: [
      { name: "Economics", ranking: 1, strength: "Excellent", fees: "$62,940", feeType: "per-year" },
      { name: "Law", ranking: 3, strength: "Excellent", fees: "$71,676", feeType: "per-year" },
      { name: "Business", ranking: 3, strength: "Excellent", fees: "$75,000", feeType: "per-year" },
      { name: "Sociology", ranking: 2, strength: "Excellent", fees: "$62,940", feeType: "per-year" }
    ],
    highlights: ["Strong social sciences", "Research university", "Urban campus", "Nobel laureates"],
    website: "https://www.uchicago.edu",
    image: "/placeholder.svg"
  },
  {
    id: "10",
    name: "University of California, Berkeley",
    location: "Berkeley, CA, USA",
    type: "Public",
    overallRanking: 10,
    establishedYear: 1868,
    courses: [
      { name: "Computer Science", ranking: 4, strength: "Excellent", fees: "$47,644", feeType: "per-year" },
      { name: "Engineering", ranking: 6, strength: "Excellent", fees: "$47,644", feeType: "per-year" },
      { name: "Business", ranking: 7, strength: "Very Good", fees: "$63,700", feeType: "per-year" },
      { name: "Law", ranking: 9, strength: "Very Good", fees: "$53,315", feeType: "per-year" }
    ],
    highlights: ["Top public university", "Strong research", "Diverse student body", "Bay Area location"],
    website: "https://www.berkeley.edu",
    image: "/placeholder.svg"
  }
];
