import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES} from '@app/constants/themes';
import DropdownArrow from '@app/assets/icons/general/expandDownArrow.svg';
import SearchIcon from '@app/assets/icons/general/search.svg';
import TextInputComponent from '../TextInputComponent/TextInputComponent';

const DropDownSelect = ({
  label,
  containerStyle,
  labelStyle,
  onPress,
  listDate,
  leftimgae,
  Seatdeatils,
  searchInput = true,
  searchIcon = false,
  dropIcon = true,
  // SearchFilter,
  ...props
}) => {
  const [isListEnable, setIsListEnable] = useState(false);
  const [counting, setcounting] = useState(0);
  const pressFunction = () => {
    if (listDate.length > 0) {
      setIsListEnable(!isListEnable);
    } else {
      // onPress();
      console.log(listDate);
    }
  };

  const SearchFilter = text => {
    if (text) {
      const filteredData = allMovies.filter(item =>
        item.title.toLowerCase().includes(text),
      );

      console.log('test', filteredData);
      // setMovies(filteredData);
      // settitlelist(filteredData);
    } else {
      // setMovies(allMovies);
      // setcountrylist(allcountrylist);
    }
  };

  return (
    <View>
      <Pressable
        onPress={pressFunction}
        style={{
          ...styles.container,
          ...containerStyle,
          marginVertical: isListEnable ? 1 : 10,
        }}>
        {leftimgae && leftimgae}
        <Text style={{...styles.labelText, ...labelStyle}}>
          {label} {counting}
        </Text>
        {searchIcon && <SearchIcon style={{color: '#8592B2'}} />}
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
            ...styles.selectListWrap,
            ...props.selectListStyle,
          }}>
          {searchInput && (
            <TextInputComponent
              placeholder="Search"
              returnKeyType={'go'}
              selectionColor="white"
              container={styles.searchInputStyle}
              onChangeText={text => SearchFilter(text)}
              // onSubmitEditing={SearchFilter}
              placeHolderColor="#8592B2"
              leftIcon={
                <View style={{marginRight: 5}}>
                  <SearchIcon style={{color: '#8592B2'}} />
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
                    setcounting(item.Count),
                      Seatdeatils(item),
                      setIsListEnable(!isListEnable);
                  }}
                  style={styles.listWrap}>
                  <Text
                    style={{...styles.listLabelStyle, ...props.listLabelStyle}}>
                    {item.Count}
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
    marginVertical: SIZES.baseX4,
    height: 56,
  },
  labelText: {
    ...FONTS.medium,
    fontSize: 13,
    color: COLORS.black,
  },
  selectListWrap: {
    height: 200,
    width: '80%',
    backgroundColor: COLORS.white,
    // position: 'absolute',
    alignSelf: 'center',
    borderColor: '#8592B2',
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 10,
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
    paddingHorizontal: SIZES.baseX4,
  },
  dropDownStyle: {},
});
