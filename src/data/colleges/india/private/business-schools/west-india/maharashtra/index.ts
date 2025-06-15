
import { College } from '../../../../../../../types/collegeTypes';
import { mumbaiPrivateBusinessSchools } from './mumbai-business';
import { punePrivateBusinessSchools } from './pune-business';

export { mumbaiPrivateBusinessSchools, punePrivateBusinessSchools };

export const maharashtraBusinessSchools: College[] = [
  ...mumbaiPrivateBusinessSchools,
  ...punePrivateBusinessSchools
];
