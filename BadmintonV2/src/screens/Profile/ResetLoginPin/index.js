import React from "react";
import { View } from "react-native";
import SafeAreaWrapper from '@app/components/SafeAreaWraper';
import {COLORS, SIZES, FONTS} from '@app/constants/Theme';
import MainLayoutWrapper from '@app/components/MainLayoutWrapper/MainLayoutWrapperIn';
import {useNavigation} from '@react-navigation/native';
import RectangleButton from '@app/components/ButtonComponents/RectangleButton';
import KeyboardAvoidWrapper from '@app/components/Keyboardavoidwraper';
import TextInputComponent from "@app/components/TextInputComponent";
import { styles } from "./styles";
import navigations from "@app/navigations/navigations";
export default function ResetLoginPin(){
    const navigation = useNavigation();
    const OnSubmitPress = ()=>{
        // alert('click');
        navigation.goBack();
          }
    const InsideLogin = ()=>{
        return(
            <View style={styles.subcontainerstyle}>
              <TextInputComponent
            borderColor="#8592B2"
            name="CVV"
            placeholder="Enter your old PIN"
            placeHolderColor={COLORS.blue4}
            container={{
              marginVertical: SIZES.baseX4,
              borderColor: '#C7CCD9',
            }}
           
          />
           <TextInputComponent
            borderColor="#8592B2"
            name="CVV"
            placeholder="Enter your new PIN"
            placeHolderColor={COLORS.blue4}
            container={{
              marginVertical: SIZES.baseX4,
              borderColor: '#C7CCD9',
            }}
           
          />
           <TextInputComponent
            borderColor="#8592B2"
            name="CVV"
            placeholder="Re-Enter your new PIN"
            placeHolderColor={COLORS.blue4}
            container={{
              marginVertical: SIZES.baseX4,
              borderColor: '#C7CCD9',
            }}
          
          />
            </View>
        )
    }
    return(
        <SafeAreaWrapper
        containerStyle={{paddingHorizontal: 0}}
        statusbar={COLORS.primary}
        barStyle="light-content"
        backgroundColor={COLORS.gray3}>
        <MainLayoutWrapper
          containerStyle={{
            height: SIZES.height / 8,
          }}
          containbg={{backgroundColor: COLORS.white}}
          title={'Reset Login PIN'}>
          <KeyboardAvoidWrapper>
            {InsideLogin()}
  
            <RectangleButton
              label="Submit"
              buttonStyle={{
                height: 48,
                borderRadius: 30,
                width:'60%',
                alignSelf:'center',
                // position:'absolute',
                // bottom:15
              }}
              textStyle={{}}
              // onPress={()=>navigation.navigate(Navigations.beneficiaryotpscreen)}
              onPress={()=> OnSubmitPress()}
            />
          </KeyboardAvoidWrapper>
        </MainLayoutWrapper>
      </SafeAreaWrapper>  
    )
}