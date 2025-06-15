
import { College } from '../../../../types/collegeTypes';
import { northIndiaPrivateLiberalArts } from './liberal-arts-colleges/north-india';
import { southIndiaPrivateLiberalArts } from './liberal-arts-colleges/south-india';
import { westIndiaPrivateLiberalArts } from './liberal-arts-colleges/west-india';

export { 
  northIndiaPrivateLiberalArts,
  southIndiaPrivateLiberalArts,
  westIndiaPrivateLiberalArts
};

export const privateLiberalArtsColleges: College[] = [
  ...northIndiaPrivateLiberalArts,
  ...southIndiaPrivateLiberalArts,
  ...westIndiaPrivateLiberalArts
];
