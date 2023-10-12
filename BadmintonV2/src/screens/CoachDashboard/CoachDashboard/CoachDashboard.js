import MainLayoutWrapperIn from "@app/components/MainLayoutWrapper/MainLayoutWrapperWl";
import SafeAreaWraper from "@app/components/SafeAreaWraper";
import StripCalendar from "@app/components/StripCalendar";
import images from "@app/constants/images";
import { COLORS, FONTS, SIZES } from "@app/constants/Theme";
import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import Wallet from '@app/assets/icons/wallet.svg'
// import { LineChart } from "react-native-chart-kit";
import { LineChart } from "react-native-gifted-charts";
import TextInputComponent from "@app/components/TextInputComponent";
import Search from '@app/assets/icons/search.svg';
import ExpandIcon from '@app/assets/icons/ExpandIcon.svg';
import AddEventModal from "../../AuthenticationScreens/CoachRegistration/AddEventModal";
import Toast  from "react-native-toast-message";

export default function CoachDashboard() {
    const [modalVisible, setModalVisible] = useState(false);
    const data = [
        { value: 15, label: 'Jan 1' },
        { value: 30, label: 'Jan 8' },
        { value: 26, label: 'Jan 15' },
        { value: 40, label: 'Jan 22' }];
    // const data = {
    //     labels: ["Jan 1", "Jan 8", "Jan 15", "Jan 22"],
    //     datasets: [
    //         {
    //             data: [1, 2, 1, 3, 1,2],
    //             color: (opacity = 1) => `rgba(31, 34, 80, 0.8)`, // optional
    //             strokeWidth: 2, // optional
    //         }
    //     ],
    //     // legend: ["%50"] // optional
    // };
    const chartConfig = {
        // backgroundGradientFrom: "#000000",
        backgroundGradientFromOpacity: 0,
        // backgroundGradientTo: "#FFFFFF",
        backgroundGradientToOpacity: 0,
        color: (opacity = 1) => `rgba(31, 34, 80, 0.2)`,
        fillShadowGradientFrom: COLORS.primary,
        fillShadowGradientFromOpacity: 1,
        fillShadowGradientTo: '#FFFFFF',
        fillShadowGradientToOpacity: 0,
        decimalPlaces: 1, // optional, defaults to 2dp
        strokeWidth: 1, // optional, default 3
        labelColor: (opacity = 1) => `#545F7A`,
    };
    return (
        <SafeAreaWraper barStyle={'light-content'}>
            <MainLayoutWrapperIn title={'Dashboard'}
                rightIcon={<Wallet style={{ color: COLORS.white }} />}
                containerStyle={style.mainLayoutContainer}>
                <View style={style.profileView}>
                    <Image source={images.men}
                        style={style.profile} />
                    <Text style={{ color: COLORS.white, marginLeft: 10 }}>John Smith</Text>
                </View>
                <StripCalendar
                    btnLabel={'+Add Event'}
                    btnSty={{
                        backgroundColor: COLORS.orange,
                        ...FONTS.medium,
                        color: COLORS.white,
                        fontSize: 12,
                        paddingHorizontal: 10,
                        borderRadius: 3
                    }}
                    onBtnPress={() => {
                      
                         setModalVisible(true) }}
                />
                <View style={{
                    height: SIZES.height * 0.7,
                    // backgroundColor:'yellow'
                }}>
                    <TextInputComponent
                        leftIcon={<View><Search fill={'red'} width={15} height={15} /></View>}
                        rightIcon={<ExpandIcon />}
                        container={style.inputContainer}
                        outerContainer={{ height: 40 }}
                        placeHolderColor="#787575"
                        placeholder="Search By Clubs"
                        inputStyle={{
                            fontSize:12,
                            color:'#787575'
                        }}
                    />
                    <View style={{
                        marginVertical: 30,
                        position: 'absolute',
                        bottom: 100,
                        alignSelf: 'center',
                            }}>
                    <LineChart
                        curved
                        areaChart
                        // width={SIZES.width*0.9}
                        height={SIZES.height*0.3}
                        data={data}
                        isAnimated={true}
                        startFillColor1={COLORS.primary}
            startFillColor2={COLORS.primary}
            endFillColor1="#ffffff"
            endFillColor2="#ffffff"
            startOpacity={0.9}
            endOpacity={0.2}
            noOfSections={5}
            yAxisColor="#088DEC0F"
            yAxisLabelSuffix="k"
            yAxisLabelPrefix="$"
            // yAxisLabelPreffix="6"
            xAxisColor="#088DEC0F"
            yAxisTextStyle={{color: '#545F7A',...FONTS.regular,fontSize:12}}
            xAxisTextStyle={{color: '#545F7A',...FONTS.regular,fontSize:2}}

            pointerConfig={{
              pointerStripUptoDataPoint: true,
              pointerStripColor: '#088DEC',
              pointerStripWidth: 4,
              strokeDashArray: [2, 5],
              pointerColor: '#ffffff',
              
              radius: 4,
              pointerLabelWidth: 100,
              pointerLabelHeight: 120,
              pointerLabelComponent: items => {
                return (
                  <View
                    style={{
                      height: 50,
                      width: 80,
                      backgroundColor: COLORS.white,
                      borderRadius: 4,
                      justifyContent:'center',
                      alignItems:'center',
                      elevation:2
                    //   paddingLeft:16,
                    }}>
                    <Text style={{color: COLORS.black,fontSize:16}}>{items[0].value}</Text>
                    {/* <Text style={{color: 'white', fontWeight:'bold'}}>{items[0].value}</Text>
                    <Text style={{color: 'lightgray',fontSize:12,marginTop:12}}>{2019}</Text>
                    <Text style={{color: 'white', fontWeight:'bold'}}>{items[1].value}</Text> */}
                  </View>
                );
              },
            }}
                       />
                        </View>
                    {/* <LineChart
                    data={data}
                    width={SIZES.width - 20}
                    height={SIZES.height*0.4}
                    verticalLabelRotation={0}
                    chartConfig={chartConfig}
                    yAxisLabel="$"
                    yAxisSuffix="k"
                    yAxisInterval={1}
                    fromZero
                    bezier
                    style={{
                        marginVertical:30,
                        position:'absolute',
                        bottom:50,
                        alignSelf:'center',
                        // Top:SIZES.height,
                        // backgroundColor:'green' 
                    }}
                    onDataPointClick={(index,value)=>console.log('value ==>',value,index)}
                    renderDotContent={(x,y)=> <View style={{position:'absolute'}}><Text>hello</Text></View>}
                /> */}
                </View>
            </MainLayoutWrapperIn>
            <AddEventModal
                isModalVisible={modalVisible}
                onClose={() => setModalVisible(false)}
            />
        </SafeAreaWraper>
    )
}
const style = StyleSheet.create({
    profileView: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    profile: {
        height: 35,
        width: 35,
        borderRadius: 25
    },
    mainLayoutContainer: {
        backgroundColor: COLORS.primary,
        height: 40,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        marginBottom: 0,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        padding: 0,
        paddingTop: 10,
        paddingHorizontal: 25,
        alignItems: 'center'
    },
    inputContainer: {
        borderColor: '#00000029',
        height: 48,
        // backgroundColor: COLORS.white,
        width: SIZES.width - 20,
        marginHorizontal: 0,
        alignSelf: 'center',
        marginVertical: 20

    }
})