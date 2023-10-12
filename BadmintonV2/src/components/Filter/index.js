import React, { useRef, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated, ScrollView } from 'react-native';
import TextInputComponent from '../TextInputComponent';
import BackCalandar from '@app/assets/icons/back_calendar.svg'
import { COLORS, FONTS, SIZES } from '@app/constants/Theme';
import RectangleButton from '@app/components/ButtonComponents/RectangleButton';
import DropDownSelect from '@app/components/DropDownSelect/DropDownSelect';
import AnimatedButton from './AnimatedButtons';
import { useNavigation } from '@react-navigation/native';
import { radius,discipline,age } from '../../dummyData';
export default function Filter({btnStyle,onBtnPress,isDisciplineVisible=true}) {
    const [activeBtn,setActiveBtn] = useState('Date Range');
   const navigation = useNavigation();

    return (
        <ScrollView style={{}}>
            <Text style={style.Date}>Date</Text>
            <AnimatedButton 
            setActiveBtn={setActiveBtn}
            leftBtn={'Date Range'}
            rightBtn={'Month'}
            activeBtn={activeBtn}
            />

            <TextInputComponent
                container={style.inputContainer}
                upperLabelStyle={style.inputUpperLabel}
                inputStyle={style.inputstyle}
                insideLabel={activeBtn == 'Date Range' ?'From':'Month'}
                placeholder={'10/03/2023'}
                rightIcon={<BackCalandar />}
            />
            <TextInputComponent
                container={style.inputContainer}
                upperLabelStyle={style.inputUpperLabel}
                inputStyle={style.inputstyle}
                insideLabel={activeBtn == 'Date Range' ?'To':'Year'}
                placeholder={'10/03/2023'}
                rightIcon={<BackCalandar />}
            />

            <Text style={style.locationTxt}>Location</Text>

            <View style={{
                flexDirection: 'row',
                width: SIZES.width * 0.95,
                alignSelf: 'center',
                height: 50,
                marginVertical: 15,
               
            }}>
                <TextInputComponent
                    container={{
                        ...style.inputContainer,
                        width: SIZES.width * 0.58,
                        marginRight: -5,
                        zIndex: 1,
                        borderRadius: 5,
                        borderWidth: 1,
                        borderColor: '#707070',
                        marginHorizontal:0
                    }}
                    inputStyle={style.labelStyle}
                    placeholder={'Postal Code'}
                />
                <DropDownSelect
                    label={'Radius'}
                    isDisable={true}
                    containerStyle={{
                        ...style.inputContainer,
                        width: SIZES.width * 0.37 + 5,
                        marginVertical: 0,
                        borderColor: '#707070',
                        borderWidth: 1,
                        borderRadius: 5,
                        marginTop: 0,
                        marginHorizontal:0,
                        // zIndex:1
                    }}
                    labelStyle={style.labelStyle}
                    listDate={radius}
                />
            </View>
            <Text style={style.AgeGroup}>Age Group</Text>
            <DropDownSelect
                label={'Age Group'}
                containerStyle={style.inputContainer}
                labelStyle={style.labelStyle}
                listDate={age}
                selectListStyle={{
                    width:SIZES.width * 0.95,
                    alignSelf:'center'
                }}
                 />
            {/* {isDisciplineVisible &&  */}
            <Text style={style.Discipline}>Discipline</Text>
            <DropDownSelect
                label={'Select your discipline'}
                containerStyle={style.inputContainer} 
                selectListStyle={{
                    width:SIZES.width * 0.95,
                    alignSelf:'center'
                }}
                listDate={discipline}
                labelStyle={style.labelStyle}/>
            {/* } */}

            <RectangleButton
                label={'Save'}
                buttonStyle={{
                    flex:1,
                    marginLeft:'auto',

                    width: SIZES.width * 0.35,
                    height: 50,
                    //alignSelf: 'center'
                }}
                textStyle={{
                    ...FONTS.regular,
                    fontSize: 14
                }}
                onPress={() => onBtnPress()}
            />
        </ScrollView>
    )
}

const style = StyleSheet.create({
    inputContainer: {
        backgroundColor: 'white',
        borderColor: COLORS.black,
        borderWidth: 0.5,
        width: SIZES.width * 0.95,
        alignSelf: 'center',
        height: 50,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderColor: COLORS.black,
        borderWidth: 0.5,
        marginHorizontal:20

    },
    inputUpperLabel: {
        color: COLORS.black6,
        ...FONTS.regular,
        fontSize: 14,
        marginBottom: 0,
    },
    inputstyle: {
        ...FONTS.regular,
        fontSize: 14,
        flex: 0,
        height: 20,
        padding: 0
    },
    // DateRangeBtn: {
    //     backgroundColor: COLORS.white,
    //     width: '50%',
    //     height: '100%',
    //     borderRadius: 0,
    //     // borderBottomLeftRadius: 5,
    //     // borderTopLeftRadius:5,
    //     marginVertical: 0,
    //     borderColor: COLORS.black,
    //     borderWidth: 0,
    //     marginHorizontal: 0
    // },
    // enableTxtBtn: {
    //     color: COLORS.white,
    //     ...FONTS.regular,
    //     fontSize: 14
    // },
    // btnView: {
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     width: SIZES.width * 0.95,
    //     alignSelf: 'center',
    //     borderWidth: 0.5,
    //     borderRadius: 5,
    //     height: 45,
    //     marginVertical: 22,
    // },
    locationTxt: {
        ...FONTS.regular,
        fontSize: 16,
        color: '#060000',
        marginLeft: SIZES.width * 0.03,
        marginBottom:-10
    },
    labelStyle:{
    ...FONTS.regular,
    fontSize:16,
    color:COLORS.black7
    },
    AgeGroup:{
        ...FONTS.regular,
        fontSize: 16,
        color: '#060000',
        marginLeft: SIZES.width * 0.03,
        marginBottom:SIZES.base
    },
    Discipline:{
        ...FONTS.regular,
        fontSize: 16,
        color: '#060000',
        marginLeft: SIZES.width * 0.03,
        marginBottom:SIZES.base
    },
    Date:{
        ...FONTS.regular,
        fontSize: 16,
        color: '#060000',
        marginLeft: SIZES.width * 0.03,
        marginBottom:SIZES.base
    }

})