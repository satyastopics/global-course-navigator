
import { College } from '../../../../../../../types/collegeTypes';

export const cambridgeColleges: College[] = [
  {
    id: "81",
    name: "University of Cambridge",
    location: "Cambridge, England, UK",
    type: "Public",
    overallRanking: 3,
    establishedYear: 1209,
    courses: [
      { name: "Engineering", ranking: 5, strength: "Excellent", fees: "£35K", feeType: "per-year" },
      { name: "Mathematics", ranking: 1, strength: "Excellent", fees: "£32K", feeType: "per-year" },
      { name: "Computer Science", ranking: 4, strength: "Excellent", fees: "£35K", feeType: "per-year" },
      { name: "Medicine", ranking: 3, strength: "Excellent", fees: "£38K", feeType: "per-year" }
    ],
    highlights: ["World-class research", "College system", "STEM excellence", "Historic prestige"],
    website: "https://www.cam.ac.uk",
    image: "/placeholder.svg"
  }
];
