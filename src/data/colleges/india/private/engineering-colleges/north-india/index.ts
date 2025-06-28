
import { College } from '../../../../../../types/collegeTypes';
import { delhiNCREngineering } from './delhi';
import { punjabEngineering } from './punjab';
import { uttarPradeshEngineering } from './uttar-pradesh';
import { haryanaEngineering } from './haryana';
import { rajasthanEngineering } from './rajasthan';

export { 
  delhiNCREngineering, 
  punjabEngineering, 
  uttarPradeshEngineering,
  haryanaEngineering,
  rajasthanEngineering
};

export const northIndiaPrivateEngineering: College[] = [
  ...delhiNCREngineering,
  ...punjabEngineering,
  ...uttarPradeshEngineering,
  ...haryanaEngineering,
  ...rajasthanEngineering
];
