
import { College } from '../../../../types/collegeTypes';
import { northIndiaPrivateBusinessSchools } from './business-schools/north-india';
import { southIndiaPrivateBusinessSchools } from './business-schools/south-india';
import { westIndiaPrivateBusinessSchools } from './business-schools/west-india';
import { eastIndiaPrivateBusinessSchools } from './business-schools/east-india';

export { 
  northIndiaPrivateBusinessSchools,
  southIndiaPrivateBusinessSchools,
  westIndiaPrivateBusinessSchools,
  eastIndiaPrivateBusinessSchools
};

export const privateBusinessSchools: College[] = [
  ...northIndiaPrivateBusinessSchools,
  ...southIndiaPrivateBusinessSchools,
  ...westIndiaPrivateBusinessSchools,
  ...eastIndiaPrivateBusinessSchools
];
