
import { X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface FilterPanelProps {
  filters: {
    courseType: string;
    rankingRange: string;
    location: string;
    fees: string;
  };
  setFilters: (filters: any) => void;
}

const FilterPanel = ({ filters, setFilters }: FilterPanelProps) => {
  const clearFilters = () => {
    setFilters({
      courseType: '',
      rankingRange: '',
      location: '',
      fees: ''
    });
  };

  return (
    <Card className="bg-white/80 backdrop-blur-sm border border-white/20">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Filter Colleges</h3>
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            <X className="h-4 w-4 mr-1" />
            Clear All
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <Label htmlFor="courseType" className="text-sm font-medium mb-2 block">
              Course Type
            </Label>
            <Select value={filters.courseType} onValueChange={(value) => 
              setFilters({...filters, courseType: value})
            }>
              <SelectTrigger>
                <SelectValue placeholder="Select course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="engineering">Engineering</SelectItem>
                <SelectItem value="medical">Medical</SelectItem>
                <SelectItem value="management">Management</SelectItem>
                <SelectItem value="law">Law</SelectItem>
                <SelectItem value="arts">Arts & Humanities</SelectItem>
                <SelectItem value="science">Science</SelectItem>
                <SelectItem value="commerce">Commerce</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="ranking" className="text-sm font-medium mb-2 block">
              Ranking Range
            </Label>
            <Select value={filters.rankingRange} onValueChange={(value) => 
              setFilters({...filters, rankingRange: value})
            }>
              <SelectTrigger>
                <SelectValue placeholder="Select range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-10">Top 10</SelectItem>
                <SelectItem value="11-25">11-25</SelectItem>
                <SelectItem value="26-50">26-50</SelectItem>
                <SelectItem value="51-100">51-100</SelectItem>
                <SelectItem value="100+">100+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="location" className="text-sm font-medium mb-2 block">
              Location
            </Label>
            <Input
              id="location"
              placeholder="Enter city or state"
              value={filters.location}
              onChange={(e) => setFilters({...filters, location: e.target.value})}
            />
          </div>

          <div>
            <Label htmlFor="fees" className="text-sm font-medium mb-2 block">
              Fee Range
            </Label>
            <Select value={filters.fees} onValueChange={(value) => 
              setFilters({...filters, fees: value})
            }>
              <SelectTrigger>
                <SelectValue placeholder="Select range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Under ₹5L / $50K</SelectItem>
                <SelectItem value="medium">₹5-15L / $50-100K</SelectItem>
                <SelectItem value="high">Above ₹15L / $100K+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FilterPanel;
