import { College } from '../types/collegeTypes';

// Indian Colleges
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
      { name: "Physics", ranking: 1, strength: "Excellent", fees: "₹18K", feeType: "per-year" },
      { name: "Computer Science", ranking: 3, strength: "Excellent", fees: "₹18K", feeType: "per-year" },
      { name: "Engineering", ranking: 4, strength: "Excellent", fees: "₹18K", feeType: "per-year" },
      { name: "Mathematics", ranking: 2, strength: "Excellent", fees: "₹18K", feeType: "per-year" }
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
      { name: "Medicine", ranking: 1, strength: "Excellent", fees: "₹5,856", feeType: "per-year" },
      { name: "Nursing", ranking: 1, strength: "Excellent", fees: "₹3,000", feeType: "per-year" },
      { name: "Biotechnology", ranking: 3, strength: "Very Good", fees: "₹5,856", feeType: "per-year" },
      { name: "Pharmacy", ranking: 2, strength: "Very Good", fees: "₹5,856", feeType: "per-year" }
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
      { name: "PhD Management", ranking: 1, strength: "Excellent", fees: "₹1L", feeType: "total" },
      { name: "Public Policy", ranking: 2, strength: "Very Good", fees: "₹8L", feeType: "total" }
    ],
    highlights: ["Top business school", "Premier management institute", "Strong industry connect", "Global recognition"],
    website: "https://www.iima.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "21",
    name: "Jawaharlal Nehru University",
    location: "New Delhi, Delhi, India",
    type: "Government",
    overallRanking: 11,
    establishedYear: 1969,
    courses: [
      { name: "Political Science", ranking: 1, strength: "Excellent", fees: "₹432", feeType: "per-year" },
      { name: "International Relations", ranking: 1, strength: "Excellent", fees: "₹432", feeType: "per-year" },
      { name: "Social Sciences", ranking: 2, strength: "Excellent", fees: "₹432", feeType: "per-year" },
      { name: "Languages", ranking: 3, strength: "Very Good", fees: "₹432", feeType: "per-year" }
    ],
    highlights: ["Social sciences leader", "Very low fees", "Research university", "Political science excellence"],
    website: "https://www.jnu.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "22",
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
    id: "23",
    name: "Birla Institute of Technology and Science",
    location: "Pilani, Rajasthan, India",
    type: "Private",
    overallRanking: 13,
    establishedYear: 1964,
    courses: [
      { name: "Computer Science", ranking: 10, strength: "Excellent", fees: "₹4.5L", feeType: "per-year" },
      { name: "Engineering", ranking: 12, strength: "Very Good", fees: "₹4.5L", feeType: "per-year" },
      { name: "Pharmacy", ranking: 3, strength: "Very Good", fees: "₹4L", feeType: "per-year" },
      { name: "Management", ranking: 15, strength: "Good", fees: "₹20L", feeType: "total" }
    ],
    highlights: ["Deemed university", "Strong industry connections", "Multiple campuses", "Innovation culture"],
    website: "https://www.bits-pilani.ac.in",
    image: "/placeholder.svg"
  },
  {
    id: "24",
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
    id: "25",
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
    id: "26",
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
    id: "27",
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
    id: "28",
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
    id: "29",
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
    id: "30",
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
  }
];

