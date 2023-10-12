import { Image, StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import images from '@app/constants/images'
import Hearticon from '@app/assets/icons/hearticon.svg'
import { COLORS, FONTS, SIZES } from '@app/constants/Theme'
import Location from '@app/assets/icons/location.svg';
import { useNavigation } from '@react-navigation/native';
import navigations from '@app/navigations/navigations';
const Tournamentcard = ({isFavourite=true,isOpen=true}) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={()=> navigation.navigate(navigations.playerfindtournament1,{
      title:'All Matches',
      ListData:{
      id: '1',
      name: 'German Open 2022 (1000IE)',
      location: `Badminton England - Performance | ${'\n'} Mulheim an der Ruhr, Germany`,
      date:'14/03/2023 to 19/03/2023',
    }})}
     style={styles.mainview}>
      <View style={styles.firstview}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <Image source={images.Shuttlecock} />
        <Text style={styles.headtext}>German open 2022 (1000IE)</Text>
        {/* {isFavourite &&  <Hearticon style={styles.heartstyle} />} */}
          </View>
       {isOpen &&  <View style={styles.tagstyles}>
          <Text style={styles.tagtext}>Open</Text>
        </View>}
      </View>
      <View style={styles.secodview}>
        <Location height={25} width={15} style={{color:'#0d0101'}}/>
        <Text style={styles.middletext}>Badminton England - Performance  | {'\n'}Berliner Str. 55, Hilden, 40721, DE</Text>
      </View>
      <View style={styles.lastview}>
        <Image source={images.Calendericon} style={styles.calender} />
        <Text style={styles.lasttext}>15/8/2023 To 15/10/2023</Text>
      </View>

    </Pressable>
  )
}

export default Tournamentcard

const styles = StyleSheet.create({
  mainview: {
    // width: SIZES.width - 20,
    // height: 130,
    // // borderWidth: 1,
    // borderRadius: 10,
    // alignSelf:'center',
    // marginVertical:15


    margin: 10,
    borderRadius: 8,
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
    width: SIZES.width - 20,
    marginVertical: 15,
    borderColor: '#00000029',
    borderWidth: 1,
    shadowColor: '#00000029',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    // elevation: 1,
    padding:10

  },
  firstview: {
    flexDirection: "row",
    // marginTop: 10,
    alignItems: 'center',
    marginHorizontal: 5,
    justifyContent:'space-between'
  },
  tagstyles: {
    height: 20,
    width: 50,
    backgroundColor: "#fe771e",
    borderRadius: 10,
    marginLeft: 25

  },
  tagtext: {
    alignSelf: 'center',
    fontWeight: "bold",
    color: COLORS.white
  },
  heartstyle: {
    marginLeft: 5
  },
  headtext: {
    color: "#501DC9",
    // marginLeft: 10,
    // color: COLORS.white,
    ...FONTS.regular,
    fontSize: 14,
    marginLeft: 10,
    lineHeight:20,
    textDecorationLine:'underline'
    // fontWeight: '700'
  },
  secodview: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    marginHorizontal: 10
  },
  middletext: {
    color: '#0D0101',
    ...FONTS.regular,
    fontSize: 14,
    marginLeft: 10,
    lineHeight:20
  },
  locationstyle: {
    height: 15,
    width: 15
  },
  placetext: {
    marginHorizontal: 15,
    color: COLORS.black,
    marginLeft: 35,
    fontWeight: '500'

  },
  calender: {
    height: 15,
    width: 15,
  },
  lasttext: {
    color: '#0D0101',
    // fontWeight: '600',
    // marginLeft: 15

    // color: COLORS.white,
    ...FONTS.regular,
    fontSize: 14,
    marginLeft: 10,
    lineHeight:20
  },
  lastview: {
    flexDirection: 'row',
    alignItems: "center",
    marginTop: 10,
    marginHorizontal: 10
  }
})