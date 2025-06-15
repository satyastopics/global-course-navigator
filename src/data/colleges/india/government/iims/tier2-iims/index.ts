
import { College } from '../../../../../../types/collegeTypes';
import { iimLucknow } from './lucknow';
import { iimKozhikode } from './kozhikode';

export { iimLucknow, iimKozhikode };

export const tier2IIMs: College[] = [
  ...iimLucknow,
  ...iimKozhikode
];
