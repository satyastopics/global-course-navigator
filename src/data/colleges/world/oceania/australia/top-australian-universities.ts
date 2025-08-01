import { College } from '../../../../../types/collegeTypes';

export const topAustralianUniversities: College[] = [
  {
    id: "australia-01",
    name: "University of Melbourne",
    location: "Melbourne, Victoria, Australia",
    type: "Public",
    overallRanking: 33,
    establishedYear: 1853,
    courses: [
      { name: "Medicine", ranking: 26, strength: "Very Good", fees: "AUD 73,536", feeType: "per-year" },
      { name: "Law", ranking: 8, strength: "Excellent", fees: "AUD 48,896", feeType: "per-year" },
      { name: "Engineering", ranking: 28, strength: "Very Good", fees: "AUD 48,736", feeType: "per-year" },
      { name: "Business", ranking: 22, strength: "Very Good", fees: "AUD 47,712", feeType: "per-year" }
    ],
    highlights: ["Australia's top university", "Research excellence", "Historic prestige", "Melbourne city campus"],
    website: "https://www.unimelb.edu.au",
    image: "/placeholder.svg"
  },
  {
    id: "australia-02",
    name: "Australian National University",
    location: "Canberra, ACT, Australia",
    type: "Public",
    overallRanking: 30,
    establishedYear: 1946,
    courses: [
      { name: "Political Science", ranking: 9, strength: "Excellent", fees: "AUD 47,940", feeType: "per-year" },
      { name: "International Relations", ranking: 7, strength: "Excellent", fees: "AUD 47,940", feeType: "per-year" },
      { name: "Economics", ranking: 24, strength: "Very Good", fees: "AUD 47,940", feeType: "per-year" },
      { name: "Physics", ranking: 32, strength: "Good", fees: "AUD 47,940", feeType: "per-year" }
    ],
    highlights: ["National university", "Policy research", "Government connections", "Capital city location"],
    website: "https://www.anu.edu.au",
    image: "/placeholder.svg"
  },
  {
    id: "australia-03",
    name: "University of Sydney",
    location: "Sydney, New South Wales, Australia",
    type: "Public",
    overallRanking: 41,
    establishedYear: 1850,
    courses: [
      { name: "Medicine", ranking: 30, strength: "Good", fees: "AUD 73,000", feeType: "per-year" },
      { name: "Engineering", ranking: 38, strength: "Good", fees: "AUD 50,500", feeType: "per-year" },
      { name: "Business", ranking: 28, strength: "Very Good", fees: "AUD 48,000", feeType: "per-year" },
      { name: "Architecture", ranking: 15, strength: "Excellent", fees: "AUD 48,000", feeType: "per-year" }
    ],
    highlights: ["Historic sandstone campus", "Sydney harbor proximity", "Research intensive", "Alumni network"],
    website: "https://www.sydney.edu.au", 
    image: "/placeholder.svg"
  },
  {
    id: "australia-04",
    name: "UNSW Sydney",
    location: "Sydney, New South Wales, Australia",
    type: "Public",
    overallRanking: 45,
    establishedYear: 1949,
    courses: [
      { name: "Engineering", ranking: 26, strength: "Very Good", fees: "AUD 49,370", feeType: "per-year" },
      { name: "Business", ranking: 25, strength: "Very Good", fees: "AUD 47,760", feeType: "per-year" },
      { name: "Law", ranking: 16, strength: "Excellent", fees: "AUD 47,760", feeType: "per-year" },
      { name: "Medicine", ranking: 35, strength: "Good", fees: "AUD 70,320", feeType: "per-year" }
    ],
    highlights: ["Innovation focus", "Industry partnerships", "Tech hub", "Research excellence"],
    website: "https://www.unsw.edu.au",
    image: "/placeholder.svg"
  },
  {
    id: "australia-05",
    name: "University of Queensland",
    location: "Brisbane, Queensland, Australia",
    type: "Public",
    overallRanking: 50,
    establishedYear: 1909,
    courses: [
      { name: "Engineering", ranking: 32, strength: "Good", fees: "AUD 46,112", feeType: "per-year" },
      { name: "Medicine", ranking: 38, strength: "Good", fees: "AUD 69,216", feeType: "per-year" },
      { name: "Business", ranking: 35, strength: "Good", fees: "AUD 44,272", feeType: "per-year" },
      { name: "Liberal Arts", ranking: 40, strength: "Good", fees: "AUD 35,776", feeType: "per-year" }
    ],
    highlights: ["Sandstone university", "Research intensive", "Beautiful campus", "Queensland hub"],
    website: "https://www.uq.edu.au",
    image: "/placeholder.svg"
  },
  {
    id: "australia-06", 
    name: "Monash University",
    location: "Melbourne, Victoria, Australia",
    type: "Public",
    overallRanking: 57,
    establishedYear: 1958,
    courses: [
      { name: "Medicine", ranking: 40, strength: "Good", fees: "AUD 69,000", feeType: "per-year" },
      { name: "Engineering", ranking: 35, strength: "Good", fees: "AUD 48,000", feeType: "per-year" },
      { name: "Business", ranking: 42, strength: "Good", fees: "AUD 46,000", feeType: "per-year" },
      { name: "Liberal Arts", ranking: 45, strength: "Good", fees: "AUD 33,800", feeType: "per-year" }
    ],
    highlights: ["Large research university", "International campuses", "Innovation", "Melbourne"],
    website: "https://www.monash.edu",
    image: "/placeholder.svg"
  },
  {
    id: "australia-07",
    name: "University of Western Australia",
    location: "Perth, Western Australia, Australia",
    type: "Public",
    overallRanking: 90,
    establishedYear: 1911,
    courses: [
      { name: "Engineering", ranking: 42, strength: "Good", fees: "AUD 42,900", feeType: "per-year" },
      { name: "Medicine", ranking: 45, strength: "Good", fees: "AUD 68,400", feeType: "per-year" },
      { name: "Business", ranking: 48, strength: "Good", fees: "AUD 38,700", feeType: "per-year" },
      { name: "Liberal Arts", ranking: 52, strength: "Average", fees: "AUD 35,200", feeType: "per-year" }
    ],
    highlights: ["Sandstone university", "Beautiful campus", "Research", "Western Australia"],
    website: "https://www.uwa.edu.au",
    image: "/placeholder.svg"
  },
  {
    id: "australia-08",
    name: "University of Adelaide",
    location: "Adelaide, South Australia, Australia",
    type: "Public",
    overallRanking: 109,
    establishedYear: 1874,
    courses: [
      { name: "Engineering", ranking: 45, strength: "Good", fees: "AUD 44,500", feeType: "per-year" },
      { name: "Medicine", ranking: 48, strength: "Good", fees: "AUD 66,000", feeType: "per-year" },
      { name: "Liberal Arts", ranking: 55, strength: "Average", fees: "AUD 35,500", feeType: "per-year" },
      { name: "Business", ranking: 58, strength: "Average", fees: "AUD 40,500", feeType: "per-year" }
    ],
    highlights: ["Historic university", "Research tradition", "Wine region", "Nobel laureates"],
    website: "https://www.adelaide.edu.au",
    image: "/placeholder.svg"
  },
  {
    id: "australia-09",
    name: "University of Technology Sydney",
    location: "Sydney, New South Wales, Australia",
    type: "Public",
    overallRanking: 133,
    establishedYear: 1988,
    courses: [
      { name: "Engineering", ranking: 48, strength: "Good", fees: "AUD 47,470", feeType: "per-year" },
      { name: "Computer Science", ranking: 52, strength: "Average", fees: "AUD 47,470", feeType: "per-year" },
      { name: "Business", ranking: 55, strength: "Average", fees: "AUD 43,008", feeType: "per-year" },
      { name: "Design", ranking: 18, strength: "Very Good", fees: "AUD 40,320", feeType: "per-year" }
    ],
    highlights: ["Tech focus", "Modern campus", "Industry connections", "Innovation"],
    website: "https://www.uts.edu.au",
    image: "/placeholder.svg"
  },
  {
    id: "australia-10",
    name: "Queensland University of Technology",
    location: "Brisbane, Queensland, Australia",
    type: "Public",
    overallRanking: 189,
    establishedYear: 1989,
    courses: [
      { name: "Engineering", ranking: 55, strength: "Average", fees: "AUD 38,900", feeType: "per-year" },
      { name: "Business", ranking: 62, strength: "Average", fees: "AUD 36,400", feeType: "per-year" },
      { name: "Computer Science", ranking: 58, strength: "Average", fees: "AUD 38,900", feeType: "per-year" },
      { name: "Creative Arts", ranking: 25, strength: "Very Good", fees: "AUD 34,200", feeType: "per-year" }
    ],
    highlights: ["Industry focus", "Real-world learning", "Innovation", "Queensland tech hub"],
    website: "https://www.qut.edu.au",
    image: "/placeholder.svg"
  }
];