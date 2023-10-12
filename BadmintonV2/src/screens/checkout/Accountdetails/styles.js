import {StyleSheet} from 'react-native';
import {COLORS, SIZES, FONTS} from '@app/constants/Theme';
// import { Colors } from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // jcustifyContent: 'space-between',
    alignItems: 'center',
    // paddingVertical: SIZES.baseX5,
  },
  reviewDetailWrap: {
    flexDirection: 'row',
    width: SIZES.width,
    marginVertical: SIZES.base,
  },
  reviewDetailHead: {
    ...FONTS.medium,
    fontSize: 13,
    color: COLORS.black6,
    lineHeight: 15,
    width:200,
    marginLeft:8
    
  },
  reviewDetailValue: {
    ...FONTS.medium,
    fontSize: 13,
    color: COLORS.black6,
    lineHeight: 15,
    alignSelf:'flex-end',

    
  },
  renderImageWrap: {
    flex: 0.5,
  },
  subcontainerstyle: {
    alignSelf: 'center',
    backgroundColor: '#F5F5F5',
    height:280,
    width: 342,
    marginTop:35,
    borderRadius: 10,
    shadowColor: '#000',
    

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  insideheaderstyle: {
    backgroundColor: '#E4E4E4',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height:45,
    justifyContent:'center'
  },
  infotextstyle: {
    fontSize: 16,
    fontWeight: '600',
    color:COLORS.black6,
  },

 
});
