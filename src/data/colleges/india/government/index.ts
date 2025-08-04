
import { College } from '../../../../types/collegeTypes';
import { iitColleges } from './iits';
import { iimColleges } from './iims';
import { nitColleges } from './nits';
import { centralUniversities } from './central-universities';
import { stateUniversities } from './state-universities';
import { aiimsColleges } from './aiims';
import { nluColleges } from './nlus';
import { iiscBangalore } from './iisc';
import { iiitColleges } from './iiits';

export { 
  iitColleges, 
  iimColleges, 
  nitColleges, 
  centralUniversities, 
  stateUniversities,
  aiimsColleges,
  nluColleges,
  iiscBangalore,
  iiitColleges
};

export const governmentColleges: College[] = [
  ...iitColleges,
  ...iimColleges,
  ...nitColleges,
  ...centralUniversities,
  ...stateUniversities,
  ...aiimsColleges,
  ...nluColleges,
  ...iiscBangalore,
  ...iiitColleges
];
