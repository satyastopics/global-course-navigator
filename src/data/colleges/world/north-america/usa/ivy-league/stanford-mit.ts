
import { College } from '../../../../../../types/collegeTypes';
import { stanfordUniversity } from './west-coast/stanford';
import { mitUniversity } from './northeast-tech/mit';

export { stanfordUniversity, mitUniversity };

export const stanfordMitGroup: College[] = [
  ...stanfordUniversity,
  ...mitUniversity
];
