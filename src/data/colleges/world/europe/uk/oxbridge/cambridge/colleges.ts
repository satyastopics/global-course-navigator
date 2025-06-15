
import { College } from '../../../../../../types/collegeTypes';

export const cambridgeColleges: College[] = [
  {
    id: "cambridge-01",
    name: "University of Cambridge",
    location: "Cambridge, United Kingdom",
    type: "Public",
    overallRanking: 2,
    establishedYear: 1209,
    courses: [
      { name: "Mathematics", ranking: 1, strength: "Excellent", fees: "£9,250", feeType: "per-year" },
      { name: "Natural Sciences", ranking: 1, strength: "Excellent", fees: "£9,250", feeType: "per-year" },
      { name: "Engineering", ranking: 3, strength: "Excellent", fees: "£9,250", feeType: "per-year" },
      { name: "Medicine", ranking: 2, strength: "Excellent", fees: "£9,250", feeType: "per-year" }
    ],
    highlights: ["World's second oldest university", "Nobel Prize winners", "Historic colleges", "Academic excellence"],
    website: "https://www.cam.ac.uk",
    image: "/placeholder.svg"
  }
];
