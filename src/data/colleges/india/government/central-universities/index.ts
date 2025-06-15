
import { College } from '../../../../../types/collegeTypes';
import { tier1CentralUniversities } from './tier1-central';
import { tier2CentralUniversities } from './tier2-central';

export { tier1CentralUniversities, tier2CentralUniversities };

export const centralUniversities: College[] = [
  ...tier1CentralUniversities,
  ...tier2CentralUniversities
];
