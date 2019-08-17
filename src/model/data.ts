import {
  ImageSourcePropType,
} from 'react-native';
import homeRepair from '../assets/home-repair.png';
import digitalRepair from '../assets/digital-repair.png';
import housekeeping from '../assets/housekeeping.png';

export interface ICareer {
  id: number;
  name: string;
  icon: ImageSourcePropType;
}

// 职业
const careerList: ICareer[] = [
  {
    id: 0,
    name: '家居维修',
    icon: homeRepair,
  },
  {
    id: 1,
    name: 'IT数码',
    icon: digitalRepair,
  },
  {
    id: 2,
    name: '家政清洁',
    icon: housekeeping,
  }
];

export {
  careerList,
}