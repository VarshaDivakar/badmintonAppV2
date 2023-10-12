import {Text, View, Image, Pressable, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
// import Verifiedicon from '@app/assets/icons/general/verifiedicon.svg';
import {useNavigation} from '@react-navigation/native';
import Navigations from '@app/navigations/navigations';
import {styles} from './styles';
import Editprofileicon from '@app/assets/icons/Editprofileicon.svg';
import Resetpinicon from '@app/assets/icons/Resetpinicon.svg';
import images from '@app/constants/images';
import BackArrow from '@app/assets/icons/arrowleft.svg';
import {COLORS, SIZES} from '@app/constants/Theme';
import ArrowRight from '@app/assets/icons/arrow-right.svg';
import navigations from '@app/navigations/navigations';
const Basicprofile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} />

      <View style={styles.subcontainerstyles}>
        <Pressable
          // onPress={() => console.log('back pressed')}
          onPress={() => navigation.navigate(navigations.home)}
          style={styles.arrowContainer}>
          <BackArrow/>
        </Pressable>
        <View
          style={{
            alignItems: 'center',
            marginTop: SIZES.baseX2 * 4,
          }}>
          <Image source={images.men} style={styles.imagestyles} />
          <Text style={styles.imagetextstyles}>Andrew Robertson</Text>
          <Text style={{color: '#000'}}>california, USA</Text>
        </View>
      </View>
      <Pressable
        style={styles.bottomviewstyles}
        onPress={() => navigation.navigate(navigations.editProfile)}>
          <View style={styles.rowSecond}>
        <Editprofileicon style={styles.iconstyles} />
        <Text style={styles.edittextstyles}>Edit profile</Text>
        </View>
        <ArrowRight/>
        {/* <Image style={styles.arrowstyle} source={images.} /> */}
      </Pressable>
      <Pressable
        style={styles.bottomviewstyles}
        onPress={() => navigation.navigate(navigations.resetLoginPin)}>
          <View style={styles.rowSecond}>
        <Resetpinicon style={styles.iconstyles} />

        <Text style={styles.edittextstyles}>Reset Login PIN</Text>
        </View>
        <ArrowRight/>
        {/* <Image style={styles.arrowstyle} source={images.arrowdown} /> */}
      </Pressable>
    </View>
  );
};

export default Basicprofile;
