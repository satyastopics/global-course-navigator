
import { College } from '../../../../../types/collegeTypes';
import { delhiMedical } from './north-india/delhi';
import { chandigarhMedical } from './north-india/chandigarh';
import { punjabMedical } from './north-india/punjab';

export const northIndiaPrivateMedical: College[] = [
  ...delhiMedical,
  ...chandigarhMedical,
  ...punjabMedical
];
