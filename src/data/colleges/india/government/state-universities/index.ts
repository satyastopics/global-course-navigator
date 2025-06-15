
import { College } from '../../../../../types/collegeTypes';
import { northIndiaStateUniversities } from './north-india';
import { southIndiaStateUniversities } from './south-india';
import { westIndiaStateUniversities } from './west-india';
import { eastIndiaStateUniversities } from './east-india';

export { 
  northIndiaStateUniversities, 
  southIndiaStateUniversities, 
  westIndiaStateUniversities, 
  eastIndiaStateUniversities 
};

export const stateUniversities: College[] = [
  ...northIndiaStateUniversities,
  ...southIndiaStateUniversities,
  ...westIndiaStateUniversities,
  ...eastIndiaStateUniversities
];
