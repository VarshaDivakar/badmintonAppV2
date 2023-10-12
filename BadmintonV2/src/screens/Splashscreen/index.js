import { StyleSheet, Text, View, StatusBar, Image } from 'react-native'
import React, { useEffect } from 'react'
import SafeAreaWraper from '@app/components/SafeAreaWraper'
import { ImageBackground } from 'react-native'
import images from '@app/constants/images'
import { Dimensions } from 'react-native'
import { height, width } from '@app/constants/Theme'
import navigations from '@app/navigations/navigations'
import { useNavigation } from '@react-navigation/native'
import Navigations from '@app/navigations/navigations';

const Splashscreen = () => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height
 const navigation=useNavigation();
    useEffect(() => {
        setTimeout(function () {
            funnavigation();
        }, 2000)

    }, [funnavigation])

    const funnavigation=()=>{
        navigation.navigate(Navigations.loginscreen)
    }
    return (
        <View>
            <StatusBar translucent backgroundColor='transparent' barStyle={'light-content'} />
            <View>
                <ImageBackground
                    source={images.Splash}
                    style={styles.backgroundimage}/>
                <Image
                    source={images.Dhignalogo}
                    style={styles.dignalogo} />
            </View>

        </View>
    )
}

export default Splashscreen
const styles = StyleSheet.create({
    backgroundimage: {
        height: height + 50,
        width: width
    },
    dignalogo: {
        position: 'absolute',
        height: 90,
        width: 285,
        alignSelf: 'center',
        marginTop: height / 2

    }
})