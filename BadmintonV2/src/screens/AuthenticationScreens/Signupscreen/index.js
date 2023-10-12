import { Image, ImageBackground, StyleSheet, Text, View,StatusBar } from 'react-native'
import React from 'react'
import SafeAreaWraper from '@app/components/SafeAreaWraper'
import { COLORS } from '@app/constants/Theme'
import images from '@app/constants/images'
import { Dimensions } from 'react-native'
import Rectanglebutton from '@app/components/Rectanlebutton'
import Navigations from '@app/navigations/navigations';
import { useRecoilState } from 'recoil'
import { type } from '../../../dummyData/recoil'

const Signupscreen = ({navigation}) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [dashboardtype,setdashboardType] = useRecoilState(type);
  return (
    // <SafeAreaWraper  statusbar={'#185461'} barStyle={'light-content'}>
        <View style={styles.mainview}>
     <StatusBar translucent backgroundColor='transparent' barStyle={'light-content'} />

            <ImageBackground
            source={images.Loginbg}
            style={{height:windowHeight+50,width:windowWidth}}/>
            <Image
            source={images.Dhignalogo}
            style={styles.logostyles}/>
            <View style={styles.loginview}>
                <Text style={styles.headtext}>Sign-up</Text>
                <Rectanglebutton 
                onPress={() => {
                    setdashboardType('player')
                    navigation.navigate(Navigations.stackAuthPlayer)
                }}
                buttonStyle={styles.signupbutton}
                textStyle={{fontSize:16,fontWeight:'700'}}
                label={'Player Registration'}
                />
                  <Rectanglebutton 
                   onPress={() => {
                    setdashboardType('coach')
                    navigation.navigate(Navigations.stackAuthCoach)
                }}
                buttonStyle={styles.signupbutton}
                textStyle={{fontSize:16,fontWeight:'700'}}
                label={'Coach Registration'}
                />
                 <Rectanglebutton 
                 onPress={()=>{
                    setdashboardType('club')
                    navigation.navigate(Navigations.stackAuthClub)}}
                buttonStyle={styles.signupbutton}
                textStyle={{fontSize:16,fontWeight:'700'}}
                label={'Club Registration'}
                />
                 <Rectanglebutton 
                buttonStyle={styles.signupbutton}
                textStyle={{fontSize:16,fontWeight:'700'}}
                label={'Sponsor Registration'}
                onPress={() => {
                    setdashboardType('sponser')
                    navigation.navigate(Navigations.stackAuthSponser)
                }}
                />
                

            </View>
            
        </View>

    // </SafeAreaWraper>
  )
}

export default Signupscreen

const styles = StyleSheet.create({
    mainview:{
        flex:1
    },
    logostyles:{
        width:200,
        height:60,
        position:'absolute',
        alignSelf:'center',
        marginVertical:55
        },
            loginview:{
                height:400,
                width:320,
                alignSelf:'center',
                marginTop:200,
                borderRadius:20,
                position:'absolute'
                
            },
            signupbutton:{
                backgroundColor:'#fe771e',
                height:48,
                width:320,

            },
            headtext:{
                fontSize:25,
                fontWeight:'500',
                color:COLORS.white,
                alignSelf:'center',
                marginVertical:15
            }
})