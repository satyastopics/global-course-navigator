
import { useState } from 'react';
import { Search, Filter, Globe, MapPin, Star, Users, BookOpen, GraduationCap, SlidersHorizontal, Lightbulb, Brain, Target, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import CollegeCard from '@/components/CollegeCard';
import FilterPanel from '@/components/FilterPanel';
import SearchGuide from '@/components/SearchGuide';
import { indianColleges, worldColleges } from '@/data/collegeData';

const Index = () => {
  const [activeTab, setActiveTab] = useState('indian');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
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
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100">
      {/* Enhanced Header */}
      <header className="bg-white/95 backdrop-blur-lg border-b border-emerald-200/50 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl shadow-lg">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-black bg-gradient-to-r from-emerald-700 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  EduNavigator
                </h1>
                <p className="text-sm text-gray-600 font-medium">Your College Discovery Platform</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Button
                variant="ghost"
                onClick={() => setShowGuide(!showGuide)}
                className="text-gray-700 hover:text-emerald-600 font-medium"
              >
                <Compass className="h-4 w-4 mr-2" />
                Search Guide
              </Button>
              <a href="#features" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Features</a>
              <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-teal-600/10 to-cyan-600/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-emerald-700 via-teal-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
              Discover Your
              <span className="block">Dream College</span>
            </h2>
            <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
              Navigate through thousands of universities worldwide with intelligent filters, course-specific insights, and personalized recommendations
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-3xl mx-auto">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 h-6 w-6" />
                <Input
                  placeholder="Search colleges, courses, locations, or specializations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-16 text-lg border-2 border-emerald-200 focus:border-emerald-500 rounded-2xl shadow-lg bg-white/80 backdrop-blur-sm"
                />
              </div>
              <Button 
                onClick={() => setShowFilters(!showFilters)}
                variant={showFilters ? "default" : "outline"}
                className="h-16 px-8 border-2 border-emerald-200 hover:border-emerald-500 rounded-2xl font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg"
              >
                <SlidersHorizontal className="h-6 w-6 mr-2" />
                Smart Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Guide Section */}
      {showGuide && (
        <section className="px-4 mb-8">
          <div className="container mx-auto">
            <SearchGuide />
          </div>
        </section>
      )}

      {/* Enhanced Tabs */}
      <section className="px-4 mb-12">
        <div className="container mx-auto">
          <div className="flex justify-center space-x-6">
            <Button
              onClick={() => setActiveTab('indian')}
              variant={activeTab === 'indian' ? 'default' : 'outline'}
              className={`h-16 px-10 text-lg font-semibold rounded-2xl shadow-lg transition-all duration-300 ${
                activeTab === 'indian' 
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-orange-200 hover:shadow-xl' 
                  : 'border-2 border-orange-200 hover:border-orange-400 bg-white/80 backdrop-blur-sm'
              }`}
            >
              <MapPin className="h-6 w-6 mr-3" />
              Indian Colleges
            </Button>
            <Button
              onClick={() => setActiveTab('world')}
              variant={activeTab === 'world' ? 'default' : 'outline'}
              className={`h-16 px-10 text-lg font-semibold rounded-2xl shadow-lg transition-all duration-300 ${
                activeTab === 'world' 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-blue-200 hover:shadow-xl' 
                  : 'border-2 border-blue-200 hover:border-blue-400 bg-white/80 backdrop-blur-sm'
              }`}
            >
              <Globe className="h-6 w-6 mr-3" />
              World Colleges
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

      {/* Enhanced Results Summary */}
      <section className="px-4 mb-8">
        <div className="container mx-auto">
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 border border-white/30 shadow-2xl">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  {activeTab === 'indian' ? (
                    <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                      Indian Colleges Discovery
                    </span>
                  ) : (
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Global Universities Explorer
                    </span>
                  )}
                </h3>
                <div className="flex items-center space-x-4 mb-3">
                  <span className="text-2xl font-bold text-emerald-600">{filteredColleges.length}</span>
                  <span className="text-gray-600 font-medium">results found</span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive course-specific rankings with transparent fee structures and detailed program information
                </p>
              </div>
              {filteredColleges.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  <Badge variant="outline" className="px-4 py-2 text-sm font-semibold bg-emerald-50 border-emerald-200 text-emerald-700">
                    Top Rank: #{Math.min(...filteredColleges.map(c => c.overallRanking))}
                  </Badge>
                  <Badge variant="outline" className="px-4 py-2 text-sm font-semibold bg-blue-50 border-blue-200 text-blue-700">
                    Est. {Math.min(...filteredColleges.map(c => c.establishedYear))} - {Math.max(...filteredColleges.map(c => c.establishedYear))}
                  </Badge>
                  <Badge variant="outline" className="px-4 py-2 text-sm font-semibold bg-purple-50 border-purple-200 text-purple-700">
                    Fee Range: {activeTab === 'indian' ? '₹50K - ₹25L' : '$1.4K - $85K'}
                  </Badge>
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
            <div className="text-center py-24">
              <div className="max-w-lg mx-auto bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
                <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Search className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-3xl font-bold text-gray-700 mb-4">No Results Found</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We couldn't find any colleges matching your criteria. Try adjusting your filters or search terms for better results.
                </p>
                <Button 
                  onClick={() => {
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
                  }}
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg"
                >
                  Reset All Filters
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredColleges.map((college, index) => (
                <CollegeCard key={college.id} college={college} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section id="features" className="py-24 px-4 bg-gradient-to-r from-white/70 to-emerald-50/70 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-black mb-6 bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
              Why Choose EduNavigator?
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful tools and comprehensive data to make your college selection journey effortless
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 rounded-3xl group hover:-translate-y-2">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Star className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">Smart Filtering</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">Advanced multi-parameter filtering system to find colleges that perfectly match your preferences and requirements</p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 rounded-3xl group hover:-translate-y-2">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">Comprehensive Database</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">Extensive collection of colleges with detailed course information, rankings, and transparent fee structures</p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 rounded-3xl group hover:-translate-y-2">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">Course-Specific Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">Detailed course-specific rankings and program strengths to help you make informed decisions about your academic future</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
