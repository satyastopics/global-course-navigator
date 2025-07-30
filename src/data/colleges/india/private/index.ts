
import { College } from '../../../../types/collegeTypes';
import { privateEngineeringColleges } from './engineering-colleges';
import { privateMedicalColleges } from './medical-colleges';
import { privateBusinessSchools } from './business-schools';
import { privateLiberalArtsColleges } from './liberal-arts-colleges';
import { privateDesignColleges } from './design-colleges';
import { privateLawColleges } from './law-colleges';
import { privateTechnologyColleges } from './technology-colleges';
import { privateDentalColleges } from './dental-colleges';
import { privatePharmacyColleges } from './pharmacy-colleges';
import { privateArchitectureColleges } from './architecture-colleges';

// Export individual private college categories
export { 
  privateEngineeringColleges,
  privateMedicalColleges,
  privateBusinessSchools,
  privateLiberalArtsColleges,
  privateDesignColleges,
  privateLawColleges,
  privateTechnologyColleges,
  privateDentalColleges,
  privatePharmacyColleges,
  privateArchitectureColleges
};

// Combined private colleges
export const privateColleges: College[] = [
  ...privateEngineeringColleges,
  ...privateMedicalColleges,
  ...privateBusinessSchools,
  ...privateLiberalArtsColleges,
  ...privateDesignColleges,
  ...privateLawColleges,
  ...privateTechnologyColleges,
  ...privateDentalColleges,
  ...privatePharmacyColleges,
  ...privateArchitectureColleges
];

// Private colleges organized by type for easy filtering
export const privateCollegesByType = {
  'engineering': privateEngineeringColleges,
  'medical': privateMedicalColleges,
  'business': privateBusinessSchools,
  'liberal-arts': privateLiberalArtsColleges,
  'design': privateDesignColleges,
  'law': privateLawColleges,
  'technology': privateTechnologyColleges,
  'dental': privateDentalColleges,
  'pharmacy': privatePharmacyColleges,
  'architecture': privateArchitectureColleges
};
