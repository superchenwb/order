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
const serviceTypeList: IType[] = [
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

export interface IArea {
  id: number;
  title: string;
}

const areaList: IArea[] = [
  {
    id: 0,
    title: '新洲区',
  },
  {
    id: 1,
    title: '黄陂区',
  },
  {
    id: 2,
    title: '江夏区',
  },
  {
    id: 3,
    title: '蔡甸区',
  },
  {
    id: 4,
    title: '汉南区',
  },
  {
    id: 5,
    title: '东西湖区',
  },
  {
    id: 6,
    title: '洪山区',
  },
  {
    id: 7,
    title: '青山区',
  },
  {
    id: 8,
    title: '武昌区',
  },
  {
    id: 9,
    title: '汉阳区',
  },
  {
    id: 10,
    title: '硚口区',
  },
  {
    id: 11,
    title: '江汉区',
  },
  {
    id: 12,
    title: '江岸区',
  },
  {
    id: 13,
    title: '市辖区',
  },
];

export interface IPromise {
  value: number;
  title: string;
}

// 远程费用
const yuanchengFeiyongs: IPromise[] = [
  {
    value: 5,
    title: '5元/公里'
  },
  {
    value: 10,
    title: '10元/公里'
  },
  {
    value: 15,
    title: '15元/公里'
  },
];

// 抬楼费用
const tailouFeiyongs: IPromise[] = [
  {
    value: 3,
    title: '3元/层'
  },
  {
    value: 5,
    title: '5元/层'
  },
  {
    value: 10,
    title: '10元/层'
  },
];

// 低竞争方式
const diJingZhengs: IPromise[] = [
  {
    value: 1,
    title: '接受'
  },
  {
    value: 2,
    title: '不接受'
  },
];

export {
  careerList,
  serviceCategoryList,
  serviceTypeList,
  areaList,
  yuanchengFeiyongs,
  tailouFeiyongs,
  diJingZhengs,
}