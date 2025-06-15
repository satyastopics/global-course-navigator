
interface Course {
  name: string;
  ranking: number;
  strength: 'Excellent' | 'Very Good' | 'Good' | 'Average';
  fees: string;
}

interface College {
  id: string;
  name: string;
  location: string;
  type: 'Government' | 'Private' | 'Deemed';
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
      { name: 'Computer Science Engineering', ranking: 1, strength: 'Excellent', fees: '₹2.5L/year' },
      { name: 'Electrical Engineering', ranking: 1, strength: 'Excellent', fees: '₹2.5L/year' },
      { name: 'Mechanical Engineering', ranking: 2, strength: 'Excellent', fees: '₹2.5L/year' },
      { name: 'MBA', ranking: 15, strength: 'Very Good', fees: '₹22L total' }
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
      { name: 'Computer Science Engineering', ranking: 2, strength: 'Excellent', fees: '₹2.5L/year' },
      { name: 'Electrical Engineering', ranking: 2, strength: 'Excellent', fees: '₹2.5L/year' },
      { name: 'Civil Engineering', ranking: 1, strength: 'Excellent', fees: '₹2.5L/year' },
      { name: 'MBA', ranking: 12, strength: 'Very Good', fees: '₹18L total' }
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
      { name: 'Computer Science Engineering', ranking: 3, strength: 'Excellent', fees: '₹2.5L/year' },
      { name: 'Aerospace Engineering', ranking: 1, strength: 'Excellent', fees: '₹2.5L/year' },
      { name: 'Ocean Engineering', ranking: 1, strength: 'Excellent', fees: '₹2.5L/year' },
      { name: 'Data Science', ranking: 5, strength: 'Excellent', fees: '₹3L/year' }
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
      { name: 'Research Programs', ranking: 1, strength: 'Excellent', fees: '₹50K/year' },
      { name: 'Physics', ranking: 1, strength: 'Excellent', fees: '₹50K/year' },
      { name: 'Chemistry', ranking: 1, strength: 'Excellent', fees: '₹50K/year' },
      { name: 'Computational Sciences', ranking: 2, strength: 'Excellent', fees: '₹1L/year' }
    ],
    highlights: ['Pure Research Focus', 'Nobel Prize Alumni', 'International Faculty', 'Cutting-edge Labs'],
    website: 'https://www.iisc.ac.in',
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
      { name: 'Computer Science Engineering', ranking: 8, strength: 'Excellent', fees: '₹5.5L/year' },
      { name: 'Electronics Engineering', ranking: 6, strength: 'Excellent', fees: '₹5.5L/year' },
      { name: 'Mechanical Engineering', ranking: 12, strength: 'Very Good', fees: '₹5.5L/year' },
      { name: 'MBA', ranking: 25, strength: 'Very Good', fees: '₹15L total' }
    ],
    highlights: ['Industry Integration', 'Practice School', 'Innovation Focus', 'Global Exposure'],
    website: 'https://www.bits-pilani.ac.in',
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
      { name: 'Computer Science Engineering', ranking: 18, strength: 'Very Good', fees: '₹4.5L/year' },
      { name: 'Electronics Engineering', ranking: 20, strength: 'Very Good', fees: '₹4.5L/year' },
      { name: 'Biotechnology', ranking: 12, strength: 'Very Good', fees: '₹4L/year' },
      { name: 'MBA', ranking: 35, strength: 'Good', fees: '₹12L total' }
    ],
    highlights: ['International Students', 'Modern Infrastructure', 'Industry Partnerships', 'Research Focus'],
    website: 'https://www.vit.ac.in',
    image: ''
  },
  {
    id: 'manipal-university',
    name: 'Manipal University',
    location: 'Manipal, Karnataka',
    type: 'Private',
    overallRanking: 18,
    establishedYear: 1953,
    courses: [
      { name: 'Medicine (MBBS)', ranking: 8, strength: 'Excellent', fees: '₹18L/year' },
      { name: 'Engineering', ranking: 25, strength: 'Very Good', fees: '₹4.8L/year' },
      { name: 'Pharmacy', ranking: 5, strength: 'Excellent', fees: '₹3.2L/year' },
      { name: 'MBA', ranking: 40, strength: 'Good', fees: '₹14L total' }
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
    overallRanking: 22,
    establishedYear: 1985,
    courses: [
      { name: 'Computer Science Engineering', ranking: 28, strength: 'Very Good', fees: '₹4.2L/year' },
      { name: 'Medicine (MBBS)', ranking: 25, strength: 'Very Good', fees: '₹22L/year' },
      { name: 'Mechanical Engineering', ranking: 35, strength: 'Good', fees: '₹3.8L/year' },
      { name: 'Law', ranking: 30, strength: 'Good', fees: '₹2.5L/year' }
    ],
    highlights: ['Large Campus', 'International Programs', 'Sports Excellence', 'Placement Success'],
    website: 'https://www.srmist.edu.in',
    image: ''
  },
  {
    id: 'amity-university',
    name: 'Amity University',
    location: 'Noida, Uttar Pradesh',
    type: 'Private',
    overallRanking: 28,
    establishedYear: 2005,
    courses: [
      { name: 'MBA', ranking: 45, strength: 'Good', fees: '₹16L total' },
      { name: 'Computer Science Engineering', ranking: 40, strength: 'Good', fees: '₹5.5L/year' },
      { name: 'Journalism', ranking: 15, strength: 'Very Good', fees: '₹3.5L/year' },
      { name: 'Fashion Design', ranking: 8, strength: 'Excellent', fees: '₹4L/year' }
    ],
    highlights: ['Modern Infrastructure', 'Industry Exposure', 'International Exchange', 'Diverse Programs'],
    website: 'https://www.amity.edu',
    image: ''
  },
  {
    id: 'christ-university',
    name: 'Christ University',
    location: 'Bangalore, Karnataka',
    type: 'Private',
    overallRanking: 32,
    establishedYear: 1969,
    courses: [
      { name: 'MBA', ranking: 38, strength: 'Good', fees: '₹8.5L total' },
      { name: 'Law', ranking: 12, strength: 'Very Good', fees: '₹3.8L/year' },
      { name: 'Psychology', ranking: 8, strength: 'Excellent', fees: '₹2.5L/year' },
      { name: 'Computer Science', ranking: 45, strength: 'Good', fees: '₹4.2L/year' }
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
      { name: 'Computer Science', ranking: 1, strength: 'Excellent', fees: '$58,000/year' },
      { name: 'Engineering', ranking: 1, strength: 'Excellent', fees: '$58,000/year' },
      { name: 'Physics', ranking: 1, strength: 'Excellent', fees: '$58,000/year' },
      { name: 'MBA', ranking: 4, strength: 'Excellent', fees: '$85,000/year' }
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
      { name: 'Computer Science', ranking: 2, strength: 'Excellent', fees: '$61,000/year' },
      { name: 'MBA', ranking: 1, strength: 'Excellent', fees: '$75,000/year' },
      { name: 'Engineering', ranking: 2, strength: 'Excellent', fees: '$61,000/year' },
      { name: 'Medicine', ranking: 3, strength: 'Excellent', fees: '$68,000/year' }
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
      { name: 'MBA', ranking: 2, strength: 'Excellent', fees: '$73,000/year' },
      { name: 'Medicine', ranking: 1, strength: 'Excellent', fees: '$69,000/year' },
      { name: 'Law', ranking: 2, strength: 'Excellent', fees: '$70,000/year' },
      { name: 'Liberal Arts', ranking: 1, strength: 'Excellent', fees: '$56,000/year' }
    ],
    highlights: ['Ivy League', 'Presidential Alumni', 'Global Network', 'Liberal Arts Excellence'],
    website: 'https://www.harvard.edu',
    image: ''
  },
  {
    id: 'oxford',
    name: 'University of Oxford',
    location: 'Oxford, UK',
    type: 'Government',
    overallRanking: 4,
    establishedYear: 1096,
    courses: [
      { name: 'Philosophy Politics Economics', ranking: 1, strength: 'Excellent', fees: '£37,000/year' },
      { name: 'Medicine', ranking: 2, strength: 'Excellent', fees: '£46,000/year' },
      { name: 'Law', ranking: 1, strength: 'Excellent', fees: '£35,000/year' },
      { name: 'Literature', ranking: 1, strength: 'Excellent', fees: '£32,000/year' }
    ],
    highlights: ['Ancient Heritage', 'Tutorial System', 'Prime Ministers Alumni', 'Global Prestige'],
    website: 'https://www.ox.ac.uk',
    image: ''
  },
  {
    id: 'cambridge',
    name: 'University of Cambridge',
    location: 'Cambridge, UK',
    type: 'Government',
    overallRanking: 5,
    establishedYear: 1209,
    courses: [
      { name: 'Natural Sciences', ranking: 1, strength: 'Excellent', fees: '£35,000/year' },
      { name: 'Mathematics', ranking: 1, strength: 'Excellent', fees: '£35,000/year' },
      { name: 'Engineering', ranking: 3, strength: 'Excellent', fees: '£40,000/year' },
      { name: 'Medicine', ranking: 4, strength: 'Excellent', fees: '£42,000/year' }
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
      { name: 'Physics', ranking: 2, strength: 'Excellent', fees: '$60,000/year' },
      { name: 'Engineering', ranking: 4, strength: 'Excellent', fees: '$60,000/year' },
      { name: 'Astronomy', ranking: 1, strength: 'Excellent', fees: '$60,000/year' },
      { name: 'Chemistry', ranking: 3, strength: 'Excellent', fees: '$60,000/year' }
    ],
    highlights: ['NASA Partnerships', 'Nobel Prize Winners', 'Small Class Size', 'Research Focus'],
    website: 'https://www.caltech.edu',
    image: ''
  },
  {
    id: 'eth-zurich',
    name: 'ETH Zurich',
    location: 'Zurich, Switzerland',
    type: 'Government',
    overallRanking: 7,
    establishedYear: 1855,
    courses: [
      { name: 'Engineering', ranking: 5, strength: 'Excellent', fees: '€1,400/year' },
      { name: 'Computer Science', ranking: 8, strength: 'Excellent', fees: '€1,400/year' },
      { name: 'Architecture', ranking: 3, strength: 'Excellent', fees: '€1,400/year' },
      { name: 'Natural Sciences', ranking: 6, strength: 'Excellent', fees: '€1,400/year' }
    ],
    highlights: ['Einstein Alumni', 'European Excellence', 'Innovation Hub', 'Affordable Education'],
    website: 'https://www.ethz.ch',
    image: ''
  },
  {
    id: 'imperial-college',
    name: 'Imperial College London',
    location: 'London, UK',
    type: 'Government',
    overallRanking: 8,
    establishedYear: 1907,
    courses: [
      { name: 'Engineering', ranking: 6, strength: 'Excellent', fees: '£38,000/year' },
      { name: 'Medicine', ranking: 5, strength: 'Excellent', fees: '£48,000/year' },
      { name: 'Business', ranking: 15, strength: 'Very Good', fees: '£55,000/year' },
      { name: 'Natural Sciences', ranking: 8, strength: 'Excellent', fees: '£36,000/year' }
    ],
    highlights: ['STEM Focus', 'London Location', 'Industry Partnerships', 'Research Excellence'],
    website: 'https://www.imperial.ac.uk',
    image: ''
  },
  {
    id: 'nus',
    name: 'National University of Singapore',
    location: 'Singapore',
    type: 'Government',
    overallRanking: 11,
    establishedYear: 1905,
    courses: [
      { name: 'Computer Science', ranking: 12, strength: 'Very Good', fees: '$40,000/year' },
      { name: 'Business', ranking: 18, strength: 'Very Good', fees: '$55,000/year' },
      { name: 'Engineering', ranking: 15, strength: 'Very Good', fees: '$42,000/year' },
      { name: 'Medicine', ranking: 20, strength: 'Very Good', fees: '$48,000/year' }
    ],
    highlights: ['Asian Hub', 'Multicultural', 'Financial Center', 'Tech Innovation'],
    website: 'https://www.nus.edu.sg',
    image: ''
  },
  {
    id: 'university-toronto',
    name: 'University of Toronto',
    location: 'Toronto, Canada',
    type: 'Government',
    overallRanking: 18,
    establishedYear: 1827,
    courses: [
      { name: 'Medicine', ranking: 8, strength: 'Excellent', fees: '$45,000/year' },
      { name: 'Engineering', ranking: 18, strength: 'Very Good', fees: '$38,000/year' },
      { name: 'Business', ranking: 22, strength: 'Very Good', fees: '$52,000/year' },
      { name: 'Computer Science', ranking: 25, strength: 'Very Good', fees: '$40,000/year' }
    ],
    highlights: ['Research University', 'Diverse Campus', 'Canadian Excellence', 'Innovation Corridor'],
    website: 'https://www.utoronto.ca',
    image: ''
  }
];
