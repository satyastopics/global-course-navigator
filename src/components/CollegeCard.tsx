
import { MapPin, Star, Users, BookOpen, ExternalLink, IndianRupee, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

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

  const isIndian = college.courses[0]?.fees.includes('₹');

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
            <Badge 
              variant={college.type === 'Government' ? 'default' : 'outline'}
              className={college.type === 'Government' ? 'bg-green-600' : 'bg-white/90 text-gray-800'}
            >
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
              <div key={idx} className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{course.name}</span>
                  <Badge variant="outline" className={getStrengthColor(course.strength)}>
                    {course.strength}
                  </Badge>
                </div>
                <div className="flex items-center text-gray-600">
                  <Star className="h-3 w-3 mr-1 text-yellow-500" />
                  #{course.ranking}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold mb-2">Key Highlights</h4>
          <div className="flex flex-wrap gap-1">
            {college.highlights.map((highlight, idx) => (
              <Badge key={idx} variant="outline" className="text-xs">
                {highlight}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center text-sm text-gray-600">
            {isIndian ? <IndianRupee className="h-4 w-4 mr-1" /> : <DollarSign className="h-4 w-4 mr-1" />}
            <span>From {college.courses[0]?.fees}</span>
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
