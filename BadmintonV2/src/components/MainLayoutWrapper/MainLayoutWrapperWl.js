// import {
//   StyleSheet,
//   Text,
//   View,
//   StatusBar,
//   Image,
//   Pressable,
// } from 'react-native';
// import React from 'react';
// import {COLORS, SIZES, FONTS} from '@app/constants/Theme';
// import BackArrow from "@app/assets/icons/arrow_back-white.svg"
// import {useNavigation} from '@react-navigation/native';
// import images from '@app/constants/images';



// const MainLayoutWrapperWi = ({
//   containbg,
//   backArrow = true,
//   plusBut = false,
//   title,
//   onPress,
//   ...props
// }) => {
//   const navigation = useNavigation();

//   return (
//     <View style={[styles.container, containbg]}>
//       <View style={{...styles.headerWrap, ...props.containerStyle}}>
        
//         <Text style={styles.titleheader}>{title}</Text>
//         {backArrow && (
//           <Pressable
//             // onPress={() => console.log('back pressed')}
//             onPress={() => navigation.goBack()}
//             style={styles.arrowContainer}
//             >
//              <BackArrow/>
//           </Pressable>
//         )}
//       </View>
//       {props.children}
//     </View>
//   );
// };

// export default MainLayoutWrapperWi;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: COLORS.white,
//   },
//   headerWrap: {
//     backgroundColor: COLORS.primary,
//     height: SIZES.height /10,
//     marginBottom: 10,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 20,
//   },
//   imageStyle: {
//     width: 160,
//     height: 60,
//     resizeMode: 'contain',
//   },
//   arrowContainer: {
//     position: 'absolute',
//     top: 20,
//     left: 20,
//   },
//   plusContainer: {
//     position: 'absolute',
//     top: 20,
//     right: 20,
//   },
//   infoIconWrap: {
//     position: 'absolute',
//     top: 20,
//     right: 20,
//   },
//   titleheader: {
//     color: COLORS.white,
//     ...FONTS.medium,
//     fontSize: 18,
//     marginTop: 5,
//     marginLeft:80,
    
//   },
//   indicators: {
//     height: 30,
//     width: 22,
//     tintColor: COLORS.white,
//     resizeMode: 'contain',
//   },
// });
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES, FONTS} from '@app/constants/Theme';
import images from '@app/constants/images';
import {useNavigation} from '@react-navigation/native';
import Menu from '@app/assets/icons/menu.svg';
import {DrawerActions} from '@react-navigation/native';
import navigations from '@app/navigations/navigations';

const MainLayoutWrapperIn = ({
  containbg,
  backArrow = true,

  rightIcon = false,
  title,
  onPress,
  ...props
}) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, containbg]}>
      <View style={{...styles.headerWrap, ...props.containerStyle}}>
        {backArrow && (
          <Pressable
            onPress={() => navigation.navigate(navigations.home)}
            style={styles.arrowContainer}>
             <Menu height={20} width={20} />
          </Pressable>
        )}
        <Text style={styles.titleheader}>{title}</Text>
        {rightIcon ? (
         rightIcon
        ) : <View/>}
      </View>
      {props.children}
    </View>
  );
};

export default MainLayoutWrapperIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    height:SIZES.height
  },
  headerWrap: {
    backgroundColor: COLORS.primary,
    height: SIZES.height / 4,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    alignItems:'center',
    // backgroundColor:'red'
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20
  },
  imageStyle: {
    width: 160,
    height: 60,
    resizeMode: 'contain',
  },
  infoIconWrap: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  titleheader: {
    color: COLORS.white,
    ...FONTS.medium,
    fontSize: 18,
    marginTop: 5,
    // marginLeft:138,
    
    
  },
  indicators: {
    height: 30,
    width: 22,
    tintColor: COLORS.white,
    resizeMode: 'contain',
  },
});