
import { College } from '../../../../../../../types/collegeTypes';
import { bangalorePrivateEngineering } from '../bangalore/bangalore-engineering';
import { mysorePrivateEngineering } from './mysore-engineering';
import { manipalPrivateEngineering } from '../bangalore/manipal-engineering';
import { bellaryPrivateEngineering } from './bellary-engineering';

export { bangalorePrivateEngineering, mysorePrivateEngineering, manipalPrivateEngineering, bellaryPrivateEngineering };

export const karnatakaPrivateEngineering: College[] = [
  ...bangalorePrivateEngineering,
  ...mysorePrivateEngineering,
  ...manipalPrivateEngineering,
  ...bellaryPrivateEngineering
];
