
import { College } from '../../../../../../types/collegeTypes';
import { karnatakaPrivateEngineering } from './bangalore';
import { tamilNaduEngineering } from './tamil-nadu';
import { andhraEngineering } from './andhra-pradesh';
import { keralaEngineering } from './kerala';

export { 
  karnatakaPrivateEngineering, 
  tamilNaduEngineering, 
  andhraEngineering,
  keralaEngineering
};

export const southIndiaPrivateEngineering: College[] = [
  ...karnatakaPrivateEngineering,
  ...tamilNaduEngineering,
  ...andhraEngineering,
  ...keralaEngineering
];
