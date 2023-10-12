import { StyleSheet } from "react-native";
import {COLORS, FONTS, SIZES} from '@app/constants/Theme';

export const styles = StyleSheet.create({
    addAddressListWrap: {
        paddingHorizontal: SIZES.baseX4,
        paddingTop: SIZES.baseX3 * 2,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        backgroundColor: COLORS.white,
        flex: 1,
      },
      searchbutt: {
        position: 'absolute',
        right: 10,
      },
      addAddressListResult: {
        ...FONTS.regular,
        fontSize: 16,
        color: COLORS.blue7,
        marginBottom: SIZES.baseX2,
      },
      addAddressListLabel: {
        ...FONTS.medium,
        fontSize: 13,
        color: COLORS.blue7,
      },
      subheader: {
        ...FONTS.regular,
        marginVertical: 6,
      },
      addAddressListInner: {
        // paddingVertical: SIZES.baseX4,
        // marginHorizontal: SIZES.baseX4,
        // flexDirection:'row',
        // justifyContent:'space-between',
        // backgroundColor:'green',
        // width:'100%'
    
      },
      tinyLogo: {
        width: 40,
        height: 40,
        resizeMode: 'cover',
      },
      header: {
        fontSize: 12,
        backgroundColor: '#fff',
        color: '#545F7A',
        ...FONTS.medium,
      },
})
