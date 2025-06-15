import { Course, College } from '@/types/collegeTypes';

export const indianColleges: College[] = [
  {
    id: '1',
    name: 'Indian Institute of Technology Delhi',
    location: 'New Delhi',
    type: 'Government',
    overallRanking: 1,
    establishedYear: 1961,
    courses: [
      { name: 'Computer Science & Engineering', ranking: 1, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Electrical Engineering', ranking: 1, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Mechanical Engineering', ranking: 2, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Civil Engineering', ranking: 1, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Chemical Engineering', ranking: 1, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Aerospace Engineering', ranking: 1, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Mathematics & Computing', ranking: 2, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Engineering Physics', ranking: 1, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' }
    ],
    highlights: ['Top Engineering College', 'IIT Brand Value', 'Excellent Placements', 'Research Excellence'],
    website: 'https://home.iitd.ac.in/',
    image: '/placeholder.svg'
  },
  {
    id: '2',
    name: 'Indian Institute of Science Bangalore',
    location: 'Bangalore, Karnataka',
    type: 'Government',
    overallRanking: 2,
    establishedYear: 1909,
    courses: [
      { name: 'PhD in Science & Engineering', ranking: 1, strength: 'Excellent', fees: '₹50K', feeType: 'per-year' },
      { name: 'Master of Engineering', ranking: 1, strength: 'Excellent', fees: '₹2L', feeType: 'per-year' },
      { name: 'Integrated PhD', ranking: 1, strength: 'Excellent', fees: '₹50K', feeType: 'per-year' },
      { name: 'Bachelor of Science (Research)', ranking: 2, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Computational & Data Sciences', ranking: 1, strength: 'Excellent', fees: '₹2L', feeType: 'per-year' },
      { name: 'Artificial Intelligence', ranking: 1, strength: 'Excellent', fees: '₹2L', feeType: 'per-year' },
      { name: 'Biotechnology', ranking: 1, strength: 'Excellent', fees: '₹2L', feeType: 'per-year' }
    ],
    highlights: ['Premier Research Institute', 'Nobel Laureate Faculty', 'World-class Labs', 'Innovation Hub'],
    website: 'https://www.iisc.ac.in/',
    image: '/placeholder.svg'
  },
  {
    id: '3',
    name: 'Indian Institute of Technology Bombay',
    location: 'Mumbai, Maharashtra',
    type: 'Government',
    overallRanking: 3,
    establishedYear: 1958,
    courses: [
      { name: 'Computer Science & Engineering', ranking: 2, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Electrical Engineering', ranking: 2, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Mechanical Engineering', ranking: 1, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Chemical Engineering', ranking: 2, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Aerospace Engineering', ranking: 2, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Industrial Engineering', ranking: 1, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Metallurgical Engineering', ranking: 1, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Engineering Physics', ranking: 2, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' }
    ],
    highlights: ['Entrepreneurship Hub', 'Industry Partnerships', 'Alumni Network', 'Innovation Cell'],
    website: 'https://www.iitb.ac.in/',
    image: '/placeholder.svg'
  },
  {
    id: '4',
    name: 'All India Institute of Medical Sciences Delhi',
    location: 'New Delhi',
    type: 'Government',
    overallRanking: 1,
    establishedYear: 1956,
    courses: [
      { name: 'MBBS', ranking: 1, strength: 'Excellent', fees: '₹6K', feeType: 'per-year' },
      { name: 'MD (Internal Medicine)', ranking: 1, strength: 'Excellent', fees: '₹25K', feeType: 'per-year' },
      { name: 'MS (Surgery)', ranking: 1, strength: 'Excellent', fees: '₹25K', feeType: 'per-year' },
      { name: 'DM (Cardiology)', ranking: 1, strength: 'Excellent', fees: '₹45K', feeType: 'per-year' },
      { name: 'MCh (Neurosurgery)', ranking: 1, strength: 'Excellent', fees: '₹45K', feeType: 'per-year' },
      { name: 'PhD in Medical Sciences', ranking: 1, strength: 'Excellent', fees: '₹15K', feeType: 'per-year' },
      { name: 'BSc Nursing', ranking: 1, strength: 'Excellent', fees: '₹4K', feeType: 'per-year' },
      { name: 'MSc Nursing', ranking: 1, strength: 'Excellent', fees: '₹8K', feeType: 'per-year' }
    ],
    highlights: ['Premier Medical Institute', 'World-class Healthcare', 'Research Excellence', 'Top Medical Faculty'],
    website: 'https://www.aiims.edu/',
    image: '/placeholder.svg'
  },
  {
    id: '5',
    name: 'Indian Institute of Management Ahmedabad',
    location: 'Ahmedabad, Gujarat',
    type: 'Government',
    overallRanking: 1,
    establishedYear: 1961,
    courses: [
      { name: 'MBA (Post Graduate Programme)', ranking: 1, strength: 'Excellent', fees: '₹25L', feeType: 'total' },
      { name: 'MBA for Executives', ranking: 1, strength: 'Excellent', fees: '₹32L', feeType: 'total' },
      { name: 'Fellow Programme in Management', ranking: 1, strength: 'Excellent', fees: '₹2L', feeType: 'total' },
      { name: 'Armed Forces Programme', ranking: 1, strength: 'Excellent', fees: '₹15L', feeType: 'total' },
      { name: 'ePGP (Online MBA)', ranking: 2, strength: 'Very Good', fees: '₹20L', feeType: 'total' },
      { name: 'Management Development Programme', ranking: 1, strength: 'Excellent', fees: '₹5L', feeType: 'total' }
    ],
    highlights: ['Top MBA College', 'Best ROI', 'Excellent Placements', 'Industry Connect'],
    website: 'https://www.iima.ac.in/',
    image: '/placeholder.svg'
  },
  {
    id: '6',
    name: 'Jawaharlal Nehru University',
    location: 'New Delhi',
    type: 'Government',
    overallRanking: 15,
    establishedYear: 1969,
    courses: [
      { name: 'MA International Relations', ranking: 1, strength: 'Excellent', fees: '₹500', feeType: 'per-year' },
      { name: 'MA Economics', ranking: 2, strength: 'Excellent', fees: '₹500', feeType: 'per-year' },
      { name: 'MA History', ranking: 1, strength: 'Excellent', fees: '₹500', feeType: 'per-year' },
      { name: 'MA English Literature', ranking: 3, strength: 'Very Good', fees: '₹500', feeType: 'per-year' },
      { name: 'PhD in Social Sciences', ranking: 1, strength: 'Excellent', fees: '₹500', feeType: 'per-year' },
      { name: 'MCA', ranking: 15, strength: 'Good', fees: '₹1.5L', feeType: 'per-year' },
      { name: 'MBA', ranking: 25, strength: 'Good', fees: '₹80K', feeType: 'per-year' },
      { name: 'MSc Biotechnology', ranking: 5, strength: 'Very Good', fees: '₹1L', feeType: 'per-year' }
    ],
    highlights: ['Liberal Arts Excellence', 'Research University', 'Diverse Programs', 'Beautiful Campus'],
    website: 'https://www.jnu.ac.in/',
    image: '/placeholder.svg'
  },
  {
    id: '7',
    name: 'Indian Institute of Technology Madras',
    location: 'Chennai, Tamil Nadu',
    type: 'Government',
    overallRanking: 4,
    establishedYear: 1959,
    courses: [
      { name: 'Computer Science & Engineering', ranking: 3, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Electrical Engineering', ranking: 3, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Mechanical Engineering', ranking: 3, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Ocean Engineering', ranking: 1, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Naval Architecture', ranking: 1, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Biotechnology', ranking: 3, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Chemical Engineering', ranking: 3, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Civil Engineering', ranking: 4, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' }
    ],
    highlights: ['Marine Engineering Hub', 'Research Excellence', 'Industry Collaboration', 'Innovation'],
    website: 'https://www.iitm.ac.in/',
    image: '/placeholder.svg'
  },
  {
    id: '8',
    name: 'Indian Institute of Technology Kanpur',
    location: 'Kanpur, Uttar Pradesh',
    type: 'Government',
    overallRanking: 5,
    establishedYear: 1959,
    courses: [
      { name: 'Computer Science & Engineering', ranking: 4, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Electrical Engineering', ranking: 4, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Mechanical Engineering', ranking: 4, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Chemical Engineering', ranking: 4, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Civil Engineering', ranking: 5, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Materials Science', ranking: 3, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Aerospace Engineering', ranking: 3, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' }
    ],
    highlights: ['Startup Ecosystem', 'Research Focus', 'Industry Connect', 'Alumni Network'],
    website: 'https://www.iitk.ac.in/',
    image: '/placeholder.svg'
  },
  {
    id: '9',
    name: 'University of Delhi',
    location: 'New Delhi',
    type: 'Government',
    overallRanking: 12,
    establishedYear: 1922,
    courses: [
      { name: 'BA Honours Economics', ranking: 2, strength: 'Excellent', fees: '₹15K', feeType: 'per-year' },
      { name: 'BA Honours English', ranking: 3, strength: 'Very Good', fees: '₹15K', feeType: 'per-year' },
      { name: 'BA Honours Political Science', ranking: 2, strength: 'Excellent', fees: '₹15K', feeType: 'per-year' },
      { name: 'BSc Honours Physics', ranking: 5, strength: 'Very Good', fees: '₹18K', feeType: 'per-year' },
      { name: 'BSc Honours Chemistry', ranking: 4, strength: 'Very Good', fees: '₹18K', feeType: 'per-year' },
      { name: 'BSc Honours Mathematics', ranking: 4, strength: 'Very Good', fees: '₹18K', feeType: 'per-year' },
      { name: 'BCom Honours', ranking: 3, strength: 'Very Good', fees: '₹15K', feeType: 'per-year' },
      { name: 'LLB', ranking: 5, strength: 'Very Good', fees: '₹25K', feeType: 'per-year' }
    ],
    highlights: ['Historic University', 'Diverse Programs', 'Central Delhi Location', 'Liberal Arts'],
    website: 'https://www.du.ac.in/',
    image: '/placeholder.svg'
  },
  {
    id: '10',
    name: 'Banaras Hindu University',
    location: 'Varanasi, Uttar Pradesh',
    type: 'Government',
    overallRanking: 20,
    establishedYear: 1916,
    courses: [
      { name: 'BA Honours Sanskrit', ranking: 1, strength: 'Excellent', fees: '₹5K', feeType: 'per-year' },
      { name: 'BSc Agriculture', ranking: 8, strength: 'Very Good', fees: '₹25K', feeType: 'per-year' },
      { name: 'BTech Computer Science', ranking: 25, strength: 'Good', fees: '₹1.5L', feeType: 'per-year' },
      { name: 'MBBS', ranking: 12, strength: 'Very Good', fees: '₹8K', feeType: 'per-year' },
      { name: 'MA Philosophy', ranking: 2, strength: 'Excellent', fees: '₹3K', feeType: 'per-year' },
      { name: 'LLB', ranking: 15, strength: 'Good', fees: '₹15K', feeType: 'per-year' },
      { name: 'MBA', ranking: 35, strength: 'Average', fees: '₹80K', feeType: 'per-year' }
    ],
    highlights: ['Cultural Heritage', 'Spiritual Learning', 'Diverse Disciplines', 'Ancient Traditions'],
    website: 'https://www.bhu.ac.in/',
    image: '/placeholder.svg'
  },
  {
    id: '11',
    name: 'Manipal Academy of Higher Education',
    location: 'Manipal, Karnataka',
    type: 'Private',
    overallRanking: 45,
    establishedYear: 1953,
    courses: [
      { name: 'MBBS', ranking: 25, strength: 'Good', fees: '₹18L', feeType: 'per-year' },
      { name: 'BTech Computer Science', ranking: 45, strength: 'Good', fees: '₹3.5L', feeType: 'per-year' },
      { name: 'BDS', ranking: 15, strength: 'Very Good', fees: '₹8L', feeType: 'per-year' },
      { name: 'Pharmacy', ranking: 20, strength: 'Good', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Physiotherapy', ranking: 12, strength: 'Very Good', fees: '₹2L', feeType: 'per-year' },
      { name: 'Architecture', ranking: 25, strength: 'Good', fees: '₹4L', feeType: 'per-year' },
      { name: 'MBA', ranking: 65, strength: 'Average', fees: '₹12L', feeType: 'total' }
    ],
    highlights: ['Medical Excellence', 'Global Recognition', 'Industry Connect', 'Modern Infrastructure'],
    website: 'https://manipal.edu/',
    image: '/placeholder.svg'
  },
  {
    id: '12',
    name: 'Birla Institute of Technology and Science Pilani',
    location: 'Pilani, Rajasthan',
    type: 'Private',
    overallRanking: 30,
    establishedYear: 1964,
    courses: [
      { name: 'BTech Computer Science', ranking: 20, strength: 'Very Good', fees: '₹4.5L', feeType: 'per-year' },
      { name: 'BTech Electrical Engineering', ranking: 25, strength: 'Good', fees: '₹4.5L', feeType: 'per-year' },
      { name: 'BTech Mechanical Engineering', ranking: 30, strength: 'Good', fees: '₹4.5L', feeType: 'per-year' },
      { name: 'MSc Physics', ranking: 15, strength: 'Very Good', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'MSc Chemistry', ranking: 18, strength: 'Good', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'MBA', ranking: 45, strength: 'Good', fees: '₹18L', feeType: 'total' },
      { name: 'Pharmacy', ranking: 25, strength: 'Good', fees: '₹3L', feeType: 'per-year' }
    ],
    highlights: ['Industry-Oriented', 'Innovation Hub', 'Excellent Placements', 'Multi-Campus'],
    website: 'https://www.bits-pilani.ac.in/',
    image: '/placeholder.svg'
  },
  {
    id: '13',
    name: 'Vellore Institute of Technology',
    location: 'Vellore, Tamil Nadu',
    type: 'Private',
    overallRanking: 40,
    establishedYear: 1984,
    courses: [
      { name: 'BTech Computer Science', ranking: 35, strength: 'Good', fees: '₹4L', feeType: 'per-year' },
      { name: 'BTech Information Technology', ranking: 30, strength: 'Good', fees: '₹4L', feeType: 'per-year' },
      { name: 'BTech Electronics', ranking: 40, strength: 'Good', fees: '₹4L', feeType: 'per-year' },
      { name: 'BTech Mechanical', ranking: 45, strength: 'Good', fees: '₹4L', feeType: 'per-year' },
      { name: 'BTech Civil', ranking: 50, strength: 'Average', fees: '₹4L', feeType: 'per-year' },
      { name: 'MBA', ranking: 55, strength: 'Average', fees: '₹8L', feeType: 'total' },
      { name: 'MSc Data Science', ranking: 25, strength: 'Good', fees: '₹3L', feeType: 'per-year' }
    ],
    highlights: ['International Exposure', 'Industry Partners', 'Modern Campus', 'Placement Support'],
    website: 'https://vit.ac.in/',
    image: '/placeholder.svg'
  },
  {
    id: '14',
    name: 'Anna University',
    location: 'Chennai, Tamil Nadu',
    type: 'Government',
    overallRanking: 25,
    establishedYear: 1978,
    courses: [
      { name: 'BTech Computer Science', ranking: 20, strength: 'Very Good', fees: '₹50K', feeType: 'per-year' },
      { name: 'BTech Electronics', ranking: 25, strength: 'Good', fees: '₹50K', feeType: 'per-year' },
      { name: 'BTech Mechanical', ranking: 25, strength: 'Good', fees: '₹50K', feeType: 'per-year' },
      { name: 'BTech Civil', ranking: 20, strength: 'Very Good', fees: '₹50K', feeType: 'per-year' },
      { name: 'MTech', ranking: 30, strength: 'Good', fees: '₹25K', feeType: 'per-year' },
      { name: 'MBA', ranking: 45, strength: 'Good', fees: '₹1.5L', feeType: 'per-year' },
      { name: 'MCA', ranking: 25, strength: 'Good', fees: '₹35K', feeType: 'per-year' }
    ],
    highlights: ['Technical Excellence', 'Government College', 'Industry Connect', 'Research Focus'],
    website: 'https://www.annauniv.edu/',
    image: '/placeholder.svg'
  },
  {
    id: '15',
    name: 'Jamia Millia Islamia',
    location: 'New Delhi',
    type: 'Government',
    overallRanking: 35,
    establishedYear: 1920,
    courses: [
      { name: 'BA Journalism & Mass Communication', ranking: 8, strength: 'Very Good', fees: '₹15K', feeType: 'per-year' },
      { name: 'BTech Computer Engineering', ranking: 55, strength: 'Average', fees: '₹85K', feeType: 'per-year' },
      { name: 'MBA', ranking: 65, strength: 'Average', fees: '₹1.2L', feeType: 'per-year' },
      { name: 'MA Mass Communication', ranking: 5, strength: 'Very Good', fees: '₹18K', feeType: 'per-year' },
      { name: 'BArch', ranking: 35, strength: 'Good', fees: '₹65K', feeType: 'per-year' },
      { name: 'LLB', ranking: 25, strength: 'Good', fees: '₹25K', feeType: 'per-year' },
      { name: 'MA Urdu', ranking: 1, strength: 'Excellent', fees: '₹8K', feeType: 'per-year' }
    ],
    highlights: ['Media Studies', 'Cultural Diversity', 'Central University', 'Historic Institution'],
    website: 'https://www.jmi.ac.in/',
    image: '/placeholder.svg'
  },
  {
    id: '16',
    name: 'Indian Institute of Technology Kharagpur',
    location: 'Kharagpur, West Bengal',
    type: 'Government',
    overallRanking: 6,
    establishedYear: 1951,
    courses: [
      { name: 'Computer Science & Engineering', ranking: 5, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Electrical Engineering', ranking: 5, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Mechanical Engineering', ranking: 5, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Mining Engineering', ranking: 1, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Agricultural Engineering', ranking: 2, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Architecture & Regional Planning', ranking: 8, strength: 'Very Good', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Law', ranking: 20, strength: 'Good', fees: '₹1.5L', feeType: 'per-year' },
      { name: 'Management', ranking: 15, strength: 'Very Good', fees: '₹8L', feeType: 'total' }
    ],
    highlights: ['First IIT', 'Largest IIT Campus', 'Diverse Programs', 'Strong Alumni Network'],
    website: 'https://www.iitkgp.ac.in/',
    image: '/placeholder.svg'
  },
  {
    id: '17',
    name: 'Indian Institute of Technology Roorkee',
    location: 'Roorkee, Uttarakhand',
    type: 'Government',
    overallRanking: 7,
    establishedYear: 1847,
    courses: [
      { name: 'Civil Engineering', ranking: 2, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Computer Science & Engineering', ranking: 6, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Electrical Engineering', ranking: 6, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Mechanical Engineering', ranking: 6, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Chemical Engineering', ranking: 5, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Architecture & Planning', ranking: 12, strength: 'Very Good', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Paper Technology', ranking: 1, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Hydrology', ranking: 1, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' }
    ],
    highlights: ['Oldest Technical Institution', 'Civil Engineering Excellence', 'Research Heritage', 'Beautiful Campus'],
    website: 'https://www.iitr.ac.in/',
    image: '/placeholder.svg'
  },
  {
    id: '18',
    name: 'National Law School of India University',
    location: 'Bangalore, Karnataka',
    type: 'Government',
    overallRanking: 8,
    establishedYear: 1987,
    courses: [
      { name: 'BA LLB (Hons)', ranking: 1, strength: 'Excellent', fees: '₹2.2L', feeType: 'per-year' },
      { name: 'LLM', ranking: 1, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'PhD in Law', ranking: 1, strength: 'Excellent', fees: '₹50K', feeType: 'per-year' },
      { name: 'Certificate Course in Cyber Law', ranking: 2, strength: 'Excellent', fees: '₹25K', feeType: 'total' },
      { name: 'Diploma in Arbitration', ranking: 1, strength: 'Excellent', fees: '₹1L', feeType: 'total' },
      { name: 'Corporate Law', ranking: 1, strength: 'Excellent', fees: '₹75K', feeType: 'total' }
    ],
    highlights: ['Premier Law School', 'Supreme Court Judges Alumni', 'Legal Research', 'Moot Court Champions'],
    website: 'https://www.nls.ac.in/',
    image: '/placeholder.svg'
  },
  {
    id: '19',
    name: 'Indian Statistical Institute',
    location: 'Kolkata, West Bengal',
    type: 'Government',
    overallRanking: 18,
    establishedYear: 1931,
    courses: [
      { name: 'BStat (Hons)', ranking: 1, strength: 'Excellent', fees: '₹35K', feeType: 'per-year' },
      { name: 'BMath (Hons)', ranking: 1, strength: 'Excellent', fees: '₹35K', feeType: 'per-year' },
      { name: 'MStat', ranking: 1, strength: 'Excellent', fees: '₹25K', feeType: 'per-year' },
      { name: 'MS in Quality Management Science', ranking: 2, strength: 'Excellent', fees: '₹30K', feeType: 'per-year' },
      { name: 'MS in Quantitative Economics', ranking: 3, strength: 'Excellent', fees: '₹30K', feeType: 'per-year' },
      { name: 'MTech Computer Science', ranking: 8, strength: 'Very Good', fees: '₹50K', feeType: 'per-year' },
      { name: 'PhD in Statistics', ranking: 1, strength: 'Excellent', fees: '₹25K', feeType: 'per-year' }
    ],
    highlights: ['Statistics Excellence', 'Research Institute', 'Nobel Connections', 'Mathematical Sciences'],
    website: 'https://www.isical.ac.in/',
    image: '/placeholder.svg'
  },
  {
    id: '20',
    name: 'Tata Institute of Fundamental Research',
    location: 'Mumbai, Maharashtra',
    type: 'Government',
    overallRanking: 22,
    establishedYear: 1945,
    courses: [
      { name: 'Integrated PhD in Physics', ranking: 2, strength: 'Excellent', fees: '₹25K', feeType: 'per-year' },
      { name: 'Integrated PhD in Mathematics', ranking: 3, strength: 'Excellent', fees: '₹25K', feeType: 'per-year' },
      { name: 'Integrated PhD in Biology', ranking: 5, strength: 'Excellent', fees: '₹25K', feeType: 'per-year' },
      { name: 'Integrated PhD in Chemistry', ranking: 8, strength: 'Very Good', fees: '₹25K', feeType: 'per-year' },
      { name: 'MTech Computer Science', ranking: 12, strength: 'Very Good', fees: '₹50K', feeType: 'per-year' },
      { name: 'MSc Physics', ranking: 3, strength: 'Excellent', fees: '₹30K', feeType: 'per-year' }
    ],
    highlights: ['Fundamental Research', 'Nobel Laureate Faculty', 'Pure Sciences', 'Research Excellence'],
    website: 'https://www.tifr.res.in/',
    image: '/placeholder.svg'
  },
  {
    id: '21',
    name: 'Indian Institute of Management Calcutta',
    location: 'Kolkata, West Bengal',
    type: 'Government',
    overallRanking: 2,
    establishedYear: 1961,
    courses: [
      { name: 'MBA (Post Graduate Programme)', ranking: 2, strength: 'Excellent', fees: '₹27L', feeType: 'total' },
      { name: 'Executive MBA', ranking: 2, strength: 'Excellent', fees: '₹20L', feeType: 'total' },
      { name: 'Fellow Programme in Management', ranking: 2, strength: 'Excellent', fees: '₹2L', feeType: 'total' },
      { name: 'Executive Development Programme', ranking: 2, strength: 'Excellent', fees: '₹3L', feeType: 'total' },
      { name: 'Certificate in Business Analytics', ranking: 3, strength: 'Excellent', fees: '₹2.5L', feeType: 'total' }
    ],
    highlights: ['Top Management School', 'Industry Leaders', 'Case Study Method', 'Global Rankings'],
    website: 'https://www.iimcal.ac.in/',
    image: '/placeholder.svg'
  },
  {
    id: '22',
    name: 'Indian Institute of Management Bangalore',
    location: 'Bangalore, Karnataka',
    type: 'Government',
    overallRanking: 3,
    establishedYear: 1973,
    courses: [
      { name: 'MBA (Post Graduate Programme)', ranking: 3, strength: 'Excellent', fees: '₹24L', feeType: 'total' },
      { name: 'Executive MBA', ranking: 3, strength: 'Excellent', fees: '₹28L', feeType: 'total' },
      { name: 'PhD in Management', ranking: 3, strength: 'Excellent', fees: '₹1.5L', feeType: 'total' },
      { name: 'Executive Education', ranking: 2, strength: 'Excellent', fees: '₹5L', feeType: 'total' },
      { name: 'Certificate in Digital Marketing', ranking: 2, strength: 'Excellent', fees: '₹1.5L', feeType: 'total' }
    ],
    highlights: ['Tech Hub Location', 'Innovation Focus', 'Startup Ecosystem', 'Management Excellence'],
    website: 'https://www.iimb.ac.in/',
    image: '/placeholder.svg'
  },
  {
    id: '23',
    name: 'Christian Medical College Vellore',
    location: 'Vellore, Tamil Nadu',
    type: 'Private',
    overallRanking: 10,
    establishedYear: 1900,
    courses: [
      { name: 'MBBS', ranking: 3, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'MD (Internal Medicine)', ranking: 3, strength: 'Excellent', fees: '₹3L', feeType: 'per-year' },
      { name: 'MS (Surgery)', ranking: 3, strength: 'Excellent', fees: '₹3L', feeType: 'per-year' },
      { name: 'BSc Nursing', ranking: 2, strength: 'Excellent', fees: '₹50K', feeType: 'per-year' },
      { name: 'MSc Nursing', ranking: 2, strength: 'Excellent', fees: '₹75K', feeType: 'per-year' },
      { name: 'BPT (Physiotherapy)', ranking: 5, strength: 'Very Good', fees: '₹1.2L', feeType: 'per-year' },
      { name: 'PhD in Medical Sciences', ranking: 5, strength: 'Very Good', fees: '₹50K', feeType: 'per-year' }
    ],
    highlights: ['Medical Excellence', 'Healthcare Pioneer', 'Research Hospital', 'Christian Values'],
    website: 'https://www.cmch-vellore.edu/',
    image: '/placeholder.svg'
  },
  {
    id: '24',
    name: 'National Institute of Technology Trichy',
    location: 'Tiruchirappalli, Tamil Nadu',
    type: 'Government',
    overallRanking: 24,
    establishedYear: 1964,
    courses: [
      { name: 'BTech Computer Science', ranking: 15, strength: 'Very Good', fees: '₹1.5L', feeType: 'per-year' },
      { name: 'BTech Electrical Engineering', ranking: 18, strength: 'Very Good', fees: '₹1.5L', feeType: 'per-year' },
      { name: 'BTech Mechanical Engineering', ranking: 20, strength: 'Good', fees: '₹1.5L', feeType: 'per-year' },
      { name: 'BTech Civil Engineering', ranking: 15, strength: 'Very Good', fees: '₹1.5L', feeType: 'per-year' },
      { name: 'MTech', ranking: 25, strength: 'Good', fees: '₹75K', feeType: 'per-year' },
      { name: 'MBA', ranking: 45, strength: 'Good', fees: '₹3L', feeType: 'total' },
      { name: 'MCA', ranking: 20, strength: 'Good', fees: '₹1L', feeType: 'per-year' }
    ],
    highlights: ['Top NIT', 'Engineering Excellence', 'Industry Connect', 'Research Focus'],
    website: 'https://www.nitt.edu/',
    image: '/placeholder.svg'
  },
  {
    id: '25',
    name: 'Lady Hardinge Medical College',
    location: 'New Delhi',
    type: 'Government',
    overallRanking: 28,
    establishedYear: 1916,
    courses: [
      { name: 'MBBS', ranking: 8, strength: 'Very Good', fees: '₹8K', feeType: 'per-year' },
      { name: 'MD (Obstetrics & Gynaecology)', ranking: 3, strength: 'Excellent', fees: '₹30K', feeType: 'per-year' },
      { name: 'MS (Obstetrics & Gynaecology)', ranking: 2, strength: 'Excellent', fees: '₹30K', feeType: 'per-year' },
      { name: 'MD (Paediatrics)', ranking: 5, strength: 'Very Good', fees: '₹30K', feeType: 'per-year' },
      { name: 'Diploma in Child Health', ranking: 4, strength: 'Very Good', fees: '₹25K', feeType: 'per-year' },
      { name: 'BSc Nursing', ranking: 8, strength: 'Very Good', fees: '₹5K', feeType: 'per-year' }
    ],
    highlights: ['Women\'s Medical College', 'Gynecology Excellence', 'Delhi Location', 'Government Medical College'],
    website: 'https://www.lhmc-du.ac.in/',
    image: '/placeholder.svg'
  },
  {
    id: '26',
    name: 'Xavier Labour Relations Institute',
    location: 'Jamshedpur, Jharkhand',
    type: 'Private',
    overallRanking: 38,
    establishedYear: 1955,
    courses: [
      { name: 'MBA (Human Resources)', ranking: 2, strength: 'Excellent', fees: '₹18L', feeType: 'total' },
      { name: 'MBA (General Management)', ranking: 12, strength: 'Very Good', fees: '₹18L', feeType: 'total' },
      { name: 'Fellow Programme in Management', ranking: 8, strength: 'Very Good', fees: '₹3L', feeType: 'total' },
      { name: 'Certificate in Labor Relations', ranking: 1, strength: 'Excellent', fees: '₹2L', feeType: 'total' },
      { name: 'Executive Development Programme', ranking: 5, strength: 'Very Good', fees: '₹1.5L', feeType: 'total' }
    ],
    highlights: ['HR Excellence', 'Industry Connect', 'Social Justice Focus', 'Jesuit Values'],
    website: 'https://www.xlri.ac.in/',
    image: '/placeholder.svg'
  },
  {
    id: '27',
    name: 'Institute of Chemical Technology Mumbai',
    location: 'Mumbai, Maharashtra',
    type: 'Government',
    overallRanking: 42,
    establishedYear: 1933,
    courses: [
      { name: 'BTech Chemical Engineering', ranking: 3, strength: 'Excellent', fees: '₹1.8L', feeType: 'per-year' },
      { name: 'BTech Food Engineering', ranking: 1, strength: 'Excellent', fees: '₹1.8L', feeType: 'per-year' },
      { name: 'BTech Polymer Engineering', ranking: 1, strength: 'Excellent', fees: '₹1.8L', feeType: 'per-year' },
      { name: 'MTech Chemical Engineering', ranking: 3, strength: 'Excellent', fees: '₹85K', feeType: 'per-year' },
      { name: 'PhD in Chemical Engineering', ranking: 3, strength: 'Excellent', fees: '₹25K', feeType: 'per-year' },
      { name: 'MBA (Pharmaceutical Management)', ranking: 8, strength: 'Very Good', fees: '₹6L', feeType: 'total' }
    ],
    highlights: ['Chemical Engineering Hub', 'Industry Partnerships', 'Research Excellence', 'Specialized Programs'],
    website: 'https://www.ictmumbai.edu.in/',
    image: '/placeholder.svg'
  },
  {
    id: '28',
    name: 'Aligarh Muslim University',
    location: 'Aligarh, Uttar Pradesh',
    type: 'Government',
    overallRanking: 48,
    establishedYear: 1875,
    courses: [
      { name: 'MBBS', ranking: 15, strength: 'Very Good', fees: '₹12K', feeType: 'per-year' },
      { name: 'BTech Computer Science', ranking: 45, strength: 'Good', fees: '₹65K', feeType: 'per-year' },
      { name: 'BA Honours Urdu', ranking: 2, strength: 'Excellent', fees: '₹5K', feeType: 'per-year' },
      { name: 'LLB', ranking: 18, strength: 'Good', fees: '₹15K', feeType: 'per-year' },
      { name: 'MBA', ranking: 55, strength: 'Average', fees: '₹1.2L', feeType: 'per-year' },
      { name: 'MA Islamic Studies', ranking: 1, strength: 'Excellent', fees: '₹3K', feeType: 'per-year' },
      { name: 'BSc Agriculture', ranking: 15, strength: 'Very Good', fees: '₹25K', feeType: 'per-year' }
    ],
    highlights: ['Historic University', 'Cultural Heritage', 'Diverse Programs', 'Minority Institution'],
    website: 'https://www.amu.ac.in/',
    image: '/placeholder.svg'
  },
  {
    id: '29',
    name: 'Symbiosis International University',
    location: 'Pune, Maharashtra',
    type: 'Private',
    overallRanking: 52,
    establishedYear: 1971,
    courses: [
      { name: 'MBA', ranking: 25, strength: 'Good', fees: '₹22L', feeType: 'total' },
      { name: 'BA LLB', ranking: 12, strength: 'Very Good', fees: '₹3.5L', feeType: 'per-year' },
      { name: 'BBA', ranking: 15, strength: 'Very Good', fees: '₹5L', feeType: 'per-year' },
      { name: 'BTech Computer Science', ranking: 55, strength: 'Average', fees: '₹6L', feeType: 'per-year' },
      { name: 'Mass Communication', ranking: 8, strength: 'Very Good', fees: '₹4L', feeType: 'per-year' },
      { name: 'Design', ranking: 12, strength: 'Very Good', fees: '₹5.5L', feeType: 'per-year' },
      { name: 'International Business', ranking: 5, strength: 'Very Good', fees: '₹7L', feeType: 'per-year' }
    ],
    highlights: ['International Focus', 'Industry Connect', 'Modern Campus', 'Diverse Programs'],
    website: 'https://www.siu.edu.in/',
    image: '/placeholder.svg'
  },
  {
    id: '30',
    name: 'Ashoka University',
    location: 'Sonepat, Haryana',
    type: 'Private',
    overallRanking: 55,
    establishedYear: 2014,
    courses: [
      { name: 'BA (Liberal Arts)', ranking: 3, strength: 'Excellent', fees: '₹9L', feeType: 'per-year' },
      { name: 'BSc Economics', ranking: 8, strength: 'Very Good', fees: '₹9L', feeType: 'per-year' },
      { name: 'BSc Computer Science', ranking: 25, strength: 'Good', fees: '₹9L', feeType: 'per-year' },
      { name: 'MA Economics', ranking: 12, strength: 'Very Good', fees: '₹6L', feeType: 'per-year' },
      { name: 'MBA', ranking: 35, strength: 'Good', fees: '₹28L', feeType: 'total' },
      { name: 'MPP (Public Policy)', ranking: 5, strength: 'Very Good', fees: '₹8L', feeType: 'per-year' },
      { name: 'MSc Data Science', ranking: 15, strength: 'Very Good', fees: '₹7L', feeType: 'per-year' }
    ],
    highlights: ['Liberal Arts Focus', 'International Faculty', 'Modern Campus', 'Innovation Hub'],
    website: 'https://www.ashoka.edu.in/',
    image: '/placeholder.svg'
  },
  {
    id: '31',
    name: 'Indian Institute of Technology Guwahati',
    location: 'Guwahati, Assam',
    type: 'Government',
    overallRanking: 8,
    establishedYear: 1994,
    courses: [
      { name: 'Computer Science & Engineering', ranking: 7, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Electrical Engineering', ranking: 7, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Mechanical Engineering', ranking: 8, strength: 'Very Good', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Chemical Engineering', ranking: 6, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Civil Engineering', ranking: 8, strength: 'Very Good', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Electronics & Communication', ranking: 8, strength: 'Very Good', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Biotechnology', ranking: 5, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Design', ranking: 8, strength: 'Very Good', fees: '₹2.5L', feeType: 'per-year' }
    ],
    highlights: ['Northeast Excellence', 'Research Focus', 'Scenic Campus', 'Innovation Hub'],
    website: 'https://www.iitg.ac.in/',
    image: '/placeholder.svg'
  },
  {
    id: '32',
    name: 'Indian Institute of Technology Hyderabad',
    location: 'Hyderabad, Telangana',
    type: 'Government',
    overallRanking: 9,
    establishedYear: 2008,
    courses: [
      { name: 'Computer Science & Engineering', ranking: 8, strength: 'Very Good', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Electrical Engineering', ranking: 8, strength: 'Very Good', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Mechanical Engineering', ranking: 9, strength: 'Very Good', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Chemical Engineering', ranking: 7, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Civil Engineering', ranking: 9, strength: 'Very Good', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Materials Science & Metallurgy', ranking: 5, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Biomedical Engineering', ranking: 3, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' },
      { name: 'Artificial Intelligence', ranking: 5, strength: 'Excellent', fees: '₹2.5L', feeType: 'per-year' }
    ],
    highlights: ['New Age IIT', 'Modern Infrastructure', 'AI Research', 'Industry Connect'],
    website: 'https://www.iith.ac.in/',
    image: '/placeholder.svg'
  },
  {
    id: '33',
    name: 'Indian Institute of Management Lucknow',
    location: 'Lucknow, Uttar Pradesh',
    type: 'Government',
    overallRanking: 4,
    establishedYear: 1984,
    courses: [
      { name: 'MBA (Post Graduate Programme)', ranking: 4, strength: 'Excellent', fees: '₹20L', feeType: 'total' },
      { name: 'Executive MBA', ranking: 4, strength: 'Excellent', fees: '₹18L', feeType: 'total' },
      { name: 'Fellow Programme in Management', ranking: 4, strength: 'Excellent', fees: '₹2L', feeType: 'total' },
      { name: 'Working Managers Programme', ranking: 3, strength: 'Excellent', fees: '₹15L', feeType: 'total' },
      { name: 'Advanced Management Programme', ranking: 4, strength: 'Excellent', fees: '₹3L', feeType: 'total' }
    ],
    highlights: ['Top IIM', 'Management Excellence', 'Industry Leaders', 'Government Connections'],
    website: 'https://www.iiml.ac.in/',
    image: '/placeholder.svg'
  },
  {
    id: '34',
    name: 'Indian Institute of Management Kozhikode',
    location: 'Kozhikode, Kerala',
    type: 'Government',
    overallRanking: 5,
    establishedYear: 1996,
    courses: [
      { name: 'MBA (Post Graduate Programme)', ranking: 5, strength: 'Excellent', fees: '₹20L', feeType: 'total' },
      { name: 'Executive MBA', ranking: 5, strength: 'Excellent', fees: '₹16L', feeType: 'total' },
      { name: 'Fellow Programme in Management', ranking: 5, strength: 'Excellent', fees: '₹2L', feeType: 'total' },
      { name: 'Executive Post Graduate Programme', ranking: 6, strength: 'Excellent', fees: '₹25L', feeType: 'total' },
      { name: 'Management Development Programme', ranking: 5, strength: 'Excellent', fees: '₹2L', feeType: 'total' }
    ],
    highlights: ['Coastal Campus', 'Management Education', 'Industry Interface', 'Global Perspective'],
    website: 'https://www.iimk.ac.in/',
    image: '/placeholder.svg'
  },
  {
    id: '35',
    name: 'National Institute of Design',
    location: 'Ahmedabad, Gujarat',
    type: 'Government',
    overallRanking: 50,
    establishedYear: 1961,
    courses: [
      { name: 'Bachelor of Design (Product Design)', ranking: 1, strength: 'Excellent', fees: '₹3L', feeType: 'per-year' },
      { name: 'Bachelor of Design (Communication Design)', ranking: 1, strength: 'Excellent', fees: '₹3L', feeType: 'per-year' },
      { name: 'Bachelor of Design (Textile Design)', ranking: 1, strength: 'Excellent', fees: '₹3L', feeType: 'per-year' },
      { name: 'Master of Design (Animation Film Design)', ranking: 1, strength: 'Excellent', fees: '₹3.5L', feeType: 'per-year' },
      { name: 'Master of Design (Interaction Design)', ranking: 2, strength: 'Excellent', fees: '₹3.5L', feeType: 'per-year' },
      { name: 'Master of Design (Transportation Design)', ranking: 1, strength: 'Excellent', fees: '₹3.5L', feeType: 'per-year' },
      { name: 'PhD in Design', ranking: 1, strength: 'Excellent', fees: '₹50K', feeType: 'per-year' }
    ],
    highlights: ['Premier Design Institute', 'Creative Excellence', 'Industry Collaboration', 'Innovation Hub'],
    website: 'https://www.nid.edu/',
    image: '/placeholder.svg'
  },
  {
    id: '36',
    name: 'Jadavpur University',
    location: 'Kolkata, West Bengal',
    type: 'Government',
    overallRanking: 32,
    establishedYear: 1955,
    courses: [
      { name: 'BTech Computer Science', ranking: 30, strength: 'Good', fees: '₹8K', feeType: 'per-year' },
      { name: 'BTech Electronics & Telecommunication', ranking: 25, strength: 'Good', fees: '₹8K', feeType: 'per-year' },
      { name: 'BTech Mechanical Engineering', ranking: 35, strength: 'Good', fees: '₹8K', feeType: 'per-year' },
      { name: 'MA Comparative Literature', ranking: 5, strength: 'Very Good', fees: '₹3K', feeType: 'per-year' },
      { name: 'MA International Relations', ranking: 8, strength: 'Very Good', fees: '₹3K', feeType: 'per-year' },
      { name: 'MFA (Film & Television)', ranking: 3, strength: 'Excellent', fees: '₹25K', feeType: 'per-year' },
      { name: 'PhD in Engineering', ranking: 25, strength: 'Good', fees: '₹5K', feeType: 'per-year' }
    ],
    highlights: ['Cultural Heritage', 'Film Studies', 'Research Excellence', 'Liberal Environment'],
    website: 'https://www.jaduniv.edu.in/',
    image: '/placeholder.svg'
  },
  {
    id: '37',
    name: 'Panjab University',
    location: 'Chandigarh',
    type: 'Government',
    overallRanking: 44,
    establishedYear: 1882,
    courses: [
      { name: 'BA Honours English', ranking: 12, strength: 'Very Good', fees: '₹15K', feeType: 'per-year' },
      { name: 'BSc Honours Physics', ranking: 18, strength: 'Good', fees: '₹18K', feeType: 'per-year' },
      { name: 'BCom Honours', ranking: 15, strength: 'Very Good', fees: '₹15K', feeType: 'per-year' },
      { name: 'LLB', ranking: 20, strength: 'Good', fees: '₹25K', feeType: 'per-year' },
      { name: 'MBA', ranking: 45, strength: 'Good', fees: '₹2L', feeType: 'per-year' },
      { name: 'MA Psychology', ranking: 15, strength: 'Very Good', fees: '₹8K', feeType: 'per-year' },
      { name: 'MSc Biotechnology', ranking: 20, strength: 'Good', fees: '₹25K', feeType: 'per-year' }
    ],
    highlights: ['Historic University', 'Beautiful Campus', 'Diverse Programs', 'Cultural Center'],
    website: 'https://puchd.ac.in/',
    image: '/placeholder.svg'
  },
  {
    id: '38',
    name: 'Savitribai Phule Pune University',
    location: 'Pune, Maharashtra',
    type: 'Government',
    overallRanking: 46,
    establishedYear: 1949,
    courses: [
      { name: 'BTech Computer Engineering', ranking: 50, strength: 'Average', fees: '₹85K', feeType: 'per-year' },
      { name: 'BTech Information Technology', ranking: 45, strength: 'Good', fees: '₹85K', feeType: 'per-year' },
      { name: 'BA Psychology', ranking: 20, strength: 'Good', fees: '₹12K', feeType: 'per-year' },
      { name: 'MSc Computer Science', ranking: 35, strength: 'Good', fees: '₹25K', feeType: 'per-year' },
      { name: 'MBA', ranking: 55, strength: 'Average', fees: '₹1.8L', feeType: 'per-year' },
      { name: 'MA Sociology', ranking: 12, strength: 'Very Good', fees: '₹8K', feeType: 'per-year' },
      { name: 'MSc Biotechnology', ranking: 25, strength: 'Good', fees: '₹35K', feeType: 'per-year' }
    ],
    highlights: ['State University', 'Diverse Programs', 'Research Focus', 'Cultural Activities'],
    website: 'http://www.unipune.ac.in/',
    image: '/placeholder.svg'
  },
  {
    id: '39',
    name: 'Cochin University of Science and Technology',
    location: 'Kochi, Kerala',
    type: 'Government',
    overallRanking: 38,
    establishedYear: 1971,
    courses: [
      { name: 'BTech Computer Science', ranking: 40, strength: 'Good', fees: '₹45K', feeType: 'per-year' },
      { name: 'BTech Electronics', ranking: 35, strength: 'Good', fees: '₹45K', feeType: 'per-year' },
      { name: 'BTech Marine Engineering', ranking: 3, strength: 'Excellent', fees: '₹65K', feeType: 'per-year' },
      { name: 'BTech Ship Technology', ranking: 2, strength: 'Excellent', fees: '₹65K', feeType: 'per-year' },
      { name: 'MSc Atmospheric Sciences', ranking: 5, strength: 'Very Good', fees: '₹25K', feeType: 'per-year' },
      { name: 'MSc Ocean Technology', ranking: 3, strength: 'Excellent', fees: '₹35K', feeType: 'per-year' },
      { name: 'PhD in Engineering', ranking: 30, strength: 'Good', fees: '₹8K', feeType: 'per-year' }
    ],
    highlights: ['Marine Technology', 'Coastal Engineering', 'Research Excellence', 'Industry Connect'],
    website: 'https://cusat.ac.in/',
    image: '/placeholder.svg'
  },
  {
    id: '40',
    name: 'Indian Institute of Space Science and Technology',
    location: 'Thiruvananthapuram, Kerala',
    type: 'Government',
    overallRanking: 45,
    establishedYear: 2007,
    courses: [
      { name: 'BTech Aerospace Engineering', ranking: 4, strength: 'Excellent', fees: '₹2L', feeType: 'per-year' },
      { name: 'BTech Avionics', ranking: 2, strength: 'Excellent', fees: '₹2L', feeType: 'per-year' },
      { name: 'BTech Physical Sciences', ranking: 8, strength: 'Very Good', fees: '₹2L', feeType: 'per-year' },
      { name: 'MTech Satellite Technology', ranking: 1, strength: 'Excellent', fees: '₹1L', feeType: 'per-year' },
      { name: 'MTech Space Science', ranking: 1, strength: 'Excellent', fees: '₹1L', feeType: 'per-year' },
      { name: 'PhD in Space Technology', ranking: 2, strength: 'Excellent', fees: '₹25K', feeType: 'per-year' },
      { name: 'Dual Degree Space Technology', ranking: 1, strength: 'Excellent', fees: '₹2L', feeType: 'per-year' }
    ],
    highlights: ['ISRO Connection', 'Space Technology', 'Research Excellence', 'Unique Programs'],
    website: 'https://www.iist.ac.in/',
    image: '/placeholder.svg'
  }
];

export const worldColleges: College[] = [
  {
    id: 'w1',
    name: 'Massachusetts Institute of Technology',
    location: 'Cambridge, USA',
    type: 'Private',
    overallRanking: 1,
    establishedYear: 1861,
    courses: [
      { name: 'Computer Science', ranking: 1, strength: 'Excellent', fees: '$55K', feeType: 'per-year' },
      { name: 'Artificial Intelligence', ranking: 1, strength: 'Excellent', fees: '$55K', feeType: 'per-year' },
      { name: 'Electrical Engineering', ranking: 1, strength: 'Excellent', fees: '$55K', feeType: 'per-year' },
      { name: 'Mechanical Engineering', ranking: 1, strength: 'Excellent', fees: '$55K', feeType: 'per-year' },
      { name: 'Aerospace Engineering', ranking: 1, strength: 'Excellent', fees: '$55K', feeType: 'per-year' },
      { name: 'Economics', ranking: 1, strength: 'Excellent', fees: '$55K', feeType: 'per-year' },
      { name: 'Physics', ranking: 1, strength: 'Excellent', fees: '$55K', feeType: 'per-year' },
      { name: 'Mathematics', ranking: 1, strength: 'Excellent', fees: '$55K', feeType: 'per-year' },
      { name: 'Chemical Engineering', ranking: 1, strength: 'Excellent', fees: '$55K', feeType: 'per-year' },
      { name: 'Materials Science', ranking: 1, strength: 'Excellent', fees: '$55K', feeType: 'per-year' }
    ],
    highlights: ['World Leader in Innovation', 'Nobel Laureates', 'Startup Ecosystem', 'Research Excellence'],
    website: 'https://web.mit.edu/',
    image: '/placeholder.svg'
  },
  {
    id: 'w2',
    name: 'Stanford University',
    location: 'Stanford, USA',
    type: 'Private',
    overallRanking: 2,
    establishedYear: 1885,
    courses: [
      { name: 'Computer Science', ranking: 2, strength: 'Excellent', fees: '$56K', feeType: 'per-year' },
      { name: 'Business Administration', ranking: 1, strength: 'Excellent', fees: '$74K', feeType: 'per-year' },
      { name: 'Electrical Engineering', ranking: 2, strength: 'Excellent', fees: '$56K', feeType: 'per-year' },
      { name: 'Medicine', ranking: 2, strength: 'Excellent', fees: '$62K', feeType: 'per-year' },
      { name: 'Law', ranking: 2, strength: 'Excellent', fees: '$65K', feeType: 'per-year' },
      { name: 'Data Science', ranking: 1, strength: 'Excellent', fees: '$56K', feeType: 'per-year' },
      { name: 'Psychology', ranking: 3, strength: 'Excellent', fees: '$56K', feeType: 'per-year' },
      { name: 'Biology', ranking: 3, strength: 'Excellent', fees: '$56K', feeType: 'per-year' }
    ],
    highlights: ['Silicon Valley Location', 'Entrepreneurship Hub', 'Tech Giants Alumni', 'Innovation Center'],
    website: 'https://www.stanford.edu/',
    image: '/placeholder.svg'
  },
  {
    id: 'w3',
    name: 'Harvard University',
    location: 'Cambridge, USA',
    type: 'Private',
    overallRanking: 3,
    establishedYear: 1636,
    courses: [
      { name: 'Business Administration', ranking: 2, strength: 'Excellent', fees: '$73K', feeType: 'per-year' },
      { name: 'Medicine', ranking: 1, strength: 'Excellent', fees: '$65K', feeType: 'per-year' },
      { name: 'Law', ranking: 1, strength: 'Excellent', fees: '$67K', feeType: 'per-year' },
      { name: 'Economics', ranking: 2, strength: 'Excellent', fees: '$54K', feeType: 'per-year' },
      { name: 'Political Science', ranking: 1, strength: 'Excellent', fees: '$54K', feeType: 'per-year' },
      { name: 'Psychology', ranking: 1, strength: 'Excellent', fees: '$54K', feeType: 'per-year' },
      { name: 'Public Health', ranking: 1, strength: 'Excellent', fees: '$49K', feeType: 'per-year' },
      { name: 'Philosophy', ranking: 2, strength: 'Excellent', fees: '$54K', feeType: 'per-year' }
    ],
    highlights: ['Oldest US University', 'Presidential Alumni', 'Global Leadership', 'Academic Excellence'],
    website: 'https://www.harvard.edu/',
    image: '/placeholder.svg'
  },
  {
    id: 'w4',
    name: 'California Institute of Technology',
    location: 'Pasadena, USA',
    type: 'Private',
    overallRanking: 4,
    establishedYear: 1891,
    courses: [
      { name: 'Physics', ranking: 2, strength: 'Excellent', fees: '$56K', feeType: 'per-year' },
      { name: 'Astronomy', ranking: 1, strength: 'Excellent', fees: '$56K', feeType: 'per-year' },
      { name: 'Chemical Engineering', ranking: 2, strength: 'Excellent', fees: '$56K', feeType: 'per-year' },
      { name: 'Aerospace Engineering', ranking: 2, strength: 'Excellent', fees: '$56K', feeType: 'per-year' },
      { name: 'Mathematics', ranking: 3, strength: 'Excellent', fees: '$56K', feeType: 'per-year' },
      { name: 'Biology', ranking: 4, strength: 'Excellent', fees: '$56K', feeType: 'per-year' },
      { name: 'Geology', ranking: 2, strength: 'Excellent', fees: '$56K', feeType: 'per-year' }
    ],
    highlights: ['NASA JPL', 'Nobel Prize Winners', 'Small Class Sizes', 'Research Focus'],
    website: 'https://www.caltech.edu/',
    image: '/placeholder.svg'
  },
  {
    id: 'w5',
    name: 'University of Oxford',
    location: 'Oxford, UK',
    type: 'Public',
    overallRanking: 5,
    establishedYear: 1096,
    courses: [
      { name: 'Philosophy, Politics & Economics', ranking: 1, strength: 'Excellent', fees: '£28K', feeType: 'per-year' },
      { name: 'Medicine', ranking: 3, strength: 'Excellent', fees: '£35K', feeType: 'per-year' },
      { name: 'Law', ranking: 3, strength: 'Excellent', fees: '£28K', feeType: 'per-year' },
      { name: 'English Literature', ranking: 1, strength: 'Excellent', fees: '£28K', feeType: 'per-year' },
      { name: 'History', ranking: 1, strength: 'Excellent', fees: '£28K', feeType: 'per-year' },
      { name: 'Mathematics', ranking: 4, strength: 'Excellent', fees: '£28K', feeType: 'per-year' },
      { name: 'Physics', ranking: 5, strength: 'Excellent', fees: '£28K', feeType: 'per-year' },
      { name: 'Economics', ranking: 4, strength: 'Excellent', fees: '£28K', feeType: 'per-year' }
    ],
    highlights: ['World\'s Oldest University', 'Tutorial System', 'Historic Colleges', 'Global Alumni'],
    website: 'https://www.ox.ac.uk/',
    image: '/placeholder.svg'
  },
  {
    id: 'w6',
    name: 'University of Cambridge',
    location: 'Cambridge, UK',
    type: 'Public',
    overallRanking: 6,
    establishedYear: 1209,
    courses: [
      { name: 'Natural Sciences', ranking: 2, strength: 'Excellent', fees: '£28K', feeType: 'per-year' },
      { name: 'Mathematics', ranking: 2, strength: 'Excellent', fees: '£28K', feeType: 'per-year' },
      { name: 'Engineering', ranking: 3, strength: 'Excellent', fees: '£35K', feeType: 'per-year' },
      { name: 'Medicine', ranking: 4, strength: 'Excellent', fees: '£35K', feeType: 'per-year' },
      { name: 'Computer Science', ranking: 5, strength: 'Excellent', fees: '£35K', feeType: 'per-year' },
      { name: 'Economics', ranking: 3, strength: 'Excellent', fees: '£28K', feeType: 'per-year' },
      { name: 'Law', ranking: 4, strength: 'Excellent', fees: '£28K', feeType: 'per-year' },
      { name: 'Philosophy', ranking: 3, strength: 'Excellent', fees: '£28K', feeType: 'per-year' }
    ],
    highlights: ['Academic Excellence', 'Newton\'s University', 'Collegiate System', 'Research Leaders'],
    website: 'https://www.cam.ac.uk/',
    image: '/placeholder.svg'
  },
  {
    id: 'w7',
    name: 'ETH Zurich',
    location: 'Zurich, Switzerland',
    type: 'Public',
    overallRanking: 7,
    establishedYear: 1855,
    courses: [
      { name: 'Computer Science', ranking: 3, strength: 'Excellent', fees: '€1.2K', feeType: 'per-year' },
      { name: 'Engineering Sciences', ranking: 3, strength: 'Excellent', fees: '€1.2K', feeType: 'per-year' },
      { name: 'Mathematics', ranking: 5, strength: 'Excellent', fees: '€1.2K', feeType: 'per-year' },
      { name: 'Physics', ranking: 3, strength: 'Excellent', fees: '€1.2K', feeType: 'per-year' },
      { name: 'Chemistry', ranking: 4, strength: 'Excellent', fees: '€1.2K', feeType: 'per-year' },
      { name: 'Architecture', ranking: 5, strength: 'Excellent', fees: '€1.2K', feeType: 'per-year' },
      { name: 'Materials Science', ranking: 3, strength: 'Excellent', fees: '€1.2K', feeType: 'per-year' }
    ],
    highlights: ['Einstein\'s Alma Mater', 'Top Engineering', 'Research Excellence', 'Low Fees'],
    website: 'https://ethz.ch/',
    image: '/placeholder.svg'
  },
  {
    id: 'w8',
    name: 'University College London',
    location: 'London, UK',
    type: 'Public',
    overallRanking: 8,
    establishedYear: 1826,
    courses: [
      { name: 'Medicine', ranking: 5, strength: 'Excellent', fees: '£35K', feeType: 'per-year' },
      { name: 'Psychology', ranking: 2, strength: 'Excellent', fees: '£28K', feeType: 'per-year' },
      { name: 'Architecture', ranking: 3, strength: 'Excellent', fees: '£28K', feeType: 'per-year' },
      { name: 'Economics', ranking: 5, strength: 'Excellent', fees: '£28K', feeType: 'per-year' },
      { name: 'Law', ranking: 5, strength: 'Excellent', fees: '£28K', feeType: 'per-year' },
      { name: 'Engineering', ranking: 8, strength: 'Very Good', fees: '£35K', feeType: 'per-year' },
      { name: 'Anthropology', ranking: 2, strength: 'Excellent', fees: '£28K', feeType: 'per-year' }
    ],
    highlights: ['London\'s Global University', 'Diverse Programs', 'Research Intensive', 'Historic Campus'],
    website: 'https://www.ucl.ac.uk/',
    image: '/placeholder.svg'
  },
  {
    id: 'w9',
    name: 'Imperial College London',
    location: 'London, UK',
    type: 'Public',
    overallRanking: 9,
    establishedYear: 1907,
    courses: [
      { name: 'Engineering', ranking: 4, strength: 'Excellent', fees: '£35K', feeType: 'per-year' },
      { name: 'Medicine', ranking: 6, strength: 'Excellent', fees: '£45K', feeType: 'per-year' },
      { name: 'Natural Sciences', ranking: 6, strength: 'Excellent', fees: '£35K', feeType: 'per-year' },
      { name: 'Business School', ranking: 8, strength: 'Very Good', fees: '£55K', feeType: 'per-year' },
      { name: 'Computing', ranking: 8, strength: 'Very Good', fees: '£35K', feeType: 'per-year' },
      { name: 'Mathematics', ranking: 8, strength: 'Very Good', fees: '£35K', feeType: 'per-year' },
      { name: 'Physics', ranking: 7, strength: 'Excellent', fees: '£35K', feeType: 'per-year' }
    ],
    highlights: ['STEM Excellence', 'Industry Links', 'Innovation Hub', 'Research Focus'],
    website: 'https://www.imperial.ac.uk/',
    image: '/placeholder.svg'
  },
  {
    id: 'w10',
    name: 'University of Chicago',
    location: 'Chicago, USA',
    type: 'Private',
    overallRanking: 10,
    establishedYear: 1890,
    courses: [
      { name: 'Economics', ranking: 3, strength: 'Excellent', fees: '$59K', feeType: 'per-year' },
      { name: 'Business Administration', ranking: 3, strength: 'Excellent', fees: '$72K', feeType: 'per-year' },
      { name: 'Law', ranking: 4, strength: 'Excellent', fees: '$68K', feeType: 'per-year' },
      { name: 'Medicine', ranking: 8, strength: 'Very Good', fees: '$62K', feeType: 'per-year' },
      { name: 'Political Science', ranking: 4, strength: 'Excellent', fees: '$59K', feeType: 'per-year' },
      { name: 'Sociology', ranking: 2, strength: 'Excellent', fees: '$59K', feeType: 'per-year' },
      { name: 'Physics', ranking: 8, strength: 'Very Good', fees: '$59K', feeType: 'per-year' }
    ],
    highlights: ['Chicago School of Economics', 'Nobel Laureates', 'Core Curriculum', 'Research University'],
    website: 'https://www.uchicago.edu/',
    image: '/placeholder.svg'
  },
  {
    id: 'w11',
    name: 'National University of Singapore',
    location: 'Singapore',
    type: 'Public',
    overallRanking: 11,
    establishedYear: 1905,
    courses: [
      { name: 'Computer Science', ranking: 6, strength: 'Excellent', fees: '$35K', feeType: 'per-year' },
      { name: 'Engineering', ranking: 6, strength: 'Excellent', fees: '$35K', feeType: 'per-year' },
      { name: 'Business Administration', ranking: 12, strength: 'Very Good', fees: '$45K', feeType: 'per-year' },
      { name: 'Medicine', ranking: 15, strength: 'Very Good', fees: '$40K', feeType: 'per-year' },
      { name: 'Law', ranking: 10, strength: 'Very Good', fees: '$30K', feeType: 'per-year' },
      { name: 'Architecture', ranking: 8, strength: 'Very Good', fees: '$35K', feeType: 'per-year' },
      { name: 'Public Policy', ranking: 5, strength: 'Excellent', fees: '$32K', feeType: 'per-year' }
    ],
    highlights: ['Asian Hub', 'Global Rankings', 'Innovation Focus', 'Multicultural'],
    website: 'https://www.nus.edu.sg/',
    image: '/placeholder.svg'
  },
  {
    id: 'w12',
    name: 'Peking University',
    location: 'Beijing, China',
    type: 'Public',
    overallRanking: 12,
    establishedYear: 1898,
    courses: [
      { name: 'Liberal Arts', ranking: 5, strength: 'Excellent', fees: '$6K', feeType: 'per-year' },
      { name: 'Economics', ranking: 8, strength: 'Very Good', fees: '$6K', feeType: 'per-year' },
      { name: 'International Relations', ranking: 4, strength: 'Excellent', fees: '$6K', feeType: 'per-year' },
      { name: 'Chinese Studies', ranking: 1, strength: 'Excellent', fees: '$6K', feeType: 'per-year' },
      { name: 'Mathematics', ranking: 12, strength: 'Very Good', fees: '$6K', feeType: 'per-year' },
      { name: 'Physics', ranking: 15, strength: 'Very Good', fees: '$6K', feeType: 'per-year' },
      { name: 'Law', ranking: 15, strength: 'Very Good', fees: '$6K', feeType: 'per-year' }
    ],
    highlights: ['Top Chinese University', 'Historic Campus', 'Liberal Arts', 'Government Leaders'],
    website: 'https://english.pku.edu.cn/',
    image: '/placeholder.svg'
  },
  {
    id: 'w13',
    name: 'University of Pennsylvania',
    location: 'Philadelphia, USA',
    type: 'Private',
    overallRanking: 13,
    establishedYear: 1740,
    courses: [
      { name: 'Business Administration (Wharton)', ranking: 2, strength: 'Excellent', fees: '$81K', feeType: 'per-year' },
      { name: 'Medicine', ranking: 7, strength: 'Excellent', fees: '$63K', feeType: 'per-year' },
      { name: 'Engineering', ranking: 15, strength: 'Very Good', fees: '$58K', feeType: 'per-year' },
      { name: 'Nursing', ranking: 1, strength: 'Excellent', fees: '$58K', feeType: 'per-year' },
      { name: 'Social Work', ranking: 2, strength: 'Excellent', fees: '$45K', feeType: 'per-year' },
      { name: 'Law', ranking: 6, strength: 'Excellent', fees: '$69K', feeType: 'per-year' },
      { name: 'Veterinary Medicine', ranking: 3, strength: 'Excellent', fees: '$55K', feeType: 'per-year' }
    ],
    highlights: ['Wharton Business School', 'Ivy League', 'Urban Campus', 'Strong Alumni Network'],
    website: 'https://www.upenn.edu/',
    image: '/placeholder.svg'
  },
  {
    id: 'w14',
    name: 'Tsinghua University',
    location: 'Beijing, China',
    type: 'Public',
    overallRanking: 14,
    establishedYear: 1911,
    courses: [
      { name: 'Engineering', ranking: 5, strength: 'Excellent', fees: '$6K', feeType: 'per-year' },
      { name: 'Computer Science', ranking: 4, strength: 'Excellent', fees: '$6K', feeType: 'per-year' },
      { name: 'Architecture', ranking: 4, strength: 'Excellent', fees: '$6K', feeType: 'per-year' },
      { name: 'Business Administration', ranking: 15, strength: 'Very Good', fees: '$8K', feeType: 'per-year' },
      { name: 'Materials Science', ranking: 2, strength: 'Excellent', fees: '$6K', feeType: 'per-year' },
      { name: 'Environmental Engineering', ranking: 3, strength: 'Excellent', fees: '$6K', feeType: 'per-year' },
      { name: 'Economics', ranking: 12, strength: 'Very Good', fees: '$6K', feeType: 'per-year' }
    ],
    highlights: ['China\'s MIT', 'Engineering Excellence', 'Innovation Hub', 'Government Connections'],
    website: 'https://www.tsinghua.edu.cn/en/',
    image: '/placeholder.svg'
  },
  {
    id: 'w15',
    name: 'University of Edinburgh',
    location: 'Edinburgh, UK',
    type: 'Public',
    overallRanking: 15,
    establishedYear: 1583,
    courses: [
      { name: 'Medicine', ranking: 10, strength: 'Very Good', fees: '£35K', feeType: 'per-year' },
      { name: 'Veterinary Medicine', ranking: 2, strength: 'Excellent', fees: '£35K', feeType: 'per-year' },
      { name: 'English Literature', ranking: 8, strength: 'Very Good', fees: '£25K', feeType: 'per-year' },
      { name: 'Psychology', ranking: 8, strength: 'Very Good', fees: '£25K', feeType: 'per-year' },
      { name: 'Law', ranking: 12, strength: 'Very Good', fees: '£25K', feeType: 'per-year' },
      { name: 'Computer Science', ranking: 20, strength: 'Good', fees: '£32K', feeType: 'per-year' },
      { name: 'Business', ranking: 25, strength: 'Good', fees: '£28K', feeType: 'per-year' }
    ],
    highlights: ['Historic University', 'Research Excellence', 'Beautiful Campus', 'Strong Traditions'],
    website: 'https://www.ed.ac.uk/',
    image: '/placeholder.svg'
  },
  {
    id: 'w16',
    name: 'Columbia University',
    location: 'New York, USA',
    type: 'Private',
    overallRanking: 16,
    establishedYear: 1754,
    courses: [
      { name: 'Journalism', ranking: 1, strength: 'Excellent', fees: '$68K', feeType: 'per-year' },
      { name: 'Business Administration', ranking: 5, strength: 'Excellent', fees: '$77K', feeType: 'per-year' },
      { name: 'Medicine', ranking: 9, strength: 'Very Good', fees: '$66K', feeType: 'per-year' },
      { name: 'Law', ranking: 5, strength: 'Excellent', fees: '$72K', feeType: 'per-year' },
      { name: 'Engineering', ranking: 18, strength: 'Good', fees: '$60K', feeType: 'per-year' },
      { name: 'Public Health', ranking: 3, strength: 'Excellent', fees: '$55K', feeType: 'per-year' },
      { name: 'International Affairs', ranking: 2, strength: 'Excellent', fees: '$65K', feeType: 'per-year' }
    ],
    highlights: ['Ivy League', 'NYC Location', 'Pulitzer Prizes', 'Global Network'],
    website: 'https://www.columbia.edu/',
    image: '/placeholder.svg'
  },
  {
    id: 'w17',
    name: 'Princeton University',
    location: 'Princeton, USA',
    type: 'Private',
    overallRanking: 17,
    establishedYear: 1746,
    courses: [
      { name: 'Economics', ranking: 1, strength: 'Excellent', fees: '$57K', feeType: 'per-year' },
      { name: 'Physics', ranking: 4, strength: 'Excellent', fees: '$57K', feeType: 'per-year' },
      { name: 'Mathematics', ranking: 2, strength: 'Excellent', fees: '$57K', feeType: 'per-year' },
      { name: 'Computer Science', ranking: 8, strength: 'Very Good', fees: '$57K', feeType: 'per-year' },
      { name: 'Public Policy', ranking: 1, strength: 'Excellent', fees: '$57K', feeType: 'per-year' },
      { name: 'Philosophy', ranking: 1, strength: 'Excellent', fees: '$57K', feeType: 'per-year' },
      { name: 'History', ranking: 3, strength: 'Excellent', fees: '$57K', feeType: 'per-year' }
    ],
    highlights: ['Ivy League', 'No Loans Policy', 'Research Focus', 'Beautiful Campus'],
    website: 'https://www.princeton.edu/',
    image: '/placeholder.svg'
  },
  {
    id: 'w18',
    name: 'Yale University',
    location: 'New Haven, USA',
    type: 'Private',
    overallRanking: 18,
    establishedYear: 1701,
    courses: [
      { name: 'Law', ranking: 1, strength: 'Excellent', fees: '$70K', feeType: 'per-year' },
      { name: 'Medicine', ranking: 10, strength: 'Very Good', fees: '$64K', feeType: 'per-year' },
      { name: 'Drama', ranking: 1, strength: 'Excellent', fees: '$57K', feeType: 'per-year' },
      { name: 'Art', ranking: 2, strength: 'Excellent', fees: '$57K', feeType: 'per-year' },
      { name: 'Music', ranking: 3, strength: 'Excellent', fees: '$57K', feeType: 'per-year' },
      { name: 'History', ranking: 2, strength: 'Excellent', fees: '$57K', feeType: 'per-year' },
      { name: 'Political Science', ranking: 5, strength: 'Excellent', fees: '$57K', feeType: 'per-year' }
    ],
    highlights: ['Ivy League', 'Secret Societies', 'Liberal Arts', 'Presidential Alumni'],
    website: 'https://www.yale.edu/',
    image: '/placeholder.svg'
  },
  {
    id: 'w19',
    name: 'University of Toronto',
    location: 'Toronto, Canada',
    type: 'Public',
    overallRanking: 19,
    establishedYear: 1827,
    courses: [
      { name: 'Medicine', ranking: 12, strength: 'Very Good', fees: '$65K', feeType: 'per-year' },
      { name: 'Engineering', ranking: 12, strength: 'Very Good', fees: '$60K', feeType: 'per-year' },
      { name: 'Computer Science', ranking: 15, strength: 'Very Good', fees: '$60K', feeType: 'per-year' },
      { name: 'Business', ranking: 20, strength: 'Good', fees: '$55K', feeType: 'per-year' },
      { name: 'Psychology', ranking: 12, strength: 'Very Good', fees: '$50K', feeType: 'per-year' },
      { name: 'Law', ranking: 18, strength: 'Good', fees: '$50K', feeType: 'per-year' },
      { name: 'Public Health', ranking: 8, strength: 'Very Good', fees: '$45K', feeType: 'per-year' }
    ],
    highlights: ['Research Intensive', 'Diverse Programs', 'Urban Campus', 'Global Recognition'],
    website: 'https://www.utoronto.ca/',
    image: '/placeholder.svg'
  },
  {
    id: 'w20',
    name: 'Cornell University',
    location: 'Ithaca, USA',
    type: 'Private',
    overallRanking: 20,
    establishedYear: 1865,
    courses: [
      { name: 'Agriculture & Life Sciences', ranking: 1, strength: 'Excellent', fees: '$58K', feeType: 'per-year' },
      { name: 'Engineering', ranking: 8, strength: 'Very Good', fees: '$58K', feeType: 'per-year' },
      { name: 'Business', ranking: 12, strength: 'Very Good', fees: '$70K', feeType: 'per-year' },
      { name: 'Veterinary Medicine', ranking: 1, strength: 'Excellent', fees: '$55K', feeType: 'per-year' },
      { name: 'Hotel Administration', ranking: 1, strength: 'Excellent', fees: '$58K', feeType: 'per-year' },
      { name: 'Architecture', ranking: 6, strength: 'Excellent', fees: '$58K', feeType: 'per-year' },
      { name: 'Law', ranking: 12, strength: 'Very Good', fees: '$68K', feeType: 'per-year' }
    ],
    highlights: ['Ivy League', 'Beautiful Campus', 'Strong in Sciences', 'Research University'],
    website: 'https://www.cornell.edu/',
    image: '/placeholder.svg'
  },
  {
    id: 'w21',
    name: 'University of Melbourne',
    location: 'Melbourne, Australia',
    type: 'Public',
    overallRanking: 21,
    establishedYear: 1853,
    courses: [
      { name: 'Medicine', ranking: 18, strength: 'Good', fees: '$70K', feeType: 'per-year' },
      { name: 'Law', ranking: 8, strength: 'Very Good', fees: '$45K', feeType: 'per-year' },
      { name: 'Business', ranking: 22, strength: 'Good', fees: '$50K', feeType: 'per-year' },
      { name: 'Engineering', ranking: 25, strength: 'Good', fees: '$55K', feeType: 'per-year' },
      { name: 'Arts', ranking: 12, strength: 'Very Good', fees: '$35K', feeType: 'per-year' },
      { name: 'Architecture', ranking: 15, strength: 'Very Good', fees: '$45K', feeType: 'per-year' },
      { name: 'Education', ranking: 8, strength: 'Very Good', fees: '$35K', feeType: 'per-year' }
    ],
    highlights: ['Top Australian University', 'Research Excellence', 'Global Recognition', 'Diverse Programs'],
    website: 'https://www.unimelb.edu.au/',
    image: '/placeholder.svg'
  },
  {
    id: 'w22',
    name: 'London School of Economics',
    location: 'London, UK',
    type: 'Public',
    overallRanking: 22,
    establishedYear: 1895,
    courses: [
      { name: 'Economics', ranking: 3, strength: 'Excellent', fees: '£28K', feeType: 'per-year' },
      { name: 'Political Science', ranking: 2, strength: 'Excellent', fees: '£28K', feeType: 'per-year' },
      { name: 'International Relations', ranking: 1, strength: 'Excellent', fees: '£28K', feeType: 'per-year' },
      { name: 'Sociology', ranking: 1, strength: 'Excellent', fees: '£28K', feeType: 'per-year' },
      { name: 'Law', ranking: 8, strength: 'Very Good', fees: '£28K', feeType: 'per-year' },
      { name: 'Anthropology', ranking: 3, strength: 'Excellent', fees: '£28K', feeType: 'per-year' },
      { name: 'Philosophy', ranking: 8, strength: 'Very Good', fees: '£28K', feeType: 'per-year' }
    ],
    highlights: ['Social Sciences Excellence', 'Political Leaders Alumni', 'London Location', 'Research Focus'],
    website: 'https://www.lse.ac.uk/',
    image: '/placeholder.svg'
  },
  {
    id: 'w23',
    name: 'Australian National University',
    location: 'Canberra, Australia',
    type: 'Public',
    overallRanking: 23,
    establishedYear: 1946,
    courses: [
      { name: 'Political Science', ranking: 8, strength: 'Very Good', fees: '$45K', feeType: 'per-year' },
      { name: 'International Relations', ranking: 5, strength: 'Very Good', fees: '$45K', feeType: 'per-year' },
      { name: 'Economics', ranking: 18, strength: 'Good', fees: '$45K', feeType: 'per-year' },
      { name: 'Philosophy', ranking: 5, strength: 'Very Good', fees: '$35K', feeType: 'per-year' },
      { name: 'Physics', ranking: 20, strength: 'Good', fees: '$45K', feeType: 'per-year' },
      { name: 'Computer Science', ranking: 35, strength: 'Good', fees: '$50K', feeType: 'per-year' },
      { name: 'Law', ranking: 15, strength: 'Very Good', fees: '$40K', feeType: 'per-year' }
    ],
    highlights: ['National Research University', 'Government Connections', 'Liberal Arts', 'Policy Focus'],
    website: 'https://www.anu.edu.au/',
    image: '/placeholder.svg'
  },
  {
    id: 'w24',
    name: 'King\'s College London',
    location: 'London, UK',
    type: 'Public',
    overallRanking: 24,
    establishedYear: 1829,
    courses: [
      { name: 'Medicine', ranking: 12, strength: 'Very Good', fees: '£35K', feeType: 'per-year' },
      { name: 'Law', ranking: 15, strength: 'Very Good', fees: '£28K', feeType: 'per-year' },
      { name: 'International Relations', ranking: 8, strength: 'Very Good', fees: '£28K', feeType: 'per-year' },
      { name: 'English Literature', ranking: 12, strength: 'Very Good', fees: '£25K', feeType: 'per-year' },
      { name: 'History', ranking: 8, strength: 'Very Good', fees: '£25K', feeType: 'per-year' },
      { name: 'Nursing', ranking: 8, strength: 'Very Good', fees: '£28K', feeType: 'per-year' },
      { name: 'Dentistry', ranking: 15, strength: 'Very Good', fees: '£45K', feeType: 'per-year' }
    ],
    highlights: ['Historic University', 'Medical Excellence', 'London Location', 'Research Focus'],
    website: 'https://www.kcl.ac.uk/',
    image: '/placeholder.svg'
  },
  {
    id: 'w25',
    name: 'University of California Berkeley',
    location: 'Berkeley, USA',
    type: 'Public',
    overallRanking: 25,
    establishedYear: 1868,
    courses: [
      { name: 'Computer Science', ranking: 4, strength: 'Excellent', fees: '$45K', feeType: 'per-year' },
      { name: 'Engineering', ranking: 3, strength: 'Excellent', fees: '$45K', feeType: 'per-year' },
      { name: 'Business', ranking: 8, strength: 'Very Good', fees: '$65K', feeType: 'per-year' },
      { name: 'Economics', ranking: 5, strength: 'Excellent', fees: '$43K', feeType: 'per-year' },
      { name: 'Chemistry', ranking: 2, strength: 'Excellent', fees: '$43K', feeType: 'per-year' },
      { name: 'Physics', ranking: 3, strength: 'Excellent', fees: '$43K', feeType: 'per-year' },
      { name: 'Law', ranking: 8, strength: 'Very Good', fees: '$50K', feeType: 'per-year' }
    ],
    highlights: ['Public Ivy', 'Silicon Valley Proximity', 'Nobel Laureates', 'Research Excellence'],
    website: 'https://www.berkeley.edu/',
    image: '/placeholder.svg'
  },
  {
    id: 'w26',
    name: 'University of California Los Angeles',
    location: 'Los Angeles, USA',
    type: 'Public',
    overallRanking: 26,
    establishedYear: 1919,
    courses: [
      { name: 'Film & Television', ranking: 1, strength: 'Excellent', fees: '$43K', feeType: 'per-year' },
      { name: 'Medicine', ranking: 15, strength: 'Very Good', fees: '$38K', feeType: 'per-year' },
      { name: 'Business', ranking: 15, strength: 'Very Good', fees: '$60K', feeType: 'per-year' },
      { name: 'Psychology', ranking: 8, strength: 'Very Good', fees: '$43K', feeType: 'per-year' },
      { name: 'Engineering', ranking: 18, strength: 'Good', fees: '$43K', feeType: 'per-year' },
      { name: 'Art & Design', ranking: 5, strength: 'Very Good', fees: '$43K', feeType: 'per-year' },
      { name: 'Public Health', ranking: 5, strength: 'Very Good', fees: '$30K', feeType: 'per-year' }
    ],
    highlights: ['Entertainment Industry Hub', 'Research University', 'Beautiful Campus', 'Diverse Programs'],
    website: 'https://www.ucla.edu/',
    image: '/placeholder.svg'
  },
  {
    id: 'w27',
    name: 'University of Hong Kong',
    location: 'Hong Kong',
    type: 'Public',
    overallRanking: 27,
    establishedYear: 1911,
    courses: [
      { name: 'Medicine', ranking: 20, strength: 'Good', fees: '$45K', feeType: 'per-year' },
      { name: 'Law', ranking: 18, strength: 'Good', fees: '$25K', feeType: 'per-year' },
      { name: 'Business', ranking: 25, strength: 'Good', fees: '$30K', feeType: 'per-year' },
      { name: 'Engineering', ranking: 30, strength: 'Good', fees: '$30K', feeType: 'per-year' },
      { name: 'Architecture', ranking: 12, strength: 'Very Good', fees: '$30K', feeType: 'per-year' },
      { name: 'Dentistry', ranking: 8, strength: 'Very Good', fees: '$35K', feeType: 'per-year' },
      { name: 'Social Sciences', ranking: 25, strength: 'Good', fees: '$25K', feeType: 'per-year' }
    ],
    highlights: ['Asian Financial Hub', 'English Medium', 'Global Rankings', 'Research Focus'],
    website: 'https://www.hku.hk/',
    image: '/placeholder.svg'
  },
  {
    id: 'w28',
    name: 'University of Tokyo',
    location: 'Tokyo, Japan',
    type: 'Public',
    overallRanking: 28,
    establishedYear: 1877,
    courses: [
      { name: 'Engineering', ranking: 8, strength: 'Very Good', fees: '$8K', feeType: 'per-year' },
      { name: 'Medicine', ranking: 25, strength: 'Good', fees: '$10K', feeType: 'per-year' },
      { name: 'Natural Sciences', ranking: 15, strength: 'Very Good', fees: '$8K', feeType: 'per-year' },
      { name: 'Economics', ranking: 25, strength: 'Good', fees: '$8K', feeType: 'per-year' },
      { name: 'Law', ranking: 20, strength: 'Good', fees: '$8K', feeType: 'per-year' },
      { name: 'Liberal Arts', ranking: 20, strength: 'Good', fees: '$8K', feeType: 'per-year' },
      { name: 'Agriculture', ranking: 12, strength: 'Very Good', fees: '$8K', feeType: 'per-year' }
    ],
    highlights: ['Top Japanese University', 'Government Leaders', 'Research Excellence', 'Traditional Values'],
    website: 'https://www.u-tokyo.ac.jp/en/',
    image: '/placeholder.svg'
  },
  {
    id: 'w29',
    name: 'McGill University',
    location: 'Montreal, Canada',
    type: 'Public',
    overallRanking: 29,
    establishedYear: 1821,
    courses: [
      { name: 'Medicine', ranking: 22, strength: 'Good', fees: '$55K', feeType: 'per-year' },
      { name: 'Business', ranking: 35, strength: 'Good', fees: '$45K', feeType: 'per-year' },
      { name: 'Engineering', ranking: 35, strength: 'Good', fees: '$50K', feeType: 'per-year' },
      { name: 'Law', ranking: 25, strength: 'Good', fees: '$40K', feeType: 'per-year' },
      { name: 'Arts', ranking: 22, strength: 'Good', fees: '$35K', feeType: 'per-year' },
      { name: 'Music', ranking: 15, strength: 'Very Good', fees: '$35K', feeType: 'per-year' },
      { name: 'Agriculture', ranking: 18, strength: 'Good', fees: '$40K', feeType: 'per-year' }
    ],
    highlights: ['Historic Canadian University', 'Bilingual Environment', 'Research Focus', 'Global Recognition'],
    website: 'https://www.mcgill.ca/',
    image: '/placeholder.svg'
  },
  {
    id: 'w30',
    name: 'Northwestern University',
    location: 'Evanston, USA',
    type: 'Private',
    overallRanking: 30,
    establishedYear: 1851,
    courses: [
      { name: 'Journalism', ranking: 3, strength: 'Excellent', fees: '$58K', feeType: 'per-year' },
      { name: 'Business', ranking: 6, strength: 'Excellent', fees: '$74K', feeType: 'per-year' },
      { name: 'Medicine', ranking: 18, strength: 'Good', fees: '$65K', feeType: 'per-year' },
      { name: 'Engineering', ranking: 22, strength: 'Good', fees: '$58K', feeType: 'per-year' },
      { name: 'Economics', ranking: 12, strength: 'Very Good', fees: '$58K', feeType: 'per-year' },
      { name: 'Theatre', ranking: 5, strength: 'Very Good', fees: '$58K', feeType: 'per-year' },
      { name: 'Materials Science', ranking: 2, strength: 'Excellent', fees: '$58K', feeType: 'per-year' }
    ],
    highlights: ['Media Excellence', 'Chicago Location', 'Research University', 'Strong Alumni Network'],
    website: 'https://www.northwestern.edu/',
    image: '/placeholder.svg'
  },
  {
    id: 'w31',
    name: 'University of Michigan Ann Arbor',
    location: 'Ann Arbor, USA',
    type: 'Public',
    overallRanking: 31,
    establishedYear: 1817,
    courses: [
      { name: 'Engineering', ranking: 7, strength: 'Excellent', fees: '$50K', feeType: 'per-year' },
      { name: 'Business (Ross)', ranking: 4, strength: 'Excellent', fees: '$70K', feeType: 'per-year' },
      { name: 'Medicine', ranking: 12, strength: 'Very Good', fees: '$58K', feeType: 'per-year' },
      { name: 'Law', ranking: 10, strength: 'Very Good', fees: '$63K', feeType: 'per-year' },
      { name: 'Public Policy', ranking: 3, strength: 'Excellent', fees: '$48K', feeType: 'per-year' },
      { name: 'Psychology', ranking: 5, strength: 'Excellent', fees: '$48K', feeType: 'per-year' },
      { name: 'Computer Science', ranking: 12, strength: 'Very Good', fees: '$50K', feeType: 'per-year' },
      { name: 'Economics', ranking: 8, strength: 'Very Good', fees: '$48K', feeType: 'per-year' }
    ],
    highlights: ['Public Ivy', 'Research Powerhouse', 'Big Ten Athletics', 'Strong Alumni Network'],
    website: 'https://umich.edu/',
    image: '/placeholder.svg'
  },
  {
    id: 'w32',
    name: 'New York University',
    location: 'New York, USA',
    type: 'Private',
    overallRanking: 32,
    establishedYear: 1831,
    courses: [
      { name: 'Film & Television (Tisch)', ranking: 2, strength: 'Excellent', fees: '$56K', feeType: 'per-year' },
      { name: 'Business (Stern)', ranking: 10, strength: 'Very Good', fees: '$77K', feeType: 'per-year' },
      { name: 'Law', ranking: 6, strength: 'Excellent', fees: '$69K', feeType: 'per-year' },
      { name: 'Medicine', ranking: 5, strength: 'Excellent', fees: '$55K', feeType: 'per-year' },
      { name: 'Drama', ranking: 3, strength: 'Excellent', fees: '$56K', feeType: 'per-year' },
      { name: 'Mathematics', ranking: 8, strength: 'Very Good', fees: '$56K', feeType: 'per-year' },
      { name: 'Philosophy', ranking: 1, strength: 'Excellent', fees: '$56K', feeType: 'per-year' },
      { name: 'Social Work', ranking: 1, strength: 'Excellent', fees: '$45K', feeType: 'per-year' }
    ],
    highlights: ['NYC Campus', 'Global Network', 'Arts Excellence', 'Urban Experience'],
    website: 'https://www.nyu.edu/',
    image: '/placeholder.svg'
  },
  {
    id: 'w33',
    name: 'University of Sydney',
    location: 'Sydney, Australia',
    type: 'Public',
    overallRanking: 33,
    establishedYear: 1850,
    courses: [
      { name: 'Medicine', ranking: 16, strength: 'Very Good', fees: '$68K', feeType: 'per-year' },
      { name: 'Law', ranking: 12, strength: 'Very Good', fees: '$47K', feeType: 'per-year' },
      { name: 'Business', ranking: 18, strength: 'Good', fees: '$52K', feeType: 'per-year' },
      { name: 'Engineering', ranking: 28, strength: 'Good', fees: '$53K', feeType: 'per-year' },
      { name: 'Veterinary Science', ranking: 8, strength: 'Very Good', fees: '$75K', feeType: 'per-year' },
      { name: 'Architecture', ranking: 18, strength: 'Good', fees: '$48K', feeType: 'per-year' },
      { name: 'Arts & Social Sciences', ranking: 15, strength: 'Very Good', fees: '$42K', feeType: 'per-year' },
      { name: 'Nursing', ranking: 12, strength: 'Very Good', fees: '$38K', feeType: 'per-year' }
    ],
    highlights: ['Historic Australian University', 'Beautiful Campus', 'Research Excellence', 'Global Recognition'],
    website: 'https://www.sydney.edu.au/',
    image: '/placeholder.svg'
  },
  {
    id: 'w34',
    name: 'Technical University of Munich',
    location: 'Munich, Germany',
    type: 'Public',
    overallRanking: 34,
    establishedYear: 1868,
    courses: [
      { name: 'Engineering', ranking: 12, strength: 'Very Good', fees: '€150', feeType: 'per-year' },
      { name: 'Computer Science', ranking: 18, strength: 'Good', fees: '€150', feeType: 'per-year' },
      { name: 'Physics', ranking: 25, strength: 'Good', fees: '€150', feeType: 'per-year' },
      { name: 'Mathematics', ranking: 20, strength: 'Good', fees: '€150', feeType: 'per-year' },
      { name: 'Architecture', ranking: 15, strength: 'Very Good', fees: '€150', feeType: 'per-year' },
      { name: 'Management & Technology', ranking: 20, strength: 'Good', fees: '€150', feeType: 'per-year' },
      { name: 'Life Sciences', ranking: 22, strength: 'Good', fees: '€150', feeType: 'per-year' }
    ],
    highlights: ['German Engineering Excellence', 'Industry Connections', 'Research Focus', 'Low Fees'],
    website: 'https://www.tum.de/en/',
    image: '/placeholder.svg'
  },
  {
    id: 'w35',
    name: 'University of Wisconsin Madison',
    location: 'Madison, USA',
    type: 'Public',
    overallRanking: 35,
    establishedYear: 1848,
    courses: [
      { name: 'Engineering', ranking: 15, strength: 'Very Good', fees: '$40K', feeType: 'per-year' },
      { name: 'Business', ranking: 18, strength: 'Good', fees: '$43K', feeType: 'per-year' },
      { name: 'Medicine', ranking: 25, strength: 'Good', fees: '$38K', feeType: 'per-year' },
      { name: 'Agriculture & Life Sciences', ranking: 8, strength: 'Very Good', fees: '$38K', feeType: 'per-year' },
      { name: 'Education', ranking: 5, strength: 'Very Good', fees: '$35K', feeType: 'per-year' },
      { name: 'Journalism', ranking: 8, strength: 'Very Good', fees: '$38K', feeType: 'per-year' },
      { name: 'Psychology', ranking: 12, strength: 'Very Good', fees: '$38K', feeType: 'per-year' },
      { name: 'Computer Science', ranking: 25, strength: 'Good', fees: '$40K', feeType: 'per-year' }
    ],
    highlights: ['Research University', 'Big Ten Conference', 'Liberal Traditions', 'Beautiful Campus'],
    website: 'https://www.wisc.edu/',
    image: '/placeholder.svg'
  },
  {
    id: 'w36',
    name: 'University of Manchester',
    location: 'Manchester, UK',
    type: 'Public',
    overallRanking: 36,
    establishedYear: 1824,
    courses: [
      { name: 'Engineering', ranking: 20, strength: 'Good', fees: '£28K', feeType: 'per-year' },
      { name: 'Computer Science', ranking: 25, strength: 'Good', fees: '£28K', feeType: 'per-year' },
      { name: 'Business', ranking: 30, strength: 'Good', fees: '£22K', feeType: 'per-year' },
      { name: 'Medicine', ranking: 18, strength: 'Good', fees: '£38K', feeType: 'per-year' },
      { name: 'Chemistry', ranking: 15, strength: 'Very Good', fees: '£25K', feeType: 'per-year' },
      { name: 'Materials Science', ranking: 12, strength: 'Very Good', fees: '£28K', feeType: 'per-year' },
      { name: 'Social Sciences', ranking: 25, strength: 'Good', fees: '£20K', feeType: 'per-year' },
      { name: 'Economics', ranking: 22, strength: 'Good', fees: '£22K', feeType: 'per-year' }
    ],
    highlights: ['Research Excellence', 'Industrial Heritage', 'Diverse Programs', 'City Campus'],
    website: 'https://www.manchester.ac.uk/',
    image: '/placeholder.svg'
  },
  {
    id: 'w37',
    name: 'Seoul National University',
    location: 'Seoul, South Korea',
    type: 'Public',
    overallRanking: 37,
    establishedYear: 1946,
    courses: [
      { name: 'Engineering', ranking: 15, strength: 'Very Good', fees: '$7K', feeType: 'per-year' },
      { name: 'Medicine', ranking: 20, strength: 'Good', fees: '$8K', feeType: 'per-year' },
      { name: 'Business', ranking: 25, strength: 'Good', fees: '$6K', feeType: 'per-year' },
      { name: 'Liberal Arts', ranking: 18, strength: 'Good', fees: '$5K', feeType: 'per-year' },
      { name: 'Natural Sciences', ranking: 20, strength: 'Good', fees: '$6K', feeType: 'per-year' },
      { name: 'Social Sciences', ranking: 15, strength: 'Very Good', fees: '$5K', feeType: 'per-year' },
      { name: 'Agriculture & Life Sciences', ranking: 12, strength: 'Very Good', fees: '$6K', feeType: 'per-year' },
      { name: 'Veterinary Medicine', ranking: 15, strength: 'Very Good', fees: '$7K', feeType: 'per-year' }
    ],
    highlights: ['Top Korean University', 'Government Leaders', 'Research Excellence', 'Affordable Education'],
    website: 'https://en.snu.ac.kr/',
    image: '/placeholder.svg'
  },
  {
    id: 'w38',
    name: 'University of British Columbia',
    location: 'Vancouver, Canada',
    type: 'Public',
    overallRanking: 38,
    establishedYear: 1908,
    courses: [
      { name: 'Medicine', ranking: 20, strength: 'Good', fees: '$58K', feeType: 'per-year' },
      { name: 'Engineering', ranking: 20, strength: 'Good', fees: '$48K', feeType: 'per-year' },
      { name: 'Business (Sauder)', ranking: 28, strength: 'Good', fees: '$52K', feeType: 'per-year' },
      { name: 'Forestry', ranking: 3, strength: 'Excellent', fees: '$40K', feeType: 'per-year' },
      { name: 'Computer Science', ranking: 25, strength: 'Good', fees: '$48K', feeType: 'per-year' },
      { name: 'Psychology', ranking: 18, strength: 'Good', fees: '$42K', feeType: 'per-year' },
      { name: 'Arts', ranking: 20, strength: 'Good', fees: '$35K', feeType: 'per-year' },
      { name: 'Science', ranking: 22, strength: 'Good', fees: '$45K', feeType: 'per-year' }
    ],
    highlights: ['Beautiful Campus', 'Research University', 'Multicultural', 'Pacific Coast Location'],
    website: 'https://www.ubc.ca/',
    image: '/placeholder.svg'
  },
  {
    id: 'w39',
    name: 'University of Amsterdam',
    location: 'Amsterdam, Netherlands',
    type: 'Public',
    overallRanking: 39,
    establishedYear: 1877,
    courses: [
      { name: 'Economics & Business', ranking: 15, strength: 'Very Good', fees: '€2.2K', feeType: 'per-year' },
      { name: 'Social Sciences', ranking: 12, strength: 'Very Good', fees: '€2.2K', feeType: 'per-year' },
      { name: 'Psychology', ranking: 15, strength: 'Very Good', fees: '€2.2K', feeType: 'per-year' },
      { name: 'Media Studies', ranking: 8, strength: 'Very Good', fees: '€2.2K', feeType: 'per-year' },
      { name: 'Law', ranking: 20, strength: 'Good', fees: '€2.2K', feeType: 'per-year' },
      { name: 'Computer Science', ranking: 30, strength: 'Good', fees: '€2.2K', feeType: 'per-year' },
      { name: 'Medicine', ranking: 25, strength: 'Good', fees: '€2.2K', feeType: 'per-year' },
      { name: 'Liberal Arts & Sciences', ranking: 12, strength: 'Very Good', fees: '€2.2K', feeType: 'per-year' }
    ],
    highlights: ['Historic City Campus', 'International Environment', 'Research Excellence', 'Low Tuition'],
    website: 'https://www.uva.nl/en',
    image: '/placeholder.svg'
  },
  {
    id: 'w40',
    name: 'Karolinska Institute',
    location: 'Stockholm, Sweden',
    type: 'Public',
    overallRanking: 40,
    establishedYear: 1810,
    courses: [
      { name: 'Medicine', ranking: 8, strength: 'Very Good', fees: 'Free', feeType: 'total' },
      { name: 'Global Health', ranking: 3, strength: 'Excellent', fees: 'Free', feeType: 'total' },
      { name: 'Biomedicine', ranking: 5, strength: 'Very Good', fees: 'Free', feeType: 'total' },
      { name: 'Public Health Sciences', ranking: 8, strength: 'Very Good', fees: 'Free', feeType: 'total' },
      { name: 'Neuroscience', ranking: 8, strength: 'Very Good', fees: 'Free', feeType: 'total' },
      { name: 'Toxicology', ranking: 5, strength: 'Very Good', fees: 'Free', feeType: 'total' },
      { name: 'Molecular Medicine', ranking: 8, strength: 'Very Good', fees: 'Free', feeType: 'total' }
    ],
    highlights: ['Nobel Prize Connection', 'Medical Excellence', 'Research Institute', 'Free Education'],
    website: 'https://ki.se/en',
    image: '/placeholder.svg'
  }
];
