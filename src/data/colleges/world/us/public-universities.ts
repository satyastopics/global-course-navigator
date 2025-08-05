
import { College } from '../../../../types/collegeTypes';
import { californiaPublicUniversities } from '../north-america/usa/public-universities/california';
import { texasPublicUniversities } from '../north-america/usa/public-universities/texas';
import { newYorkPublicUniversities } from '../north-america/usa/public-universities/new-york';
import { michiganPublicUniversities } from '../north-america/usa/public-universities/michigan';
import { virginiaPublicUniversities } from '../north-america/usa/public-universities/virginia';

export const usPublicUniversities: College[] = [
  ...californiaPublicUniversities,
  ...texasPublicUniversities,
  ...newYorkPublicUniversities,
  ...michiganPublicUniversities,
  ...virginiaPublicUniversities
];
