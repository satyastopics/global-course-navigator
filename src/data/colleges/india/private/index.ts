
import { College } from '../../../../types/collegeTypes';
import { privateEngineeringColleges } from './engineering-colleges';
import { privateMedicalColleges } from './medical-colleges';
import { privateBusinessSchools } from './business-schools';
import { privateLiberalArtsColleges } from './liberal-arts-colleges';
import { privateDesignColleges } from './design-colleges';
import { privateLawColleges } from './law-colleges';

// Export individual private college categories
export { 
  privateEngineeringColleges,
  privateMedicalColleges,
  privateBusinessSchools,
  privateLiberalArtsColleges,
  privateDesignColleges,
  privateLawColleges
};

// Combined private colleges
export const privateColleges: College[] = [
  ...privateEngineeringColleges,
  ...privateMedicalColleges,
  ...privateBusinessSchools,
  ...privateLiberalArtsColleges,
  ...privateDesignColleges,
  ...privateLawColleges
];

// Private colleges organized by type for easy filtering
export const privateCollegesByType = {
  'engineering': privateEngineeringColleges,
  'medical': privateMedicalColleges,
  'business': privateBusinessSchools,
  'liberal-arts': privateLiberalArtsColleges,
  'design': privateDesignColleges,
  'law': privateLawColleges
};
