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
  },
  {
    id: 'iit-guwahati',
    name: 'IIT Guwahati',
    location: 'Guwahati, Assam',
    type: 'Government',
    overallRanking: 26,
    establishedYear: 1994,
    courses: [
      { name: 'Computer Science Engineering', ranking: 16, strength: 'Very Good', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Electronics Engineering', ranking: 17, strength: 'Very Good', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Biotechnology', ranking: 5, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Design', ranking: 2, strength: 'Excellent', fees: '₹2.8L', feeType: 'per-year' }
    ],
    highlights: ['Scenic Campus', 'Design Excellence', 'Research Hub', 'Northeast Gateway'],
    website: 'https://www.iitg.ac.in',
    image: ''
  },
  {
    id: 'nit-surathkal',
    name: 'NIT Karnataka (Surathkal)',
    location: 'Surathkal, Karnataka',
    type: 'Government',
    overallRanking: 27,
    establishedYear: 1960,
    courses: [
      { name: 'Computer Science Engineering', ranking: 20, strength: 'Very Good', fees: '₹1.8L', feeType: 'per-year' },
      { name: 'Information Technology', ranking: 15, strength: 'Very Good', fees: '₹1.8L', feeType: 'per-year' },
      { name: 'Chemical Engineering', ranking: 15, strength: 'Very Good', fees: '₹1.8L', feeType: 'per-year' },
      { name: 'Civil Engineering', ranking: 18, strength: 'Very Good', fees: '₹1.8L', feeType: 'per-year' }
    ],
    highlights: ['Coastal Campus', 'Industry Connect', 'Strong Alumni', 'Technical Excellence'],
    website: 'https://www.nitk.ac.in',
    image: ''
  },
  {
    id: 'nit-rourkela',
    name: 'NIT Rourkela',
    location: 'Rourkela, Odisha',
    type: 'Government',
    overallRanking: 28,
    establishedYear: 1961,
    courses: [
      { name: 'Metallurgical Engineering', ranking: 3, strength: 'Excellent', fees: '₹1.8L', feeType: 'per-year' },
      { name: 'Computer Science Engineering', ranking: 22, strength: 'Very Good', fees: '₹1.8L', feeType: 'per-year' },
      { name: 'Mining Engineering', ranking: 3, strength: 'Excellent', fees: '₹1.8L', feeType: 'per-year' },
      { name: 'Industrial Design', ranking: 8, strength: 'Excellent', fees: '₹2L', feeType: 'per-year' }
    ],
    highlights: ['Mining Excellence', 'Industrial Hub', 'Research Focus', 'Large Campus'],
    website: 'https://www.nitrkl.ac.in',
    image: ''
  },
  {
    id: 'iiser-pune',
    name: 'IISER Pune',
    location: 'Pune, Maharashtra',
    type: 'Government',
    overallRanking: 29,
    establishedYear: 2006,
    courses: [
      { name: 'Biology', ranking: 4, strength: 'Excellent', fees: '₹60K', feeType: 'per-year' },
      { name: 'Chemistry', ranking: 5, strength: 'Excellent', fees: '₹60K', feeType: 'per-year' },
      { name: 'Physics', ranking: 6, strength: 'Excellent', fees: '₹60K', feeType: 'per-year' },
      { name: 'Mathematics', ranking: 8, strength: 'Excellent', fees: '₹60K', feeType: 'per-year' }
    ],
    highlights: ['Pure Science Focus', 'Research Excellence', 'PhD Programs', 'Modern Labs'],
    website: 'https://www.iiserpune.ac.in',
    image: ''
  },
  {
    id: 'isi-kolkata',
    name: 'Indian Statistical Institute',
    location: 'Kolkata, West Bengal',
    type: 'Government',
    overallRanking: 30,
    establishedYear: 1931,
    courses: [
      { name: 'Statistics', ranking: 1, strength: 'Excellent', fees: '₹45K', feeType: 'per-year' },
      { name: 'Mathematics', ranking: 4, strength: 'Excellent', fees: '₹45K', feeType: 'per-year' },
      { name: 'Computer Science', ranking: 25, strength: 'Very Good', fees: '₹60K', feeType: 'per-year' },
      { name: 'Quality Control', ranking: 1, strength: 'Excellent', fees: '₹50K', feeType: 'per-year' }
    ],
    highlights: ['Statistics Pioneer', 'Research Institute', 'Data Science Hub', 'Mathematical Excellence'],
    website: 'https://www.isical.ac.in',
    image: ''
  },
  {
    id: 'jnu-delhi',
    name: 'Jawaharlal Nehru University',
    location: 'New Delhi',
    type: 'Government',
    overallRanking: 31,
    establishedYear: 1969,
    courses: [
      { name: 'International Relations', ranking: 2, strength: 'Excellent', fees: '₹15K', feeType: 'per-year' },
      { name: 'Economics', ranking: 6, strength: 'Excellent', fees: '₹15K', feeType: 'per-year' },
      { name: 'Social Sciences', ranking: 3, strength: 'Excellent', fees: '₹15K', feeType: 'per-year' },
      { name: 'Languages', ranking: 4, strength: 'Excellent', fees: '₹12K', feeType: 'per-year' }
    ],
    highlights: ['Liberal Arts Excellence', 'Research University', 'Political Science Hub', 'Diverse Community'],
    website: 'https://www.jnu.ac.in',
    image: ''
  },
  {
    id: 'du-delhi',
    name: 'University of Delhi',
    location: 'New Delhi',
    type: 'Government',
    overallRanking: 32,
    establishedYear: 1922,
    courses: [
      { name: 'Economics', ranking: 8, strength: 'Excellent', fees: '₹25K', feeType: 'per-year' },
      { name: 'English Literature', ranking: 5, strength: 'Excellent', fees: '₹20K', feeType: 'per-year' },
      { name: 'History', ranking: 4, strength: 'Excellent', fees: '₹18K', feeType: 'per-year' },
      { name: 'Commerce', ranking: 6, strength: 'Excellent', fees: '₹22K', feeType: 'per-year' }
    ],
    highlights: ['College System', 'Liberal Arts', 'Cultural Heritage', 'Alumni Network'],
    website: 'https://www.du.ac.in',
    image: ''
  },
  {
    id: 'bhu-varanasi',
    name: 'Banaras Hindu University',
    location: 'Varanasi, Uttar Pradesh',
    type: 'Government',
    overallRanking: 33,
    establishedYear: 1916,
    courses: [
      { name: 'Sanskrit Studies', ranking: 1, strength: 'Excellent', fees: '₹18K', feeType: 'per-year' },
      { name: 'Medicine (MBBS)', ranking: 15, strength: 'Very Good', fees: '₹1.2L', feeType: 'per-year' },
      { name: 'Engineering', ranking: 45, strength: 'Good', fees: '₹1.5L', feeType: 'per-year' },
      { name: 'Arts & Humanities', ranking: 12, strength: 'Very Good', fees: '₹15K', feeType: 'per-year' }
    ],
    highlights: ['Cultural Heritage', 'Sanskrit Excellence', 'Large Campus', 'Diverse Programs'],
    website: 'https://www.bhu.ac.in',
    image: ''
  },
  {
    id: 'iim-ahmedabad',
    name: 'IIM Ahmedabad',
    location: 'Ahmedabad, Gujarat',
    type: 'Government',
    overallRanking: 34,
    establishedYear: 1961,
    courses: [
      { name: 'MBA', ranking: 1, strength: 'Excellent', fees: '₹25L', feeType: 'total' },
      { name: 'Executive MBA', ranking: 1, strength: 'Excellent', fees: '₹35L', feeType: 'total' },
      { name: 'PhD Management', ranking: 2, strength: 'Excellent', fees: '₹2L', feeType: 'total' },
      { name: 'Fellow Programme', ranking: 1, strength: 'Excellent', fees: '₹2L', feeType: 'total' }
    ],
    highlights: ['Top MBA School', 'Case Study Method', 'Alumni Network', 'Management Excellence'],
    website: 'https://www.iima.ac.in',
    image: ''
  },
  {
    id: 'iim-bangalore',
    name: 'IIM Bangalore',
    location: 'Bangalore, Karnataka',
    type: 'Government',
    overallRanking: 35,
    establishedYear: 1973,
    courses: [
      { name: 'MBA', ranking: 2, strength: 'Excellent', fees: '₹24L', feeType: 'total' },
      { name: 'Executive MBA', ranking: 2, strength: 'Excellent', fees: '₹32L', feeType: 'total' },
      { name: 'PhD Management', ranking: 3, strength: 'Excellent', fees: '₹2L', feeType: 'total' },
      { name: 'Management Development', ranking: 2, strength: 'Excellent', fees: '₹5L', feeType: 'total' }
    ],
    highlights: ['IT Capital Location', 'Research Focus', 'Industry Connect', 'Global Rankings'],
    website: 'https://www.iimb.ac.in',
    image: ''
  },
  {
    id: 'iim-calcutta',
    name: 'IIM Calcutta',
    location: 'Kolkata, West Bengal',
    type: 'Government',
    overallRanking: 36,
    establishedYear: 1961,
    courses: [
      { name: 'MBA', ranking: 3, strength: 'Excellent', fees: '₹23L', feeType: 'total' },
      { name: 'Executive MBA', ranking: 3, strength: 'Excellent', fees: '₹30L', feeType: 'total' },
      { name: 'PhD Management', ranking: 4, strength: 'Excellent', fees: '₹2L', feeType: 'total' },
      { name: 'Finance', ranking: 2, strength: 'Excellent', fees: '₹25L', feeType: 'total' }
    ],
    highlights: ['Finance Excellence', 'Cultural City', 'Research Heritage', 'Alumni Success'],
    website: 'https://www.iimcal.ac.in',
    image: ''
  },
  {
    id: 'aiims-delhi',
    name: 'AIIMS Delhi',
    location: 'New Delhi',
    type: 'Government',
    overallRanking: 37,
    establishedYear: 1956,
    courses: [
      { name: 'Medicine (MBBS)', ranking: 1, strength: 'Excellent', fees: '₹5K', feeType: 'per-year' },
      { name: 'Nursing', ranking: 1, strength: 'Excellent', fees: '₹3K', feeType: 'per-year' },
      { name: 'MD/MS', ranking: 1, strength: 'Excellent', fees: '₹10K', feeType: 'per-year' },
      { name: 'DM/MCh', ranking: 1, strength: 'Excellent', fees: '₹15K', feeType: 'per-year' }
    ],
    highlights: ['Medical Excellence', 'Research Hospital', 'Affordable Education', 'Global Recognition'],
    website: 'https://www.aiims.edu',
    image: ''
  },
  {
    id: 'nlu-delhi',
    name: 'National Law University Delhi',
    location: 'New Delhi',
    type: 'Government',
    overallRanking: 38,
    establishedYear: 2008,
    courses: [
      { name: 'Law (BA LLB)', ranking: 3, strength: 'Excellent', fees: '₹1.8L', feeType: 'per-year' },
      { name: 'Law (LLM)', ranking: 5, strength: 'Excellent', fees: '₹2.2L', feeType: 'per-year' },
      { name: 'PhD Law', ranking: 4, strength: 'Excellent', fees: '₹1L', feeType: 'per-year' },
      { name: 'Corporate Law', ranking: 2, strength: 'Excellent', fees: '₹2L', feeType: 'per-year' }
    ],
    highlights: ['Law Excellence', 'Moot Court', 'Legal Research', 'Capital Advantage'],
    website: 'https://www.nludelhi.ac.in',
    image: ''
  },
  {
    id: 'nalsar-hyderabad',
    name: 'NALSAR University of Law',
    location: 'Hyderabad, Telangana',
    type: 'Government',
    overallRanking: 39,
    establishedYear: 1998,
    courses: [
      { name: 'Law (BA LLB)', ranking: 4, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Law (BBA LLB)', ranking: 3, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'LLM', ranking: 6, strength: 'Excellent', fees: '₹2.8L', feeType: 'per-year' },
      { name: 'Corporate Law', ranking: 4, strength: 'Excellent', fees: '₹3L', feeType: 'per-year' }
    ],
    highlights: ['Corporate Law Focus', 'Modern Campus', 'Industry Connect', 'Moot Excellence'],
    website: 'https://www.nalsar.ac.in',
    image: ''
  },
  {
    id: 'nift-delhi',
    name: 'National Institute of Fashion Technology',
    location: 'New Delhi',
    type: 'Government',
    overallRanking: 40,
    establishedYear: 1986,
    courses: [
      { name: 'Fashion Design', ranking: 1, strength: 'Excellent', fees: '₹2.8L', feeType: 'per-year' },
      { name: 'Fashion Technology', ranking: 1, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Fashion Management', ranking: 1, strength: 'Excellent', fees: '₹3L', feeType: 'per-year' },
      { name: 'Textile Design', ranking: 2, strength: 'Excellent', fees: '₹2.6L', feeType: 'per-year' }
    ],
    highlights: ['Fashion Authority', 'Industry Integration', 'Global Exposure', 'Creative Excellence'],
    website: 'https://www.nift.ac.in',
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
  },
  {
    id: 'brown',
    name: 'Brown University',
    location: 'Providence, USA',
    type: 'Private',
    overallRanking: 21,
    establishedYear: 1764,
    courses: [
      { name: 'Liberal Arts', ranking: 12, strength: 'Very Good', fees: '$59K', feeType: 'per-year' },
      { name: 'Medicine', ranking: 12, strength: 'Very Good', fees: '$65K', feeType: 'per-year' },
      { name: 'Computer Science', ranking: 18, strength: 'Very Good', fees: '$59K', feeType: 'per-year' },
      { name: 'International Relations', ranking: 8, strength: 'Excellent', fees: '$59K', feeType: 'per-year' }
    ],
    highlights: ['Open Curriculum', 'Ivy League', 'Liberal Arts', 'Student Freedom'],
    website: 'https://www.brown.edu',
    image: ''
  },
  {
    id: 'rice',
    name: 'Rice University',
    location: 'Houston, USA',
    type: 'Private',
    overallRanking: 22,
    establishedYear: 1912,
    courses: [
      { name: 'Engineering', ranking: 16, strength: 'Very Good', fees: '$52K', feeType: 'per-year' },
      { name: 'Computer Science', ranking: 20, strength: 'Very Good', fees: '$52K', feeType: 'per-year' },
      { name: 'Architecture', ranking: 5, strength: 'Excellent', fees: '$52K', feeType: 'per-year' },
      { name: 'Business', ranking: 20, strength: 'Very Good', fees: '$65K', feeType: 'per-year' }
    ],
    highlights: ['Small Class Size', 'Engineering Excellence', 'Research University', 'Merit Aid'],
    website: 'https://www.rice.edu',
    image: ''
  },
  {
    id: 'carnegie-mellon',
    name: 'Carnegie Mellon University',
    location: 'Pittsburgh, USA',
    type: 'Private',
    overallRanking: 23,
    establishedYear: 1900,
    courses: [
      { name: 'Computer Science', ranking: 3, strength: 'Excellent', fees: '$59K', feeType: 'per-year' },
      { name: 'Engineering', ranking: 8, strength: 'Excellent', fees: '$59K', feeType: 'per-year' },
      { name: 'Drama', ranking: 1, strength: 'Excellent', fees: '$59K', feeType: 'per-year' },
      { name: 'Business', ranking: 18, strength: 'Very Good', fees: '$69K', feeType: 'per-year' }
    ],
    highlights: ['Tech Innovation', 'AI Research', 'Interdisciplinary', 'Industry Partners'],
    website: 'https://www.cmu.edu',
    image: ''
  },
  {
    id: 'vanderbilt',
    name: 'Vanderbilt University',
    location: 'Nashville, USA',
    type: 'Private',
    overallRanking: 24,
    establishedYear: 1873,
    courses: [
      { name: 'Medicine', ranking: 14, strength: 'Very Good', fees: '$63K', feeType: 'per-year' },
      { name: 'Education', ranking: 4, strength: 'Excellent', fees: '$52K', feeType: 'per-year' },
      { name: 'Engineering', ranking: 28, strength: 'Very Good', fees: '$52K', feeType: 'per-year' },
      { name: 'Music', ranking: 6, strength: 'Excellent', fees: '$52K', feeType: 'per-year' }
    ],
    highlights: ['Beautiful Campus', 'Strong Alumni', 'Research University', 'Music City'],
    website: 'https://www.vanderbilt.edu',
    image: ''
  },
  {
    id: 'washington-university',
    name: 'Washington University in St. Louis',
    location: 'St. Louis, USA',
    type: 'Private',
    overallRanking: 25,
    establishedYear: 1853,
    courses: [
      { name: 'Medicine', ranking: 9, strength: 'Excellent', fees: '$66K', feeType: 'per-year' },
      { name: 'Business', ranking: 16, strength: 'Very Good', fees: '$67K', feeType: 'per-year' },
      { name: 'Engineering', ranking: 24, strength: 'Very Good', fees: '$56K', feeType: 'per-year' },
      { name: 'Social Work', ranking: 2, strength: 'Excellent', fees: '$48K', feeType: 'per-year' }
    ],
    highlights: ['Medical Excellence', 'Research Focus', 'Merit Scholarships', 'Campus Beauty'],
    website: 'https://www.wustl.edu',
    image: ''
  },
  {
    id: 'notre-dame',
    name: 'University of Notre Dame',
    location: 'Notre Dame, USA',
    type: 'Private',
    overallRanking: 26,
    establishedYear: 1842,
    courses: [
      { name: 'Business', ranking: 14, strength: 'Very Good', fees: '$58K', feeType: 'per-year' },
      { name: 'Engineering', ranking: 30, strength: 'Good', fees: '$58K', feeType: 'per-year' },
      { name: 'Architecture', ranking: 8, strength: 'Excellent', fees: '$58K', feeType: 'per-year' },
      { name: 'Liberal Arts', ranking: 15, strength: 'Very Good', fees: '$58K', feeType: 'per-year' }
    ],
    highlights: ['Catholic Heritage', 'Strong Alumni', 'Football Excellence', 'Community Spirit'],
    website: 'https://www.nd.edu',
    image: ''
  },
  {
    id: 'emory',
    name: 'Emory University',
    location: 'Atlanta, USA',
    type: 'Private',
    overallRanking: 27,
    establishedYear: 1836,
    courses: [
      { name: 'Medicine', ranking: 16, strength: 'Very Good', fees: '$62K', feeType: 'per-year' },
      { name: 'Business', ranking: 22, strength: 'Very Good', fees: '$63K', feeType: 'per-year' },
      { name: 'Public Health', ranking: 5, strength: 'Excellent', fees: '$48K', feeType: 'per-year' },
      { name: 'Nursing', ranking: 8, strength: 'Excellent', fees: '$45K', feeType: 'per-year' }
    ],
    highlights: ['Medical Research', 'CDC Partnership', 'Liberal Arts', 'Atlanta Location'],
    website: 'https://www.emory.edu',
    image: ''
  },
  {
    id: 'georgetown',
    name: 'Georgetown University',
    location: 'Washington DC, USA',
    type: 'Private',
    overallRanking: 28,
    establishedYear: 1789,
    courses: [
      { name: 'International Relations', ranking: 1, strength: 'Excellent', fees: '$58K', feeType: 'per-year' },
      { name: 'Law', ranking: 14, strength: 'Very Good', fees: '$65K', feeType: 'per-year' },
      { name: 'Business', ranking: 24, strength: 'Very Good', fees: '$59K', feeType: 'per-year' },
      { name: 'Medicine', ranking: 22, strength: 'Very Good', fees: '$61K', feeType: 'per-year' }
    ],
    highlights: ['DC Location', 'Politics Hub', 'Jesuit Tradition', 'Global Affairs'],
    website: 'https://www.georgetown.edu',
    image: ''
  },
  {
    id: 'berkeley',
    name: 'University of California, Berkeley',
    location: 'Berkeley, USA',
    type: 'Public',
    overallRanking: 29,
    establishedYear: 1868,
    courses: [
      { name: 'Engineering', ranking: 3, strength: 'Excellent', fees: '$45K', feeType: 'per-year' },
      { name: 'Computer Science', ranking: 4, strength: 'Excellent', fees: '$45K', feeType: 'per-year' },
      { name: 'Business', ranking: 8, strength: 'Excellent', fees: '$60K', feeType: 'per-year' },
      { name: 'Chemistry', ranking: 2, strength: 'Excellent', fees: '$45K', feeType: 'per-year' }
    ],
    highlights: ['Public Ivy', 'Research Excellence', 'Silicon Valley', 'Liberal Culture'],
    website: 'https://www.berkeley.edu',
    image: ''
  },
  {
    id: 'ucla',
    name: 'University of California, Los Angeles',
    location: 'Los Angeles, USA',
    type: 'Public',
    overallRanking: 30,
    establishedYear: 1919,
    courses: [
      { name: 'Film & Television', ranking: 1, strength: 'Excellent', fees: '$45K', feeType: 'per-year' },
      { name: 'Medicine', ranking: 11, strength: 'Very Good', fees: '$48K', feeType: 'per-year' },
      { name: 'Engineering', ranking: 16, strength: 'Very Good', fees: '$45K', feeType: 'per-year' },
      { name: 'Business', ranking: 18, strength: 'Very Good', fees: '$58K', feeType: 'per-year' }
    ],
    highlights: ['Entertainment Industry', 'Research University', 'Sports Excellence', 'Diversity'],
    website: 'https://www.ucla.edu',
    image: ''
  },
  {
    id: 'university-melbourne',
    name: 'University of Melbourne',
    location: 'Melbourne, Australia',
    type: 'Public',
    overallRanking: 31,
    establishedYear: 1853,
    courses: [
      { name: 'Medicine', ranking: 15, strength: 'Very Good', fees: '$65K', feeType: 'per-year' },
      { name: 'Law', ranking: 12, strength: 'Very Good', fees: '$48K', feeType: 'per-year' },
      { name: 'Engineering', ranking: 32, strength: 'Good', fees: '$45K', feeType: 'per-year' },
      { name: 'Business', ranking: 26, strength: 'Very Good', fees: '$46K', feeType: 'per-year' }
    ],
    highlights: ['Group of Eight', 'Research Excellence', 'Cultural City', 'International Hub'],
    website: 'https://www.unimelb.edu.au',
    image: ''
  },
  {
    id: 'australian-national',
    name: 'Australian National University',
    location: 'Canberra, Australia',
    type: 'Public',
    overallRanking: 32,
    establishedYear: 1946,
    courses: [
      { name: 'Politics & International Relations', ranking: 5, strength: 'Excellent', fees: '$46K', feeType: 'per-year' },
      { name: 'Philosophy', ranking: 4, strength: 'Excellent', fees: '$42K', feeType: 'per-year' },
      { name: 'Economics', ranking: 18, strength: 'Very Good', fees: '$46K', feeType: 'per-year' },
      { name: 'Astronomy', ranking: 6, strength: 'Excellent', fees: '$48K', feeType: 'per-year' }
    ],
    highlights: ['Capital City', 'Research Focus', 'Government Links', 'Academic Excellence'],
    website: 'https://www.anu.edu.au',
    image: ''
  },
  {
    id: 'university-sydney',
    name: 'University of Sydney',
    location: 'Sydney, Australia',
    type: 'Public',
    overallRanking: 33,
    establishedYear: 1850,
    courses: [
      { name: 'Architecture', ranking: 12, strength: 'Very Good', fees: '$48K', feeType: 'per-year' },
      { name: 'Medicine', ranking: 18, strength: 'Very Good', fees: '$72K', feeType: 'per-year' },
      { name: 'Engineering', ranking: 38, strength: 'Good', fees: '$48K', feeType: 'per-year' },
      { name: 'Business', ranking: 32, strength: 'Good', fees: '$50K', feeType: 'per-year' }
    ],
    highlights: ['Historic Campus', 'Harbor City', 'Alumni Network', 'Research University'],
    website: 'https://www.sydney.edu.au',
    image: ''
  },
  {
    id: 'mcgill',
    name: 'McGill University',
    location: 'Montreal, Canada',
    type: 'Public',
    overallRanking: 34,
    establishedYear: 1821,
    courses: [
      { name: 'Medicine', ranking: 12, strength: 'Very Good', fees: '$42K', feeType: 'per-year' },
      { name: 'Engineering', ranking: 35, strength: 'Good', fees: '$38K', feeType: 'per-year' },
      { name: 'Business', ranking: 28, strength: 'Very Good', fees: '$48K', feeType: 'per-year' },
      { name: 'Arts', ranking: 22, strength: 'Very Good', fees: '$35K', feeType: 'per-year' }
    ],
    highlights: ['Bilingual City', 'Research Excellence', 'International Students', 'Historic Campus'],
    website: 'https://www.mcgill.ca',
    image: ''
  },
  {
    id: 'kings-college-london',
    name: 'Kings College London',
    location: 'London, UK',
    type: 'Public',
    overallRanking: 35,
    establishedYear: 1829,
    courses: [
      { name: 'Medicine', ranking: 8, strength: 'Excellent', fees: '£44K', feeType: 'per-year' },
      { name: 'Law', ranking: 15, strength: 'Very Good', fees: '£32K', feeType: 'per-year' },
      { name: 'Dentistry', ranking: 3, strength: 'Excellent', fees: '£46K', feeType: 'per-year' },
      { name: 'War Studies', ranking: 1, strength: 'Excellent', fees: '£28K', feeType: 'per-year' }
    ],
    highlights: ['Central London', 'Medical Excellence', 'Research University', 'Royal Charter'],
    website: 'https://www.kcl.ac.uk',
    image: ''
  },
  {
    id: 'lse',
    name: 'London School of Economics',
    location: 'London, UK',
    type: 'Public',
    overallRanking: 36,
    establishedYear: 1895,
    courses: [
      { name: 'Economics', ranking: 3, strength: 'Excellent', fees: '£25K', feeType: 'per-year' },
      { name: 'Politics', ranking: 2, strength: 'Excellent', fees: '£25K', feeType: 'per-year' },
      { name: 'International Relations', ranking: 2, strength: 'Excellent', fees: '£25K', feeType: 'per-year' },
      { name: 'Sociology', ranking: 3, strength: 'Excellent', fees: '£25K', feeType: 'per-year' }
    ],
    highlights: ['Social Sciences', 'London Location', 'Political Hub', 'Nobel Laureates'],
    website: 'https://www.lse.ac.uk',
    image: ''
  },
  {
    id: 'edinburgh',
    name: 'University of Edinburgh',
    location: 'Edinburgh, UK',
    type: 'Public',
    overallRanking: 37,
    establishedYear: 1583,
    courses: [
      { name: 'Medicine', ranking: 18, strength: 'Very Good', fees: '£42K', feeType: 'per-year' },
      { name: 'Veterinary Medicine', ranking: 6, strength: 'Excellent', fees: '£38K', feeType: 'per-year' },
      { name: 'Engineering', ranking: 42, strength: 'Good', fees: '£32K', feeType: 'per-year' },
      { name: 'Arts & Humanities', ranking: 15, strength: 'Very Good', fees: '£25K', feeType: 'per-year' }
    ],
    highlights: ['Ancient University', 'Cultural City', 'Research Excellence', 'Festival City'],
    website: 'https://www.ed.ac.uk',
    image: ''
  },
  {
    id: 'warwick',
    name: 'University of Warwick',
    location: 'Coventry, UK',
    type: 'Public',
    overallRanking: 38,
    establishedYear: 1965,
    courses: [
      { name: 'Business', ranking: 12, strength: 'Very Good', fees: '£28K', feeType: 'per-year' },
      { name: 'Economics', ranking: 8, strength: 'Excellent', fees: '£25K', feeType: 'per-year' },
      { name: 'Mathematics', ranking: 12, strength: 'Very Good', fees: '£25K', feeType: 'per-year' },
      { name: 'Engineering', ranking: 45, strength: 'Good', fees: '£28K', feeType: 'per-year' }
    ],
    highlights: ['Young University', 'Business Excellence', 'Modern Campus', 'Industry Links'],
    website: 'https://www.warwick.ac.uk',
    image: ''
  },
  {
    id: 'manchester',
    name: 'University of Manchester',
    location: 'Manchester, UK',
    type: 'Public',
    overallRanking: 39,
    establishedYear: 1824,
    courses: [
      { name: 'Engineering', ranking: 28, strength: 'Very Good', fees: '£28K', feeType: 'per-year' },
      { name: 'Computer Science', ranking: 32, strength: 'Good', fees: '£28K', feeType: 'per-year' },
      { name: 'Business', ranking: 35, strength: 'Good', fees: '£25K', feeType: 'per-year' },
      { name: 'Materials Science', ranking: 8, strength: 'Excellent', fees: '£28K', feeType: 'per-year' }
    ],
    highlights: ['Industrial Heritage', 'Research University', 'Large Campus', 'Innovation City'],
    website: 'https://www.manchester.ac.uk',
    image: ''
  },
  {
    id: 'tsinghua',
    name: 'Tsinghua University',
    location: 'Beijing, China',
    type: 'Public',
    overallRanking: 40,
    establishedYear: 1911,
    courses: [
      { name: 'Engineering', ranking: 12, strength: 'Very Good', fees: '$5K', feeType: 'per-year' },
      { name: 'Computer Science', ranking: 15, strength: 'Very Good', fees: '$5K', feeType: 'per-year' },
      { name: 'Architecture', ranking: 10, strength: 'Excellent', fees: '$5K', feeType: 'per-year' },
      { name: 'Business', ranking: 30, strength: 'Good', fees: '$25K', feeType: 'per-year' }
    ],
    highlights: ['Top Chinese University', 'Engineering Excellence', 'Research Focus', 'Government Support'],
    website: 'https://www.tsinghua.edu.cn',
    image: ''
  }
];
