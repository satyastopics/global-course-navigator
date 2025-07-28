import { College } from '../../../../types/collegeTypes';
import { northIndiaDentalColleges } from './dental-colleges/north-india';
import { southIndiaDentalColleges } from './dental-colleges/south-india';
import { westIndiaDentalColleges } from './dental-colleges/west-india';
import { eastIndiaDentalColleges } from './dental-colleges/east-india';

export { 
  northIndiaDentalColleges,
  southIndiaDentalColleges,
  westIndiaDentalColleges,
  eastIndiaDentalColleges
};

export const privateDentalColleges: College[] = [
  ...northIndiaDentalColleges,
  ...southIndiaDentalColleges,
  ...westIndiaDentalColleges,
  ...eastIndiaDentalColleges
];