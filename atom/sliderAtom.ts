import { atom } from 'recoil';

export const sliderAtom = atom({
  key: 'sliderAtom',
  default: {
    isHovered: false,
    drag: {
      x: 0,
      y: 0,
    },
  },
});
