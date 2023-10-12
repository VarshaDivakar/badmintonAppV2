import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES} from '@app/constants/themes';
import DropdownArrow from '@app/assets/icons/general/expandDownArrow.svg';
import SearchIcon from '@app/assets/icons/general/search.svg';
import TextInputComponent from '../TextInputComponent/TextInputComponent';

const DropDownSelect = ({
  label,
  labelhead,
  containerStyle,
  labelStyle,
  onPress,
  listDate,
  leftimgae,
  searchInput = true,
  searchIcon = false,
  dropIcon = true,
  ...props
}) => {
  const [isListEnable, setIsListEnable] = useState(false);

  const pressFunction = () => {
    if (listDate.length > 0) {
      setIsListEnable(!isListEnable);
    } else {
      onPress();
    }
  };

  return (
    <View>
      <Pressable
        onPress={pressFunction}
        style={{
          ...styles.container,
          ...containerStyle,
          marginBottom: isListEnable ? 4 : SIZES.baseX4,
        }}>
        {leftimgae && leftimgae}
        <View style={{}}>
          <Text style={{...styles.labelText01, ...labelStyle}}>
            {labelhead}
          </Text>

          <Text style={{...styles.labelText, ...labelStyle}}>{label}</Text>
        </View>
        {searchIcon && <SearchIcon  style={{ color: '#8592B2'}}/>}
        {dropIcon && (
          <View
            style={{transform: [{rotate: isListEnable ? '0deg' : '180deg'}]}}>
            <DropdownArrow />
          </View>
        )}
      </Pressable>
      {isListEnable && listDate.length > 0 && (
        <View
          style={{
            marginBottom: isListEnable ? SIZES.baseX4 : 0,
            ...styles.selectListWrap,
            ...props.selectListStyle,
          }}>
          {searchInput && (
            <TextInputComponent
              placeholder="Search"
              returnKeyType={'go'}
              selectionColor="white"
              container={styles.searchInputStyle}
              placeHolderColor="#8592B2"
              leftIcon={
                <View style={{marginRight: 5}}>
                  <SearchIcon  style={{ color: '#8592B2'}}/>
                </View>
              }
            />
          )}
          <ScrollView>
            {listDate.map((item, index) => {
              return (
                <Pressable
                  onPress={() => setIsListEnable(!isListEnable)}
                  style={styles.listWrap}>
                  <Text
                    style={{...styles.listLabelStyle, ...props.listLabelStyle}}>
                    {item.name}
                  </Text>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default DropDownSelect;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    // width: SIZES.width / 1.2,
    // marginHorizontal: SIZES.baseX5,
    paddingVertical: SIZES.baseX4,
    paddingHorizontal: SIZES.baseX4,
    borderColor: '#8592B2',
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,
  },
  labelText: {
    ...FONTS.medium,
    fontSize: 13,
    color: COLORS.black,
  },
  selectListWrap: {
    height: 200,
    width: '100%',
    backgroundColor: COLORS.white,
    // position: 'absolute',
    borderColor: '#8592B2',
    borderWidth: 1,
    borderRadius: 6,
    // zIndex: 10,
  },
  searchInputStyle: {
    borderColor: '#8592B2',
    borderWidth: 1,
    height: 40,
    marginVertical: SIZES.base,
    marginHorizontal: 4,
  },
  listWrap: {
    paddingHorizontal: SIZES.baseX2,
    paddingVertical: SIZES.base,
    // backgroundColor: 'red',
  },
  listLabelStyle: {
    ...FONTS.medium,
    fontSize: 14,
    color: COLORS.black,
  },
  labelText01: {
    ...FONTS.regular,
    fontSize: 13,
    color: COLORS.gray2,
  },

  dropDownStyle: {},
});
