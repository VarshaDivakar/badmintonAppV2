import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import Header from '../../components/Header';
import images from '../../constants/images';
import { COLORS, SIZES } from '@app/constants/Theme';
import ArrowBack from '@app/assets/icons/arrow-back.svg';
import Wallet from '@app/assets/icons/wallet.svg';
import BlackCalendar from '@app/assets/icons/back_calendar.svg';
import TextInputComponent from '@app/components/TextInputComponent';
import Search from '@app/assets/icons/search.svg'
import { useNavigation } from '@react-navigation/native';
import navigations from '@app/navigations/navigations';
import Menu from '@app/assets/icons/menu.svg';
export default function MainLayoutWrapperRe({ inputbar=true,title,isBackArrow = true, ...props }) {
  const navigation = useNavigation();
  return (
    <View style={{
      backgroundColor: COLORS.white,
    }}>
      <View style={{
        backgroundColor: COLORS.primary,
        paddingHorizontal: SIZES.baseX4,
        marginBottom: SIZES.baseX2,
        paddingVertical: SIZES.baseX2,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,

      }}>
        <Header title={title}
          leftIcon={
            isBackArrow ? <Pressable onPress={()=>navigation.goBack()}><ArrowBack/></Pressable> :
            <Pressable onPress={()=>navigation.navigate(navigations.home)}>
               <Menu height={20} width={20} />
               </Pressable>
    }
          rightIcon={
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Pressable onPress={()=> navigation.navigate(navigations.transaction)}>
                <Wallet style={{ color: COLORS.white }} />
              </Pressable>
              <Pressable onPress={()=> navigation.navigate(navigations.basicProfile)}>
                <Image
                  source={images.men}
                  style={{ height: 25, width: 25, marginLeft: 15 }} />
              </Pressable>
            </View>
          }
        />
        { inputbar==true && (
        <TextInputComponent
          putComponent
          leftIcon={<View><Search fill={'red'} width={12} height={12} /></View>}
          container={{
            borderColor: '#00000029',
            height: 28,
            backgroundColor: COLORS.white,
            width: SIZES.width - SIZES.baseX4 * 2,
            marginHorizontal: 0,
            borderRadius:5
          }}
          inputStyle={{
            height:20,
            fontSize:12,
            lineHeight:15,
            padding:0,
            marginHorizontal:5
          }}
          //isDropIcon={true}
          rightIcon={<BlackCalendar height={15} style={{ marginRight: 10 }} />}
          outerContainer={{ height: 40, }}
          placeHolderColor="#8592B2"
          placeholder="Search by Category/Date"
        />)
}
      </View>
      {props.children}
    </View>
  )
}