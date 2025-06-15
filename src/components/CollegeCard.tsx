
import { MapPin, Star, Users, BookOpen, ExternalLink, IndianRupee, DollarSign, Clock, Award, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

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

interface CollegeCardProps {
  college: College;
  index: number;
}

const CollegeCard = ({ college, index }: CollegeCardProps) => {
  const getStrengthColor = (strength: string) => {
    switch (strength) {
      case 'Excellent': return 'bg-green-100 text-green-800 border-green-200';
      case 'Very Good': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Good': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Government':
      case 'Public': return 'bg-green-600 text-white';
      case 'Private': return 'bg-blue-600 text-white';
      case 'Deemed': return 'bg-purple-600 text-white';
      case 'Ivy League': return 'bg-red-600 text-white';
      case 'Liberal Arts': return 'bg-orange-600 text-white';
      default: return 'bg-gray-600 text-white';
    }
  };

  const isIndian = college.courses[0]?.fees.includes('₹');

  // Find the course with the lowest fee for display
  const lowestFeeCourse = college.courses.reduce((min, course) => {
    const minAmount = parseFloat(min.fees.replace(/[₹$£€LK,]/g, ''));
    const courseAmount = parseFloat(course.fees.replace(/[₹$£€LK,]/g, ''));
    return courseAmount < minAmount ? course : min;
  }, college.courses[0]);

  const getFeeRange = () => {
    const fees = college.courses.map(course => parseFloat(course.fees.replace(/[₹$£€LK,]/g, '')));
    const minFee = Math.min(...fees);
    const maxFee = Math.max(...fees);
    
    if (minFee === maxFee) {
      return `${college.courses[0].fees}`;
    }
    
    const currency = isIndian ? '₹' : '$';
    const suffix = isIndian ? 'L' : 'K';
    return `${currency}${minFee}${suffix} - ${currency}${maxFee}${suffix}`;
  };

  return (
    <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/90 backdrop-blur-lg border-0 rounded-3xl overflow-hidden animate-fade-in shadow-lg"
          style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="relative">
        <div className="h-56 bg-gradient-to-br from-violet-600 via-purple-600 to-pink-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          
          {/* Ranking Badge */}
          <div className="absolute top-6 left-6">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg">
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4 text-yellow-600" />
                <span className="font-bold text-gray-800">#{college.overallRanking}</span>
              </div>
            </div>
          </div>
          
          {/* College Type Badge */}
          <div className="absolute top-6 right-6">
            <Badge className={`${getTypeColor(college.type)} px-4 py-2 text-sm font-semibold rounded-xl shadow-lg`}>
              {college.type}
            </Badge>
          </div>
          
          {/* College Info Overlay */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h3 className="text-2xl font-bold mb-2 leading-tight">{college.name}</h3>
            <div className="flex items-center space-x-4 text-sm opacity-90">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {college.location}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                Est. {college.establishedYear}
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-4 left-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
        </div>
      </div>

      <CardContent className="p-8 space-y-6">
        {/* Courses Section */}
        <div>
          <h4 className="font-bold mb-4 flex items-center text-lg text-gray-800">
            <BookOpen className="h-5 w-5 mr-3 text-indigo-600" />
            Featured Programs
          </h4>
          <div className="space-y-4">
            {college.courses.slice(0, 3).map((course, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-4 hover:bg-gray-100 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <span className="font-semibold text-gray-800">{course.name}</span>
                    <Badge variant="outline" className={`${getStrengthColor(course.strength)} text-xs font-medium`}>
                      {course.strength}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-1 text-yellow-600">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-semibold">#{course.ranking}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    {isIndian ? <IndianRupee className="h-4 w-4" /> : <DollarSign className="h-4 w-4" />}
                    <span className="font-medium">{course.fees}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.feeType === 'per-year' ? 'per year' : 'total program'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div>
          <h4 className="font-bold mb-3 text-gray-800">Key Highlights</h4>
          <div className="flex flex-wrap gap-2">
            {college.highlights.slice(0, 4).map((highlight, idx) => (
              <Badge key={idx} variant="outline" className="text-xs bg-blue-50 border-blue-200 text-blue-700 px-3 py-1">
                {highlight}
              </Badge>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-6 border-t border-gray-200">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-gray-700">
              {isIndian ? <IndianRupee className="h-5 w-5" /> : <DollarSign className="h-5 w-5" />}
              <span className="font-bold text-lg">{getFeeRange()}</span>
            </div>
            <span className="text-sm text-gray-500">{college.courses.length} programs available</span>
          </div>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Explore
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CollegeCard;
