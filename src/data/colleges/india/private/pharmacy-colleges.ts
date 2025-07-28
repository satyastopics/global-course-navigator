import { College } from '../../../../types/collegeTypes';
import { northIndiaPharmacyColleges } from './pharmacy-colleges/north-india';
import { southIndiaPharmacyColleges } from './pharmacy-colleges/south-india';
import { westIndiaPharmacyColleges } from './pharmacy-colleges/west-india';
import { eastIndiaPharmacyColleges } from './pharmacy-colleges/east-india';

export { 
  northIndiaPharmacyColleges,
  southIndiaPharmacyColleges,
  westIndiaPharmacyColleges,
  eastIndiaPharmacyColleges
};

export const privatePharmacyColleges: College[] = [
  ...northIndiaPharmacyColleges,
  ...southIndiaPharmacyColleges,
  ...westIndiaPharmacyColleges,
  ...eastIndiaPharmacyColleges
];