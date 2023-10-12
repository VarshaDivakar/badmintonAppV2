import React from 'react';
import {View,Text, Pressable} from 'react-native';
import TextInputComponent from './TextInputComponent';
import Search from '../assets/icons/search.svg';
import { COLORS, SIZES } from '../constants/Theme';
import Filter from '../assets/icons/filter.svg';
import Wallet from '../assets/icons/wallet.svg';
import Notification from '../assets/icons/fillnotifications.svg';
export default function SearchHeader(){
    return (
        <View style={{
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            justifyContent:'space-between',
            
            }}>
            <TextInputComponent 
            leftIcon={<View><Search fill={'red'} width={15} height={15}/></View>}
            container={{
                borderColor: '#00000029',
                height: 38,
                backgroundColor: COLORS.white,
                width: SIZES.width*0.7,

              }}
              outerContainer={{height: 40,}}
              placeHolderColor="#8592B2"
              placeholder="Search"
            />
            <Pressable>
            <Notification 
             height={20} width={15}/>
            </Pressable>
            
            <Pressable>
            <Wallet height={20} width={15} style={{color:COLORS.white}}/>
            </Pressable>
            
            <Pressable>
            <Filter height={20} width={15}/>
            </Pressable>
             
        </View>
    )
}