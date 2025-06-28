
import { College } from '../../../../../../../types/collegeTypes';
import { chennaiPrivateEngineering } from './chennai-engineering';
import { coimbatorePrivateEngineering } from './coimbatore-engineering';
import { vellorePrivateEngineering } from './vellore-engineering';

export { chennaiPrivateEngineering, coimbatorePrivateEngineering, vellorePrivateEngineering };

export const tamilNaduEngineering: College[] = [
  ...chennaiPrivateEngineering,
  ...coimbatorePrivateEngineering,
  ...vellorePrivateEngineering
];
