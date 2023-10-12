import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import Navigations from '@app/navigations/navigations';
import {COLORS, SIZES, FONTS, width} from '@app/constants/Theme';
import SafeAreaWrapper from '@app/components/SafeAreaWraper';
import TextInputComponent from '@app/components/TextInputComponent';
import KeyboardAvoidWrapper from '@app/components/Keyboardavoidwraper';
// import MainLayoutWrapper from '@app/components/MainLayoutWrapper/MainLayoutWrapperIn';
import MainLayoutWrapperIn from '@app/components/MainLayoutWrapper/MainLayoutWrapperIn';
import RectangleButton from '@app/components/ButtonComponents/RectangleButton';
import Editprofileicon from '@app/assets/icons/Editprofileicon.svg';
import images from '@app/constants/images';
import DropDownSelect from '@app/components/DropDownSelect/DropDownSelect';
// import {currencyList} from '@app/utils/dummyData';
import {TouchableOpacity} from 'react-native-gesture-handler';
import navigations from '@app/navigations/navigations';
import { dummyCountry } from '../../../dummyData';
const Editprofile = () => {
  const navigation = useNavigation();

  const dummyData = [
    {
      name: 'MR',
    },
    {
      name: 'MRS',
    },
    {
      name: 'Lord',
    },
  ];

  const dummyCountry = [
    {
      name: 'United Kingdom',
    },
    {
      name: 'United Arab Emirates',
    },
    {
      name: 'INDIA',
    },
  ];
  // const Edititems = () => {
  //   return (
  //     <View style={styles.maincontainer}>
  //       {/* <View style={{
  //         alignItems:'center'
  //       }}> */}
  //       {/* <TextInputComponent
  //         name="Katherine Campbell"
  //         upperLabel="Select title"
  //         placeHolderColor={COLORS.black}
  //         placeholder="Mr."
  //         // leftIcon={<Text style={{ ...FONTS.medium }}>Mr.</Text>}
  //         outerContainer={styles.inputOuterContainer}
  //         container={styles.inputContainer}
  //         inputStyle={styles.inputStyle}
  //         upperLabelStyle={styles.labelStyle}
  //       /> */}

  //       <TextInputComponent
  //         name="Katherine Campbell"
  //         upperLabel="First Name"
  //         placeHolderColor={COLORS.black}
  //         placeholder="Andrew"
  //         outerContainer={styles.inputOuterContainer}
  //         container={styles.inputContainer}
  //         inputStyle={styles.inputStyle}
  //         upperLabelStyle={styles.labelStyle}
  //       />

  //       <TextInputComponent
  //         name="Katherine Campbell"
  //         upperLabel="Middle name (optional)"
  //         placeHolderColor={COLORS.black}
  //         placeholder="."
  //         outerContainer={styles.inputOuterContainer}
  //         container={styles.inputContainer}
  //         inputStyle={styles.inputStyle}
  //         upperLabelStyle={styles.labelStyle}
  //       />

  //       <TextInputComponent
  //         name="Katherine Campbell"
  //         upperLabel="Last name"
  //         placeHolderColor={COLORS.black}
  //         placeholder="Robertson"
  //         outerContainer={styles.inputOuterContainer}
  //         container={styles.inputContainer}
  //         inputStyle={styles.inputStyle}
  //         upperLabelStyle={styles.labelStyle}
  //       />

  //       <TextInputComponent
  //         name="Katherine Campbell"
  //         upperLabel="Email Address"
  //         placeHolderColor={COLORS.black}
  //         placeholder="Andrewwrob@gmail.com"
  //         rightIcon={
  //           <Editprofileicon
  //             style={{color: COLORS.gray12}}
  //             stroke={'#000000'}
  //           />
  //         }
  //         outerContainer={styles.inputOuterContainer}
  //         container={styles.inputContainer}
  //         inputStyle={{
  //           width: SIZES.width - 120,
  //           height: SIZES.baseX5 - 5,
  //           // backgroundColor:'yellow'
  //         }}
  //         upperLabelStyle={styles.labelStyle}
  //       />

  //       <DropDownSelect
  //         containerStyle={{
  //           borderColor: '#C7CCD9',
  //           marginHorizontal: SIZES.base,
  //         }}
  //         label="Select Country"
  //         labelhead="Country of residence"
  //         labelStyle={{color: '#000'}}
  //         listDate={dummyCountry}
  //         leftimgae={
  //           <Image style={styles.secondCountryFlag} source={images.UKflag} />
  //         }
  //         // selectListStyle={{top: 80}}
  //       />
  //       {/* <View style={styles.countryviewstyles}>
  //         <Image style={styles.countryflag} source={images.UKflag} /> */}
  //       {/* <View
  //           style={{
  //             marginHorizontal: SIZES.baseX3,
  //           }}>
  //           <Text>country of residence</Text>
  //           <DropDownSelect
  //             containerStyle={{
  //               // borderColor: '#C7CCD9',
  //               borderWidth: 0,
  //               width: SIZES.width * 0.65,
  //               height: 15,
  //               paddingVertical: 0,
  //               // backgroundColor:'yellow',
  //               marginVertical: 5,
  //               paddingHorizontal: 0,
  //             }}
  //             label="Select Currency"
  //             // labelStyle={styles.dropDownLabel}
  //             listDate={dummyCountry}
  //             // containerStyle={{marginVertical: 0}}
  //             // selectListStyle={{top: 80}}
  //           />
  //         </View>
  //       </View> */}
  //       <View style={styles.subcontainer}>
  //         <Text style={styles.labelStyle}>nationality</Text>
  //         <DropDownSelect
  //           containerStyle={{
  //             borderWidth: 0,
  //             width: SIZES.width * 0.77,
  //             height: 15,
  //             paddingVertical: 0,
  //             // backgroundColor:'yellow',
  //             marginVertical: 0,
  //             paddingHorizontal: 0,
  //           }}
  //           label="UK"
  //           labelStyle={styles.dropDownLabel}
  //           listDate={dummyCountry}

  //           // listDate={currencyList}
  //           // containerStyle={{marginVertical: 0}}
  //           // selectListStyle={{top: 80}}
  //         />
  //       </View>
  //       <View style={styles.bottomviewstyles}>
  //         <TextInputComponent
  //           placeholder="+44"
  //           leftIcon={
  //             <Image style={styles.secondCountryFlag} source={images.UKflag} />
  //           }
  //           placeHolderColor={COLORS.blue4}
  //           container={{
  //             borderColor: COLORS.gray7,
  //             borderWidth: 1,
  //             height: SIZES.baseX5 + 40,
  //             // height: SIZES.baseX5 - 5,
  //             width: SIZES.width * 0.2,
  //             // backgroundColor:'yellow',
  //             // marginHorizontal:5
  //           }}
  //         />
  //         {/* </View> */}
  //         <TextInputComponent
  //           borderColor="#8592B2"
  //           // name="CVV"
  //           placeholder="789 675 4321"
  //           // leftIcon={ <Image style={styles.secondCountryFlag} source={images.UKflag} />}
  //           placeHolderColor={COLORS.blue4}
  //           container={{
  //             // marginVertical: SIZES.baseX4,
  //             borderColor: COLORS.gray7,
  //             borderWidth: 1,
  //             height: SIZES.baseX5 + 40,
  //             // height: SIZES.baseX5 - 5,
  //             width: SIZES.width * 0.62,
  //             // backgroundColor:'yellow',
  //             padding: 0,
  //           }}
  //         />
  //       </View>
  //     </View>
  //   );
  // };

  const listEdititems = () => {
    return (
      <View
        style={{
          // paddingHorizontal: SIZES.baseX2, 
          marginVertical: SIZES.baseX2,
          width:SIZES.width,
          // backgroundColor:'red'
          }}>
        {/* <TextInputComponent
          name="Katherine Campbell"
          insideLabel="Select title"
          placeHolderColor={COLORS.black}
          placeholder="Mr."
          container={styles.inputContainer}
          inputStyle={styles.inputStyle}
        /> */}
        {/* <DropDownSelect
          containerStyle={{
            borderColor: COLORS.gray7,
            borderWidth:1,
            backgroundColor:COLORS.white
          }}
          labelhead="Select title"
          label="Mr."
          labelStyle={{color: '#000'}}
          listDate={dummyData}

          // selectListStyle={{top: 80}}
        /> */}
        <TextInputComponent
          name="Katherine Campbell"
          insideLabel="First name"
          placeHolderColor={COLORS.black}
          placeholder="Andrew"
          container={styles.inputContainer}
          inputStyle={styles.inputStyle}
          upperLabelStyle={styles.upperLabelStyle}
        />

        {/* <TextInputComponent
          name="Katherine Campbell"
          insideLabel="Middle name (optional)"
          placeHolderColor={COLORS.black}
          placeholder="."
          container={styles.inputContainer}
          inputStyle={styles.inputStyle}
          upperLabelStyle={{  ...FONTS.regular,
            fontSize: 13,
            color: COLORS.black,}}
        /> */}

        <TextInputComponent
          name="Katherine Campbell"
          insideLabel="Last name"
          placeHolderColor={COLORS.black}
          placeholder="Robertson"
          container={styles.inputContainer}
          inputStyle={styles.inputStyle}
          upperLabelStyle={styles.upperLabelStyle}
        />

        <TextInputComponent
          name="Katherine Campbell"
          insideLabel="Email Address"
          placeHolderColor={COLORS.black}
          placeholder="Andrewwrob@gmail.com"
          rightIcon={
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(navigations.playermobileotp, {
                  navigateTo: navigations.editEmail,
                })
                // navigation.navigate(navigations.editEmail)
              }>
              <Editprofileicon
                style={{color: COLORS.gray3}}
                stroke={'#000000'}
              />
            </TouchableOpacity>
          }
          // outerContainer={styles.inputOuterContainer}
          container={styles.inputContainer}
          inputStyle={{
            width: SIZES.width - 120,
            height: SIZES.baseX5 - 5,
            // backgroundColor:'yellow'
          }}
          upperLabelStyle={styles.upperLabelStyle}
        />
        <DropDownSelect
          containerStyle={{
            borderColor: COLORS.gray7,
            borderWidth:1,
            backgroundColor:COLORS.white
          }}
          countrylabel={{marginRight:'auto',left:10}}
          label="United Kingdom"
          labelhead="Country of residence"
          labelStyle={{color: '#000'}}
          listDate={dummyCountry}
          leftimgae={
            <Image style={styles.secondCountryFlag} source={images.londonFlag} />
          }
          // selectListStyle={{top: 80}}
        />
        <DropDownSelect
          containerStyle={{
            borderColor: COLORS.gray7,
            borderWidth:1,
            backgroundColor:COLORS.white

          }}
          labelhead="Nationality"
          label="UK"
          labelStyle={styles.upperLabelStyle}
          listDate={dummyCountry}

          // selectListStyle={{top: 80}}
        />
        <View style={styles.bottomviewstyles}>
          <TextInputComponent
            placeholder="+44"
            leftIcon={
              <Image style={styles.secondCountryFlag} source={images.londonFlag} />
            }
            placeHolderColor={COLORS.blue4}
            container={{
              borderColor: COLORS.gray7,
              borderWidth: 1,
              marginRight: 0,
              width: 100,
             backgroundColor:COLORS.white,
              marginHorizontal:5,
              marginLeft:20
            }}
          />
          {/* </View> */}
          <TextInputComponent
            borderColor="#8592B2"
            // name="CVV"
            placeholder="789 675 4321"
            // leftIcon={ <Image style={styles.secondCountryFlag} source={images.UKflag} />}
            placeHolderColor={COLORS.blue4}
            container={{
              // marginVertical: SIZES.baseX4,
              // marginHorizontal:0,
              // marginLeft:0,
              // marginRight: SIZES.baseX2,
              width: SIZES.width - 170,
              borderColor: COLORS.gray7,
              borderWidth: 1,
              // height: SIZES.baseX5 - 5,
              backgroundColor:COLORS.white,

            }}
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaWrapper
      containerStyle={{paddingHorizontal: 0}}
      statusbar={COLORS.primary}
      barStyle="light-content"
      backgroundColor={COLORS.white}>
      <MainLayoutWrapperIn
        containerStyle={{
          height: SIZES.height / 8,
        }}
        containbg={{backgroundColor: COLORS.white}}
        title={'Edit profile'}>
        <KeyboardAvoidWrapper>
          {listEdititems()}
          <RectangleButton
            label="Save changes"
            buttonStyle={{
              height: 48,
              width: 300,
              marginHorizontal: 46,
              borderRadius: 30,
              width: '80%',
            }}
            textStyle={{}}
            onPress={() => navigation.navigate(navigations.home)}
          />
        </KeyboardAvoidWrapper>
      </MainLayoutWrapperIn>
    </SafeAreaWrapper>
  );
};

export default Editprofile;
