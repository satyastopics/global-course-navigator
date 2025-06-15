
import { College } from '../../../../../types/collegeTypes';
import { delhiBusinessSchools } from './delhi';
import { punjabBusinessSchools } from './punjab';

export { delhiBusinessSchools, punjabBusinessSchools };

export const northIndiaPrivateBusinessSchools: College[] = [
  ...delhiBusinessSchools,
  ...punjabBusinessSchools
];
