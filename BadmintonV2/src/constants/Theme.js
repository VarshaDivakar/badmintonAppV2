import {Dimensions} from 'react-native';
export const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: '#1F2250',
  secondary: '#F6F6F8',
  white:'#FFFFFF',
  white2:'#F8F8F8',
  orange:'#FF5C02',
  orange1:'#FD8401',
  gray:'#D2C7C7',
  gray2:'#8A8383',
  gray3:'#FAFAFA',
  gray4:'#7A7878',
  gray5:'#8F8F8F',
  black:'#000000',
  black2:'#090101',
  black3:'#200202',
  black4:'#110202',
  black5:'#2E2E2E',
  black6:'#45454D',
  black7:'#060000',
  black8:'#160101',
  black9:'#0A0202',
  black10:'#1A0303',
  black11:'#242424',
  black12:'#0D0101',
  lightgreen:'#DEFCE5',
  lightGreen2:'#95CB39',
  green:'#57E12E',
  black1:'#100202',
  black3:'#090000',
  black4:'#060000',
  black5:'#141414',
  gray1:'#E4E4E4',
  gray2:'#8A8383',
  gray3:'#7E7878',
  gray4:'#707070',
  gray5:'#8A8B97',
  gray6:'#777777',
  gray7:'#8592B2',
  blue:'#1F44D5',
  blue1:'#501DC9',
  blue2:'#080D40',
  blue3:'#18407C',
  blue4:'#545F7A',
  green:'#2BB134'
 
};

export const SIZES = {
  width,
  height,
  base: 8,
  baseX2: 12,
  baseX3: 14,
  baseX4: 16,
  baseX8: 18,
  baseX5: 24,
  radius: 6,
};

export const FONTS = {
  bold: {fontFamily: 'Rubik-Bold', fontSize: SIZES.baseX2, lineHeight: 22},
  semiBold: {
    fontFamily: 'Rubik-SemiBold',
    fontSize: SIZES.baseX4,
    lineHeight: 22,
  },
  extraBold: {
    fontFamily: 'Rubik-ExtraBold',
    fontSize: SIZES.baseX5,
    lineHeight: 22,
  },
  medium: {
    fontFamily: 'Rubik-Medium',
    fontSize: SIZES.baseX3,
    lineHeight: 18,
  },
  regular: {
    fontFamily: 'Rubik-Regular',
    // fontSize: SIZES.baseX3,
    lineHeight: 15,
  },
  light: {
    fontFamily: 'Rubik-Light',
    fontSize: SIZES.baseX3,
    lineHeight: 20,
  },
};

const appTheme = {COLORS, SIZES, FONTS, width, height};

export default appTheme;
