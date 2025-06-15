
import { College } from '../../../../types/collegeTypes';
import { ivyLeagueColleges } from './ivy-league';
import { usPublicUniversities } from '../../../us/public-universities';
import { usPrivateUniversities } from '../../../us/private-universities';
import { usLiberalArtsColleges } from '../../../us/liberal-arts';

export { 
  ivyLeagueColleges,
  usPublicUniversities,
  usPrivateUniversities,
  usLiberalArtsColleges
};

export const allUsColleges: College[] = [
  ...ivyLeagueColleges,
  ...usPublicUniversities,
  ...usPrivateUniversities,
  ...usLiberalArtsColleges
];

export const usCollegesByType = {
  'ivy-league': ivyLeagueColleges,
  'public': usPublicUniversities,
  'private': usPrivateUniversities,
  'liberal-arts': usLiberalArtsColleges,
  'all': allUsColleges
};
