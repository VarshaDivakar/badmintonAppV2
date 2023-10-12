import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Alert,
  Pressable,
} from 'react-native';
import React, {createRef, useEffect, useRef, useState} from 'react';
import {styles} from './styles';
import {COLORS} from '@app/constants/Theme';

const OtpComponent = props => {
  const [buttonStatus, setButtonStatus] = useState('RectangleButton');
  const [changeNumber, setChangeNumber] = useState(false);
  const [titleText, setTitleText] = useState();

  const pin1Ref = useState();
  const pin2Ref = useState();
  const pin3Ref = useState();
  const pin4Ref = useState();
  const pin5Ref = useState();
  const pin6Ref = useState();
  const btnRef = new createRef(null);

  const [pin1, setPin1] = useState('');
  const [pin2, setPin2] = useState('');
  const [pin3, setPin3] = useState('');
  const [pin4, setPin4] = useState('');
  const [pin5, setPin5] = useState('');
  const [pin6, setPin6] = useState('');

  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count == 0) {
        clearInterval(interval);
      } else {
        setCount(count - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  const resendMobileOTP = () => {
    props.onPresfunction();
  };

  const OtpValidate = () => {
    if (pin6 >= 1) {
      const value = pin1 + pin2 + pin3 + pin4 + pin5 + pin6;
      //console.log('component value', value);
      // props.setCodeValue(value)
      props.onPress(value);
      setPin1('');
      setPin2('');
      setPin3('');
      setPin4('');
      setPin5('');
      setPin6('');
    } else {
      Alert.alert('Please enter the OTP');
      //console.log('enter otp')
    }
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TextInput
          placeholderTextColor={'#000'}
          ref={pin1Ref}
          maxLength={1}
          keyboardType={'numeric'}
          style={[styles.textinputstyles, props.textinputstyles]}
          value={pin1}
          onChangeText={txt => {
            setPin1(txt);
            if (txt.length >= 1) {
              pin2Ref.current.focus();
            }
          }}
        />
        <TextInput
          ref={pin2Ref}
          maxLength={1}
          keyboardType={'numeric'}
          style={[styles.textinputstyles, props.textinputstyles]}
          value={pin2}
          onChangeText={txt => {
            setPin2(txt);
            if (txt.length >= 1) {
              pin3Ref.current.focus();
            } else if (txt.length < 1) {
              pin1Ref.current.focus();
            }
          }}
        />
        <TextInput
          ref={pin3Ref}
          maxLength={1}
          keyboardType={'numeric'}
          style={[styles.textinputstyles, props.textinputstyles]}
          value={pin3}
          onChangeText={txt => {
            setPin3(txt);
            if (txt.length >= 1) {
              pin4Ref.current.focus();
            } else if (txt.length < 1) {
              pin2Ref.current.focus();
            }
          }}
        />
        <TextInput
          ref={pin4Ref}
          maxLength={1}
          keyboardType={'numeric'}
          style={[styles.textinputstyles, props.textinputstyles]}
          value={pin4}
          onChangeText={txt => {
            setPin4(txt);
            if (txt.length >= 1) {
              pin5Ref.current.focus();
            } else if (txt.length < 1) {
              pin3Ref.current.focus();
            }
          }}
        />
        <TextInput
          ref={pin5Ref}
          maxLength={1}
          keyboardType={'numeric'}
          style={[styles.textinputstyles, props.textinputstyles]}
          value={pin5}
          onChangeText={txt => {
            setPin5(txt);
            if (txt.length >= 1) {
              pin6Ref.current.focus();
            } else if (txt.length < 1) {
              pin4Ref.current.focus();
            }
          }}
        />
        <TextInput
          ref={pin6Ref}
          maxLength={1}
          keyboardType={'numeric'}
          style={[styles.textinputstyles, props.textinputstyles]}
          value={pin6}
          onChangeText={txt => {
            setPin6(txt);
            if (txt.length === 1) {
              //pin6Ref.current.focus();
              Keyboard.dismiss();
              // btnRef.focus();
            } else if (txt.length < 1) {
              pin5Ref.current.focus();
            }
          }}
        />
      </View>
      {/* <RectangleButton
          //onPress={() => navigation.navigate('')}
          label={"Submit"}
          buttonStyle={[styles.buttonstyle,{backgroundColor:pin1!==''&& pin2!==''&& pin3!==''&& pin4!==''&& pin5!==''&&pin6!==''?'red':'green'} ]} /> */}
      <View style={styles.OTPview}>
        <Text
         // onPress={resendMobileOTP}
          style={{
            //color: count == 0 ? COLORS.orange2 : COLORS.gray,
            fontSize: 14,
            color:COLORS.black3
          }}>

          Resend OTP
        </Text>

        {count !== 0 && <Text style={styles.countstyle}>{count}</Text>}
      </View>
      <Pressable
        ref={btnRef}
        onPress={() => OtpValidate()}
        style={[
          styles.buttonstyle,
          props.buttonstyle,
          {
            backgroundColor:
              pin1 !== '' &&
              pin2 !== '' &&
              pin3 !== '' &&
              pin4 !== '' &&
              pin5 !== '' &&
              pin6 !== ''
                ? COLORS.primary
                : '#787B97',
          },
        ]}>
        <Text style={styles.submittext}>{props.label}</Text>
      </Pressable>
    </View>
  );
};

export default OtpComponent;
