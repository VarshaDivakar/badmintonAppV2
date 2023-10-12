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
// import images from '@app/constants';
import {useNavigation} from '@react-navigation/native';
import BackArrow from '@app/assets/icons/arrow-back.svg';
const MainLayoutWrapperIn = ({
  containbg,
  backArrow = true,
  title,
  ...props
}) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, containbg]}>
      <View style={{...styles.headerWrap, ...props.containerStyle}}>
        {backArrow && (
          <Pressable
            // onPress={() => console.log('back pressed')}
            onPress={() => navigation.goBack()}
            style={styles.arrowContainer}>
            <BackArrow />
          </Pressable>
        )}
        <Text style={styles.titleheader}>{title}</Text>

        <View style={styles.topBorderStyle} />
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
  },
  headerWrap: {
    backgroundColor: COLORS.primary,
    height: SIZES.height / 4,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 10,
    alignItems: 'center',
    paddingTop:20
    // justifyContent: 'center',
  },
  imageStyle: {
    width: 160,
    height: 60,
    resizeMode: 'contain',
  },
  arrowContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  plusContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
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
  },

  // topBorderStyle: {
  //   height: 30,
  //   width: SIZES.width,
  //   backgroundColor: '#fff',
  //   // top: -30,
  //   borderTopLeftRadius: 25,
  //   borderTopRightRadius: 25,
  //   position: 'absolute',
  //   bottom: 0,
  // },
});
