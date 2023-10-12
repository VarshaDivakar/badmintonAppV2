import {
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  Switch,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import images from '@app/constants/images';
import DropDownSelect from '@app/components/DropDownSelect/DropDownSelect';
import { COLORS,FONTS } from '@app/constants/Theme';
import Keyboardavoidwraper from '@app/components/Keyboardavoidwraper';


const Switchcomponent = (props) => {
  const [isEnabled, setIsEnabled] = useState(props.glow);

  const Data = [
    {
      id: '1',
      name: 'Badminton Bears ',
    },
    {
      id: '3',
      name: 'Team Dhigna ',
    },
    {
      id: '2',
      name: 'Team Badminton',
    },
  ];

  return (

    <View style={{marginTop:10}} >
      <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:20,marginBottom:20}}>
        <Text style={styles.labelText}>
          {props.name}
        </Text>
        <Switch
          style={props.switchstyle}
          trackColor={{false: '#767577', true: COLORS.green}}
          thumbColor={isEnabled ? COLORS.white : '#f4f3f4'}
          onValueChange={() => setIsEnabled(previousState => !previousState)}
          value={isEnabled}
        />
        </View>
        {isEnabled ? (
          <View >
            {/* <DropDownSelect label={'Select your Club'} listDate={Data} /> */}
         {props.children}
          </View>
        ) : null}
      </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  labelText: {
    ...FONTS.regular,
    fontSize:14,
    color:COLORS.black4,
    lineHeight:20,
   
  
  },

});

export default Switchcomponent;
