
import { College } from '../../../../../../types/collegeTypes';
import { harvardPrincetonGroup } from './harvard-princeton';
import { stanfordMitGroup } from './stanford-mit';
import { yaleColumbiaGroup } from './yale-columbia';

export { harvardPrincetonGroup, stanfordMitGroup, yaleColumbiaGroup };

export const ivyLeagueColleges: College[] = [
  ...harvardPrincetonGroup,
  ...stanfordMitGroup,
  ...yaleColumbiaGroup
];
