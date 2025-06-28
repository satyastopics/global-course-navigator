
import { College } from '../../../../../../../types/collegeTypes';

export const rajasthanPrivateBusinessSchools: College[] = [
  {
    id: "biz-raj-jai-01",
    name: "Birla Institute of Management Technology",
    location: "Jaipur, Rajasthan, India",
    type: "Private",
    overallRanking: 38,
    establishedYear: 2006,
    courses: [
      { name: "MBA", ranking: 32, strength: "Good", fees: "₹14L", feeType: "total" },
      { name: "PGDM", ranking: 38, strength: "Good", fees: "₹12L", feeType: "total" },
      { name: "Executive MBA", ranking: 45, strength: "Good", fees: "₹16L", feeType: "total" }
    ],
    highlights: ["Birla group backing", "Industry partnerships", "Modern campus", "Strong placement"],
    website: "https://www.bimtjaipur.com",
    image: "/placeholder.svg"
  },
  {
    id: "biz-raj-jai-02",
    name: "Manipal University Jaipur",
    location: "Jaipur, Rajasthan, India",
    type: "Private",
    overallRanking: 48,
    establishedYear: 2011,
    courses: [
      { name: "MBA", ranking: 42, strength: "Good", fees: "₹10L", feeType: "total" },
      { name: "PGDM", ranking: 48, strength: "Good", fees: "₹9L", feeType: "total" },
      { name: "BBA", ranking: 35, strength: "Good", fees: "₹6L", feeType: "total" }
    ],
    highlights: ["Manipal group", "Value for money", "Industry exposure", "Modern facilities"],
    website: "https://jaipur.manipal.edu",
    image: "/placeholder.svg"
  }
];
