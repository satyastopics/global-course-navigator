
import { College } from '../../../../types/collegeTypes';
import { northIndiaPrivateTechnology } from './technology-colleges/north-india';
import { southIndiaPrivateTechnology } from './technology-colleges/south-india';

export { 
  northIndiaPrivateTechnology,
  southIndiaPrivateTechnology
};

export const privateTechnologyColleges: College[] = [
  ...northIndiaPrivateTechnology,
  ...southIndiaPrivateTechnology
];
