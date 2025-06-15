
import { College } from '../../../../types/collegeTypes';
import { londonRussellGroup } from './russell-group/london';
import { northEnglandRussellGroup } from './russell-group/north-england';

export { londonRussellGroup, northEnglandRussellGroup };

export const russellGroupColleges: College[] = [
  ...londonRussellGroup,
  ...northEnglandRussellGroup
];
