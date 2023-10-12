import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import { COLORS } from "../constants/Theme";
import WhiteCalendar from '../assets/icons/Calendar.svg';
export default function StripCalendar({btnLabel="Mens Single",btnSty,onBtnPress}) {
    let monthArr = ['Jan', 'Feb', 'March', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    const [monthYear, setMonthYear] = useState('');
    const onWeekChange = (start, end) => {
        console.log(start, end);
        const startDate = new Date(start);
        const endDate = new Date(end);
        const sMonth = startDate.getMonth();
        const sYear = startDate.getFullYear().toString().slice(2, 4);
        const eMonth = endDate.getMonth();
        const eYear = endDate.getFullYear().toString().slice(2, 4);
        let monthYear = '';
        if (sMonth != eMonth) {
            if (sYear != eYear)
                monthYear = `${monthArr[sMonth]} ${sYear}/${monthArr[eMonth]} ${eYear}`;
            else
                monthYear = `${monthArr[sMonth]}/${monthArr[eMonth]} ${sYear}`;
        } else
            monthYear = `${monthArr[sMonth]} ${sYear}`;
        setMonthYear(monthYear);
        console.log('start Date ==>', monthYear)
        console.log('start Date year ==>', startDate.getFullYear())

    }
    return (
        <View style={{ backgroundColor: COLORS.primary }}>
            <View style={style.headerStrpipView}>
                <View style={{
                    flexDirection:'row',
                    alignItems:'center'
                }}>
                    <WhiteCalendar width="14" height="14" style={{color:COLORS.white}}/>
                    <Text style={style.headerMonthYear}>{monthYear}</Text>
                </View>
                
                <TouchableOpacity onPress={()=> onBtnPress()}>
                    <Text style={{...style.headerRightBtn,...btnSty}}>{btnLabel}</Text>
                </TouchableOpacity>
            </View>
            <CalendarStrip
                style={{
                    height: 50,
                    marginVertical: 20
                }}
                // scrollable={true}
                onWeekChanged={(start, end) => onWeekChange(start, end)}
                showMonth={false}
                calendarColor={COLORS.primary}
                calendarHeaderStyle={{ color: 'white' }}
                dateNumberStyle={{ color: 'white', fontSize: 15 }}
                dateNameStyle={{ color: COLORS.gray, fontSize: 12 }}
                highlightDateNameStyle={{ color: COLORS.white, }}
                highlightDateNumberStyle={{ color: COLORS.white, }}
                highlightDateContainerStyle={{
                    backgroundColor: COLORS.orange,
                    borderRadius: 16,

                }}
                selectedDate={new Date()}
            //   iconContainer={{ flex: 0.1 }}
            />
        </View>
    )
}
const style = StyleSheet.create({
    headerStrpipView: {
        width: '100%',
        height: 20,
        backgroundColor: COLORS.primary,
        alignSelf: 'center',
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerMonthYear: {
        color: COLORS.white,
        fontSize: 15,
        lineHeight: 20,
        marginLeft:5
    },
    headerRightBtn: {
        color: COLORS.orange,
        fontSize: 15
    }
})