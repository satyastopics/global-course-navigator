
import { College } from '../../../../types/collegeTypes';
import { northIndiaPrivateEngineering } from './engineering-colleges/north-india';
import { southIndiaPrivateEngineering } from './engineering-colleges/south-india';
import { westIndiaPrivateEngineering } from './engineering-colleges/west-india';
import { eastIndiaPrivateEngineering } from './engineering-colleges/east-india';

export { 
  northIndiaPrivateEngineering,
  southIndiaPrivateEngineering,
  westIndiaPrivateEngineering,
  eastIndiaPrivateEngineering
};

export const privateEngineeringColleges: College[] = [
  ...northIndiaPrivateEngineering,
  ...southIndiaPrivateEngineering,
  ...westIndiaPrivateEngineering,
  ...eastIndiaPrivateEngineering
];
