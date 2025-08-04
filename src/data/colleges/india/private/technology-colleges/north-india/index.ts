import { College } from '../../../../../../types/collegeTypes';
import { delhiTechnologyColleges } from './delhi-tech';
import { gurgaonTechnologyColleges } from './gurgaon-tech';
import { bitsPilaniColleges } from './bits-pilani';

export { delhiTechnologyColleges, gurgaonTechnologyColleges, bitsPilaniColleges };

export const northIndiaTechnologyColleges: College[] = [
  ...delhiTechnologyColleges,
  ...gurgaonTechnologyColleges,
  ...bitsPilaniColleges
];