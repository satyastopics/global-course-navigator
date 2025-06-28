
import { College } from '../../../../../../../types/collegeTypes';
import { chennaiPrivateEngineering } from './chennai-engineering';
import { coimbatorePrivateEngineering } from './coimbatore-engineering';

export { chennaiPrivateEngineering, coimbatorePrivateEngineering };

export const tamilNaduEngineering: College[] = [
  ...chennaiPrivateEngineering,
  ...coimbatorePrivateEngineering
];
