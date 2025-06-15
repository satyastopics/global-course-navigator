
import { useState } from 'react';
import { Search, Filter, Globe, MapPin, Star, Users, BookOpen, GraduationCap, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import CollegeCard from '@/components/CollegeCard';
import FilterPanel from '@/components/FilterPanel';
import { indianColleges, worldColleges } from '@/data/collegeData';

const Index = () => {
  const [activeTab, setActiveTab] = useState('indian');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    courseType: '',
    rankingRange: '',
    location: '',
    fees: '',
    collegeType: [] as string[],
    establishedYear: [1900, 2024] as number[],
    minRanking: 1,
    maxRanking: 500,
    courseStrength: ''
  });

  const currentColleges = activeTab === 'indian' ? indianColleges : worldColleges;
  
  const filteredColleges = currentColleges.filter(college => {
    // Search filter
    const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         college.courses.some(course => course.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         college.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (!matchesSearch) return false;
    
    // Course type filter
    if (filters.courseType && !college.courses.some(course => 
      course.name.toLowerCase().includes(filters.courseType.toLowerCase()))) return false;
    
    // Location filter
    if (filters.location && !college.location.toLowerCase().includes(filters.location.toLowerCase())) return false;
    
    // College type filter
    if (filters.collegeType.length > 0 && !filters.collegeType.includes(college.type)) return false;
    
    // Ranking range filter
    if (college.overallRanking < filters.minRanking || college.overallRanking > filters.maxRanking) return false;
    
    // Established year filter
    if (college.establishedYear < filters.establishedYear[0] || college.establishedYear > filters.establishedYear[1]) return false;
    
    // Course strength filter
    if (filters.courseStrength) {
      const strengthOrder = { 'excellent': 4, 'very-good': 3, 'good': 2, 'average': 1 };
      const requiredLevel = strengthOrder[filters.courseStrength.toLowerCase() as keyof typeof strengthOrder];
      const hasRequiredStrength = college.courses.some(course => {
        const courseLevel = strengthOrder[course.strength.toLowerCase().replace(' ', '-') as keyof typeof strengthOrder];
        return courseLevel >= requiredLevel;
      });
      if (!hasRequiredStrength) return false;
    }
    
    // Fee range filter - Updated logic for better parsing
    if (filters.fees) {
      const feeRanges = activeTab === 'indian' 
        ? {
            'very-low': (fee: string) => {
              const amount = parseFloat(fee.replace(/[₹LK,]/g, ''));
              return amount < 2;
            },
            'low': (fee: string) => {
              const amount = parseFloat(fee.replace(/[₹LK,]/g, ''));
              return amount >= 2 && amount < 5;
            },
            'medium': (fee: string) => {
              const amount = parseFloat(fee.replace(/[₹LK,]/g, ''));
              return amount >= 5 && amount < 15;
            },
            'high': (fee: string) => {
              const amount = parseFloat(fee.replace(/[₹LK,]/g, ''));
              return amount >= 15 && amount < 25;
            },
            'very-high': (fee: string) => {
              const amount = parseFloat(fee.replace(/[₹LK,]/g, ''));
              return amount >= 25;
            }
          }
        : {
            'low': (fee: string) => {
              const amount = parseFloat(fee.replace(/[$K£€,]/g, ''));
              return amount < 30;
            },
            'medium': (fee: string) => {
              const amount = parseFloat(fee.replace(/[$K£€,]/g, ''));
              return amount >= 30 && amount < 60;
            },
            'high': (fee: string) => {
              const amount = parseFloat(fee.replace(/[$K£€,]/g, ''));
              return amount >= 60 && amount < 80;
            },
            'very-high': (fee: string) => {
              const amount = parseFloat(fee.replace(/[$K£€,]/g, ''));
              return amount >= 80;
            }
          };
      
      const feeCheck = feeRanges[filters.fees as keyof typeof feeRanges];
      if (feeCheck && !college.courses.some(course => feeCheck(course.fees))) return false;
    }
    
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-indigo-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                EduSelect Pro
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">Features</a>
              <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Find Your Perfect College
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover top universities worldwide with course-specific rankings, detailed insights, and advanced filtering options
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search colleges, courses, or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-lg border-2 border-indigo-200 focus:border-indigo-500"
              />
            </div>
            <Button 
              onClick={() => setShowFilters(!showFilters)}
              variant={showFilters ? "default" : "outline"}
              className="h-12 px-6 border-2 border-indigo-200 hover:border-indigo-500"
            >
              <SlidersHorizontal className="h-5 w-5 mr-2" />
              Advanced Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="px-4 mb-8">
        <div className="container mx-auto">
          <div className="flex justify-center space-x-4">
            <Button
              onClick={() => setActiveTab('indian')}
              variant={activeTab === 'indian' ? 'default' : 'outline'}
              className="h-12 px-8 text-lg"
            >
              <MapPin className="h-5 w-5 mr-2" />
              Indian Colleges ({indianColleges.length})
            </Button>
            <Button
              onClick={() => setActiveTab('world')}
              variant={activeTab === 'world' ? 'default' : 'outline'}
              className="h-12 px-8 text-lg"
            >
              <Globe className="h-5 w-5 mr-2" />
              World Colleges ({worldColleges.length})
            </Button>
          </div>
        </div>
      </section>

      {/* Filters Panel */}
      {showFilters && (
        <section className="px-4 mb-8">
          <div className="container mx-auto">
            <FilterPanel filters={filters} setFilters={setFilters} activeTab={activeTab} />
          </div>
        </section>
      )}

      {/* Results Summary */}
      <section className="px-4 mb-6">
        <div className="container mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {activeTab === 'indian' ? 'Indian Colleges' : 'World Colleges'} 
                  <span className="text-indigo-600 ml-2">({filteredColleges.length} results)</span>
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Showing course-specific rankings and fee structures (per year or total program)
                </p>
              </div>
              {filteredColleges.length > 0 && (
                <div className="text-sm text-gray-600">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Top Rank: #{Math.min(...filteredColleges.map(c => c.overallRanking))}</Badge>
                    <Badge variant="outline">
                      Years: {Math.min(...filteredColleges.map(c => c.establishedYear))} - {Math.max(...filteredColleges.map(c => c.establishedYear))}
                    </Badge>
                    <Badge variant="outline">
                      Fee Range: {activeTab === 'indian' ? '₹50K - ₹22L' : '$1.4K - $85K'}
                    </Badge>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* College Grid */}
      <section className="px-4 pb-20">
        <div className="container mx-auto">
          {filteredColleges.length === 0 ? (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <Search className="h-16 w-16 text-gray-300 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-600 mb-4">No colleges found</h3>
                <p className="text-gray-500 mb-6">
                  Try adjusting your filters or search terms to find more colleges.
                </p>
                <Button onClick={() => {
                  setSearchTerm('');
                  setFilters({
                    courseType: '',
                    rankingRange: '',
                    location: '',
                    fees: '',
                    collegeType: [],
                    establishedYear: [1900, 2024],
                    minRanking: 1,
                    maxRanking: 500,
                    courseStrength: ''
                  });
                }}>
                  Clear All Filters
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredColleges.map((college, index) => (
                <CollegeCard key={college.id} college={college} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12">Why Choose EduSelect Pro?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <CardTitle>Advanced Filtering</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Powerful filters to find colleges by rankings, courses, fees, and more</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <CardTitle>Comprehensive Database</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Hundreds of colleges with detailed information and course-specific data</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <CardTitle>Course-Specific Rankings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Get detailed rankings for specific courses, not just overall college rankings</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
