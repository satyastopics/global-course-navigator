
import { useState } from 'react';
import { Search, Filter, Globe, MapPin, Star, Users, BookOpen, Graduation } from 'lucide-react';
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
    fees: ''
  });

  const currentColleges = activeTab === 'indian' ? indianColleges : worldColleges;
  
  const filteredColleges = currentColleges.filter(college => {
    const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         college.courses.some(course => course.name.toLowerCase().includes(searchTerm.toLowerCase()));
    
    if (!matchesSearch) return false;
    
    if (filters.courseType && !college.courses.some(course => 
      course.name.toLowerCase().includes(filters.courseType.toLowerCase()))) return false;
    
    if (filters.location && !college.location.toLowerCase().includes(filters.location.toLowerCase())) return false;
    
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Graduation className="h-8 w-8 text-indigo-600" />
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
            Discover top universities worldwide with course-specific rankings, detailed insights, and data-driven recommendations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search colleges or courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-lg border-2 border-indigo-200 focus:border-indigo-500"
              />
            </div>
            <Button 
              onClick={() => setShowFilters(!showFilters)}
              variant="outline" 
              className="h-12 px-6 border-2 border-indigo-200 hover:border-indigo-500"
            >
              <Filter className="h-5 w-5 mr-2" />
              Filters
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
              Indian Colleges
            </Button>
            <Button
              onClick={() => setActiveTab('world')}
              variant={activeTab === 'world' ? 'default' : 'outline'}
              className="h-12 px-8 text-lg"
            >
              <Globe className="h-5 w-5 mr-2" />
              World Colleges
            </Button>
          </div>
        </div>
      </section>

      {/* Filters Panel */}
      {showFilters && (
        <section className="px-4 mb-8">
          <div className="container mx-auto">
            <FilterPanel filters={filters} setFilters={setFilters} />
          </div>
        </section>
      )}

      {/* College Grid */}
      <section className="px-4 pb-20">
        <div className="container mx-auto">
          <div className="mb-6 flex justify-between items-center">
            <h3 className="text-2xl font-bold text-gray-800">
              {activeTab === 'indian' ? 'Top Indian Colleges' : 'Top World Colleges'} 
              <span className="text-indigo-600 ml-2">({filteredColleges.length})</span>
            </h3>
            <div className="text-sm text-gray-600">
              Showing course-specific rankings and strengths
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredColleges.map((college, index) => (
              <CollegeCard key={college.id} college={college} index={index} />
            ))}
          </div>
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
                <CardTitle>Course-Specific Rankings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Get detailed rankings for specific courses, not just overall college rankings</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <CardTitle>Comprehensive Database</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Includes both government and private universities with detailed information</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <CardTitle>Data-Driven Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Make informed decisions with real rankings and course strength indicators</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
