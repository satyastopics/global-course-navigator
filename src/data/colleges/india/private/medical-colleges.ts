
import { College } from '../../../../types/collegeTypes';
import { northIndiaPrivateMedical } from './medical-colleges/north-india';
import { southIndiaPrivateMedical } from './medical-colleges/south-india';
import { westIndiaPrivateMedical } from './medical-colleges/west-india';
import { eastIndiaPrivateMedical } from './medical-colleges/east-india';
import { centralIndiaPrivateMedical } from './medical-colleges/central-india';

export { 
  northIndiaPrivateMedical,
  southIndiaPrivateMedical,
  westIndiaPrivateMedical,
  eastIndiaPrivateMedical,
  centralIndiaPrivateMedical
};

export const privateMedicalColleges: College[] = [
  ...northIndiaPrivateMedical,
  ...southIndiaPrivateMedical,
  ...westIndiaPrivateMedical,
  ...eastIndiaPrivateMedical,
  ...centralIndiaPrivateMedical
];
