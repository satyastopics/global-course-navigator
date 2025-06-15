import { useState } from 'react';
import { Search, Filter, Globe, MapPin, Star, Users, BookOpen, GraduationCap, SlidersHorizontal, Lightbulb, Brain, Target, Compass, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import CollegeCard from '@/components/CollegeCard';
import FilterPanel from '@/components/FilterPanel';
import SearchGuide from '@/components/SearchGuide';
import { indianColleges, worldColleges } from '@/data/collegeData';

const COLLEGES_PER_PAGE = 9;

const Index = () => {
  const [activeTab, setActiveTab] = useState('indian');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
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

  // Reset to page 1 when filters change
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  // Pagination calculations
  const totalPages = Math.ceil(filteredColleges.length / COLLEGES_PER_PAGE);
  const startIndex = (currentPage - 1) * COLLEGES_PER_PAGE;
  const endIndex = startIndex + COLLEGES_PER_PAGE;
  const currentCollegesPage = filteredColleges.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Modern Header */}
      <header className="bg-white/95 backdrop-blur-xl border-b border-slate-200/60 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-xl shadow-lg flex items-center justify-center transform rotate-3">
                  <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-orange-400 rounded-full shadow-md"></div>
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
                  EduNavigator
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 font-medium">Smart College Discovery</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Button
                variant="ghost"
                onClick={() => setShowGuide(!showGuide)}
                className="text-slate-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all duration-200"
              >
                <Compass className="h-4 w-4 mr-2" />
                Search Guide
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-indigo-600/5 to-purple-600/5"></div>
        <div className="absolute top-10 left-10 w-32 h-32 sm:w-72 sm:h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 sm:w-96 sm:h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-700 bg-clip-text text-transparent leading-tight">
              Find Your Perfect
              <span className="block text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                University Match
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 mb-8 sm:mb-10 max-w-2xl mx-auto font-medium leading-relaxed px-4">
              Discover thousands of universities with advanced filtering, course insights, and personalized recommendations
            </p>
            
            {/* Prominent Search Guide Button */}
            <div className="mb-8 sm:mb-12">
              <Button
                onClick={() => setShowGuide(!showGuide)}
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base"
              >
                <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                <span className="hidden sm:inline">Need Help Finding Colleges? Get Smart Search Tips</span>
                <span className="sm:hidden">Get Smart Search Tips</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Guide Section */}
      {showGuide && (
        <section className="px-4 sm:px-6 mb-8">
          <div className="container mx-auto">
            <SearchGuide />
          </div>
        </section>
      )}

      {/* College Type Tabs */}
      <section className="px-4 sm:px-6 mb-8 sm:mb-12">
        <div className="container mx-auto">
          <div className="flex justify-center space-x-3 sm:space-x-4">
            <Button
              onClick={() => handleTabChange('indian')}
              variant={activeTab === 'indian' ? 'default' : 'outline'}
              className={`h-12 sm:h-14 px-4 sm:px-8 text-sm sm:text-lg font-semibold rounded-2xl shadow-sm transition-all duration-300 ${
                activeTab === 'indian' 
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-orange-200' 
                  : 'border-2 border-orange-200 hover:border-orange-400 bg-white hover:bg-orange-50 text-slate-700'
              }`}
            >
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" />
              <span className="hidden sm:inline">Indian Universities</span>
              <span className="sm:hidden">Indian</span>
            </Button>
            <Button
              onClick={() => handleTabChange('world')}
              variant={activeTab === 'world' ? 'default' : 'outline'}
              className={`h-12 sm:h-14 px-4 sm:px-8 text-sm sm:text-lg font-semibold rounded-2xl shadow-sm transition-all duration-300 ${
                activeTab === 'world' 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-blue-200' 
                  : 'border-2 border-blue-200 hover:border-blue-400 bg-white hover:bg-blue-50 text-slate-700'
              }`}
            >
              <Globe className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" />
              <span className="hidden sm:inline">Global Universities</span>
              <span className="sm:hidden">Global</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Search and Filter Bar */}
      <section className="px-4 sm:px-6 mb-8">
        <div className="container mx-auto">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-4 sm:p-6 border border-slate-200/60 shadow-lg">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-4 sm:left-5 top-1/2 transform -translate-y-1/2 text-slate-500 h-4 w-4 sm:h-5 sm:w-5" />
                <Input
                  placeholder="Search universities, courses, locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 sm:pl-14 h-12 sm:h-14 text-base sm:text-lg border-2 border-slate-200 focus:border-blue-500 rounded-2xl shadow-sm bg-white/90 backdrop-blur-sm"
                />
              </div>
              <Button 
                onClick={() => setShowFilters(!showFilters)}
                variant={showFilters ? "default" : "outline"}
                className="h-12 sm:h-14 px-6 sm:px-8 border-2 border-slate-200 hover:border-blue-500 rounded-2xl font-semibold bg-white hover:bg-blue-50 text-slate-700 shadow-sm w-full sm:w-auto"
              >
                <SlidersHorizontal className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Advanced Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Panel */}
      {showFilters && (
        <section className="px-4 sm:px-6 mb-8">
          <div className="container mx-auto">
            <FilterPanel filters={filters} setFilters={setFilters} activeTab={activeTab} />
          </div>
        </section>
      )}

      {/* Results Summary */}
      <section className="px-4 sm:px-6 mb-8">
        <div className="container mx-auto">
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-slate-200/60 shadow-lg">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 sm:gap-6">
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">
                  {activeTab === 'indian' ? (
                    <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                      Indian Universities
                    </span>
                  ) : (
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Global Universities
                    </span>
                  )}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl sm:text-3xl font-bold text-blue-600">{filteredColleges.length}</span>
                    <span className="text-slate-600 font-medium">universities found</span>
                  </div>
                  {totalPages > 1 && (
                    <div className="flex items-center space-x-2 mt-1 sm:mt-0">
                      <span className="text-slate-400 hidden sm:inline">•</span>
                      <span className="text-slate-600 text-sm sm:text-base">Page {currentPage} of {totalPages}</span>
                    </div>
                  )}
                </div>
                <p className="text-slate-600 text-sm sm:text-base">
                  Showing {startIndex + 1}-{Math.min(endIndex, filteredColleges.length)} of {filteredColleges.length} results
                </p>
              </div>
              {filteredColleges.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold bg-blue-50 border-blue-200 text-blue-700">
                    Top Rank: #{Math.min(...filteredColleges.map(c => c.overallRanking))}
                  </Badge>
                  <Badge variant="outline" className="px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold bg-green-50 border-green-200 text-green-700">
                    Est. {Math.min(...filteredColleges.map(c => c.establishedYear))} - {Math.max(...filteredColleges.map(c => c.establishedYear))}
                  </Badge>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* College Grid */}
      <section className="px-4 sm:px-6 pb-12">
        <div className="container mx-auto">
          {filteredColleges.length === 0 ? (
            <div className="text-center py-12 sm:py-16">
              <div className="max-w-lg mx-auto bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-lg">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="h-8 w-8 sm:h-10 sm:w-10 text-slate-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-700 mb-4">No Universities Found</h3>
                <p className="text-slate-600 mb-6 sm:mb-8 text-sm sm:text-base">
                  Try adjusting your filters or search terms to find more universities.
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
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-2xl font-semibold shadow-lg text-sm sm:text-base"
                >
                  Reset All Filters
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
                {currentCollegesPage.map((college, index) => (
                  <CollegeCard key={college.id} college={college} index={index} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious 
                          onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                          className={currentPage <= 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                        />
                      </PaginationItem>
                      
                      {[...Array(totalPages)].map((_, i) => {
                        const page = i + 1;
                        const isNearCurrent = Math.abs(page - currentPage) <= 2;
                        const isFirst = page === 1;
                        const isLast = page === totalPages;
                        
                        if (isNearCurrent || isFirst || isLast) {
                          return (
                            <PaginationItem key={page}>
                              <PaginationLink
                                onClick={() => handlePageChange(page)}
                                isActive={currentPage === page}
                                className="cursor-pointer"
                              >
                                {page}
                              </PaginationLink>
                            </PaginationItem>
                          );
                        } else if (page === currentPage - 3 || page === currentPage + 3) {
                          return (
                            <PaginationItem key={page}>
                              <PaginationEllipsis />
                            </PaginationItem>
                          );
                        }
                        return null;
                      })}
                      
                      <PaginationItem>
                        <PaginationNext 
                          onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                          className={currentPage >= totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-white/40 to-blue-50/40 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-3xl sm:text-4xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">
              Why Choose EduNavigator?
            </h3>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto px-4">
              Advanced tools and comprehensive data for smart university selection
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="text-center p-6 sm:p-8 hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 rounded-3xl group hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Star className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold text-slate-800">Smart Filtering</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm sm:text-base">Advanced filters to find universities that match your exact preferences and requirements</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 sm:p-8 hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 rounded-3xl group hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold text-slate-800">Comprehensive Database</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm sm:text-base">Extensive collection of universities with detailed course information and transparent fees</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 sm:p-8 hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 rounded-3xl group hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold text-slate-800">Course-Specific Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm sm:text-base">Detailed program rankings and strengths to help you make informed academic decisions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
