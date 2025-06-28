
import { College } from '../../../../../types/collegeTypes';
import { delhiMedical } from './north-india/delhi';
import { chandigarhMedical } from './north-india/chandigarh';

export const northIndiaPrivateMedical: College[] = [
  ...delhiMedical,
  ...chandigarhMedical
];
