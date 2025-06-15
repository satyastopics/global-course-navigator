
import { College } from '../../../../types/collegeTypes';
import { singaporeNationalUniversities } from './singapore/national-universities';
import { singaporeTechnologyUniversities } from './singapore/technology-universities';

export { singaporeNationalUniversities, singaporeTechnologyUniversities };

export const singaporeanColleges: College[] = [
  ...singaporeNationalUniversities,
  ...singaporeTechnologyUniversities
];
