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
  import React, { useState } from 'react';
import images from '@app/constants/images';
import TextInputComponent from '../TextInputComponent';
import Dropdownarrow from "@app/assets/icons/downarrow.svg";
import { SIZES } from '@app/constants/Theme';
import Calendar from "@app/assets/icons/Calendar.svg";


  const Dropdownform = (props, searchIcon, dropIcon,label, searchInput) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    const [isListEnable, setIsListEnable] = useState(false);
    const [number, onChangeNumber] = useState('');
  
    const pressFunction = (props) => {
      if (listDate.length > 0) {
        setIsListEnable(!isListEnable);
      } else {
        props.onPress;
      }
    };
  
    let listDate = [
      {
        id: '1',
        name: 'Badminton Bears ',
      },
      {
        id: '1',
        name: 'Team Dhigna ',
      },
      {
        id: '1',
        name: 'Team Badminton',
      },
    ];
  
    const onChangeNumbers = (txt) => {
      const selectedItem = listDate.find((item) => item.id === txt);
      if (selectedItem) {
        onChangeNumber(selectedItem.name);
        setIsListEnable(false);
      } else {
        onChangeNumber(txt);
      }
    };
  
    return (
      <View style={styles.container}>
        <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:16,marginRight:10,color:'#000'}}>{props.label}</Text>
        <View style={{marginBottom:10}}>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabled ? 'green' : '#f4f3f4'}
            onValueChange={() => setIsEnabled((previousState) => !previousState)}
            value={isEnabled}
          />
          </View>
        </View>
  
        {isEnabled ? (
          <View>
            <Pressable
              onPress={pressFunction}
              style={{
                ...styles.container1,
                ...props.containerStyle,
                marginBottom: isListEnable ? 4 : 18,
              }}>
              {props.leftimgae && leftimgae}
              <View style={{ alignSelf:'center'}}>
          
      
                <Text style={{ ...styles.labelText01, ...props.labelStyle }}>
                  {props.labelhead}
                </Text>
                <Text style={{ ...styles.labelText, ...props.labelStyle }}>
                  {number? number:'select title'}
                </Text>
                <Text style={{ ...styles.labelText, ...props.labelStyle }}>
                  {props.label}
                </Text>
              </View>
              {searchIcon && (
                <Image
                  style={{ height: 10, width: 20 }}
                  source={images.Downarrowicon}
                />
              )}
              {dropIcon && (
                <View
                  style={{
                    transform: [{ rotate: isListEnable ? '0deg' : '270deg' }],
                  }}>
                  <Image
                    style={{ height: 25, width: 25 }}
                    source={images.Downarrowicon}
                  />
                </View>
              )}
            </Pressable>
            {isListEnable && listDate.length > 0 && (
              <View
                style={{
                  marginBottom: isListEnable ? 18 : 0,
                  ...styles.selectListWrap,
                  ...props.selectListStyle,
                }}>
                <TextInput
                  style={{
                    borderWidth: 1,
                    height: 40,
                    padding: 10,
                    width: 330,
                    alignSelf: 'center',
                    marginTop: 10,
                    color: 'black',
                  }}
                  onChangeText={(txt) => onChangeNumber(txt)}
                  //value={number}
                  placeholder="search"
                />
  
                <ScrollView>
                  {listDate
                    .filter((item) =>
                      item.name.toLowerCase().includes(number.toLowerCase())
                    )
                    .map((item, index) => {
                      return (
                        <Pressable
                          onPress={() => {
                            onChangeNumbers(item.name);
                            setIsListEnable(!isListEnable);
                          }}
                          style={styles.listWrap}>
                          <Text
                            style={{
                              ...styles.listLabelStyle,
                              ...props.listLabelStyle,
                            }}>
                            {item.name}
                          </Text>
                        </Pressable>
                      );
                    })}
                </ScrollView>
              </View>
            )}
          </View>
        ) : null}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      
      alignItems: 'center',
      justifyContent: 'center',
    },
    container1: {
      backgroundColor: 'white',
      width: 350,
      marginTop: 20,
      paddingVertical: 18,
      paddingHorizontal: 18,
      borderColor: '#8592B2',
      borderWidth: 1,
      //borderRadius: SIZES.radius*1.5,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 56,
      alignSelf: 'center',
    },
    labelText: {
      //...FONTS.medium,
      fontSize: 13,
      color: 'black',
    },
    selectListWrap: {
      height: 200,
      width: '100%',
      backgroundColor: 'white',
      // position: 'absolute',
      borderColor: '#8592B2',
      borderWidth: 1,
      borderRadius: 6,
      // zIndex: 10,
    },
    listWrap: {
      paddingHorizontal: 12,
      paddingVertical: 8,
      width: 350,
      // backgroundColor: 'red',
    },
    listLabelStyle: {
      //...FONTS.medium,
      fontSize: 14,
      color: 'black',
    },
    labelText01: {
      //...FONTS.regular,
      fontSize: 13,
      color: 'gray',
    },
  });
  
  export default Dropdownform;