import { College } from '../../../../../types/collegeTypes';

export const ivyLeagueColleges: College[] = [
  {
    id: "ivy-01",
    name: "Harvard University",
    location: "Cambridge, Massachusetts, USA",
    type: "Private",
    overallRanking: 2,
    establishedYear: 1636,
    courses: [
      { name: "Medicine", ranking: 1, strength: "Excellent", fees: "$69,300", feeType: "per-year" },
      { name: "Law", ranking: 1, strength: "Excellent", fees: "$73,800", feeType: "per-year" },
      { name: "Business", ranking: 1, strength: "Excellent", fees: "$78,200", feeType: "per-year" },
      { name: "Liberal Arts", ranking: 1, strength: "Excellent", fees: "$57,261", feeType: "per-year" }
    ],
    highlights: ["Oldest US university", "Unparalleled prestige", "Harvard Medical School", "World's largest endowment"],
    website: "https://www.harvard.edu",
    image: "/placeholder.svg"
  },
  {
    id: "ivy-02",
    name: "Yale University",
    location: "New Haven, Connecticut, USA",
    type: "Private",
    overallRanking: 3,
    establishedYear: 1701,
    courses: [
      { name: "Law", ranking: 2, strength: "Excellent", fees: "$71,900", feeType: "per-year" },
      { name: "Liberal Arts", ranking: 2, strength: "Excellent", fees: "$64,700", feeType: "per-year" },
      { name: "Medicine", ranking: 3, strength: "Excellent", fees: "$69,430", feeType: "per-year" },
      { name: "Drama", ranking: 1, strength: "Excellent", fees: "$64,700", feeType: "per-year" }
    ],
    highlights: ["Collegiate Gothic architecture", "Secret societies", "Yale Drama School", "Presidential alumni"],
    website: "https://www.yale.edu",
    image: "/placeholder.svg"
  },
  {
    id: "ivy-03",
    name: "Princeton University",
    location: "Princeton, New Jersey, USA",
    type: "Private",
    overallRanking: 1,
    establishedYear: 1746,
    courses: [
      { name: "Engineering", ranking: 2, strength: "Excellent", fees: "$59,710", feeType: "per-year" },
      { name: "Economics", ranking: 1, strength: "Excellent", fees: "$59,710", feeType: "per-year" },
      { name: "Mathematics", ranking: 2, strength: "Excellent", fees: "$59,710", feeType: "per-year" },
      { name: "Physics", ranking: 1, strength: "Excellent", fees: "$59,710", feeType: "per-year" }
    ],
    highlights: ["No-loan financial aid", "Undergraduate focus", "Beautiful campus", "Academic excellence"],
    website: "https://www.princeton.edu",
    image: "/placeholder.svg"
  },
  {
    id: "ivy-04",
    name: "Columbia University",
    location: "New York, New York, USA",
    type: "Private",
    overallRanking: 4,
    establishedYear: 1754,
    courses: [
      { name: "Journalism", ranking: 1, strength: "Excellent", fees: "$79,532", feeType: "per-year" },
      { name: "Medicine", ranking: 4, strength: "Excellent", fees: "$68,536", feeType: "per-year" },
      { name: "Business", ranking: 4, strength: "Excellent", fees: "$77,376", feeType: "per-year" },
      { name: "Engineering", ranking: 8, strength: "Excellent", fees: "$66,383", feeType: "per-year" }
    ],
    highlights: ["Manhattan location", "Pulitzer Prize headquarters", "Core curriculum", "Research powerhouse"],
    website: "https://www.columbia.edu",
    image: "/placeholder.svg"
  },
  {
    id: "ivy-05",
    name: "University of Pennsylvania",
    location: "Philadelphia, Pennsylvania, USA",
    type: "Private",
    overallRanking: 5,
    establishedYear: 1740,
    courses: [
      { name: "Business", ranking: 2, strength: "Excellent", fees: "$81,378", feeType: "per-year" },
      { name: "Medicine", ranking: 5, strength: "Excellent", fees: "$63,526", feeType: "per-year" },
      { name: "Engineering", ranking: 7, strength: "Excellent", fees: "$66,200", feeType: "per-year" },
      { name: "Nursing", ranking: 1, strength: "Excellent", fees: "$66,200", feeType: "per-year" }
    ],
    highlights: ["Wharton Business School", "Research university", "Pre-professional programs", "Urban campus"],
    website: "https://www.upenn.edu",
    image: "/placeholder.svg"
  },
  {
    id: "ivy-06",
    name: "Dartmouth College",
    location: "Hanover, New Hampshire, USA",
    type: "Private",
    overallRanking: 12,
    establishedYear: 1769,
    courses: [
      { name: "Business", ranking: 6, strength: "Excellent", fees: "$80,000", feeType: "per-year" },
      { name: "Liberal Arts", ranking: 5, strength: "Excellent", fees: "$65,000", feeType: "per-year" },
      { name: "Engineering", ranking: 15, strength: "Very Good", fees: "$65,000", feeType: "per-year" },
      { name: "Medicine", ranking: 8, strength: "Excellent", fees: "$69,000", feeType: "per-year" }
    ],
    highlights: ["Quarter system", "Outdoor recreation", "Strong alumni network", "Liberal arts focus"],
    website: "https://www.dartmouth.edu",
    image: "/placeholder.svg"
  },
  {
    id: "ivy-07",
    name: "Brown University",
    location: "Providence, Rhode Island, USA",
    type: "Private",
    overallRanking: 14,
    establishedYear: 1764,
    courses: [
      { name: "Computer Science", ranking: 12, strength: "Excellent", fees: "$65,656", feeType: "per-year" },
      { name: "International Relations", ranking: 4, strength: "Excellent", fees: "$65,656", feeType: "per-year" },
      { name: "Liberal Arts", ranking: 8, strength: "Excellent", fees: "$65,656", feeType: "per-year" },
      { name: "Medicine", ranking: 12, strength: "Excellent", fees: "$68,316", feeType: "per-year" }
    ],
    highlights: ["Open curriculum", "No core requirements", "Progressive campus", "PLME program"],
    website: "https://www.brown.edu",
    image: "/placeholder.svg"
  },
  {
    id: "ivy-08",
    name: "Cornell University",
    location: "Ithaca, New York, USA",
    type: "Private",
    overallRanking: 17,
    establishedYear: 1865,
    courses: [
      { name: "Engineering", ranking: 9, strength: "Excellent", fees: "$66,014", feeType: "per-year" },
      { name: "Agriculture", ranking: 1, strength: "Excellent", fees: "$43,385", feeType: "per-year" },
      { name: "Veterinary Medicine", ranking: 1, strength: "Excellent", fees: "$66,200", feeType: "per-year" },
      { name: "Business", ranking: 12, strength: "Excellent", fees: "$74,000", feeType: "per-year" }
    ],
    highlights: ["Comprehensive university", "Beautiful campus", "Research powerhouse", "Diverse programs"],
    website: "https://www.cornell.edu",
    image: "/placeholder.svg"
  }
];