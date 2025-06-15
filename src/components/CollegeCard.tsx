
import { MapPin, Star, Users, BookOpen, ExternalLink, IndianRupee, DollarSign, Clock } from 'lucide-react';
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
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm border border-white/20 animate-fade-in overflow-hidden"
          style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="relative">
        <div className="h-48 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-white/90 text-gray-800 font-semibold">
              #{college.overallRanking}
            </Badge>
          </div>
          <div className="absolute top-4 right-4">
            <Badge className={getTypeColor(college.type)}>
              {college.type}
            </Badge>
          </div>
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-xl font-bold mb-1">{college.name}</h3>
            <div className="flex items-center text-sm opacity-90">
              <MapPin className="h-4 w-4 mr-1" />
              {college.location}
            </div>
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Established</span>
            <span className="font-semibold">{college.establishedYear}</span>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold mb-2 flex items-center">
            <BookOpen className="h-4 w-4 mr-2 text-indigo-600" />
            Top Courses
          </h4>
          <div className="space-y-2">
            {college.courses.slice(0, 3).map((course, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-xs">{course.name}</span>
                    <Badge variant="outline" className={`${getStrengthColor(course.strength)} text-xs`}>
                      {course.strength}
                    </Badge>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Star className="h-3 w-3 mr-1 text-yellow-500" />
                    #{course.ranking}
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center">
                    {isIndian ? <IndianRupee className="h-3 w-3 mr-1" /> : <DollarSign className="h-3 w-3 mr-1" />}
                    <span>{course.fees}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{course.feeType === 'per-year' ? 'per year' : 'total program'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold mb-2">Key Highlights</h4>
          <div className="flex flex-wrap gap-1">
            {college.highlights.slice(0, 4).map((highlight, idx) => (
              <Badge key={idx} variant="outline" className="text-xs">
                {highlight}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex flex-col">
            <div className="flex items-center text-sm text-gray-600">
              {isIndian ? <IndianRupee className="h-4 w-4 mr-1" /> : <DollarSign className="h-4 w-4 mr-1" />}
              <span className="font-medium">{getFeeRange()}</span>
            </div>
            <span className="text-xs text-gray-500">{college.courses.length} courses available</span>
          </div>
          <Button size="sm" className="group-hover:bg-indigo-600 transition-colors">
            <ExternalLink className="h-4 w-4 mr-1" />
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CollegeCard;
