import React,{useRef,useState} from "react";
import {View,Text,Animated,StyleSheet} from 'react-native';
import RectangleButton from '@app/components/ButtonComponents/RectangleButton';
import { COLORS, FONTS, SIZES } from "@app/constants/Theme";
export default function AnimatedButton({
    setActiveBtn,
    leftBtn,
    rightBtn,
    activeBtn
}){
    const fadeAnim = useRef(new Animated.Value(0)).current;
    console.log('fadeAnim ==>', fadeAnim);

    const movetoLeft = () => {
        console.log('move to left')
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 50,
            useNativeDriver: true,
        }).start();
        setTimeout(()=>{
            setActiveBtn(leftBtn)
        },100)
        
    }

    const moveToRight = () => {
        Animated.timing(fadeAnim, {
            toValue: SIZES.width * 0.45,
            duration: 50,
            useNativeDriver: true,
        }).start();
        setTimeout(()=>{
            setActiveBtn(rightBtn)
        },100)
       
    }

    return (
        <View style={style.btnView}>
                <RectangleButton
                    buttonStyle={{
                        ...style.DateRangeBtn,
                    borderBottomLeftRadius:5,
                borderTopLeftRadius:5}}
                    textStyle={{
                        color: COLORS.black,
                        ...FONTS.regular,
                        fontSize: 14
                    }}
                    label={leftBtn} 
                    onPress={() => movetoLeft()}
                />
                <RectangleButton
                    buttonStyle={{
                        ...style.DateRangeBtn,
                        borderBottomRightRadius:5,
                borderTopRightRadius:5
                    }}
                    textStyle={{
                        color: COLORS.black,
                        ...FONTS.regular,
                        fontSize: 14
                    }}
                    label={rightBtn}
                    onPress={() => moveToRight()}
                />
                <Animated.View style={{
                    backgroundColor: COLORS.orange,
                    width:SIZES.width*0.5,
                    borderRadius: 5,
                    // opacity:0,
                    justifyContent:'center',
                    alignItems:'center',
                    height: '100%',
                    position: 'absolute',
                    // left:fadeAnim,
                    // marginHorizontal:50,
                     transform: [{ translateX: fadeAnim }]
                }}>
                    <Text style={{
                        color: COLORS.white,
                        ...FONTS.regular,
                        fontSize: 14}}>{activeBtn}</Text>
                </Animated.View>
            </View>
    )
}

const style = StyleSheet.create({
    DateRangeBtn: {
        backgroundColor: COLORS.white,
        width: SIZES.width*0.42,
        height: '100%',
        borderRadius: 0,
        // borderBottomLeftRadius: 5,
        // borderTopLeftRadius:5,
        marginVertical: 0,
        borderColor: COLORS.black,
        borderWidth: 0,
        marginHorizontal: 0
    },
    btnView: {
        flexDirection: 'row',
        // justifyContent: 'center',
        width: SIZES.width * 0.95,
        alignSelf: 'center',
        borderWidth: 0.6,
        borderRadius: 5,
        height: 45,
        marginBottom: 22,
        // alignItems:'center'
        
    },
})