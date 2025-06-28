
import { College } from '../../../../../../../types/collegeTypes';
import { hyderabadPrivateEngineering } from './hyderabad-engineering';
import { visakhapatnamPrivateEngineering } from './visakhapatnam-engineering';

export { hyderabadPrivateEngineering, visakhapatnamPrivateEngineering };

export const andhraEngineering: College[] = [
  ...hyderabadPrivateEngineering,
  ...visakhapatnamPrivateEngineering
];
