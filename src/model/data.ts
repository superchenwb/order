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

export interface ICategory {
  id: string;
  title: string;
}

// 家居维修职业的品类
const serviceCategoryList: ICategory[] = [
  {
    id: '0',
    title: '家具',
  },
  {
    id: '2',
    title: '灯具',
  },
  {
    id: '3',
    title: '卫浴洁具',
  },
  {
    id: '4',
    title: '墙纸',
  },
  {
    id: '5',
    title: '地板',
  },
  {
    id: '6',
    title: '门窗',
  },
  {
    id: '7',
    title: '家电',
  },
  {
    id: '8',
    title: '浴霸',
  },
  {
    id: '9',
    title: '净水器',
  },
  {
    id: '10',
    title: '晾衣架',
  },
  {
    id: '11',
    title: '窗帘纱窗',
  },
  {
    id: '12',
    title: '集成吊顶',
  },
  {
    id: '13',
    title: '定制类',
  },
  {
    id: '14',
    title: '锁具',
  },
  {
    id: '15',
    title: '地毯',
  },
  {
    id: '16',
    title: '健身器材',
  },
];

export interface IType {
  id: number;
  title: string;
}

// 家居维修职业的服务类型
const typeList: IType[] = [
  {
    id: 10,
    title: '安装',
  },
  {
    id: 11,
    title: '维修',
  },
  {
    id: 12,
    title: '送货',
  },
];

export {
  careerList,
  serviceCategoryList,
  typeList,
}