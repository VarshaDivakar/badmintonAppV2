import {
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '@app/constants/Theme';
import {useNavigation} from '@react-navigation/native';
import BackArrow from "@app/assets/icons/arrow_back-white.svg"
import images from '@app/constants/images';

import Keyboardavoidwraper from '@app/components/Keyboardavoidwraper';
const MainLayoutWrapper = ({backArrow = true, ...props}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
     
      <View style={{...styles.headerWrap, ...props.containerStyle}}>
        
        <ImageBackground source={images.regbackground} style={styles.imageStyle}/>
        {backArrow && (
          <Pressable
            // onPress={() => console.log('back pressed')}
            onPress={() => navigation.goBack()}
            style={styles.arrowContainer}>
            <BackArrow/>
          </Pressable>
        )}
         <Image source={images.Dhignalogo} style={styles.logo}/>
        <View style={styles.topBorderStyle} />
      </View>
      <View style={styles.subcontainer}>
        <Keyboardavoidwraper>
      {props.children}
      </Keyboardavoidwraper>
      </View>
      
    </View>
  );
};

export default MainLayoutWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    
  },
  headerWrap: {
    backgroundColor: COLORS.primary,
    height: SIZES.height / 5,
  
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: SIZES.width,
    height: SIZES.height / 4,
    resizeMode: 'contain',
  },
  arrowContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  infoIconWrap: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  subcontainer:{
    flex:1,
    backgroundColor:COLORS.white,
    borderTopLeftRadius:25,
    borderTopRightRadius:25
  },
  logo:{
    height:60,
    width:200,
    position:'absolute'
  }
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
