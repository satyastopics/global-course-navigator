
import { College } from '../../../../types/collegeTypes';
import { newEnglandLiberalArts } from './liberal-arts/new-england';
import { midwestLiberalArts } from './liberal-arts/midwest';

export { newEnglandLiberalArts, midwestLiberalArts };

export const usLiberalArtsColleges: College[] = [
  ...newEnglandLiberalArts,
  ...midwestLiberalArts
];
