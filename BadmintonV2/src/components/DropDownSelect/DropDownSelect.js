import {
  Pressable,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  View, FlatList
} from 'react-native';
import React, { useState } from 'react';
import { COLORS, FONTS, SIZES } from '@app/constants/Theme';
import DropdownArrow from '@app/assets/icons/ExpandIcon.svg';
import SearchIcon from '@app/assets/icons/search.svg';
import TextInputComponent from '@app/components/TextInputComponent';

const DropDownSelect = ({
  label,
  labelhead,
  containerStyle,
  labelStyle,
  onPress,
  listDate,
  leftimgae,
  setitemname,
  searchInput = true,
  searchIcon = false,
  dropIcon = true,
  SearchFilter,
  isDisable = false,
  countrylabel,
  ...props

}) => {
  const [isListEnable, setIsListEnable] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedItem, setSelectedItem] = useState('');

  const pressFunction = () => {
    if (listDate.length > 0) {
      setIsListEnable(!isListEnable);
    } else {
      onPress();
    }
  };

  const onSelectList = (name) => {
    setSelectedItem(name);
    setSearch('')
    console.log('Selected item:', name);
  };

  // const selectItem = (item) => {
  //   setSelectedItem(item.name);
  //   setIsListEnable(false)
  //   setIsListEnabled(false);
  //   setItemName(item);
  // };

  return (
    <View>
      <Pressable
        onPress={pressFunction}
        disabled={isDisable}
        style={{
          ...styles.container,
          ...containerStyle,
          marginVertical: isListEnable ? 1 : 10,
        }}>
        {leftimgae && leftimgae}
        <View style={{ ...countrylabel }}>
          {labelhead && (
            <Text style={{ ...styles.labelText01, ...labelStyle }}>
              {labelhead}
            </Text>
          )}

          <Text
            style={{ ...styles.labelText, ...labelStyle, }}>
            {selectedItem !== '' ? selectedItem : label}
          </Text>
        </View>

        {searchIcon && <SearchIcon width={18} height={18} />}
        {dropIcon && (
          <View
            style={{ transform: [{ rotate: isListEnable ? '270deg' : '90deg' }] }}>
            <Image
              style={{ height: 25, width: 25 }}
              source={require('@app/assets/images/Arrowdown.png')}
            />
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
              //onChangeText={(text) => SearchFilter(text)}
              onSubmitEditing={SearchFilter}
              placeHolderColor="#8592B2"
              leftIcon={
                <View style={{ marginRight: 5 }}>
                  <SearchIcon width={20} height={20} style={{ color: 'red' }} />
                </View>
              }
              onTextChange={text => setSearch(text)}
              value={search}
            />
          )}

          <FlatList data={listDate?.filter((item) => {
            return item.name.toLowerCase().includes(search.toLowerCase())
          })
          }
            nestedScrollEnabled={true}
            renderItem={({ item }) => {
              return <Pressable
                onPress={() => {
                  setIsListEnable(!isListEnable);
                  onSelectList(item.name)
                }}
                style={styles.listWrap}>
                <Text
                  style={{ ...styles.listLabelStyle, }}>
                  {item.name}
                </Text>
              </Pressable>
            }} />

        </View>
      )}
    </View>
  );
};

export default DropDownSelect;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height: SIZES.baseX5 * 2,
    backgroundColor: COLORS.gray1,
    borderWidth: 0,
    borderColor: COLORS.gray3,
    overflow: 'hidden',
    borderRadius: SIZES.radius + 3,
    marginBottom: SIZES.baseX2,
    alignItems: 'center',
    marginVertical: SIZES.baseX4,
    height: 56,

    flexDirection: 'row',
    paddingHorizontal: SIZES.baseX4,
    marginHorizontal: SIZES.baseX8 + 4,
    marginTop: -3,
  },
  labelText: {
    // ...FONTS.medium,
    fontSize: 14,
    color: COLORS.black,
  },
  selectListWrap: {
    // height: 200,
    // width: '90%',
    marginHorizontal: SIZES.baseX8 + 4,
    backgroundColor: COLORS.white,
  // position: 'absolute',
   //top:50,
    borderColor: '#8592B2',
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 20,
    //marginTop:-4,
    // zIndex: 1,
    // right:0
  },
  searchInputStyle: {
    borderColor: '#8592B2',
    borderWidth: 1,
    height: 40,
    marginVertical: SIZES.base,
    marginHorizontal: 4,
    backgroundColor: COLORS.white,
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
  labelText01: {
    ...FONTS.regular,
    fontSize: 13,
    color: COLORS.gray2,
  },
  contentContainer: {
    flexGrow: 1
  }
});
