
import { College } from '../../../../types/collegeTypes';
import { northIndiaPrivateLiberalArts } from './liberal-arts-colleges/north-india';
import { southIndiaPrivateLiberalArts } from './liberal-arts-colleges/south-india';

export { 
  northIndiaPrivateLiberalArts,
  southIndiaPrivateLiberalArts
};

export const privateLiberalArtsColleges: College[] = [
  ...northIndiaPrivateLiberalArts,
  ...southIndiaPrivateLiberalArts
];
