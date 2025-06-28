
import { College } from '../../../../../types/collegeTypes';
import { delhiMedical } from './delhi';
import { chandigarhMedical } from './chandigarh';

export const northIndiaPrivateMedical: College[] = [
  ...delhiMedical,
  ...chandigarhMedical
];
