
import { College } from '../../../../../../types/collegeTypes';
import { oxfordColleges } from './oxford';
import { cambridgeColleges } from './cambridge';

export { oxfordColleges, cambridgeColleges };

export const oxbridgeColleges: College[] = [
  ...oxfordColleges,
  ...cambridgeColleges
];
