
import { X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';

interface FilterPanelProps {
  filters: {
    courseType: string;
    rankingRange: string;
    location: string;
    fees: string;
    collegeType: string[];
    establishedYear: number[];
    minRanking: number;
    maxRanking: number;
    courseStrength: string;
  };
  setFilters: (filters: any) => void;
  activeTab: string;
}

const FilterPanel = ({ filters, setFilters, activeTab }: FilterPanelProps) => {
  const clearFilters = () => {
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
  };

  const handleCollegeTypeChange = (type: string, checked: boolean) => {
    const updatedTypes = checked
      ? [...filters.collegeType, type]
      : filters.collegeType.filter(t => t !== type);
    setFilters({ ...filters, collegeType: updatedTypes });
  };

  const handleRankingRangeChange = (values: number[]) => {
    setFilters({ ...filters, minRanking: values[0], maxRanking: values[1] });
  };

  const handleEstablishedYearChange = (values: number[]) => {
    setFilters({ ...filters, establishedYear: values });
  };

  const indianCourseTypes = [
    'Engineering', 'Medical', 'Management', 'Law', 'Arts & Humanities', 
    'Science', 'Commerce', 'Architecture', 'Pharmacy', 'Agriculture',
    'Computer Science', 'Design', 'Mass Communication', 'Hotel Management'
  ];

  const worldCourseTypes = [
    'Engineering', 'Computer Science', 'Business', 'Medicine', 'Law',
    'Liberal Arts', 'Sciences', 'Architecture', 'Design', 'Psychology',
    'Economics', 'International Relations', 'Environmental Studies'
  ];

  const courseTypes = activeTab === 'indian' ? indianCourseTypes : worldCourseTypes;

  return (
    <Card className="bg-white/80 backdrop-blur-sm border border-white/20">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Advanced Filters</h3>
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            <X className="h-4 w-4 mr-1" />
            Clear All
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Course Type */}
            <div>
              <Label className="text-sm font-medium mb-3 block">Course Type</Label>
              <Select value={filters.courseType} onValueChange={(value) => 
                setFilters({...filters, courseType: value})
              }>
                <SelectTrigger>
                  <SelectValue placeholder="Select course" />
                </SelectTrigger>
                <SelectContent>
                  {courseTypes.map(course => (
                    <SelectItem key={course} value={course.toLowerCase()}>
                      {course}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Location */}
            <div>
              <Label className="text-sm font-medium mb-3 block">Location</Label>
              <Input
                placeholder={activeTab === 'indian' ? 'Enter city or state' : 'Enter country or city'}
                value={filters.location}
                onChange={(e) => setFilters({...filters, location: e.target.value})}
              />
            </div>

            {/* College Type */}
            <div>
              <Label className="text-sm font-medium mb-3 block">College Type</Label>
              <div className="space-y-2">
                {(activeTab === 'indian' 
                  ? ['Government', 'Private', 'Deemed'] 
                  : ['Public', 'Private', 'Ivy League', 'Liberal Arts']
                ).map(type => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox
                      id={type}
                      checked={filters.collegeType.includes(type)}
                      onCheckedChange={(checked) => handleCollegeTypeChange(type, checked as boolean)}
                    />
                    <Label htmlFor={type} className="text-sm">{type}</Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Strength */}
            <div>
              <Label className="text-sm font-medium mb-3 block">Minimum Course Strength</Label>
              <Select value={filters.courseStrength} onValueChange={(value) => 
                setFilters({...filters, courseStrength: value})
              }>
                <SelectTrigger>
                  <SelectValue placeholder="Any strength" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="excellent">Excellent</SelectItem>
                  <SelectItem value="very-good">Very Good</SelectItem>
                  <SelectItem value="good">Good</SelectItem>
                  <SelectItem value="average">Average</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Fee Range */}
            <div>
              <Label className="text-sm font-medium mb-3 block">Fee Range</Label>
              <Select value={filters.fees} onValueChange={(value) => 
                setFilters({...filters, fees: value})
              }>
                <SelectTrigger>
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent>
                  {activeTab === 'indian' ? (
                    <>
                      <SelectItem value="very-low">Under ₹2L</SelectItem>
                      <SelectItem value="low">₹2-5L</SelectItem>
                      <SelectItem value="medium">₹5-15L</SelectItem>
                      <SelectItem value="high">₹15-25L</SelectItem>
                      <SelectItem value="very-high">Above ₹25L</SelectItem>
                    </>
                  ) : (
                    <>
                      <SelectItem value="low">Under $30K</SelectItem>
                      <SelectItem value="medium">$30-60K</SelectItem>
                      <SelectItem value="high">$60-80K</SelectItem>
                      <SelectItem value="very-high">Above $80K</SelectItem>
                    </>
                  )}
                </SelectContent>
              </Select>
            </div>

            {/* Ranking Range */}
            <div>
              <Label className="text-sm font-medium mb-3 block">
                Overall Ranking Range: {filters.minRanking} - {filters.maxRanking}
              </Label>
              <Slider
                value={[filters.minRanking, filters.maxRanking]}
                onValueChange={handleRankingRangeChange}
                min={1}
                max={500}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Rank 1</span>
                <span>Rank 500+</span>
              </div>
            </div>

            {/* Established Year */}
            <div>
              <Label className="text-sm font-medium mb-3 block">
                Established Year: {filters.establishedYear[0]} - {filters.establishedYear[1]}
              </Label>
              <Slider
                value={filters.establishedYear}
                onValueChange={handleEstablishedYearChange}
                min={1800}
                max={2024}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1800</span>
                <span>2024</span>
              </div>
            </div>

            {/* Quick Filters */}
            <div>
              <Label className="text-sm font-medium mb-3 block">Quick Filters</Label>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setFilters({...filters, minRanking: 1, maxRanking: 10})}
                >
                  Top 10
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setFilters({...filters, minRanking: 1, maxRanking: 50})}
                >
                  Top 50
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setFilters({...filters, courseStrength: 'excellent'})}
                >
                  Excellence Only
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Active Filters Display */}
        <div className="mt-6 pt-4 border-t">
          <div className="flex flex-wrap gap-2">
            {filters.courseType && (
              <span className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs">
                {filters.courseType}
              </span>
            )}
            {filters.location && (
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                📍 {filters.location}
              </span>
            )}
            {filters.collegeType.length > 0 && (
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                {filters.collegeType.join(', ')}
              </span>
            )}
            {filters.courseStrength && (
              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                {filters.courseStrength}+ strength
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FilterPanel;
