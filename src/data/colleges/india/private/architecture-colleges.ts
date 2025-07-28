import { College } from '../../../../types/collegeTypes';
import { northIndiaArchitectureColleges } from './architecture-colleges/north-india';
import { southIndiaArchitectureColleges } from './architecture-colleges/south-india';
import { westIndiaArchitectureColleges } from './architecture-colleges/west-india';
import { eastIndiaArchitectureColleges } from './architecture-colleges/east-india';

export { 
  northIndiaArchitectureColleges,
  southIndiaArchitectureColleges,
  westIndiaArchitectureColleges,
  eastIndiaArchitectureColleges
};

export const privateArchitectureColleges: College[] = [
  ...northIndiaArchitectureColleges,
  ...southIndiaArchitectureColleges,
  ...westIndiaArchitectureColleges,
  ...eastIndiaArchitectureColleges
];