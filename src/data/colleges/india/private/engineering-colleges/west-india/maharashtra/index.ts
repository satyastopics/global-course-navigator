
import { College } from '../../../../../../../types/collegeTypes';
import { mumbaiPrivateEngineering } from './mumbai-engineering';
import { punePrivateEngineering } from './pune-engineering';
import { nagpurPrivateEngineering } from './nagpur-engineering';
import { aurangabadPrivateEngineering } from './aurangabad-engineering';
import { nashikPrivateEngineering } from './nashik-engineering';

export { mumbaiPrivateEngineering, punePrivateEngineering, nagpurPrivateEngineering, aurangabadPrivateEngineering, nashikPrivateEngineering };

export const maharashtraEngineering: College[] = [
  ...mumbaiPrivateEngineering,
  ...punePrivateEngineering,
  ...nagpurPrivateEngineering,
  ...aurangabadPrivateEngineering,
  ...nashikPrivateEngineering
];
