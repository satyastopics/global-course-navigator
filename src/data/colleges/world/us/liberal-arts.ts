
import { College } from '../../../types/collegeTypes';

export const usLiberalArtsColleges: College[] = [
  {
    id: "liberal-us-01",
    name: "Williams College",
    location: "Williamstown, Massachusetts, USA",
    type: "Liberal Arts",
    overallRanking: 1,
    establishedYear: 1793,
    courses: [
      { name: "Liberal Arts", ranking: 1, strength: "Excellent", fees: "$63,290", feeType: "per-year" },
      { name: "Economics", ranking: 5, strength: "Excellent", fees: "$63,290", feeType: "per-year" },
      { name: "Art History", ranking: 3, strength: "Excellent", fees: "$63,290", feeType: "per-year" }
    ],
    highlights: ["Top liberal arts college", "Small class sizes", "Beautiful campus", "Strong alumni network"],
    website: "https://www.williams.edu",
    image: "/placeholder.svg"
  },
  {
    id: "liberal-us-02",
    name: "Amherst College",
    location: "Amherst, Massachusetts, USA",
    type: "Liberal Arts",
    overallRanking: 2,
    establishedYear: 1821,
    courses: [
      { name: "Liberal Arts", ranking: 2, strength: "Excellent", fees: "$64,640", feeType: "per-year" },
      { name: "Political Science", ranking: 8, strength: "Excellent", fees: "$64,640", feeType: "per-year" },
      { name: "English Literature", ranking: 12, strength: "Very Good", fees: "$64,640", feeType: "per-year" }
    ],
    highlights: ["Open curriculum", "Need-blind admissions", "Diverse student body", "Academic excellence"],
    website: "https://www.amherst.edu",
    image: "/placeholder.svg"
  }
];
