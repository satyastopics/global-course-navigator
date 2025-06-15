
import { College } from '../../../../types/collegeTypes';
import { northIndiaPrivateDesign } from './design-colleges/north-india';
import { westIndiaPrivateDesign } from './design-colleges/west-india';

export { 
  northIndiaPrivateDesign,
  westIndiaPrivateDesign
};

export const privateDesignColleges: College[] = [
  ...northIndiaPrivateDesign,
  ...westIndiaPrivateDesign
];
