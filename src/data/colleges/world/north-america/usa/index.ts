
import { College } from '../../../../../types/collegeTypes';
import { ivyLeagueColleges } from './ivy-league';
import { usPublicUniversities } from '../../us/public-universities';
import { usPrivateUniversities } from '../../us/private-universities';
import { usLiberalArtsColleges } from '../../us/liberal-arts';
import { topCanadianUniversities } from '../canada/top-canadian-universities';

export { 
  ivyLeagueColleges,
  usPublicUniversities,
  usPrivateUniversities,
  usLiberalArtsColleges,
  topCanadianUniversities
};

export const allUsColleges: College[] = [
  ...ivyLeagueColleges,
  ...usPublicUniversities,
  ...usPrivateUniversities,
  ...usLiberalArtsColleges
];

export const allNorthAmericaColleges: College[] = [
  ...allUsColleges,
  ...topCanadianUniversities
];

export const usCollegesByType = {
  'ivy-league': ivyLeagueColleges,
  'public': usPublicUniversities,
  'private': usPrivateUniversities,
  'liberal-arts': usLiberalArtsColleges,
  'all': allUsColleges
};
