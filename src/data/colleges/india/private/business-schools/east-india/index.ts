
import { College } from '../../../../../../types/collegeTypes';
import { kolkataBusinessSchools } from './kolkata';
import { westBengalBusinessSchools } from './west-bengal';
import { odishaBusinessSchools } from './odisha';

export { kolkataBusinessSchools, westBengalBusinessSchools, odishaBusinessSchools };

export const eastIndiaPrivateBusinessSchools: College[] = [
  ...kolkataBusinessSchools,
  ...westBengalBusinessSchools,
  ...odishaBusinessSchools
];
