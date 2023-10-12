import {Alert, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SafeAreaWraper from '@app/components/SafeAreaWraper';
import MainLayoutWrapper from '@app/components/MainLayoutWrapper/MainLayoutWrapper';
import {styles} from './styles';
import Rectanglebutton from '@app/components/Rectanlebutton';
import Navigations from '@app/navigations/navigations';
import {useNavigation} from '@react-navigation/native';
import EditblueIcon from '@app/assets/icons/Editblue.svg';
import {COLORS, SIZES} from '@app/constants/Theme';

const Preview = ({navigation}) => {
  //const navigation = useNavigation();

  const Underline = () => {
    return (
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
          //marginVertical: 10,
        }}
      />
    );
  };

  const Renderedform = () => {
    return (
      <View>
        <View style={styles.editlable}>
          <Text style={styles.title}>Personal details</Text>
          <Pressable
            onPress={() =>
              navigation.navigate(Navigations.editplayerpersonaldetails)
            }>
            {<EditblueIcon height={18} width={18} />}
          </Pressable>
        </View>
        <View style={styles.editlable}>
          <Text style={styles.title}>Primary Information</Text>
          <Pressable
            onPress={() => navigation.navigate(Navigations.primarydetails)}>
            {<EditblueIcon height={18} width={18} />}
          </Pressable>
        </View>
        <View style={styles.editlable}>
          <Text style={styles.title}>Emergency Contact Details</Text>
          <Pressable
            onPress={() =>
              navigation.navigate(Navigations.editemergencycontact)
            }>
            {<EditblueIcon height={18} width={18} />}
          </Pressable>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaWraper statusbar={COLORS.black} barStyle={'light-content'}>
      <MainLayoutWrapper>
        <View>
          <Text style={styles.headertextstyle}>Player Registration</Text>
          <Text style={styles.detailstyles}>Preview</Text>
          {/* <View style={styles.linestyles}></View> */}
          <Underline />
        </View>
        <View>{Renderedform()}</View>
        <Rectanglebutton
          buttonStyle={{marginTop: SIZES.baseX8 * 2}}
          label={'Continue'}
          onPress={() => 
          navigation.navigate(Navigations.playerfindtournament)
            //alert('done')
          }
        />
      </MainLayoutWrapper>
    </SafeAreaWraper>
  );
};

export default Preview;
