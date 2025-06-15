
import { College } from '../../../../../../types/collegeTypes';
import { yaleUniversity } from './northeast-liberal/yale';
import { columbiaUniversity } from './northeast-liberal/columbia';

export { yaleUniversity, columbiaUniversity };

export const yaleColumbiaGroup: College[] = [
  ...yaleUniversity,
  ...columbiaUniversity
];
