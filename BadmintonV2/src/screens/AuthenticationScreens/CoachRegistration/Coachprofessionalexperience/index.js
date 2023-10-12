import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import SafeAreaWraper from '@app/components/SafeAreaWraper';
import MainLayoutWrapper from '@app/components/MainLayoutWrapper/MainLayoutWrapper';
import {styles} from './styles';
import Rectanglebutton from '@app/components/Rectanlebutton';
import {useNavigation} from '@react-navigation/native';
import Switchcomponent from '@app/components/Switchcomponent';
import {COLORS, SIZES} from '@app/constants/Theme';
import images from '@app/constants/images';
import DropDownSelect from '@app/components/DropDownSelect/DropDownSelect';
import TextInputComponent from '@app/components/TextInputComponent';
import AddIcon from '@app/assets/icons/addicon.svg';
import MinusIcon from '@app/assets/icons/minusicon.svg';
import Dropdownarrow from '@app/assets/icons/downarrow.svg';
import Calendar from '@app/assets/icons/Calendar.svg';
import Keyboardavoidwraper from '@app/components/Keyboardavoidwraper';
import Navigations from '@app/navigations/navigations';
import MainLayoutWrapperCR from '@app/components/MainLayoutWrapper/MainlayoutwrapperCR';

const Underline = () => {
  return (
    <View
      style={{
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: 7,
      }}
    />
  );
};

const Data = [
  {
    id: '1',
    name: 'dhign club',
  },
  {
    id: '2',
    name: 'kanexy club',
  },
];

const Experiencefrom = () => {
  return (
    <>
<View style={styles.container}>
 <Pressable style={{marginLeft:20,backgroundColor:'#DFD8D8',height:35,width:140,alignItems:'center',justifyContent:'center',borderRadius:5}}>
    <Text style={{color:'#110404'}}>+Attach file</Text>
 </Pressable>
 <Pressable style={{marginLeft:20,alignItems:'center',justifyContent:'center'}}>
    <Text style={{color:'#110404'}}>No file choosen</Text>
 </Pressable>
</View>
      <TextInputComponent
        container={{
          borderWidth: 0,
        }}
        placeholder={'Enter Your Club / Association'}
      />
    </>
  );
};

const Coachprofessionalexeperience = ({navigation}) => {

  const [selectedItem, setSelectedItem] = useState(null);
  const [openadd,setopenadd]=useState(null)

  return (
    <SafeAreaWraper statusbar={'transparent'} barStyle={'light-content'}>
      <MainLayoutWrapperCR>

                <View style={{flex: 1}}>
          <View>
            <Text style={styles.headertextstyle}>Coach Registration</Text>
            <Text style={styles.detailstyles}>Professional Experience</Text>

          </View>
          <Keyboardavoidwraper>
          {Underline()}
          <Switchcomponent name={'Previous Experience'} glow={true}>
            <TextInputComponent
              container={{
                borderWidth: 0,
              }}
              placeholder={'Number of years coached'}
            />
            <DropDownSelect
              label={'Enter Your interested sports'}
              listDate={Data}
            />
             <Text 
          onPress={()=>setopenadd(!openadd)} style={styles.addnew}>+Add new</Text>
          </Switchcomponent>

         
          {openadd &&
          <View>
            <Switchcomponent name={'Previous Experience'} glow={true}>
            <TextInputComponent
              container={{
                borderWidth: 0,
              }}
              placeholder={'Number of years coached'}
            />
            <DropDownSelect
              label={'Enter your interested sports'}
              listDate={Data}
            />
          </Switchcomponent>
          </View>}
            <ScrollView>
              <Switchcomponent name={'Any Certifications?'} glow={true}>
                {Experiencefrom()}
              </Switchcomponent>
              <Rectanglebutton
                    label={'Continue'}
                    onPress={() =>
            
                      navigation.navigate(Navigations.coachpreview)
                    }
                  />
            </ScrollView>
            </Keyboardavoidwraper>
        </View>
      </MainLayoutWrapperCR>
    </SafeAreaWraper>
  );
};

export default Coachprofessionalexeperience;
