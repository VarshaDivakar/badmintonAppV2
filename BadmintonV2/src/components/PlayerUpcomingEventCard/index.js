import navigations from "@app/navigations/navigations";
import { useNavigation } from "@react-navigation/native";
import { React } from "react";
import {View,Text,ImageBackground,Pressable,Image} from 'react-native';
import Location from '@app/assets/icons/location.svg';
import CalenderIcon from '@app/assets/icons/Calendar.svg';
import images from "@app/constants/images";
import { COLORS, FONTS, SIZES } from "@app/constants/Theme";
import Tick from '@app/assets/icons/Tick2.svg';

export default function PlayerUpcomingEventCard({item}){
    const navigation = useNavigation();
    return(
        <View 
        onPress={()=> navigation.navigate(navigations.upcomingEventTrack,{eventItem:item})}
        > 
                            <ImageBackground
                            source={images.badmintonBg}
                            imageStyle={{ borderRadius: 15 }}
                            style={{
                                height: 150,
                                width: SIZES.width * 0.9,
                                alignSelf: 'center',
                                marginBottom: 20,
                            }}>
                            <View style={{
                                backgroundColor: 'rgba(10, 0, 0, 0.60)',
                                height: '100%',
                                width: '100%',
                                borderRadius: 15,
                                paddingHorizontal: 20,
                                paddingVertical: 10
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    // marginBottom: 20,
                                }}>
                                    <View style={{
                                    flexDirection: 'row',
                                    // justifyContent: 'space-between',
                                    marginBottom: 20,
                                    alignItems:'center'
                                  
                                }}>
                                    <Text style={{
                                        color: COLORS.white,
                                        ...FONTS.bold,
                                        fontSize: 14,
                                        marginRight:10,
                                    }}>{item.title}</Text>
                                    {/* <Image source={images.heart} style={{ width: 17, height: 20, resizeMode: 'center' }} /> */}
                                    </View>
                                    <View style={{
                                        backgroundColor:item.isSelect?COLORS.blue3: COLORS.white,
                                        height:25,
                                        width:25,
                                        borderRadius:20,
                                        justifyContent:'center',
                                        alignItems:'center'
                                    }}>
                                       {item.isSelect && <Tick/>}
                                    </View>
                                </View>

                                <View style={{
                                    flexDirection: 'row',
                                    // alignItems: 'center',
                                    width: SIZES.width * 0.7,
                                    marginBottom: 10
                                }}>
                                    <Location height={20} style={{marginTop:3,color:'white'}}/>
                                    <Text style={{
                                        color: COLORS.white,
                                        ...FONTS.regular,
                                        fontSize: 14,
                                        marginLeft: 10,
                                        lineHeight:20
                                    }}>{item.location}</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <CalenderIcon height={20} style={{color:COLORS.white}}/>
                                    <Text style={{
                                        color: COLORS.white,
                                        ...FONTS.regular,
                                        fontSize: 14,

                                        marginLeft: 10
                                    }}>{item.time}</Text>
                                </View>
                            </View>
                        </ImageBackground>
                        </View>
    )
}