// World Colleges
export const worldColleges: College[] = [
  {
    id: "1",
    name: "Massachusetts Institute of Technology",
    location: "Cambridge, MA, USA",
    type: "Private",
    overallRanking: 1,
    establishedYear: 1861,
    courses: [
      { name: "Computer Science", ranking: 1, strength: "Excellent", fees: "$53,790", feeType: "per-year" },
      { name: "Engineering", ranking: 1, strength: "Excellent", fees: "$53,790", feeType: "per-year" },
      { name: "Physics", ranking: 2, strength: "Excellent", fees: "$53,790", feeType: "per-year" },
      { name: "Mathematics", ranking: 3, strength: "Excellent", fees: "$53,790", feeType: "per-year" }
    ],
    highlights: ["Top-ranked university", "Strong STEM focus", "Innovative research", "Global alumni network"],
    website: "https://web.mit.edu",
    image: "/placeholder.svg"
  },
  {
    id: "2",
    name: "Stanford University",
    location: "Stanford, CA, USA",
    type: "Private",
    overallRanking: 2,
    establishedYear: 1885,
    courses: [
      { name: "Computer Science", ranking: 2, strength: "Excellent", fees: "$56,169", feeType: "per-year" },
      { name: "Engineering", ranking: 2, strength: "Excellent", fees: "$56,169", feeType: "per-year" },
      { name: "Business", ranking: 1, strength: "Excellent", fees: "$56,169", feeType: "per-year" },
      { name: "Law", ranking: 2, strength: "Excellent", fees: "$56,169", feeType: "per-year" }
    ],
    highlights: ["Silicon Valley proximity", "Entrepreneurial culture", "Strong research", "Diverse programs"],
    website: "https://www.stanford.edu",
    image: "/placeholder.svg"
  },
  {
    id: "3",
    name: "Harvard University",
    location: "Cambridge, MA, USA",
    type: "Private",
    overallRanking: 3,
    establishedYear: 1636,
    courses: [
      { name: "Law", ranking: 1, strength: "Excellent", fees: "$57,246", feeType: "per-year" },
      { name: "Business", ranking: 2, strength: "Excellent", fees: "$57,246", feeType: "per-year" },
      { name: "Medicine", ranking: 1, strength: "Excellent", fees: "$57,246", feeType: "per-year" },
      { name: "Political Science", ranking: 1, strength: "Excellent", fees: "$57,246", feeType: "per-year" }
    ],
    highlights: ["Oldest US university", "Prestigious faculty", "Extensive library", "Strong global influence"],
    website: "https://www.harvard.edu",
    image: "/placeholder.svg"
  },
  {
    id: "4",
    name: "California Institute of Technology",
    location: "Pasadena, CA, USA",
    type: "Private",
    overallRanking: 4,
    establishedYear: 1891,
    courses: [
      { name: "Physics", ranking: 1, strength: "Excellent", fees: "$54,600", feeType: "per-year" },
      { name: "Engineering", ranking: 3, strength: "Excellent", fees: "$54,600", feeType: "per-year" },
      { name: "Computer Science", ranking: 5, strength: "Excellent", fees: "$54,600", feeType: "per-year" },
      { name: "Mathematics", ranking: 2, strength: "Excellent", fees: "$54,600", feeType: "per-year" }
    ],
    highlights: ["Small student body", "Research intensive", "Strong STEM focus", "Nobel laureates"],
    website: "https://www.caltech.edu",
    image: "/placeholder.svg"
  },
  {
    id: "5",
    name: "University of Oxford",
    location: "Oxford, UK",
    type: "Public",
    overallRanking: 5,
    establishedYear: 1096,
    courses: [
      { name: "Law", ranking: 1, strength: "Excellent", fees: "£26,770", feeType: "per-year" },
      { name: "Medicine", ranking: 3, strength: "Excellent", fees: "£36,065", feeType: "per-year" },
      { name: "Philosophy", ranking: 1, strength: "Excellent", fees: "£26,770", feeType: "per-year" },
      { name: "Politics", ranking: 2, strength: "Excellent", fees: "£26,770", feeType: "per-year" }
    ],
    highlights: ["Oldest English-speaking university", "Collegiate system", "Strong humanities", "Global reputation"],
    website: "https://www.ox.ac.uk",
    image: "/placeholder.svg"
  },
  {
    id: "6",
    name: "University of Cambridge",
    location: "Cambridge, UK",
    type: "Public",
    overallRanking: 6,
    establishedYear: 1209,
    courses: [
      { name: "Mathematics", ranking: 1, strength: "Excellent", fees: "£27,000", feeType: "per-year" },
      { name: "Engineering", ranking: 4, strength: "Excellent", fees: "£27,000", feeType: "per-year" },
      { name: "Physics", ranking: 3, strength: "Excellent", fees: "£27,000", feeType: "per-year" },
      { name: "Law", ranking: 2, strength: "Excellent", fees: "£27,000", feeType: "per-year" }
    ],
    highlights: ["Collegiate university", "Strong research", "Historic campus", "Global alumni"],
    website: "https://www.cam.ac.uk",
    image: "/placeholder.svg"
  },
  {
    id: "7",
    name: "ETH Zurich",
    location: "Zurich, Switzerland",
    type: "Public",
    overallRanking: 7,
    establishedYear: 1855,
    courses: [
      { name: "Engineering", ranking: 6, strength: "Excellent", fees: "CHF 1,298", feeType: "per-year" },
      { name: "Computer Science", ranking: 7, strength: "Excellent", fees: "CHF 1,298", feeType: "per-year" },
      { name: "Physics", ranking: 5, strength: "Excellent", fees: "CHF 1,298", feeType: "per-year" },
      { name: "Mathematics", ranking: 6, strength: "Excellent", fees: "CHF 1,298", feeType: "per-year" }
    ],
    highlights: ["Top Swiss university", "Strong STEM focus", "Research excellence", "International environment"],
    website: "https://ethz.ch",
    image: "/placeholder.svg"
  },
  {
    id: "8",
    name: "University of Chicago",
    location: "Chicago, IL, USA",
    type: "Private",
    overallRanking: 8,
    establishedYear: 1890,
    courses: [
      { name: "Economics", ranking: 1, strength: "Excellent", fees: "$60,963", feeType: "per-year" },
      { name: "Law", ranking: 3, strength: "Excellent", fees: "$60,963", feeType: "per-year" },
      { name: "Political Science", ranking: 4, strength: "Excellent", fees: "$60,963", feeType: "per-year" },
      { name: "Sociology", ranking: 2, strength: "Excellent", fees: "$60,963", feeType: "per-year" }
    ],
    highlights: ["Strong social sciences", "Research university", "Urban campus", "Nobel laureates"],
    website: "https://www.uchicago.edu",
    image: "/placeholder.svg"
  },
  {
    id: "9",
    name: "Imperial College London",
    location: "London, UK",
    type: "Public",
    overallRanking: 9,
    establishedYear: 1907,
    courses: [
      { name: "Engineering", ranking: 7, strength: "Excellent", fees: "£31,750", feeType: "per-year" },
      { name: "Medicine", ranking: 10, strength: "Excellent", fees: "£41,250", feeType: "per-year" },
      { name: "Computer Science", ranking: 9, strength: "Excellent", fees: "£31,750", feeType: "per-year" },
      { name: "Business", ranking: 10, strength: "Very Good", fees: "£31,750", feeType: "per-year" }
    ],
    highlights: ["STEM focus", "Central London location", "Research intensive", "Strong industry links"],
    website: "https://www.imperial.ac.uk",
    image: "/placeholder.svg"
  },
  {
    id: "10",
    name: "University of California, Berkeley",
    location: "Berkeley, CA, USA",
    type: "Public",
    overallRanking: 10,
    establishedYear: 1868,
    courses: [
      { name: "Computer Science", ranking: 4, strength: "Excellent", fees: "$44,115", feeType: "per-year" },
      { name: "Engineering", ranking: 6, strength: "Excellent", fees: "$44,115", feeType: "per-year" },
      { name: "Business", ranking: 7, strength: "Very Good", fees: "$44,115", feeType: "per-year" },
      { name: "Law", ranking: 9, strength: "Very Good", fees: "$44,115", feeType: "per-year" }
    ],
    highlights: ["Top public university", "Strong research", "Diverse student body", "Bay Area location"],
    website: "https://www.berkeley.edu",
    image: "/placeholder.svg"
  },
  {
    id: "61",
    name: "University of Toronto",
    location: "Toronto, Canada",
    type: "Public",
    overallRanking: 18,
    establishedYear: 1827,
    courses: [
      { name: "Computer Science", ranking: 15, strength: "Excellent", fees: "CAD 58,160", feeType: "per-year" },
      { name: "Engineering", ranking: 12, strength: "Excellent", fees: "CAD 59,310", feeType: "per-year" },
      { name: "Medicine", ranking: 8, strength: "Excellent", fees: "CAD 89,680", feeType: "per-year" },
      { name: "Business", ranking: 20, strength: "Very Good", fees: "CAD 58,160", feeType: "per-year" }
    ],
    highlights: ["Top Canadian university", "Research intensive", "Diverse student body", "Strong alumni network"],
    website: "https://www.utoronto.ca",
    image: "/placeholder.svg"
  },
  {
    id: "62",
    name: "University of Melbourne",
    location: "Melbourne, Australia",
    type: "Public",
    overallRanking: 33,
    establishedYear: 1853,
    courses: [
      { name: "Medicine", ranking: 12, strength: "Excellent", fees: "AUD 89,824", feeType: "per-year" },
      { name: "Engineering", ranking: 25, strength: "Very Good", fees: "AUD 48,736", feeType: "per-year" },
      { name: "Arts", ranking: 18, strength: "Very Good", fees: "AUD 33,344", feeType: "per-year" },
      { name: "Business", ranking: 28, strength: "Very Good", fees: "AUD 47,712", feeType: "per-year" }
    ],
    highlights: ["Go8 member", "Research excellence", "International outlook", "Beautiful campus"],
    website: "https://www.unimelb.edu.au",
    image: "/placeholder.svg"
  },
  {
    id: "63",
    name: "Seoul National University",
    location: "Seoul, South Korea",
    type: "Public",
    overallRanking: 29,
    establishedYear: 1946,
    courses: [
      { name: "Engineering", ranking: 20, strength: "Excellent", fees: "KRW 4,188,000", feeType: "per-year" },
      { name: "Computer Science", ranking: 22, strength: "Very Good", fees: "KRW 4,188,000", feeType: "per-year" },
      { name: "Medicine", ranking: 15, strength: "Excellent", fees: "KRW 6,845,000", feeType: "per-year" },
      { name: "Business", ranking: 35, strength: "Good", fees: "KRW 4,188,000", feeType: "per-year" }
    ],
    highlights: ["Korea's top university", "Strong in STEM", "Government support", "Research focused"],
    website: "https://www.snu.ac.kr",
    image: "/placeholder.svg"
  },
  {
    id: "64",
    name: "Tsinghua University",
    location: "Beijing, China",
    type: "Public",
    overallRanking: 17,
    establishedYear: 1911,
    courses: [
      { name: "Engineering", ranking: 5, strength: "Excellent", fees: "CNY 40,000", feeType: "per-year" },
      { name: "Computer Science", ranking: 8, strength: "Excellent", fees: "CNY 40,000", feeType: "per-year" },
      { name: "Architecture", ranking: 3, strength: "Excellent", fees: "CNY 40,000", feeType: "per-year" },
      { name: "Physics", ranking: 12, strength: "Excellent", fees: "CNY 40,000", feeType: "per-year" }
    ],
    highlights: ["China's MIT", "Engineering excellence", "Strong industry ties", "Innovation hub"],
    website: "https://www.tsinghua.edu.cn",
    image: "/placeholder.svg"
  },
  {
    id: "65",
    name: "University of Edinburgh",
    location: "Edinburgh, UK",
    type: "Public",
    overallRanking: 22,
    establishedYear: 1583,
    courses: [
      { name: "Medicine", ranking: 18, strength: "Excellent", fees: "£36,800", feeType: "per-year" },
      { name: "Computer Science", ranking: 28, strength: "Very Good", fees: "£34,800", feeType: "per-year" },
      { name: "Arts", ranking: 15, strength: "Very Good", fees: "£25,300", feeType: "per-year" },
      { name: "Business", ranking: 32, strength: "Good", fees: "£31,100", feeType: "per-year" }
    ],
    highlights: ["Ancient university", "Research excellence", "Beautiful city", "Strong alumni"],
    website: "https://www.ed.ac.uk",
    image: "/placeholder.svg"
  },
  {
    id: "66",
    name: "Technical University of Munich",
    location: "Munich, Germany",
    type: "Public",
    overallRanking: 50,
    establishedYear: 1868,
    courses: [
      { name: "Engineering", ranking: 18, strength: "Excellent", fees: "€150", feeType: "per-year" },
      { name: "Computer Science", ranking: 25, strength: "Very Good", fees: "€150", feeType: "per-year" },
      { name: "Physics", ranking: 22, strength: "Very Good", fees: "€150", feeType: "per-year" },
      { name: "Mathematics", ranking: 28, strength: "Very Good", fees: "€150", feeType: "per-year" }
    ],
    highlights: ["Top German tech university", "Industry partnerships", "Affordable fees", "Research focus"],
    website: "https://www.tum.de",
    image: "/placeholder.svg"
  },
  {
    id: "67",
    name: "University of São Paulo",
    location: "São Paulo, Brazil",
    type: "Public",
    overallRanking: 115,
    establishedYear: 1934,
    courses: [
      { name: "Medicine", ranking: 45, strength: "Good", fees: "Free", feeType: "total" },
      { name: "Engineering", ranking: 55, strength: "Good", fees: "Free", feeType: "total" },
      { name: "Business", ranking: 65, strength: "Average", fees: "Free", feeType: "total" },
      { name: "Arts", ranking: 48, strength: "Good", fees: "Free", feeType: "total" }
    ],
    highlights: ["Top Brazilian university", "Free education", "Large research output", "Diverse programs"],
    website: "https://www.usp.br",
    image: "/placeholder.svg"
  },
  {
    id: "68",
    name: "Karolinska Institute",
    location: "Stockholm, Sweden",
    type: "Public",
    overallRanking: 38,
    establishedYear: 1810,
    courses: [
      { name: "Medicine", ranking: 6, strength: "Excellent", fees: "SEK 0", feeType: "per-year" },
      { name: "Biomedical Sciences", ranking: 8, strength: "Excellent", fees: "SEK 0", feeType: "per-year" },
      { name: "Public Health", ranking: 12, strength: "Excellent", fees: "SEK 0", feeType: "per-year" },
      { name: "Nursing", ranking: 15, strength: "Very Good", fees: "SEK 0", feeType: "per-year" }
    ],
    highlights: ["Nobel Prize selection", "Medical excellence", "Research intensive", "Free for EU students"],
    website: "https://ki.se",
    image: "/placeholder.svg"
  },
  {
    id: "69",
    name: "University of Cape Town",
    location: "Cape Town, South Africa",
    type: "Public",
    overallRanking: 194,
    establishedYear: 1829,
    courses: [
      { name: "Medicine", ranking: 85, strength: "Good", fees: "ZAR 85,000", feeType: "per-year" },
      { name: "Engineering", ranking: 120, strength: "Average", fees: "ZAR 75,000", feeType: "per-year" },
      { name: "Business", ranking: 95, strength: "Good", fees: "ZAR 65,000", feeType: "per-year" },
      { name: "Law", ranking: 88, strength: "Good", fees: "ZAR 55,000", feeType: "per-year" }
    ],
    highlights: ["Top African university", "Diverse student body", "Beautiful location", "Research focused"],
    website: "https://www.uct.ac.za",
    image: "/placeholder.svg"
  },
  {
    id: "70",
    name: "American University of Beirut",
    location: "Beirut, Lebanon",
    type: "Private",
    overallRanking: 226,
    establishedYear: 1866,
    courses: [
      { name: "Medicine", ranking: 150, strength: "Average", fees: "$32,000", feeType: "per-year" },
      { name: "Engineering", ranking: 180, strength: "Average", fees: "$28,000", feeType: "per-year" },
      { name: "Business", ranking: 165, strength: "Average", fees: "$25,000", feeType: "per-year" },
      { name: "Arts", ranking: 145, strength: "Average", fees: "$22,000", feeType: "per-year" }
    ],
    highlights: ["Liberal arts tradition", "American model", "Regional leader", "Diverse programs"],
    website: "https://www.aub.edu.lb",
    image: "/placeholder.svg"
  },
  {
    id: "71",
    name: "Technion - Israel Institute of Technology",
    location: "Haifa, Israel",
    type: "Public",
    overallRanking: 77,
    establishedYear: 1912,
    courses: [
      { name: "Engineering", ranking: 35, strength: "Very Good", fees: "ILS 11,700", feeType: "per-year" },
      { name: "Computer Science", ranking: 32, strength: "Very Good", fees: "ILS 11,700", feeType: "per-year" },
      { name: "Architecture", ranking: 45, strength: "Good", fees: "ILS 11,700", feeType: "per-year" },
      { name: "Medicine", ranking: 55, strength: "Good", fees: "ILS 27,000", feeType: "per-year" }
    ],
    highlights: ["Israel's MIT", "Innovation hub", "Startup ecosystem", "Nobel laureates"],
    website: "https://www.technion.ac.il",
    image: "/placeholder.svg"
  },
  {
    id: "72",
    name: "University of Buenos Aires",
    location: "Buenos Aires, Argentina",
    type: "Public",
    overallRanking: 67,
    establishedYear: 1821,
    courses: [
      { name: "Medicine", ranking: 42, strength: "Good", fees: "Free", feeType: "total" },
      { name: "Law", ranking: 38, strength: "Very Good", fees: "Free", feeType: "total" },
      { name: "Economics", ranking: 55, strength: "Good", fees: "Free", feeType: "total" },
      { name: "Psychology", ranking: 48, strength: "Good", fees: "Free", feeType: "total" }
    ],
    highlights: ["Free education", "Large enrollment", "Strong in humanities", "Regional influence"],
    website: "https://www.uba.ar",
    image: "/placeholder.svg"
  },
  {
    id: "73",
    name: "Waseda University",
    location: "Tokyo, Japan",
    type: "Private",
    overallRanking: 203,
    establishedYear: 1882,
    courses: [
      { name: "Political Science", ranking: 85, strength: "Good", fees: "¥1,356,000", feeType: "per-year" },
      { name: "Business", ranking: 120, strength: "Average", fees: "¥1,280,000", feeType: "per-year" },
      { name: "Engineering", ranking: 145, strength: "Average", fees: "¥1,695,000", feeType: "per-year" },
      { name: "International Studies", ranking: 95, strength: "Good", fees: "¥1,356,000", feeType: "per-year" }
    ],
    highlights: ["Strong alumni network", "International programs", "Central Tokyo location", "Liberal education"],
    website: "https://www.waseda.jp",
    image: "/placeholder.svg"
  },
  {
    id: "74",
    name: "University of Auckland",
    location: "Auckland, New Zealand",
    type: "Public",
    overallRanking: 68,
    establishedYear: 1883,
    courses: [
      { name: "Medicine", ranking: 48, strength: "Good", fees: "NZD 76,269", feeType: "per-year" },
      { name: "Engineering", ranking: 65, strength: "Good", fees: "NZD 43,166", feeType: "per-year" },
      { name: "Business", ranking: 85, strength: "Good", fees: "NZD 35,742", feeType: "per-year" },
      { name: "Arts", ranking: 78, strength: "Good", fees: "NZD 28,390", feeType: "per-year" }
    ],
    highlights: ["Top NZ university", "Research intensive", "Multicultural", "Beautiful campus"],
    website: "https://www.auckland.ac.nz",
    image: "/placeholder.svg"
  },
  {
    id: "75",
    name: "Chulalongkorn University",
    location: "Bangkok, Thailand",
    type: "Public",
    overallRanking: 208,
    establishedYear: 1917,
    courses: [
      { name: "Medicine", ranking: 180, strength: "Average", fees: "THB 350,000", feeType: "per-year" },
      { name: "Engineering", ranking: 195, strength: "Average", fees: "THB 180,000", feeType: "per-year" },
      { name: "Business", ranking: 185, strength: "Average", fees: "THB 150,000", feeType: "per-year" },
      { name: "Arts", ranking: 175, strength: "Average", fees: "THB 120,000", feeType: "per-year" }
    ],
    highlights: ["Thailand's oldest university", "Royal patronage", "Central Bangkok", "Strong traditions"],
    website: "https://www.chula.ac.th",
    image: "/placeholder.svg"
  }
];

// Keep the old colleges export for backward compatibility
export const colleges: College[] = [...indianColleges, ...worldColleges];
