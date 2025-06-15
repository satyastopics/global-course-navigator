
import { College } from '../../types/collegeTypes';

export const indianColleges: College[] = [
  {
    id: "11",
    name: "Indian Institute of Technology Bombay",
    location: "Mumbai, Maharashtra, India",
    type: "Government",
    overallRanking: 1,
    establishedYear: 1958,
    courses: [
      { name: "Computer Science", ranking: 1, strength: "Excellent", fees: "₹2.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 1, strength: "Excellent", fees: "₹2.5L", feeType: "per-year" },
      { name: "Physics", ranking: 2, strength: "Excellent", fees: "₹2.5L", feeType: "per-year" },
      { name: "Mathematics", ranking: 3, strength: "Excellent", fees: "₹2.5L", feeType: "per-year" }
    ],
    highlights: ["Top IIT", "Premier engineering institute", "Strong alumni network", "Research excellence"],
    website: "https://www.iitb.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "12",
    name: "Indian Institute of Technology Delhi",
    location: "New Delhi, Delhi, India",
    type: "Government",
    overallRanking: 2,
    establishedYear: 1961,
    courses: [
      { name: "Computer Science", ranking: 2, strength: "Excellent", fees: "₹2.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 2, strength: "Excellent", fees: "₹2.5L", feeType: "per-year" },
      { name: "Mathematics", ranking: 4, strength: "Excellent", fees: "₹2.5L", feeType: "per-year" },
      { name: "Physics", ranking: 5, strength: "Excellent", fees: "₹2.5L", feeType: "per-year" }
    ],
    highlights: ["Premier IIT", "Capital location", "Strong industry connections", "Research hub"],
    website: "https://www.iitd.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "13",
    name: "Indian Institute of Science",
    location: "Bangalore, Karnataka, India",
    type: "Deemed",
    overallRanking: 3,
    establishedYear: 1909,
    courses: [
      { name: "Physics", ranking: 1, strength: "Excellent", fees: "₹25K", feeType: "per-year" },
      { name: "Computer Science", ranking: 3, strength: "Excellent", fees: "₹25K", feeType: "per-year" },
      { name: "Engineering", ranking: 4, strength: "Excellent", fees: "₹25K", feeType: "per-year" },
      { name: "Mathematics", ranking: 2, strength: "Excellent", fees: "₹25K", feeType: "per-year" }
    ],
    highlights: ["Research-focused", "Oldest science institute", "Low fees", "PhD programs"],
    website: "https://www.iisc.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "14",
    name: "Indian Institute of Technology Madras",
    location: "Chennai, Tamil Nadu, India",
    type: "Government",
    overallRanking: 4,
    establishedYear: 1959,
    courses: [
      { name: "Engineering", ranking: 3, strength: "Excellent", fees: "₹2.5L", feeType: "per-year" },
      { name: "Computer Science", ranking: 4, strength: "Excellent", fees: "₹2.5L", feeType: "per-year" },
      { name: "Ocean Engineering", ranking: 1, strength: "Excellent", fees: "₹2.5L", feeType: "per-year" },
      { name: "Aerospace Engineering", ranking: 2, strength: "Excellent", fees: "₹2.5L", feeType: "per-year" }
    ],
    highlights: ["Ocean engineering leader", "Beautiful campus", "Strong research", "Industry partnerships"],
    website: "https://www.iitm.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "15",
    name: "Indian Institute of Technology Kanpur",
    location: "Kanpur, Uttar Pradesh, India",
    type: "Government",
    overallRanking: 5,
    establishedYear: 1959,
    courses: [
      { name: "Computer Science", ranking: 5, strength: "Excellent", fees: "₹2.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 5, strength: "Excellent", fees: "₹2.5L", feeType: "per-year" },
      { name: "Aerospace Engineering", ranking: 1, strength: "Excellent", fees: "₹2.5L", feeType: "per-year" },
      { name: "Materials Science", ranking: 3, strength: "Excellent", fees: "₹2.5L", feeType: "per-year" }
    ],
    highlights: ["Aerospace excellence", "Strong alumni base", "Research focus", "International collaborations"],
    website: "https://www.iitk.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "16",
    name: "All India Institute of Medical Sciences",
    location: "New Delhi, Delhi, India",
    type: "Government",
    overallRanking: 6,
    establishedYear: 1956,
    courses: [
      { name: "Medicine", ranking: 1, strength: "Excellent", fees: "₹6K", feeType: "per-year" },
      { name: "Nursing", ranking: 1, strength: "Excellent", fees: "₹3K", feeType: "per-year" },
      { name: "Biotechnology", ranking: 3, strength: "Very Good", fees: "₹6K", feeType: "per-year" },
      { name: "Pharmacy", ranking: 2, strength: "Very Good", fees: "₹6K", feeType: "per-year" }
    ],
    highlights: ["Premier medical institute", "Extremely low fees", "Top healthcare", "Research excellence"],
    website: "https://www.aiims.edu",
    image: "/placeholder.svg"
  },
  {
    id: "17",
    name: "Indian Institute of Technology Kharagpur",
    location: "Kharagpur, West Bengal, India",
    type: "Government",
    overallRanking: 7,
    establishedYear: 1951,
    courses: [
      { name: "Engineering", ranking: 6, strength: "Excellent", fees: "₹2.5L", feeType: "per-year" },
      { name: "Computer Science", ranking: 7, strength: "Excellent", fees: "₹2.5L", feeType: "per-year" },
      { name: "Mining Engineering", ranking: 1, strength: "Excellent", fees: "₹2.5L", feeType: "per-year" },
      { name: "Metallurgy", ranking: 2, strength: "Excellent", fees: "₹2.5L", feeType: "per-year" }
    ],
    highlights: ["First IIT", "Large campus", "Diverse programs", "Strong traditions"],
    website: "https://www.iitkgp.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "18",
    name: "Indian Institute of Technology Roorkee",
    location: "Roorkee, Uttarakhand, India",
    type: "Government",
    overallRanking: 8,
    establishedYear: 1847,
    courses: [
      { name: "Civil Engineering", ranking: 1, strength: "Excellent", fees: "₹2.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 7, strength: "Excellent", fees: "₹2.5L", feeType: "per-year" },
      { name: "Computer Science", ranking: 8, strength: "Excellent", fees: "₹2.5L", feeType: "per-year" },
      { name: "Architecture", ranking: 3, strength: "Very Good", fees: "₹2.5L", feeType: "per-year" }
    ],
    highlights: ["Oldest engineering college", "Civil engineering excellence", "Historic campus", "Strong alumni"],
    website: "https://www.iitr.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "19",
    name: "Indian Institute of Technology Guwahati",
    location: "Guwahati, Assam, India",
    type: "Government",
    overallRanking: 9,
    establishedYear: 1994,
    courses: [
      { name: "Computer Science", ranking: 9, strength: "Excellent", fees: "₹2.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 8, strength: "Excellent", fees: "₹2.5L", feeType: "per-year" },
      { name: "Biotechnology", ranking: 4, strength: "Very Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "Design", ranking: 5, strength: "Very Good", fees: "₹2.5L", feeType: "per-year" }
    ],
    highlights: ["Youngest among top IITs", "Beautiful campus", "Northeast hub", "Innovation focus"],
    website: "https://www.iitg.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "20",
    name: "Indian Institute of Management Ahmedabad",
    location: "Ahmedabad, Gujarat, India",
    type: "Government",
    overallRanking: 10,
    establishedYear: 1961,
    courses: [
      { name: "MBA", ranking: 1, strength: "Excellent", fees: "₹25L", feeType: "total" },
      { name: "Executive MBA", ranking: 1, strength: "Excellent", fees: "₹15L", feeType: "total" },
      { name: "PhD Management", ranking: 1, strength: "Excellent", fees: "₹50K", feeType: "per-year" },
      { name: "Public Policy", ranking: 2, strength: "Very Good", fees: "₹8L", feeType: "total" }
    ],
    highlights: ["Top business school", "Premier management institute", "Strong industry connect", "Global recognition"],
    website: "https://www.iima.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "31",
    name: "Jawaharlal Nehru University",
    location: "New Delhi, Delhi, India",
    type: "Government",
    overallRanking: 11,
    establishedYear: 1969,
    courses: [
      { name: "Political Science", ranking: 1, strength: "Excellent", fees: "₹500", feeType: "per-year" },
      { name: "International Relations", ranking: 1, strength: "Excellent", fees: "₹500", feeType: "per-year" },
      { name: "Social Sciences", ranking: 2, strength: "Excellent", fees: "₹500", feeType: "per-year" },
      { name: "Languages", ranking: 3, strength: "Very Good", fees: "₹500", feeType: "per-year" }
    ],
    highlights: ["Social sciences leader", "Very low fees", "Research university", "Political science excellence"],
    website: "https://www.jnu.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "32",
    name: "University of Delhi",
    location: "New Delhi, Delhi, India",
    type: "Government",
    overallRanking: 12,
    establishedYear: 1922,
    courses: [
      { name: "Arts", ranking: 2, strength: "Excellent", fees: "₹15K", feeType: "per-year" },
      { name: "Science", ranking: 5, strength: "Very Good", fees: "₹25K", feeType: "per-year" },
      { name: "Commerce", ranking: 1, strength: "Excellent", fees: "₹18K", feeType: "per-year" },
      { name: "Law", ranking: 4, strength: "Very Good", fees: "₹35K", feeType: "per-year" }
    ],
    highlights: ["Large university system", "Affordable education", "Central location", "Diverse programs"],
    website: "https://www.du.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "33",
    name: "Birla Institute of Technology and Science",
    location: "Pilani, Rajasthan, India",
    type: "Private",
    overallRanking: 13,
    establishedYear: 1964,
    courses: [
      { name: "Computer Science", ranking: 10, strength: "Excellent", fees: "₹4.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 12, strength: "Very Good", fees: "₹4.5L", feeType: "per-year" },
      { name: "Pharmacy", ranking: 3, strength: "Very Good", fees: "₹4L", feeType: "per-year" },
      { name: "Management", ranking: 15, strength: "Good", fees: "₹18L", feeType: "total" }
    ],
    highlights: ["Deemed university", "Strong industry connections", "Multiple campuses", "Innovation culture"],
    website: "https://www.bits-pilani.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "34",
    name: "Indian Statistical Institute",
    location: "Kolkata, West Bengal, India",
    type: "Deemed",
    overallRanking: 14,
    establishedYear: 1931,
    courses: [
      { name: "Statistics", ranking: 1, strength: "Excellent", fees: "₹2K", feeType: "per-year" },
      { name: "Mathematics", ranking: 1, strength: "Excellent", fees: "₹2K", feeType: "per-year" },
      { name: "Computer Science", ranking: 12, strength: "Very Good", fees: "₹25K", feeType: "per-year" },
      { name: "Economics", ranking: 5, strength: "Very Good", fees: "₹2K", feeType: "per-year" }
    ],
    highlights: ["Statistics excellence", "Very low fees", "Research focus", "Unique programs"],
    website: "https://www.isical.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "35",
    name: "Indian Institute of Technology Hyderabad",
    location: "Hyderabad, Telangana, India",
    type: "Government",
    overallRanking: 15,
    establishedYear: 2008,
    courses: [
      { name: "Computer Science", ranking: 11, strength: "Excellent", fees: "₹2.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 15, strength: "Very Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "Biotechnology", ranking: 8, strength: "Very Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "Design", ranking: 8, strength: "Very Good", fees: "₹2.5L", feeType: "per-year" }
    ],
    highlights: ["New generation IIT", "Modern infrastructure", "Research oriented", "Interdisciplinary approach"],
    website: "https://www.iith.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "36",
    name: "Banaras Hindu University",
    location: "Varanasi, Uttar Pradesh, India",
    type: "Government",
    overallRanking: 16,
    establishedYear: 1916,
    courses: [
      { name: "Arts", ranking: 5, strength: "Very Good", fees: "₹5K", feeType: "per-year" },
      { name: "Science", ranking: 8, strength: "Very Good", fees: "₹12K", feeType: "per-year" },
      { name: "Engineering", ranking: 20, strength: "Good", fees: "₹1.5L", feeType: "per-year" },
      { name: "Medicine", ranking: 8, strength: "Very Good", fees: "₹15K", feeType: "per-year" }
    ],
    highlights: ["Large residential university", "Very affordable", "Cultural heritage", "Diverse programs"],
    website: "https://www.bhu.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "37",
    name: "Vellore Institute of Technology",
    location: "Vellore, Tamil Nadu, India",
    type: "Private",
    overallRanking: 17,
    establishedYear: 1984,
    courses: [
      { name: "Computer Science", ranking: 15, strength: "Very Good", fees: "₹2L", feeType: "per-year" },
      { name: "Engineering", ranking: 18, strength: "Good", fees: "₹1.8L", feeType: "per-year" },
      { name: "Management", ranking: 25, strength: "Good", fees: "₹8L", feeType: "total" },
      { name: "Law", ranking: 15, strength: "Good", fees: "₹2.5L", feeType: "per-year" }
    ],
    highlights: ["Large private university", "Industry partnerships", "International collaborations", "Modern facilities"],
    website: "https://vit.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "38",
    name: "Manipal Academy of Higher Education",
    location: "Manipal, Karnataka, India",
    type: "Private",
    overallRanking: 18,
    establishedYear: 1953,
    courses: [
      { name: "Medicine", ranking: 5, strength: "Very Good", fees: "₹18L", feeType: "per-year" },
      { name: "Engineering", ranking: 22, strength: "Good", fees: "₹3.5L", feeType: "per-year" },
      { name: "Management", ranking: 20, strength: "Good", fees: "₹12L", feeType: "total" },
      { name: "Pharmacy", ranking: 5, strength: "Very Good", fees: "₹2L", feeType: "per-year" }
    ],
    highlights: ["Healthcare excellence", "Multiple campuses", "International programs", "Strong alumni network"],
    website: "https://manipal.edu",
    image: "/placeholder.svg"
  },
  {
    id: "39",
    name: "Jadavpur University",
    location: "Kolkata, West Bengal, India",
    type: "Government",
    overallRanking: 19,
    establishedYear: 1955,
    courses: [
      { name: "Engineering", ranking: 16, strength: "Very Good", fees: "₹12K", feeType: "per-year" },
      { name: "Arts", ranking: 8, strength: "Very Good", fees: "₹1.5K", feeType: "per-year" },
      { name: "Science", ranking: 12, strength: "Good", fees: "₹3K", feeType: "per-year" },
      { name: "Film Studies", ranking: 1, strength: "Excellent", fees: "₹5K", feeType: "per-year" }
    ],
    highlights: ["Film studies leader", "Very affordable", "Strong in humanities", "Cultural hub"],
    website: "https://www.jaduniv.edu.in",
    image: "/placeholder.svg"
  },
  {
    id: "40",
    name: "Anna University",
    location: "Chennai, Tamil Nadu, India",
    type: "Government",
    overallRanking: 20,
    establishedYear: 1978,
    courses: [
      { name: "Engineering", ranking: 25, strength: "Good", fees: "₹25K", feeType: "per-year" },
      { name: "Computer Science", ranking: 18, strength: "Good", fees: "₹25K", feeType: "per-year" },
      { name: "Architecture", ranking: 5, strength: "Very Good", fees: "₹30K", feeType: "per-year" },
      { name: "Technology", ranking: 15, strength: "Good", fees: "₹25K", feeType: "per-year" }
    ],
    highlights: ["Technical university", "Affordable engineering", "Strong industry ties", "Large alumni base"],
    website: "https://www.annauniv.edu",
    image: "/placeholder.svg"
  },
  {
    id: "41",
    name: "Indian Institute of Management Bangalore",
    location: "Bangalore, Karnataka, India",
    type: "Government",
    overallRanking: 21,
    establishedYear: 1973,
    courses: [
      { name: "MBA", ranking: 2, strength: "Excellent", fees: "₹24L", feeType: "total" },
      { name: "Executive MBA", ranking: 2, strength: "Excellent", fees: "₹15L", feeType: "total" },
      { name: "PhD Management", ranking: 2, strength: "Excellent", fees: "₹50K", feeType: "per-year" },
      { name: "Management Studies", ranking: 3, strength: "Very Good", fees: "₹12L", feeType: "total" }
    ],
    highlights: ["Top management school", "IT capital location", "Strong placement record", "International collaborations"],
    website: "https://www.iimb.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "42",
    name: "Indian Institute of Management Calcutta",
    location: "Kolkata, West Bengal, India",
    type: "Government",
    overallRanking: 22,
    establishedYear: 1961,
    courses: [
      { name: "MBA", ranking: 3, strength: "Excellent", fees: "₹23L", feeType: "total" },
      { name: "Executive MBA", ranking: 3, strength: "Excellent", fees: "₹14L", feeType: "total" },
      { name: "PhD Management", ranking: 3, strength: "Excellent", fees: "₹50K", feeType: "per-year" },
      { name: "Finance", ranking: 2, strength: "Excellent", fees: "₹10L", feeType: "total" }
    ],
    highlights: ["Finance excellence", "Oldest IIM", "Strong alumni network", "Research focus"],
    website: "https://www.iimcal.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "43",
    name: "Indian Institute of Technology Ropar",
    location: "Rupnagar, Punjab, India",
    type: "Government",
    overallRanking: 23,
    establishedYear: 2008,
    courses: [
      { name: "Computer Science", ranking: 13, strength: "Excellent", fees: "₹2.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 17, strength: "Very Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "Chemical Engineering", ranking: 4, strength: "Very Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "Materials Science", ranking: 5, strength: "Very Good", fees: "₹2.5L", feeType: "per-year" }
    ],
    highlights: ["New generation IIT", "Chemical engineering excellence", "Industrial collaborations", "Punjab location"],
    website: "https://www.iitrpr.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "44",
    name: "Indian Institute of Technology Indore",
    location: "Indore, Madhya Pradesh, India",
    type: "Government",
    overallRanking: 24,
    establishedYear: 2009,
    courses: [
      { name: "Computer Science", ranking: 14, strength: "Very Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 19, strength: "Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "Mathematics", ranking: 8, strength: "Very Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "Physics", ranking: 12, strength: "Good", fees: "₹2.5L", feeType: "per-year" }
    ],
    highlights: ["Third generation IIT", "Modern campus", "Research oriented", "Central India location"],
    website: "https://www.iiti.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "45",
    name: "Delhi Technological University",
    location: "New Delhi, Delhi, India",
    type: "Government",
    overallRanking: 25,
    establishedYear: 1941,
    courses: [
      { name: "Engineering", ranking: 21, strength: "Good", fees: "₹1.8L", feeType: "per-year" },
      { name: "Computer Science", ranking: 16, strength: "Very Good", fees: "₹1.8L", feeType: "per-year" },
      { name: "Electronics", ranking: 8, strength: "Very Good", fees: "₹1.8L", feeType: "per-year" },
      { name: "Mechanical Engineering", ranking: 12, strength: "Good", fees: "₹1.8L", feeType: "per-year" }
    ],
    highlights: ["Delhi government university", "Strong placement record", "Industry connections", "Research focus"],
    website: "https://www.dtu.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "46",
    name: "Netaji Subhas University of Technology",
    location: "New Delhi, Delhi, India",
    type: "Government",
    overallRanking: 26,
    establishedYear: 1983,
    courses: [
      { name: "Engineering", ranking: 23, strength: "Good", fees: "₹1.5L", feeType: "per-year" },
      { name: "Computer Science", ranking: 19, strength: "Good", fees: "₹1.5L", feeType: "per-year" },
      { name: "Information Technology", ranking: 10, strength: "Good", fees: "₹1.5L", feeType: "per-year" },
      { name: "Electronics", ranking: 15, strength: "Good", fees: "₹1.5L", feeType: "per-year" }
    ],
    highlights: ["Affordable engineering", "Good placement record", "Multiple campuses", "Industry partnerships"],
    website: "https://www.nsut.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "47",
    name: "National Institute of Technology Trichy",
    location: "Tiruchirappalli, Tamil Nadu, India",
    type: "Government",
    overallRanking: 27,
    establishedYear: 1964,
    courses: [
      { name: "Engineering", ranking: 9, strength: "Excellent", fees: "₹1.8L", feeType: "per-year" },
      { name: "Computer Science", ranking: 12, strength: "Very Good", fees: "₹1.8L", feeType: "per-year" },
      { name: "Mechanical Engineering", ranking: 6, strength: "Very Good", fees: "₹1.8L", feeType: "per-year" },
      { name: "Electrical Engineering", ranking: 8, strength: "Very Good", fees: "₹1.8L", feeType: "per-year" }
    ],
    highlights: ["Top NIT", "Engineering excellence", "Strong alumni network", "Industry connections"],
    website: "https://www.nitt.edu",
    image: "/placeholder.svg"
  },
  {
    id: "48",
    name: "National Institute of Technology Warangal",
    location: "Warangal, Telangana, India",
    type: "Government",
    overallRanking: 28,
    establishedYear: 1959,
    courses: [
      { name: "Engineering", ranking: 10, strength: "Excellent", fees: "₹1.8L", feeType: "per-year" },
      { name: "Computer Science", ranking: 13, strength: "Very Good", fees: "₹1.8L", feeType: "per-year" },
      { name: "Civil Engineering", ranking: 5, strength: "Very Good", fees: "₹1.8L", feeType: "per-year" },
      { name: "Chemical Engineering", ranking: 7, strength: "Very Good", fees: "₹1.8L", feeType: "per-year" }
    ],
    highlights: ["Premier NIT", "Strong engineering programs", "Research excellence", "Industrial partnerships"],
    website: "https://www.nitw.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "49",
    name: "National Institute of Technology Karnataka",
    location: "Surathkal, Karnataka, India",
    type: "Government",
    overallRanking: 29,
    establishedYear: 1960,
    courses: [
      { name: "Engineering", ranking: 11, strength: "Very Good", fees: "₹1.8L", feeType: "per-year" },
      { name: "Computer Science", ranking: 14, strength: "Very Good", fees: "₹1.8L", feeType: "per-year" },
      { name: "Information Technology", ranking: 6, strength: "Very Good", fees: "₹1.8L", feeType: "per-year" },
      { name: "Mining Engineering", ranking: 3, strength: "Very Good", fees: "₹1.8L", feeType: "per-year" }
    ],
    highlights: ["Coastal location", "Strong technical programs", "Industry exposure", "Research focus"],
    website: "https://www.nitk.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "50",
    name: "Indian Institute of Technology (BHU) Varanasi",
    location: "Varanasi, Uttar Pradesh, India",
    type: "Government",
    overallRanking: 30,
    establishedYear: 1919,
    courses: [
      { name: "Engineering", ranking: 13, strength: "Very Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "Computer Science", ranking: 15, strength: "Very Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "Metallurgy", ranking: 3, strength: "Very Good", fees: "₹2.5L", feeType: "per-year" },
      { name: "Mining Engineering", ranking: 2, strength: "Very Good", fees: "₹2.5L", feeType: "per-year" }
    ],
    highlights: ["Heritage institution", "Strong metallurgy program", "Cultural city", "Research excellence"],
    website: "https://www.iitbhu.ac.in",
    image: "/placeholder.svg"
  }
];
