import { College } from '../../../../types/collegeTypes';
import { northIndiaTechnologyColleges } from './technology-colleges/north-india';
import { southIndiaTechnologyColleges } from './technology-colleges/south-india';

export { 
  northIndiaTechnologyColleges,
  southIndiaTechnologyColleges
};

export const privateTechnologyColleges: College[] = [
  ...northIndiaTechnologyColleges,
  ...southIndiaTechnologyColleges
];