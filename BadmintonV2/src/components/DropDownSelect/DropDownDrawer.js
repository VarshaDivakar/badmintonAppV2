import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES} from '@app/constants/Theme';
import DropdownArrow from '@app/assets/icons/general/expandDownArrow.svg';
import SearchIcon from '@app/assets/icons/general/search.svg';
import TextInputComponent from '../TextInputComponent/TextInputComponent';

const DropDownDrawer = ({
  image,
  label,
  containerStyle,
  labelStyle,
  onPress,
  listDate,
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
        style={{...styles.container, ...containerStyle}}>
        {searchIcon && searchIcon}

        <Text style={{...styles.labelText, ...labelStyle}}>{label}</Text>
        {dropIcon && (
          <View
            style={{
              marginLeft: SIZES.baseX5 * 5,
              transform: [{rotate: isListEnable ? '0deg' : '180deg'}],
            }}>
            <DropdownArrow />
          </View>
        )}
      </Pressable>
      {isListEnable && listDate.length > 0 && (
        <View style={{...styles.selectListWrap, ...props.selectListStyle}}>
          {searchInput && (
            <TextInputComponent
              placeholder="Search"
              returnKeyType={'go'}
              selectionColor="white"
              container={styles.searchInputStyle}
              placeHolderColor="#8592B2"
              leftIcon={
                <View style={{marginRight: 5}}>
                  <SearchIcon />
                </View>
              }
            />
          )}
          <ScrollView>
            {listDate.map((item, index) => {
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    setIsListEnable(!isListEnable), onPress(item);
                  }}
                  style={styles.listWrap}>
                  {searchIcon && item.img}

                  {/* {image && item.img} */}

                  <Text style={{...styles.labelText, ...props.listLabelStyle}}>
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

export default DropDownDrawer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    // width: SIZES.width / 1.2,
    // marginHorizontal: SIZES.baseX5,
    paddingVertical: SIZES.base,
    paddingHorizontal: SIZES.base,
    // borderColor: '#8592B2',
    // borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    // marginVertical: SIZES.baseX4,
    marginHorizontal: SIZES.baseX3,
    height: 30,
  },
  labelText: {
    ...FONTS.regular,
    fontSize: 12,
    color: COLORS.black,
    marginHorizontal: SIZES.baseX3,
  },
  selectListWrap: {
    height: 226,
    width: 225,
    backgroundColor: COLORS.gray3,
    // position: 'absolute',
    // borderColor: '#8592B2',
    // borderWidth: 1,
    borderRadius: 6,
    alignSelf: 'center',
    paddingHorizontal: SIZES.baseX3,
    paddingVertical: SIZES.baseX3,
    //alignItems: 'center',
    //justifyContent: 'center',
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
    // justifyContent: 'center',
    flexDirection: 'row',

    // alignItems: 'center',
    //backgroundColor: 'red',
  },
  listLabelStyle: {
    ...FONTS.medium,
    fontSize: 14,
    color: COLORS.black,
  },
  dropDownStyle: {},
});
