import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Pressable,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '@app/constants/Theme';
import {useNavigation} from '@react-navigation/native';
import BackArrow from "@app/assets/icons/arrowleft.svg"
import images from '@app/constants/images';


const MainLayoutWrapperVerification = ({backArrow = true, ...props}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
     
      <View style={{...styles.headerWrap, ...props.containerStyle}}>
        
        {backArrow ? (
          <Pressable
            // onPress={() => console.log('back pressed')}
            
            onPress={() => navigation.goBack()}
            style={styles.arrowContainer}>
            <BackArrow width={15} height={15} color={'white'}/>
           </Pressable>
        ):<View/>}
         <Image source={images.Dhignalogo1} style={styles.logo}/>
         <View/>
        {/* <View style={styles.topBorderStyle} /> */}
      </View>
      <View style={styles.subcontainer}>
      {props.children}
       
      </View>
      
    </View>
  );
};

export default MainLayoutWrapperVerification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    
  },
  headerWrap: {
    // backgroundColor: COLORS.orange,
    // height: SIZES.height / 6.5,
    // width:SIZES.width,
    marginHorizontal:20,
    flexDirection:'row',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent:'space-between',
    marginBottom:50
  },
  imageStyle: {
    width: SIZES.width,
    height: SIZES.height / 4,
    resizeMode: 'contain',
  },
  arrowContainer: {
    // position: 'absolute',
    // top: 20,
    // left: 20,
    // backgroundColor:'blue',
    resizeMode:'contain',
    width:20,
    height:20,
    // backgroundColor:COLORS.white
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
    height:40,
    width:130,
    //marginLeft:-10
    // position:'absolute',
    // resizeMode:'contain'
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
