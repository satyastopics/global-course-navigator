
import { College } from '../../../../types/collegeTypes';
import { eastCoastPrivate } from './private-universities/east-coast';
import { westCoastPrivate } from './private-universities/west-coast';

export { eastCoastPrivate, westCoastPrivate };

export const usPrivateUniversities: College[] = [
  ...eastCoastPrivate,
  ...westCoastPrivate
];
