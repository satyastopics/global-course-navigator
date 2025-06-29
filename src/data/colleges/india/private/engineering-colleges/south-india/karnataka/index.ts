
import { College } from '../../../../../../../types/collegeTypes';
import { bangalorePrivateEngineering } from './bangalore-engineering';
import { mysorePrivateEngineering } from './mysore-engineering';
import { manipalPrivateEngineering } from './manipal-engineering';

export { bangalorePrivateEngineering, mysorePrivateEngineering, manipalPrivateEngineering };

export const karnatakaPrivateEngineering: College[] = [
  ...bangalorePrivateEngineering,
  ...mysorePrivateEngineering,
  ...manipalPrivateEngineering
];
