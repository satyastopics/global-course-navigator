
import { College } from '../../../../../../types/collegeTypes';
import { oxfordColleges } from './oxford/colleges';
import { cambridgeColleges } from './cambridge/colleges';

export { oxfordColleges, cambridgeColleges };

export const oxbridgeColleges: College[] = [
  ...oxfordColleges,
  ...cambridgeColleges
];
