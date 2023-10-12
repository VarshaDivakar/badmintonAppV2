import { StyleSheet, Text, View, Image, Pressable, FlatList } from 'react-native';
import { React, useEffect, useState } from 'react';
import SafeAreaWrapper from '@app/components/SafeAreaWraper';
import { COLORS, SIZES, FONTS } from '@app/constants/Theme';
// import OvelButton from '@app/components/ButtonComponents/OvelButton';
// import TickIcon from '@app/assets/icons/general/tickIcon.svg';
import MainLayoutWrapper from '@app/components/MainLayoutWrapper/MainLayoutWrapperIn';
import images from '@app/constants/images';
import { styles } from './styles';
import RadioButtonComponent from '@app/components/RadioButtonComponent/RadioButtonComponent';
// import Bank from '@app/assets/icons/general/bank.svg';
// import Glob from '@app/assets/icons/general/glob.svg';
import { useNavigation } from '@react-navigation/native';
import Navigations from '@app/navigations/navigations';
import RectangleButton from '@app/components/ButtonComponents/RectangleButton';
import Wallet from '@app/assets/icons/wallet2.svg';
import Bank from '@app/assets/icons/bank.svg';
const Selectpayment = (props) => {
  const navigation = useNavigation();
  const [transferType, setTransferType] = useState('bank');
  const routeName = props?.route.params?.routeName;

  useEffect(()=>{
    console.log('transfer Type ==>',transferType);
  },[transferType])
  //  const [isVerify, setIsVerify] = useState(false);
  const Transfer = [
    {
      id: 0,
      label: 'Via Bank account transfer',
      detail: 'Transfer via any bank account',
      image: <Bank/>,
      code: 'bank',
      type:'Bank'
    },
    // {
    //   id: 1,
    //   label: 'Dhigna Wallet',
    //   detail: 'Bank charges will apply',
    //   image: images.glob,
    //   code: 'wallet'
    // },
    {
      id: 1,
      label: 'Stripe',
      detail: 'Stripe charges will apply',
      image: <Wallet/>,
      code: 'stripe',
      type:'Stripe'
    }
  ]
  const Paymentoption = ({ item }) => {


    return (
      <View style={{ ...styles.Paymentoptionviewstyle, marginBottom: 20 }}>
        <View
          style={{
            height: 56,
            width: 56,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#E6ECF9',
          }}>
            {item.image}
          {/* <Image source={item.image} /> */}
        </View>
        <View style={styles.textviewstyle}>
          <Text style={styles.reviewDetailValue}>{item.label}</Text>
          <Text style={styles.reviewDetailHead}>{item.detail}</Text>
        </View>
        <View style={{
          position: 'absolute',
          right: 20
        }}>
          <RadioButtonComponent
            visible={item.code == transferType ? true : false}
            onPress={() => setTransferType(item.code)}
          />
        </View>
      </View>
    );
  };
  const Totalamount = (label, value) => {
    return (
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Text style={styles.amounttextstyle}>{label}</Text>
        <Text style={styles.amounttextstyle}> - {value}</Text>
      </View>
    );
  };
  return (
    <SafeAreaWrapper barStyle='light-content'
    containerStyle={{paddingHorizontal: 0}}
      statusbar={COLORS.primary}>
    <MainLayoutWrapper containerStyle={{
      height: SIZES.height / 9,
      marginBottom: 40,
      alignItems: 'center',
     
      // paddingTop:20
    }}
    title={'Transfer Details'} >
      <View >
        {/* <View style={{marginLeft:20}}>
        {Totalamount('Total Amount', "£500")}
        </View> */}
        {/* <Totalamount label={'Total Amount'} value={'£500'} /> */}
        <Text style={styles.paymentoptiontextstyle}>
          Select payment type
        </Text>
        <View>
          <FlatList
            data={Transfer}
            renderItem={Paymentoption} />
          <RectangleButton label={'Proceed'}
            onPress={()=>
              {if(transferType == 'bank')
                routeName =='tournament' 
                ? navigation.navigate(Navigations.playerpayment
                  ,{nextScreen: Navigations.accountDetail,type:Transfer[0].type})
                : navigation.navigate(Navigations.playermobileotp,{
                  navigateTo: Navigations.accountDetail
                })
               else if(transferType == 'stripe')
               routeName =='tournament' 
               ? navigation.navigate(Navigations.playerpayment
                ,{nextScreen: Navigations.stripepayment,type:Transfer[1].type})
               : navigation.navigate(Navigations.playermobileotp,
                {navigateTo: Navigations.stripepayment})
              //  else
              //  routeName =='tournament' 
              //  ? navigation.navigate(Navigations.playerpayment
              //   ,{nextScreen: Navigations.stripepayment})
              //  : navigation.navigate(Navigations.playermobileotp,
              //   {navigateTo: Navigations.stripepayment})
              }
            }
            buttonStyle={{
              backgroundColor: COLORS.primary,
              borderRadius: 50,
              height: 48,
              marginTop: 50,
              marginHorizontal: 20,

            }} />
        </View>
      </View>

    </MainLayoutWrapper>
    </SafeAreaWrapper>
  )
}
export default Selectpayment;
