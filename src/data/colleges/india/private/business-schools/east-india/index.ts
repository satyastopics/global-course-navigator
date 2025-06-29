
import { College } from '../../../../../../types/collegeTypes';
import { kolkataBusinessSchools } from './kolkata';
import { westBengalBusinessSchools } from './west-bengal';

export { kolkataBusinessSchools, westBengalBusinessSchools };

export const eastIndiaPrivateBusinessSchools: College[] = [
  ...kolkataBusinessSchools,
  ...westBengalBusinessSchools
];
