
import { College } from '../../../../types/collegeTypes';
import { tokyoUniversities } from './japan/tokyo';
import { osakaUniversities } from './japan/osaka';

export { tokyoUniversities, osakaUniversities };

export const japaneseColleges: College[] = [
  ...tokyoUniversities,
  ...osakaUniversities
];
