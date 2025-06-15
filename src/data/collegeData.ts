
interface Course {
  name: string;
  ranking: number;
  strength: 'Excellent' | 'Very Good' | 'Good' | 'Average';
  fees: string;
  feeType: 'per-year' | 'total';
}

interface College {
  id: string;
  name: string;
  location: string;
  type: 'Government' | 'Private' | 'Deemed' | 'Public' | 'Ivy League' | 'Liberal Arts';
  overallRanking: number;
  establishedYear: number;
  courses: Course[];
  highlights: string[];
  website: string;
  image: string;
}

export const indianColleges: College[] = [
  {
    id: 'iit-bombay',
    name: 'IIT Bombay',
    location: 'Mumbai, Maharashtra',
    type: 'Government',
    overallRanking: 1,
    establishedYear: 1958,
    courses: [
      { name: 'Computer Science Engineering', ranking: 1, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Electrical Engineering', ranking: 1, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Mechanical Engineering', ranking: 2, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'MBA', ranking: 15, strength: 'Very Good', fees: '₹22L', feeType: 'total' }
    ],
    highlights: ['Top Alumni Network', 'Research Excellence', 'Industry Partnerships', 'Global Recognition'],
    website: 'https://www.iitb.ac.in',
    image: ''
  },
  {
    id: 'iit-delhi',
    name: 'IIT Delhi',
    location: 'New Delhi',
    type: 'Government',
    overallRanking: 2,
    establishedYear: 1961,
    courses: [
      { name: 'Computer Science Engineering', ranking: 2, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Electrical Engineering', ranking: 2, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Civil Engineering', ranking: 1, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'MBA', ranking: 12, strength: 'Very Good', fees: '₹18L', feeType: 'total' }
    ],
    highlights: ['Capital Location', 'Strong Industry Connect', 'Research Hub', 'International Collaborations'],
    website: 'https://www.iitd.ac.in',
    image: ''
  },
  {
    id: 'iit-madras',
    name: 'IIT Madras',
    location: 'Chennai, Tamil Nadu',
    type: 'Government',
    overallRanking: 3,
    establishedYear: 1959,
    courses: [
      { name: 'Computer Science Engineering', ranking: 3, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Aerospace Engineering', ranking: 1, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Ocean Engineering', ranking: 1, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Data Science', ranking: 5, strength: 'Excellent', fees: '₹3L', feeType: 'per-year' }
    ],
    highlights: ['Research Park', 'Startup Incubation', 'Industry 4.0', 'AI/ML Excellence'],
    website: 'https://www.iitm.ac.in',
    image: ''
  },
  {
    id: 'iisc-bangalore',
    name: 'Indian Institute of Science',
    location: 'Bangalore, Karnataka',
    type: 'Government',
    overallRanking: 4,
    establishedYear: 1909,
    courses: [
      { name: 'Research Programs', ranking: 1, strength: 'Excellent', fees: '₹50K', feeType: 'per-year' },
      { name: 'Physics', ranking: 1, strength: 'Excellent', fees: '₹50K', feeType: 'per-year' },
      { name: 'Chemistry', ranking: 1, strength: 'Excellent', fees: '₹50K', feeType: 'per-year' },
      { name: 'Computational Sciences', ranking: 2, strength: 'Excellent', fees: '₹1L', feeType: 'per-year' }
    ],
    highlights: ['Pure Research Focus', 'Nobel Prize Alumni', 'International Faculty', 'Cutting-edge Labs'],
    website: 'https://www.iisc.ac.in',
    image: ''
  },
  {
    id: 'iit-kanpur',
    name: 'IIT Kanpur',
    location: 'Kanpur, Uttar Pradesh',
    type: 'Government',
    overallRanking: 5,
    establishedYear: 1959,
    courses: [
      { name: 'Computer Science Engineering', ranking: 4, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Mechanical Engineering', ranking: 3, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Chemical Engineering', ranking: 2, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Mathematics', ranking: 3, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' }
    ],
    highlights: ['Technical Innovation', 'Research Excellence', 'Industry Collaboration', 'Alumni Success'],
    website: 'https://www.iitk.ac.in',
    image: ''
  },
  {
    id: 'iit-kharagpur',
    name: 'IIT Kharagpur',
    location: 'Kharagpur, West Bengal',
    type: 'Government',
    overallRanking: 6,
    establishedYear: 1951,
    courses: [
      { name: 'Computer Science Engineering', ranking: 5, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Mining Engineering', ranking: 1, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Metallurgy Engineering', ranking: 1, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Architecture', ranking: 3, strength: 'Excellent', fees: '₹2.8L', feeType: 'per-year' }
    ],
    highlights: ['First IIT', 'Diverse Programs', 'Research Legacy', 'Industry Connect'],
    website: 'https://www.iitkgp.ac.in',
    image: ''
  },
  {
    id: 'iit-roorkee',
    name: 'IIT Roorkee',
    location: 'Roorkee, Uttarakhand',
    type: 'Government',
    overallRanking: 7,
    establishedYear: 1847,
    courses: [
      { name: 'Civil Engineering', ranking: 2, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Computer Science Engineering', ranking: 6, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Electrical Engineering', ranking: 4, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Water Resources Engineering', ranking: 1, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' }
    ],
    highlights: ['Engineering Heritage', 'Civil Engineering Excellence', 'Research Innovation', 'Alumni Network'],
    website: 'https://www.iitr.ac.in',
    image: ''
  },
  {
    id: 'bits-pilani',
    name: 'BITS Pilani',
    location: 'Pilani, Rajasthan',
    type: 'Private',
    overallRanking: 8,
    establishedYear: 1964,
    courses: [
      { name: 'Computer Science Engineering', ranking: 8, strength: 'Excellent', fees: '₹5.5L', feeType: 'per-year' },
      { name: 'Electronics Engineering', ranking: 6, strength: 'Excellent', fees: '₹5.5L', feeType: 'per-year' },
      { name: 'Mechanical Engineering', ranking: 12, strength: 'Very Good', fees: '₹5.5L', feeType: 'per-year' },
      { name: 'MBA', ranking: 25, strength: 'Very Good', fees: '₹15L', feeType: 'total' }
    ],
    highlights: ['Industry Integration', 'Practice School', 'Innovation Focus', 'Global Exposure'],
    website: 'https://www.bits-pilani.ac.in',
    image: ''
  },
  {
    id: 'nit-trichy',
    name: 'NIT Trichy',
    location: 'Tiruchirappalli, Tamil Nadu',
    type: 'Government',
    overallRanking: 9,
    establishedYear: 1964,
    courses: [
      { name: 'Computer Science Engineering', ranking: 9, strength: 'Excellent', fees: '₹1.8L', feeType: 'per-year' },
      { name: 'Electrical Engineering', ranking: 8, strength: 'Excellent', fees: '₹1.8L', feeType: 'per-year' },
      { name: 'Mechanical Engineering', ranking: 10, strength: 'Very Good', fees: '₹1.8L', feeType: 'per-year' },
      { name: 'MBA', ranking: 45, strength: 'Good', fees: '₹8L', feeType: 'total' }
    ],
    highlights: ['Top NIT', 'Strong Alumni', 'Industry Placement', 'Research Focus'],
    website: 'https://www.nitt.edu',
    image: ''
  },
  {
    id: 'nit-warangal',
    name: 'NIT Warangal',
    location: 'Warangal, Telangana',
    type: 'Government',
    overallRanking: 10,
    establishedYear: 1959,
    courses: [
      { name: 'Computer Science Engineering', ranking: 10, strength: 'Excellent', fees: '₹1.8L', feeType: 'per-year' },
      { name: 'Electronics Engineering', ranking: 9, strength: 'Excellent', fees: '₹1.8L', feeType: 'per-year' },
      { name: 'Civil Engineering', ranking: 8, strength: 'Excellent', fees: '₹1.8L', feeType: 'per-year' },
      { name: 'Chemical Engineering', ranking: 12, strength: 'Very Good', fees: '₹1.8L', feeType: 'per-year' }
    ],
    highlights: ['Premier NIT', 'Technical Excellence', 'Industry Connect', 'Research Innovation'],
    website: 'https://www.nitw.ac.in',
    image: ''
  },
  {
    id: 'dtu-delhi',
    name: 'Delhi Technological University',
    location: 'New Delhi',
    type: 'Government',
    overallRanking: 11,
    establishedYear: 1941,
    courses: [
      { name: 'Computer Science Engineering', ranking: 11, strength: 'Excellent', fees: '₹1.5L', feeType: 'per-year' },
      { name: 'Electronics Engineering', ranking: 10, strength: 'Excellent', fees: '₹1.5L', feeType: 'per-year' },
      { name: 'Mechanical Engineering', ranking: 15, strength: 'Very Good', fees: '₹1.5L', feeType: 'per-year' },
      { name: 'MBA', ranking: 50, strength: 'Good', fees: '₹6L', feeType: 'total' }
    ],
    highlights: ['Delhi Location', 'Industry Proximity', 'Strong Placement', 'Technical Focus'],
    website: 'https://www.dtu.ac.in',
    image: ''
  },
  {
    id: 'nsit-delhi',
    name: 'Netaji Subhas University of Technology',
    location: 'New Delhi',
    type: 'Government',
    overallRanking: 12,
    establishedYear: 1983,
    courses: [
      { name: 'Computer Science Engineering', ranking: 12, strength: 'Excellent', fees: '₹1.3L', feeType: 'per-year' },
      { name: 'Electronics Engineering', ranking: 11, strength: 'Excellent', fees: '₹1.3L', feeType: 'per-year' },
      { name: 'Information Technology', ranking: 8, strength: 'Excellent', fees: '₹1.3L', feeType: 'per-year' },
      { name: 'Mechanical Engineering', ranking: 18, strength: 'Very Good', fees: '₹1.3L', feeType: 'per-year' }
    ],
    highlights: ['IT Excellence', 'Capital Advantage', 'Industry Links', 'Affordable Education'],
    website: 'https://www.nsut.ac.in',
    image: ''
  },
  {
    id: 'iiit-hyderabad',
    name: 'IIIT Hyderabad',
    location: 'Hyderabad, Telangana',
    type: 'Private',
    overallRanking: 13,
    establishedYear: 1998,
    courses: [
      { name: 'Computer Science Engineering', ranking: 7, strength: 'Excellent', fees: '₹4.5L', feeType: 'per-year' },
      { name: 'Electronics Engineering', ranking: 12, strength: 'Very Good', fees: '₹4.5L', feeType: 'per-year' },
      { name: 'Data Science', ranking: 3, strength: 'Excellent', fees: '₹5L', feeType: 'per-year' },
      { name: 'AI & Machine Learning', ranking: 2, strength: 'Excellent', fees: '₹5L', feeType: 'per-year' }
    ],
    highlights: ['Research Focus', 'IT Specialization', 'Industry Collaboration', 'Innovation Hub'],
    website: 'https://www.iiit.ac.in',
    image: ''
  },
  {
    id: 'iiit-bangalore',
    name: 'IIIT Bangalore',
    location: 'Bangalore, Karnataka',
    type: 'Private',
    overallRanking: 14,
    establishedYear: 1999,
    courses: [
      { name: 'Computer Science Engineering', ranking: 13, strength: 'Excellent', fees: '₹4.8L', feeType: 'per-year' },
      { name: 'Electronics Engineering', ranking: 14, strength: 'Very Good', fees: '₹4.8L', feeType: 'per-year' },
      { name: 'Information Technology', ranking: 10, strength: 'Excellent', fees: '₹4.8L', feeType: 'per-year' },
      { name: 'Digital Society', ranking: 5, strength: 'Excellent', fees: '₹5.2L', feeType: 'per-year' }
    ],
    highlights: ['IT Capital', 'Research Excellence', 'Industry Integration', 'Innovation Focus'],
    website: 'https://www.iiitb.ac.in',
    image: ''
  },
  {
    id: 'vit-vellore',
    name: 'VIT Vellore',
    location: 'Vellore, Tamil Nadu',
    type: 'Private',
    overallRanking: 15,
    establishedYear: 1984,
    courses: [
      { name: 'Computer Science Engineering', ranking: 18, strength: 'Very Good', fees: '₹4.5L', feeType: 'per-year' },
      { name: 'Electronics Engineering', ranking: 20, strength: 'Very Good', fees: '₹4.5L', feeType: 'per-year' },
      { name: 'Biotechnology', ranking: 12, strength: 'Very Good', fees: '₹4L', feeType: 'per-year' },
      { name: 'MBA', ranking: 35, strength: 'Good', fees: '₹12L', feeType: 'total' }
    ],
    highlights: ['International Students', 'Modern Infrastructure', 'Industry Partnerships', 'Research Focus'],
    website: 'https://www.vit.ac.in',
    image: ''
  },
  {
    id: 'thapar-university',
    name: 'Thapar Institute of Engineering & Technology',
    location: 'Patiala, Punjab',
    type: 'Private',
    overallRanking: 16,
    establishedYear: 1956,
    courses: [
      { name: 'Computer Science Engineering', ranking: 19, strength: 'Very Good', fees: '₹4.8L', feeType: 'per-year' },
      { name: 'Electronics Engineering', ranking: 18, strength: 'Very Good', fees: '₹4.8L', feeType: 'per-year' },
      { name: 'Mechanical Engineering', ranking: 22, strength: 'Very Good', fees: '₹4.8L', feeType: 'per-year' },
      { name: 'MBA', ranking: 42, strength: 'Good', fees: '₹14L', feeType: 'total' }
    ],
    highlights: ['Industry Interface', 'Research Innovation', 'International Collaborations', 'Alumni Network'],
    website: 'https://www.thapar.edu',
    image: ''
  },
  {
    id: 'manipal-university',
    name: 'Manipal University',
    location: 'Manipal, Karnataka',
    type: 'Private',
    overallRanking: 17,
    establishedYear: 1953,
    courses: [
      { name: 'Medicine (MBBS)', ranking: 8, strength: 'Excellent', fees: '₹18L', feeType: 'per-year' },
      { name: 'Engineering', ranking: 25, strength: 'Very Good', fees: '₹4.8L', feeType: 'per-year' },
      { name: 'Pharmacy', ranking: 5, strength: 'Excellent', fees: '₹3.2L', feeType: 'per-year' },
      { name: 'MBA', ranking: 40, strength: 'Good', fees: '₹14L', feeType: 'total' }
    ],
    highlights: ['Medical Excellence', 'Global Campus', 'Research Infrastructure', 'Industry Connect'],
    website: 'https://www.manipal.edu',
    image: ''
  },
  {
    id: 'srm-university',
    name: 'SRM University',
    location: 'Chennai, Tamil Nadu',
    type: 'Private',
    overallRanking: 18,
    establishedYear: 1985,
    courses: [
      { name: 'Computer Science Engineering', ranking: 28, strength: 'Very Good', fees: '₹4.2L', feeType: 'per-year' },
      { name: 'Medicine (MBBS)', ranking: 25, strength: 'Very Good', fees: '₹22L', feeType: 'per-year' },
      { name: 'Mechanical Engineering', ranking: 35, strength: 'Good', fees: '₹3.8L', feeType: 'per-year' },
      { name: 'Law', ranking: 30, strength: 'Good', fees: '₹2.5L', feeType: 'per-year' }
    ],
    highlights: ['Large Campus', 'International Programs', 'Sports Excellence', 'Placement Success'],
    website: 'https://www.srmist.edu.in',
    image: ''
  },
  {
    id: 'bits-goa',
    name: 'BITS Pilani Goa Campus',
    location: 'Goa',
    type: 'Private',
    overallRanking: 19,
    establishedYear: 2004,
    courses: [
      { name: 'Computer Science Engineering', ranking: 15, strength: 'Very Good', fees: '₹5.5L', feeType: 'per-year' },
      { name: 'Electronics Engineering', ranking: 16, strength: 'Very Good', fees: '₹5.5L', feeType: 'per-year' },
      { name: 'Chemical Engineering', ranking: 18, strength: 'Very Good', fees: '₹5.5L', feeType: 'per-year' },
      { name: 'Economics', ranking: 12, strength: 'Very Good', fees: '₹5.5L', feeType: 'per-year' }
    ],
    highlights: ['Beach Campus', 'Liberal Culture', 'Industry Integration', 'Research Focus'],
    website: 'https://www.bits-pilani.ac.in/goa',
    image: ''
  },
  {
    id: 'jadavpur-university',
    name: 'Jadavpur University',
    location: 'Kolkata, West Bengal',
    type: 'Government',
    overallRanking: 20,
    establishedYear: 1955,
    courses: [
      { name: 'Computer Science Engineering', ranking: 14, strength: 'Very Good', fees: '₹1.2L', feeType: 'per-year' },
      { name: 'Electronics Engineering', ranking: 13, strength: 'Very Good', fees: '₹1.2L', feeType: 'per-year' },
      { name: 'Mechanical Engineering', ranking: 16, strength: 'Very Good', fees: '₹1.2L', feeType: 'per-year' },
      { name: 'Arts & Humanities', ranking: 8, strength: 'Excellent', fees: '₹8K', feeType: 'per-year' }
    ],
    highlights: ['Cultural Heritage', 'Research Excellence', 'Affordable Education', 'Literary Tradition'],
    website: 'https://www.jaduniv.edu.in',
    image: ''
  },
  {
    id: 'pec-chandigarh',
    name: 'PEC University of Technology',
    location: 'Chandigarh',
    type: 'Government',
    overallRanking: 21,
    establishedYear: 1921,
    courses: [
      { name: 'Computer Science Engineering', ranking: 17, strength: 'Very Good', fees: '₹1.6L', feeType: 'per-year' },
      { name: 'Electronics Engineering', ranking: 15, strength: 'Very Good', fees: '₹1.6L', feeType: 'per-year' },
      { name: 'Civil Engineering', ranking: 12, strength: 'Very Good', fees: '₹1.6L', feeType: 'per-year' },
      { name: 'Mechanical Engineering', ranking: 20, strength: 'Very Good', fees: '₹1.6L', feeType: 'per-year' }
    ],
    highlights: ['Engineering Legacy', 'Beautiful Campus', 'Strong Alumni', 'Industry Connect'],
    website: 'https://www.pec.edu.in',
    image: ''
  },
  {
    id: 'amity-university',
    name: 'Amity University',
    location: 'Noida, Uttar Pradesh',
    type: 'Private',
    overallRanking: 22,
    establishedYear: 2005,
    courses: [
      { name: 'MBA', ranking: 45, strength: 'Good', fees: '₹16L', feeType: 'total' },
      { name: 'Computer Science Engineering', ranking: 40, strength: 'Good', fees: '₹5.5L', feeType: 'per-year' },
      { name: 'Journalism', ranking: 15, strength: 'Very Good', fees: '₹3.5L', feeType: 'per-year' },
      { name: 'Fashion Design', ranking: 8, strength: 'Excellent', fees: '₹4L', feeType: 'per-year' }
    ],
    highlights: ['Modern Infrastructure', 'Industry Exposure', 'International Exchange', 'Diverse Programs'],
    website: 'https://www.amity.edu',
    image: ''
  },
  {
    id: 'bennett-university',
    name: 'Bennett University',
    location: 'Greater Noida, Uttar Pradesh',
    type: 'Private',
    overallRanking: 23,
    establishedYear: 2016,
    courses: [
      { name: 'Computer Science Engineering', ranking: 32, strength: 'Good', fees: '₹6L', feeType: 'per-year' },
      { name: 'Media Studies', ranking: 12, strength: 'Very Good', fees: '₹4.5L', feeType: 'per-year' },
      { name: 'Law', ranking: 25, strength: 'Good', fees: '₹4L', feeType: 'per-year' },
      { name: 'MBA', ranking: 48, strength: 'Good', fees: '₹18L', feeType: 'total' }
    ],
    highlights: ['Modern Campus', 'Industry Integration', 'Global Faculty', 'Innovation Focus'],
    website: 'https://www.bennett.edu.in',
    image: ''
  },
  {
    id: 'lpu-punjab',
    name: 'Lovely Professional University',
    location: 'Phagwara, Punjab',
    type: 'Private',
    overallRanking: 24,
    establishedYear: 2005,
    courses: [
      { name: 'Computer Science Engineering', ranking: 38, strength: 'Good', fees: '₹4.8L', feeType: 'per-year' },
      { name: 'Mechanical Engineering', ranking: 42, strength: 'Good', fees: '₹4.2L', feeType: 'per-year' },
      { name: 'Fashion Design', ranking: 15, strength: 'Very Good', fees: '₹3.8L', feeType: 'per-year' },
      { name: 'MBA', ranking: 55, strength: 'Average', fees: '₹12L', feeType: 'total' }
    ],
    highlights: ['Large Campus', 'Diverse Programs', 'International Students', 'Sports Facilities'],
    website: 'https://www.lpu.in',
    image: ''
  },
  {
    id: 'christ-university',
    name: 'Christ University',
    location: 'Bangalore, Karnataka',
    type: 'Private',
    overallRanking: 25,
    establishedYear: 1969,
    courses: [
      { name: 'MBA', ranking: 38, strength: 'Good', fees: '₹8.5L', feeType: 'total' },
      { name: 'Law', ranking: 12, strength: 'Very Good', fees: '₹3.8L', feeType: 'per-year' },
      { name: 'Psychology', ranking: 8, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Computer Science', ranking: 45, strength: 'Good', fees: '₹4.2L', feeType: 'per-year' }
    ],
    highlights: ['Liberal Arts Focus', 'Research Culture', 'Social Impact', 'Holistic Development'],
    website: 'https://www.christuniversity.in',
    image: ''
  }
];

export const worldColleges: College[] = [
  {
    id: 'mit',
    name: 'Massachusetts Institute of Technology',
    location: 'Cambridge, USA',
    type: 'Private',
    overallRanking: 1,
    establishedYear: 1861,
    courses: [
      { name: 'Computer Science', ranking: 1, strength: 'Excellent', fees: '$58K', feeType: 'per-year' },
      { name: 'Engineering', ranking: 1, strength: 'Excellent', fees: '$58K', feeType: 'per-year' },
      { name: 'Physics', ranking: 1, strength: 'Excellent', fees: '$58K', feeType: 'per-year' },
      { name: 'MBA', ranking: 4, strength: 'Excellent', fees: '$85K', feeType: 'per-year' }
    ],
    highlights: ['Innovation Hub', 'Nobel Laureates', 'Startup Culture', 'Research Excellence'],
    website: 'https://www.mit.edu',
    image: ''
  },
  {
    id: 'stanford',
    name: 'Stanford University',
    location: 'Stanford, USA',
    type: 'Private',
    overallRanking: 2,
    establishedYear: 1885,
    courses: [
      { name: 'Computer Science', ranking: 2, strength: 'Excellent', fees: '$61K', feeType: 'per-year' },
      { name: 'MBA', ranking: 1, strength: 'Excellent', fees: '$75K', feeType: 'per-year' },
      { name: 'Engineering', ranking: 2, strength: 'Excellent', fees: '$61K', feeType: 'per-year' },
      { name: 'Medicine', ranking: 3, strength: 'Excellent', fees: '$68K', feeType: 'per-year' }
    ],
    highlights: ['Silicon Valley', 'Entrepreneurship', 'Tech Giants Alumni', 'Venture Capital'],
    website: 'https://www.stanford.edu',
    image: ''
  },
  {
    id: 'harvard',
    name: 'Harvard University',
    location: 'Cambridge, USA',
    type: 'Private',
    overallRanking: 3,
    establishedYear: 1636,
    courses: [
      { name: 'MBA', ranking: 2, strength: 'Excellent', fees: '$73K', feeType: 'per-year' },
      { name: 'Medicine', ranking: 1, strength: 'Excellent', fees: '$69K', feeType: 'per-year' },
      { name: 'Law', ranking: 2, strength: 'Excellent', fees: '$70K', feeType: 'per-year' },
      { name: 'Liberal Arts', ranking: 1, strength: 'Excellent', fees: '$56K', feeType: 'per-year' }
    ],
    highlights: ['Ivy League', 'Presidential Alumni', 'Global Network', 'Liberal Arts Excellence'],
    website: 'https://www.harvard.edu',
    image: ''
  },
  {
    id: 'oxford',
    name: 'University of Oxford',
    location: 'Oxford, UK',
    type: 'Public',
    overallRanking: 4,
    establishedYear: 1096,
    courses: [
      { name: 'Philosophy Politics Economics', ranking: 1, strength: 'Excellent', fees: '£37K', feeType: 'per-year' },
      { name: 'Medicine', ranking: 2, strength: 'Excellent', fees: '£46K', feeType: 'per-year' },
      { name: 'Law', ranking: 1, strength: 'Excellent', fees: '£35K', feeType: 'per-year' },
      { name: 'Literature', ranking: 1, strength: 'Excellent', fees: '£32K', feeType: 'per-year' }
    ],
    highlights: ['Ancient Heritage', 'Tutorial System', 'Prime Ministers Alumni', 'Global Prestige'],
    website: 'https://www.ox.ac.uk',
    image: ''
  },
  {
    id: 'cambridge',
    name: 'University of Cambridge',
    location: 'Cambridge, UK',
    type: 'Public',
    overallRanking: 5,
    establishedYear: 1209,
    courses: [
      { name: 'Natural Sciences', ranking: 1, strength: 'Excellent', fees: '£35K', feeType: 'per-year' },
      { name: 'Mathematics', ranking: 1, strength: 'Excellent', fees: '£35K', feeType: 'per-year' },
      { name: 'Engineering', ranking: 3, strength: 'Excellent', fees: '£40K', feeType: 'per-year' },
      { name: 'Medicine', ranking: 4, strength: 'Excellent', fees: '£42K', feeType: 'per-year' }
    ],
    highlights: ['Newton Legacy', 'Scientific Breakthroughs', 'College System', 'Research Excellence'],
    website: 'https://www.cam.ac.uk',
    image: ''
  },
  {
    id: 'caltech',
    name: 'California Institute of Technology',
    location: 'Pasadena, USA',
    type: 'Private',
    overallRanking: 6,
    establishedYear: 1891,
    courses: [
      { name: 'Physics', ranking: 2, strength: 'Excellent', fees: '$60K', feeType: 'per-year' },
      { name: 'Engineering', ranking: 4, strength: 'Excellent', fees: '$60K', feeType: 'per-year' },
      { name: 'Astronomy', ranking: 1, strength: 'Excellent', fees: '$60K', feeType: 'per-year' },
      { name: 'Chemistry', ranking: 3, strength: 'Excellent', fees: '$60K', feeType: 'per-year' }
    ],
    highlights: ['NASA Partnerships', 'Nobel Prize Winners', 'Small Class Size', 'Research Focus'],
    website: 'https://www.caltech.edu',
    image: ''
  },
  {
    id: 'eth-zurich',
    name: 'ETH Zurich',
    location: 'Zurich, Switzerland',
    type: 'Public',
    overallRanking: 7,
    establishedYear: 1855,
    courses: [
      { name: 'Engineering', ranking: 5, strength: 'Excellent', fees: '€1.4K', feeType: 'per-year' },
      { name: 'Computer Science', ranking: 8, strength: 'Excellent', fees: '€1.4K', feeType: 'per-year' },
      { name: 'Architecture', ranking: 3, strength: 'Excellent', fees: '€1.4K', feeType: 'per-year' },
      { name: 'Natural Sciences', ranking: 6, strength: 'Excellent', fees: '€1.4K', feeType: 'per-year' }
    ],
    highlights: ['Einstein Alumni', 'European Excellence', 'Innovation Hub', 'Affordable Education'],
    website: 'https://www.ethz.ch',
    image: ''
  },
  {
    id: 'imperial-college',
    name: 'Imperial College London',
    location: 'London, UK',
    type: 'Public',
    overallRanking: 8,
    establishedYear: 1907,
    courses: [
      { name: 'Engineering', ranking: 6, strength: 'Excellent', fees: '£38K', feeType: 'per-year' },
      { name: 'Medicine', ranking: 5, strength: 'Excellent', fees: '£48K', feeType: 'per-year' },
      { name: 'Business', ranking: 15, strength: 'Very Good', fees: '£55K', feeType: 'per-year' },
      { name: 'Natural Sciences', ranking: 8, strength: 'Excellent', fees: '£36K', feeType: 'per-year' }
    ],
    highlights: ['STEM Focus', 'London Location', 'Industry Partnerships', 'Research Excellence'],
    website: 'https://www.imperial.ac.uk',
    image: ''
  },
  {
    id: 'ucl',
    name: 'University College London',
    location: 'London, UK',
    type: 'Public',
    overallRanking: 9,
    establishedYear: 1826,
    courses: [
      { name: 'Architecture', ranking: 2, strength: 'Excellent', fees: '£35K', feeType: 'per-year' },
      { name: 'Medicine', ranking: 6, strength: 'Excellent', fees: '£45K', feeType: 'per-year' },
      { name: 'Psychology', ranking: 4, strength: 'Excellent', fees: '£32K', feeType: 'per-year' },
      { name: 'Engineering', ranking: 12, strength: 'Very Good', fees: '£38K', feeType: 'per-year' }
    ],
    highlights: ['Research University', 'Central London', 'Global Diversity', 'Innovation Hub'],
    website: 'https://www.ucl.ac.uk',
    image: ''
  },
  {
    id: 'yale',
    name: 'Yale University',
    location: 'New Haven, USA',
    type: 'Private',
    overallRanking: 10,
    establishedYear: 1701,
    courses: [
      { name: 'Law', ranking: 1, strength: 'Excellent', fees: '$71K', feeType: 'per-year' },
      { name: 'Liberal Arts', ranking: 2, strength: 'Excellent', fees: '$59K', feeType: 'per-year' },
      { name: 'Medicine', ranking: 8, strength: 'Excellent', fees: '$67K', feeType: 'per-year' },
      { name: 'MBA', ranking: 8, strength: 'Excellent', fees: '$72K', feeType: 'per-year' }
    ],
    highlights: ['Ivy League', 'Liberal Arts Excellence', 'Secret Societies', 'Presidential Alumni'],
    website: 'https://www.yale.edu',
    image: ''
  },
  {
    id: 'nus',
    name: 'National University of Singapore',
    location: 'Singapore',
    type: 'Public',
    overallRanking: 11,
    establishedYear: 1905,
    courses: [
      { name: 'Computer Science', ranking: 12, strength: 'Very Good', fees: '$40K', feeType: 'per-year' },
      { name: 'Business', ranking: 18, strength: 'Very Good', fees: '$55K', feeType: 'per-year' },
      { name: 'Engineering', ranking: 15, strength: 'Very Good', fees: '$42K', feeType: 'per-year' },
      { name: 'Medicine', ranking: 20, strength: 'Very Good', fees: '$48K', feeType: 'per-year' }
    ],
    highlights: ['Asian Hub', 'Multicultural', 'Financial Center', 'Tech Innovation'],
    website: 'https://www.nus.edu.sg',
    image: ''
  },
  {
    id: 'princeton',
    name: 'Princeton University',
    location: 'Princeton, USA',
    type: 'Private',
    overallRanking: 12,
    establishedYear: 1746,
    courses: [
      { name: 'Physics', ranking: 3, strength: 'Excellent', fees: '$57K', feeType: 'per-year' },
      { name: 'Economics', ranking: 2, strength: 'Excellent', fees: '$57K', feeType: 'per-year' },
      { name: 'Mathematics', ranking: 2, strength: 'Excellent', fees: '$57K', feeType: 'per-year' },
      { name: 'Computer Science', ranking: 8, strength: 'Excellent', fees: '$57K', feeType: 'per-year' }
    ],
    highlights: ['Ivy League', 'Undergraduate Focus', 'Beautiful Campus', 'Elite Network'],
    website: 'https://www.princeton.edu',
    image: ''
  },
  {
    id: 'columbia',
    name: 'Columbia University',
    location: 'New York, USA',
    type: 'Private',
    overallRanking: 13,
    establishedYear: 1754,
    courses: [
      { name: 'Journalism', ranking: 1, strength: 'Excellent', fees: '$63K', feeType: 'per-year' },
      { name: 'Medicine', ranking: 7, strength: 'Excellent', fees: '$68K', feeType: 'per-year' },
      { name: 'Business', ranking: 6, strength: 'Excellent', fees: '$77K', feeType: 'per-year' },
      { name: 'International Relations', ranking: 3, strength: 'Excellent', fees: '$61K', feeType: 'per-year' }
    ],
    highlights: ['NYC Location', 'Journalism Excellence', 'Research University', 'Global Network'],
    website: 'https://www.columbia.edu',
    image: ''
  },
  {
    id: 'uchicago',
    name: 'University of Chicago',
    location: 'Chicago, USA',
    type: 'Private',
    overallRanking: 14,
    establishedYear: 1890,
    courses: [
      { name: 'Economics', ranking: 1, strength: 'Excellent', fees: '$62K', feeType: 'per-year' },
      { name: 'Business', ranking: 3, strength: 'Excellent', fees: '$76K', feeType: 'per-year' },
      { name: 'Physics', ranking: 4, strength: 'Excellent', fees: '$62K', feeType: 'per-year' },
      { name: 'Sociology', ranking: 2, strength: 'Excellent', fees: '$62K', feeType: 'per-year' }
    ],
    highlights: ['Nobel Prize Winners', 'Chicago School', 'Research Excellence', 'Intellectual Rigor'],
    website: 'https://www.uchicago.edu',
    image: ''
  },
  {
    id: 'upenn',
    name: 'University of Pennsylvania',
    location: 'Philadelphia, USA',
    type: 'Private',
    overallRanking: 15,
    establishedYear: 1740,
    courses: [
      { name: 'Business (Wharton)', ranking: 1, strength: 'Excellent', fees: '$84K', feeType: 'per-year' },
      { name: 'Medicine', ranking: 5, strength: 'Excellent', fees: '$65K', feeType: 'per-year' },
      { name: 'Engineering', ranking: 18, strength: 'Very Good', fees: '$60K', feeType: 'per-year' },
      { name: 'Nursing', ranking: 1, strength: 'Excellent', fees: '$58K', feeType: 'per-year' }
    ],
    highlights: ['Wharton Business School', 'Ivy League', 'Urban Campus', 'Innovation Hub'],
    website: 'https://www.upenn.edu',
    image: ''
  },
  {
    id: 'cornell',
    name: 'Cornell University',
    location: 'Ithaca, USA',
    type: 'Private',
    overallRanking: 16,
    establishedYear: 1865,
    courses: [
      { name: 'Agriculture', ranking: 1, strength: 'Excellent', fees: '$59K', feeType: 'per-year' },
      { name: 'Engineering', ranking: 10, strength: 'Excellent', fees: '$59K', feeType: 'per-year' },
      { name: 'Hotel Administration', ranking: 1, strength: 'Excellent', fees: '$59K', feeType: 'per-year' },
      { name: 'Veterinary Medicine', ranking: 2, strength: 'Excellent', fees: '$62K', feeType: 'per-year' }
    ],
    highlights: ['Ivy League', 'Research University', 'Beautiful Campus', 'Diverse Programs'],
    website: 'https://www.cornell.edu',
    image: ''
  },
  {
    id: 'dartmouth',
    name: 'Dartmouth College',
    location: 'Hanover, USA',
    type: 'Private',
    overallRanking: 17,
    establishedYear: 1769,
    courses: [
      { name: 'Liberal Arts', ranking: 8, strength: 'Excellent', fees: '$60K', feeType: 'per-year' },
      { name: 'Business (Tuck)', ranking: 7, strength: 'Excellent', fees: '$78K', feeType: 'per-year' },
      { name: 'Medicine', ranking: 15, strength: 'Very Good', fees: '$64K', feeType: 'per-year' },
      { name: 'Engineering', ranking: 25, strength: 'Very Good', fees: '$60K', feeType: 'per-year' }
    ],
    highlights: ['Ivy League', 'Liberal Arts', 'Alumni Network', 'Outdoor Culture'],
    website: 'https://www.dartmouth.edu',
    image: ''
  },
  {
    id: 'university-toronto',
    name: 'University of Toronto',
    location: 'Toronto, Canada',
    type: 'Public',
    overallRanking: 18,
    establishedYear: 1827,
    courses: [
      { name: 'Medicine', ranking: 8, strength: 'Excellent', fees: '$45K', feeType: 'per-year' },
      { name: 'Engineering', ranking: 18, strength: 'Very Good', fees: '$38K', feeType: 'per-year' },
      { name: 'Business', ranking: 22, strength: 'Very Good', fees: '$52K', feeType: 'per-year' },
      { name: 'Computer Science', ranking: 25, strength: 'Very Good', fees: '$40K', feeType: 'per-year' }
    ],
    highlights: ['Research University', 'Diverse Campus', 'Canadian Excellence', 'Innovation Corridor'],
    website: 'https://www.utoronto.ca',
    image: ''
  },
  {
    id: 'duke',
    name: 'Duke University',
    location: 'Durham, USA',
    type: 'Private',
    overallRanking: 19,
    establishedYear: 1838,
    courses: [
      { name: 'Medicine', ranking: 6, strength: 'Excellent', fees: '$66K', feeType: 'per-year' },
      { name: 'Business (Fuqua)', ranking: 12, strength: 'Very Good', fees: '$74K', feeType: 'per-year' },
      { name: 'Law', ranking: 10, strength: 'Excellent', fees: '$68K', feeType: 'per-year' },
      { name: 'Engineering', ranking: 22, strength: 'Very Good', fees: '$60K', feeType: 'per-year' }
    ],
    highlights: ['Research Triangle', 'Basketball Excellence', 'Medical Center', 'Innovation Hub'],
    website: 'https://www.duke.edu',
    image: ''
  },
  {
    id: 'northwestern',
    name: 'Northwestern University',
    location: 'Evanston, USA',
    type: 'Private',
    overallRanking: 20,
    establishedYear: 1851,
    courses: [
      { name: 'Business (Kellogg)', ranking: 4, strength: 'Excellent', fees: '$76K', feeType: 'per-year' },
      { name: 'Journalism', ranking: 2, strength: 'Excellent', fees: '$58K', feeType: 'per-year' },
      { name: 'Medicine', ranking: 18, strength: 'Very Good', fees: '$65K', feeType: 'per-year' },
      { name: 'Engineering', ranking: 20, strength: 'Very Good', fees: '$59K', feeType: 'per-year' }
    ],
    highlights: ['Chicago Area', 'Business Excellence', 'Research University', 'Lake Campus'],
    website: 'https://www.northwestern.edu',
    image: ''
  }
];
