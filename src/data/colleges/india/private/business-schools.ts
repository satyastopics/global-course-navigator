
import { College } from '../../../../types/collegeTypes';
import { northIndiaPrivateBusinessSchools } from './business-schools/north-india';
import { southIndiaPrivateBusinessSchools } from './business-schools/south-india';

export { 
  northIndiaPrivateBusinessSchools,
  southIndiaPrivateBusinessSchools
};

export const privateBusinessSchools: College[] = [
  ...northIndiaPrivateBusinessSchools,
  ...southIndiaPrivateBusinessSchools
];
