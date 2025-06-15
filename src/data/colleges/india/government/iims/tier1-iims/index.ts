
import { College } from '../../../../../../types/collegeTypes';
import { iimAhmedabad } from './ahmedabad';
import { iimBangalore } from './bangalore';

export { iimAhmedabad, iimBangalore };

export const tier1IIMs: College[] = [
  ...iimAhmedabad,
  ...iimBangalore
];
