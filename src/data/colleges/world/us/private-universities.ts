import { College } from '../../../../types/collegeTypes';

export const usPrivateUniversities: College[] = [
  {
    id: "private-us-01",
    name: "University of Chicago",
    location: "Chicago, Illinois, USA",
    type: "Private",
    overallRanking: 6,
    establishedYear: 1890,
    courses: [
      { name: "Economics", ranking: 1, strength: "Excellent", fees: "$62,940", feeType: "per-year" },
      { name: "Business", ranking: 3, strength: "Excellent", fees: "$75,000", feeType: "per-year" },
      { name: "Law", ranking: 3, strength: "Excellent", fees: "$71,676", feeType: "per-year" }
    ],
    highlights: ["Nobel Prize winners", "Research excellence", "Urban campus", "Strong economics"],
    website: "https://www.uchicago.edu",
    image: "/placeholder.svg"
  },
  {
    id: "private-us-02",
    name: "Northwestern University",
    location: "Evanston, Illinois, USA",
    type: "Private",
    overallRanking: 9,
    establishedYear: 1851,
    courses: [
      { name: "Journalism", ranking: 1, strength: "Excellent", fees: "$63,468", feeType: "per-year" },
      { name: "Business", ranking: 5, strength: "Excellent", fees: "$76,000", feeType: "per-year" },
      { name: "Engineering", ranking: 13, strength: "Very Good", fees: "$63,468", feeType: "per-year" }
    ],
    highlights: ["Top journalism school", "Research university", "Lake campus", "Strong alumni"],
    website: "https://www.northwestern.edu",
    image: "/placeholder.svg"
  },
  {
    id: "private-us-03",
    name: "Johns Hopkins University",
    location: "Baltimore, Maryland, USA",
    type: "Private",
    overallRanking: 7,
    establishedYear: 1876,
    courses: [
      { name: "Medicine", ranking: 2, strength: "Excellent", fees: "$66,900", feeType: "per-year" },
      { name: "Engineering", ranking: 14, strength: "Excellent", fees: "$60,480", feeType: "per-year" },
      { name: "Public Health", ranking: 1, strength: "Excellent", fees: "$56,000", feeType: "per-year" },
      { name: "International Relations", ranking: 1, strength: "Excellent", fees: "$60,480", feeType: "per-year" }
    ],
    highlights: ["Medical research leader", "SAIS program", "Research university", "Baltimore location"],
    website: "https://www.jhu.edu",
    image: "/placeholder.svg"
  },
  {
    id: "private-us-04",
    name: "Duke University",
    location: "Durham, North Carolina, USA",
    type: "Private",
    overallRanking: 10,
    establishedYear: 1838,
    courses: [
      { name: "Medicine", ranking: 6, strength: "Excellent", fees: "$66,172", feeType: "per-year" },
      { name: "Business", ranking: 8, strength: "Excellent", fees: "$74,000", feeType: "per-year" },
      { name: "Law", ranking: 12, strength: "Excellent", fees: "$70,057", feeType: "per-year" },
      { name: "Engineering", ranking: 18, strength: "Very Good", fees: "$63,054", feeType: "per-year" }
    ],
    highlights: ["Research Triangle", "Basketball excellence", "Beautiful campus", "Strong endowment"],
    website: "https://www.duke.edu",
    image: "/placeholder.svg"
  },
  {
    id: "private-us-05",
    name: "Vanderbilt University",
    location: "Nashville, Tennessee, USA",
    type: "Private",
    overallRanking: 13,
    establishedYear: 1873,
    courses: [
      { name: "Medicine", ranking: 14, strength: "Excellent", fees: "$64,932", feeType: "per-year" },
      { name: "Education", ranking: 1, strength: "Excellent", fees: "$56,886", feeType: "per-year" },
      { name: "Music", ranking: 5, strength: "Excellent", fees: "$56,886", feeType: "per-year" },
      { name: "Engineering", ranking: 28, strength: "Good", fees: "$56,886", feeType: "per-year" }
    ],
    highlights: ["Music City", "Beautiful campus", "Strong financial aid", "Research excellence"],
    website: "https://www.vanderbilt.edu",
    image: "/placeholder.svg"
  },
  {
    id: "private-us-06",
    name: "Washington University in St. Louis",
    location: "St. Louis, Missouri, USA",
    type: "Private",
    overallRanking: 15,
    establishedYear: 1853,
    courses: [
      { name: "Medicine", ranking: 7, strength: "Excellent", fees: "$69,662", feeType: "per-year" },
      { name: "Business", ranking: 15, strength: "Very Good", fees: "$62,500", feeType: "per-year" },
      { name: "Engineering", ranking: 25, strength: "Very Good", fees: "$60,590", feeType: "per-year" },
      { name: "Architecture", ranking: 6, strength: "Excellent", fees: "$60,590", feeType: "per-year" }
    ],
    highlights: ["Medical research", "Beautiful campus", "Strong endowment", "Midwest excellence"],
    website: "https://wustl.edu",
    image: "/placeholder.svg"
  },
  {
    id: "private-us-07",
    name: "Rice University",
    location: "Houston, Texas, USA",
    type: "Private",
    overallRanking: 16,
    establishedYear: 1912,
    courses: [
      { name: "Engineering", ranking: 17, strength: "Very Good", fees: "$58,128", feeType: "per-year" },
      { name: "Computer Science", ranking: 15, strength: "Very Good", fees: "$58,128", feeType: "per-year" },
      { name: "Business", ranking: 18, strength: "Very Good", fees: "$65,000", feeType: "per-year" },
      { name: "Architecture", ranking: 8, strength: "Excellent", fees: "$58,128", feeType: "per-year" }
    ],
    highlights: ["Small size", "Houston energy sector", "Residential college system", "Strong academics"],
    website: "https://www.rice.edu",
    image: "/placeholder.svg"
  },
  {
    id: "private-us-08",
    name: "Emory University",
    location: "Atlanta, Georgia, USA",
    type: "Private",
    overallRanking: 21,
    establishedYear: 1836,
    courses: [
      { name: "Medicine", ranking: 18, strength: "Very Good", fees: "$62,220", feeType: "per-year" },
      { name: "Business", ranking: 20, strength: "Very Good", fees: "$70,000", feeType: "per-year" },
      { name: "Nursing", ranking: 8, strength: "Excellent", fees: "$57,120", feeType: "per-year" },
      { name: "Public Health", ranking: 5, strength: "Excellent", fees: "$52,000", feeType: "per-year" }
    ],
    highlights: ["CDC partnership", "Atlanta location", "Strong healthcare", "Research university"],
    website: "https://www.emory.edu",
    image: "/placeholder.svg"
  },
  {
    id: "private-us-09",
    name: "Carnegie Mellon University",
    location: "Pittsburgh, Pennsylvania, USA",
    type: "Private",
    overallRanking: 25,
    establishedYear: 1900,
    courses: [
      { name: "Computer Science", ranking: 2, strength: "Excellent", fees: "$63,652", feeType: "per-year" },
      { name: "Engineering", ranking: 8, strength: "Excellent", fees: "$63,652", feeType: "per-year" },
      { name: "Drama", ranking: 3, strength: "Excellent", fees: "$63,652", feeType: "per-year" },
      { name: "Business", ranking: 16, strength: "Very Good", fees: "$68,000", feeType: "per-year" }
    ],
    highlights: ["Tech excellence", "AI research", "Pittsburgh renaissance", "Interdisciplinary focus"],
    website: "https://www.cmu.edu",
    image: "/placeholder.svg"
  },
  {
    id: "private-us-10",
    name: "Georgetown University",
    location: "Washington, DC, USA",
    type: "Private",
    overallRanking: 22,
    establishedYear: 1789,
    courses: [
      { name: "International Relations", ranking: 3, strength: "Excellent", fees: "$65,082", feeType: "per-year" },
      { name: "Law", ranking: 15, strength: "Very Good", fees: "$70,200", feeType: "per-year" },
      { name: "Business", ranking: 22, strength: "Very Good", fees: "$72,000", feeType: "per-year" },
      { name: "Medicine", ranking: 35, strength: "Good", fees: "$68,000", feeType: "per-year" }
    ],
    highlights: ["DC location", "Government connections", "Jesuit tradition", "Policy focus"],
    website: "https://www.georgetown.edu",
    image: "/placeholder.svg"
  }
];
