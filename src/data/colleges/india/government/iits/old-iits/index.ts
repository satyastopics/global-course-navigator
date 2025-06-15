
import { College } from '../../../../../../types/collegeTypes';
import { iitDelhi } from './delhi';
import { iitBombay } from './bombay';
import { iitMadras } from './madras';

export { iitDelhi, iitBombay, iitMadras };

export const oldIITs: College[] = [
  ...iitDelhi,
  ...iitBombay,
  ...iitMadras
];
