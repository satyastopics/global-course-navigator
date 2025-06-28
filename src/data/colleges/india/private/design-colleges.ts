
import { College } from '../../../../types/collegeTypes';
import { northIndiaPrivateDesign } from './design-colleges/north-india';
import { westIndiaPrivateDesign } from './design-colleges/west-india';
import { southIndiaPrivateDesign } from './design-colleges/south-india';

export { 
  northIndiaPrivateDesign,
  westIndiaPrivateDesign,
  southIndiaPrivateDesign
};

export const privateDesignColleges: College[] = [
  ...northIndiaPrivateDesign,
  ...westIndiaPrivateDesign,
  ...southIndiaPrivateDesign
];
