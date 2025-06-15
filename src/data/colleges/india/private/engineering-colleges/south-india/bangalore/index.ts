
import { College } from '../../../../../../../types/collegeTypes';
import { bangalorePrivateEngineering } from './bangalore-engineering';
import { mysorePrivateEngineering } from './mysore-engineering';

export { bangalorePrivateEngineering, mysorePrivateEngineering };

export const karnatakaPrivateEngineering: College[] = [
  ...bangalorePrivateEngineering,
  ...mysorePrivateEngineering
];
