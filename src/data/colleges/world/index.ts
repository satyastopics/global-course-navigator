
import { College } from '../../../types/collegeTypes';
import { usColleges } from '../us-colleges';
import { ukColleges } from '../uk-colleges';
import { europeanColleges } from '../european-colleges';
import { asianColleges } from '../asian-colleges';
import { otherColleges } from '../other-colleges';

// Export individual collections for easy access
export { usColleges, ukColleges, europeanColleges, asianColleges, otherColleges };

// Organized by region for future expansion
export const northAmericaColleges: College[] = [
  ...usColleges
  // Canada colleges can be added here
];

export const europeColleges: College[] = [
  ...ukColleges,
  ...europeanColleges
];

export const asiaColleges: College[] = [
  ...asianColleges
  // Exclude Indian colleges as they have their own section
];

export const otherRegionColleges: College[] = [
  ...otherColleges
];

// All world colleges (excluding India)
export const worldColleges: College[] = [
  ...northAmericaColleges,
  ...europeColleges,
  ...asiaColleges,
  ...otherRegionColleges
];
