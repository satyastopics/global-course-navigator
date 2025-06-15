
import { College } from '../../../../types/collegeTypes';
import { asianColleges } from '../../asian-colleges';
import { chineseColleges } from './china';
import { japaneseColleges } from './japan';
import { singaporeanColleges } from './singapore';
import { southKoreanColleges } from './south-korea';

// Export individual Asian college categories
export { 
  chineseColleges,
  japaneseColleges,
  singaporeanColleges,
  southKoreanColleges
};

// For now, use the existing asianColleges data while we transition
export const allAsianColleges: College[] = [
  ...asianColleges,
  ...chineseColleges,
  ...japaneseColleges,
  ...singaporeanColleges,
  ...southKoreanColleges
];

// Asian colleges organized by country for easy filtering
export const asianCollegesByCountry = {
  'china': chineseColleges,
  'japan': japaneseColleges,
  'singapore': singaporeanColleges,
  'south-korea': southKoreanColleges,
  'all': asianColleges // Keep existing data accessible
};
