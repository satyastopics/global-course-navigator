import { College } from '../../../../types/collegeTypes';

export const aiimsColleges: College[] = [
  {
    id: "aiims-01",
    name: "All India Institute of Medical Sciences, New Delhi",
    location: "New Delhi, India",
    type: "Government",
    overallRanking: 1,
    establishedYear: 1956,
    courses: [
      { name: "Medicine", ranking: 1, strength: "Excellent", fees: "₹5.5K", feeType: "per-year" },
      { name: "Nursing", ranking: 1, strength: "Excellent", fees: "₹3K", feeType: "per-year" },
      { name: "Pharmacy", ranking: 2, strength: "Excellent", fees: "₹4K", feeType: "per-year" }
    ],
    highlights: ["Premier medical institute", "World-class faculty", "Research excellence", "Government hospital"],
    website: "https://www.aiims.edu",
    image: "/placeholder.svg"
  },
  {
    id: "aiims-02",
    name: "AIIMS Jodhpur",
    location: "Jodhpur, Rajasthan, India",
    type: "Government",
    overallRanking: 8,
    establishedYear: 2012,
    courses: [
      { name: "Medicine", ranking: 6, strength: "Excellent", fees: "₹5.5K", feeType: "per-year" },
      { name: "Nursing", ranking: 8, strength: "Very Good", fees: "₹3K", feeType: "per-year" }
    ],
    highlights: ["AIIMS brand", "Modern infrastructure", "Quality medical education", "Government funding"],
    website: "https://www.aiimsjodhpur.edu.in",
    image: "/placeholder.svg"
  },
  {
    id: "aiims-03",
    name: "AIIMS Bhopal",
    location: "Bhopal, Madhya Pradesh, India",
    type: "Government",
    overallRanking: 12,
    establishedYear: 2012,
    courses: [
      { name: "Medicine", ranking: 8, strength: "Excellent", fees: "₹5.5K", feeType: "per-year" },
      { name: "Nursing", ranking: 10, strength: "Very Good", fees: "₹3K", feeType: "per-year" }
    ],
    highlights: ["AIIMS excellence", "Central India location", "Advanced facilities", "Research focus"],
    website: "https://www.aiimsbhopal.edu.in",
    image: "/placeholder.svg"
  },
  {
    id: "aiims-04",
    name: "AIIMS Patna",
    location: "Patna, Bihar, India",
    type: "Government",
    overallRanking: 15,
    establishedYear: 2012,
    courses: [
      { name: "Medicine", ranking: 10, strength: "Very Good", fees: "₹5.5K", feeType: "per-year" },
      { name: "Nursing", ranking: 12, strength: "Very Good", fees: "₹3K", feeType: "per-year" }
    ],
    highlights: ["AIIMS standard", "Eastern India healthcare", "Quality education", "Affordable fees"],
    website: "https://www.aiimspatna.org",
    image: "/placeholder.svg"
  },
  {
    id: "aiims-05",
    name: "AIIMS Raipur",
    location: "Raipur, Chhattisgarh, India",
    type: "Government",
    overallRanking: 18,
    establishedYear: 2012,
    courses: [
      { name: "Medicine", ranking: 12, strength: "Very Good", fees: "₹5.5K", feeType: "per-year" },
      { name: "Nursing", ranking: 15, strength: "Very Good", fees: "₹3K", feeType: "per-year" }
    ],
    highlights: ["AIIMS reputation", "Tribal area focus", "Healthcare access", "Modern campus"],
    website: "https://www.aiimsraipur.edu.in",
    image: "/placeholder.svg"
  },
  {
    id: "aiims-06",
    name: "AIIMS Bhubaneswar",
    location: "Bhubaneswar, Odisha, India",
    type: "Government",
    overallRanking: 20,
    establishedYear: 2012,
    courses: [
      { name: "Medicine", ranking: 14, strength: "Very Good", fees: "₹5.5K", feeType: "per-year" },
      { name: "Nursing", ranking: 18, strength: "Good", fees: "₹3K", feeType: "per-year" }
    ],
    highlights: ["AIIMS quality", "Eastern India development", "Medical excellence", "Research opportunities"],
    website: "https://www.aiimsbhubaneswar.edu.in",
    image: "/placeholder.svg"
  }
];