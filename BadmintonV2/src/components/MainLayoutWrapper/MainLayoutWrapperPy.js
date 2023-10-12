import React from 'react';
import {View,Text,Image,Pressable, StyleSheet} from 'react-native';
import Header from '@app/components/Header';
import Menu from '@app/assets/icons/menu.svg';
import SearchHeader from '../../components/SearchHeader';
import images from '../../constants/images';
import { COLORS, SIZES } from '../../constants/Theme';
import Arrowback from '@app/assets/icons/arrow-back.svg';
import TextInputComponent from '../TextInputComponent';
import Filter from '@app/assets/icons/filter.svg';
import Wallet from '@app/assets/icons/wallet.svg';
import Notification from '@app/assets/icons/fillnotifications.svg';
import Search from '@app/assets/icons/search.svg';
import { useNavigation } from '@react-navigation/native';
import navigations from '@app/navigations/navigations';
import Heart from '@app/assets/icons/heart.svg';
export default function MainLayoutWrapperPy({
    title,
    backgroundColor=COLORS.white,
    isBackArrow=false,
    isProfile=true,
    isFilter=true,
    isHeart=false,
    onFilter,
    containerStyle,
    searchStyle,
    ...props
}){
 const navigation = useNavigation();
    const searchHeader = ()=>{
        return  <View style={style.headerContainer}>
            <TextInputComponent 
            leftIcon={<View><Search fill={'red'} width={15} height={15}/></View>}
            container={{...style.inputContainer,...searchStyle}}
              outerContainer={{height: 28}}
              inputStyle={{
                height:20,
                fontSize:12,
                lineHeight:15,
                padding:0,
                marginHorizontal:5
              }}
              placeHolderColor="#8592B2"
              placeholder="Search"
            />
            <Pressable>
            <Notification 
             height={20} width={15}/>
            </Pressable>
            
            <Pressable onPress={()=> navigation.navigate(navigations.transaction)}>
            <Wallet height={20} width={15} style={{color:COLORS.white}}/>
            </Pressable>
            
          {isFilter &&  <Pressable onPress={()=>onFilter()}>
            <Filter height={20} width={15} style={{color:COLORS.white}}/>
            </Pressable>}
           
            {isHeart &&  <Pressable onPress={()=>navigation.navigate(navigations.favourite)}>
            <Heart height={20} width={15} style={{color:COLORS.white}}/>
            </Pressable>}
             
        </View>
    }
    return (
        <View style={{
            backgroundColor:backgroundColor,
         flex:1
        }}>
       <View style={{...style.container,...containerStyle}}>
         <Header title={title}
                leftIcon={
                    isBackArrow ? <Pressable onPress={()=>navigation.goBack()}>
                        <Arrowback/>
                        </Pressable> :
                    <Pressable onPress={()=>navigation.navigate(navigations.home)}>
                         <Menu height={20} width={20} />
                     </Pressable>
            }
                rightIcon={isProfile && 
                <Pressable 
                onPress={()=> navigation.navigate(navigations.basicProfile)}> 
                <Image source ={images.men} style={{height:25,width:25}}/>
                </Pressable>}
            />
            {searchHeader()}
       </View>
       {props.children}
       </View>
    )
}
const style = StyleSheet.create({
    container:{
        backgroundColor:COLORS.primary,
        paddingHorizontal: SIZES.baseX4,
        marginBottom:SIZES.baseX2,
        paddingVertical:SIZES.baseX2,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
       },
       headerContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        justifyContent:'space-between',
        // backgroundColor:'red'
        },
        inputContainer:{
            borderColor: '#00000029',
            height: 28,
            backgroundColor: COLORS.white,
            width: SIZES.width*0.7,
            marginHorizontal:0,
            borderRadius:5
            // marginVertical:10


          }
})