import { MapPin, Star, Users, BookOpen, ExternalLink, IndianRupee, DollarSign, Clock, Award, Calendar, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { College } from '../types/collegeTypes';

interface CollegeCardProps {
  college: College;
  index: number;
}

const CollegeCard = ({ college, index }: CollegeCardProps) => {
  const getStrengthColor = (strength: string) => {
    switch (strength) {
      case 'Excellent': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Very Good': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Good': return 'bg-amber-100 text-amber-800 border-amber-200';
      default: return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Government':
      case 'Public': return 'bg-emerald-600 text-white';
      case 'Private': return 'bg-blue-600 text-white';
      case 'Deemed': return 'bg-purple-600 text-white';
      case 'Ivy League': return 'bg-red-600 text-white';
      case 'Liberal Arts': return 'bg-orange-600 text-white';
      default: return 'bg-slate-600 text-white';
    }
  };

  const isIndian = college.courses[0]?.fees.includes('₹');

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
    <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white border-0 rounded-3xl overflow-hidden animate-fade-in shadow-lg h-full flex flex-col"
          style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="relative">
        {/* Header with gradient background */}
        <div className="h-48 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
          
          {/* Ranking Badge */}
          <div className="absolute top-4 left-4">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-3 py-2 shadow-lg">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-blue-600" />
                <span className="font-bold text-slate-800 text-sm">#{college.overallRanking}</span>
              </div>
            </div>
          </div>
          
          {/* College Type Badge */}
          <div className="absolute top-4 right-4">
            <Badge className={`${getTypeColor(college.type)} px-3 py-1 text-sm font-semibold rounded-xl shadow-lg`}>
              {college.type}
            </Badge>
          </div>
          
          {/* College Info Overlay */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="text-xl font-bold mb-2 leading-tight line-clamp-2">{college.name}</h3>
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
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
        </div>
      </div>

      <CardContent className="p-6 space-y-6 flex-1 flex flex-col">
        {/* All Programs Section - Show all courses */}
        <div className="flex-1">
          <h4 className="font-bold mb-4 flex items-center text-lg text-slate-800">
            <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
            Top Programs ({college.courses.length})
          </h4>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {college.courses.map((course, idx) => (
              <div key={idx} className="bg-slate-50 rounded-xl p-4 hover:bg-slate-100 transition-colors border border-slate-100">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-semibold text-slate-800 text-sm leading-tight">{course.name}</span>
                      <Badge variant="outline" className={`${getStrengthColor(course.strength)} text-xs font-medium flex-shrink-0`}>
                        {course.strength}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-slate-600">
                        {isIndian ? <IndianRupee className="h-4 w-4" /> : <DollarSign className="h-4 w-4" />}
                        <span className="font-medium text-sm">{course.fees}</span>
                        <span className="text-xs text-slate-500">
                          ({course.feeType === 'per-year' ? 'per year' : 'total'})
                        </span>
                      </div>
                      <div className="flex items-center space-x-1 text-blue-600">
                        <Star className="h-3 w-3 fill-current" />
                        <span className="text-sm font-semibold">#{course.ranking}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div>
          <h4 className="font-bold mb-3 text-slate-800">Key Highlights</h4>
          <div className="flex flex-wrap gap-2">
            {college.highlights.map((highlight, idx) => (
              <Badge key={idx} variant="outline" className="text-xs bg-blue-50 border-blue-200 text-blue-700 px-2 py-1 font-medium">
                {highlight}
              </Badge>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-200 mt-auto">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-slate-700">
              {isIndian ? <IndianRupee className="h-4 w-4" /> : <DollarSign className="h-4 w-4" />}
              <span className="font-bold text-lg">{getFeeRange()}</span>
            </div>
          </div>
          <div className="text-right">
            <a 
              href={college.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl px-4 py-2 font-semibold shadow-md hover:shadow-lg transition-all duration-300 text-sm"
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              Visit Website
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CollegeCard;
