import { College } from '../../../../types/collegeTypes';

export const ivyLeagueColleges: College[] = [
  {
    id: "1",
    name: "Harvard University",
    location: "Cambridge, Massachusetts, USA",
    type: "Ivy League",
    overallRanking: 1,
    establishedYear: 1636,
    courses: [
      { name: "Business", ranking: 1, strength: "Excellent", fees: "$73,600", feeType: "per-year" },
      { name: "Law", ranking: 2, strength: "Excellent", fees: "$70,430", feeType: "per-year" },
      { name: "Medicine", ranking: 1, strength: "Excellent", fees: "$68,123", feeType: "per-year" },
      { name: "Computer Science", ranking: 5, strength: "Excellent", fees: "$55,510", feeType: "per-year" }
    ],
    highlights: ["Oldest institution in the US", "Largest academic library", "Generous financial aid", "Strong alumni network"],
    website: "https://www.harvard.edu",
    image: "/placeholder.svg"
  },
  {
    id: "2",
    name: "Stanford University",
    location: "Stanford, California, USA",
    type: "Private",
    overallRanking: 2,
    establishedYear: 1885,
    courses: [
      { name: "Computer Science", ranking: 1, strength: "Excellent", fees: "$56,169", feeType: "per-year" },
      { name: "Engineering", ranking: 2, strength: "Excellent", fees: "$56,169", feeType: "per-year" },
      { name: "Business", ranking: 2, strength: "Excellent", fees: "$76,950", feeType: "per-year" },
      { name: "Medicine", ranking: 4, strength: "Excellent", fees: "$60,234", feeType: "per-year" }
    ],
    highlights: ["Silicon Valley location", "Entrepreneurial culture", "Research powerhouse", "Interdisciplinary programs"],
    website: "https://www.stanford.edu",
    image: "/placeholder.svg"
  },
  {
    id: "3",
    name: "Massachusetts Institute of Technology",
    location: "Cambridge, Massachusetts, USA",
    type: "Private",
    overallRanking: 3,
    establishedYear: 1861,
    courses: [
      { name: "Engineering", ranking: 1, strength: "Excellent", fees: "$55,878", feeType: "per-year" },
      { name: "Computer Science", ranking: 2, strength: "Excellent", fees: "$55,878", feeType: "per-year" },
      { name: "Physics", ranking: 1, strength: "Excellent", fees: "$55,878", feeType: "per-year" },
      { name: "Business", ranking: 5, strength: "Excellent", fees: "$77,168", feeType: "per-year" }
    ],
    highlights: ["STEM focused", "Research excellence", "Innovation ecosystem", "Competitive admission"],
    website: "https://www.mit.edu",
    image: "/placeholder.svg"
  },
  {
    id: "4",
    name: "Princeton University",
    location: "Princeton, New Jersey, USA",
    type: "Ivy League",
    overallRanking: 4,
    establishedYear: 1746,
    courses: [
      { name: "Mathematics", ranking: 2, strength: "Excellent", fees: "$56,010", feeType: "per-year" },
      { name: "Economics", ranking: 1, strength: "Excellent", fees: "$56,010", feeType: "per-year" },
      { name: "Public Policy", ranking: 4, strength: "Excellent", fees: "$56,010", feeType: "per-year" },
      { name: "Engineering", ranking: 10, strength: "Very Good", fees: "$56,010", feeType: "per-year" }
    ],
    highlights: ["No graduate business or medical school", "Strong focus on undergraduate teaching", "Generous financial aid", "Close student-faculty interaction"],
    website: "https://www.princeton.edu",
    image: "/placeholder.svg"
  },
  {
    id: "8",
    name: "Yale University",
    location: "New Haven, Connecticut, USA",
    type: "Ivy League",
    overallRanking: 8,
    establishedYear: 1701,
    courses: [
      { name: "Law", ranking: 1, strength: "Excellent", fees: "$69,975", feeType: "per-year" },
      { name: "Medicine", ranking: 5, strength: "Excellent", fees: "$66,160", feeType: "per-year" },
      { name: "Drama", ranking: 1, strength: "Excellent", fees: "$34,800", feeType: "per-year" },
      { name: "Economics", ranking: 3, strength: "Excellent", fees: "$57,700", feeType: "per-year" }
    ],
    highlights: ["Residential college system", "Strong liberal arts", "Historic campus", "Extensive resources"],
    website: "https://www.yale.edu",
    image: "/placeholder.svg"
  }
];
