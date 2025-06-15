
import { College } from '../../../../../types/collegeTypes';
import { tier1IIMs } from './tier1-iims';
import { tier2IIMs } from './tier2-iims';

export { tier1IIMs, tier2IIMs };

export const iimColleges: College[] = [
  ...tier1IIMs,
  ...tier2IIMs
];
