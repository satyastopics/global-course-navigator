
import { College } from '../../../../types/collegeTypes';
import { beijingUniversities } from './china/beijing';
import { topChineseUniversities } from './china/top-chinese-universities';
import { topJapaneseUniversities } from './japan/top-japanese-universities';
import { topKoreanUniversities } from './south-korea/top-korean-universities';
import { topSingaporeUniversities } from './singapore/top-singapore-universities';
import { topHongKongUniversities } from './hong-kong/top-hongkong-universities';
import { asianColleges } from '../../asian-colleges';

export { beijingUniversities, topChineseUniversities, topJapaneseUniversities, topKoreanUniversities, topSingaporeUniversities, topHongKongUniversities };

export const allAsianColleges: College[] = [
  ...beijingUniversities,
  ...topChineseUniversities,
  ...topJapaneseUniversities,
  ...topKoreanUniversities,
  ...topSingaporeUniversities,
  ...topHongKongUniversities,
  ...asianColleges
];

export const asianCollegesByCountry = {
  'china': [...beijingUniversities, ...topChineseUniversities],
  'japan': topJapaneseUniversities,
  'south-korea': topKoreanUniversities,
  'singapore': topSingaporeUniversities,
  'hong-kong': topHongKongUniversities,
  'all': allAsianColleges
};
