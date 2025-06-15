
export interface Course {
  name: string;
  ranking: number;
  strength: 'Excellent' | 'Very Good' | 'Good' | 'Average';
  fees: string;
  feeType: 'per-year' | 'total';
}

export interface College {
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
