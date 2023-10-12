import {
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';

export const type = atom({
    key: 'dashboardType', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });