import React, { useState, useRef } from 'react';
import { styles } from './styles';
import { View, Text, Image, FlatList, ImageBackground, Pressable, TouchableOpacity } from 'react-native';
import SafeAreaWraper from '@app/components/SafeAreaWraper';
import { COLORS, FONTS, SIZES } from '@app/constants/Theme';
import CalenderIcon from '@app/assets/icons/Calendar.svg';
import MainLayoutWrapperRe from '@app/components/MainLayoutWrapper/MainLayoutWrapperRe';
import { useNavigation } from '@react-navigation/native';
import navigations from '@app/navigations/navigations';
import Rectanglebutton from '@app/components/Rectanlebutton';
import Check from '@app/assets/icons/check.svg';

export default function CoachAddmatch() {
    const navigation = useNavigation();
    const [checked, setChecked] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);

    const data = [
        { id: '1', tId: '2001', mId: '1001', name: 'Mathew-Hay', date: '25/07/2023', },
        { id: '2', tId: '2002', mId: '1002', name: 'Jane', date: '25/07/2023', },
        { id: '3', tId: '2003', mId: '1003', name: 'Bob', date: '25/07/2023', },
        { id: '4', tId: '2004', mId: '1004', name: 'Mathew-Hay', date: '25/07/2023', },
    ];
    const Checkbox = ({ id }) => {
        const isChecked = selectedItems.includes(id);

        const handleCheckboxToggle = () => {
            if (isChecked) {
                setSelectedItems(selectedItems.filter((item) => item !== id));
            } else {
                setSelectedItems([...selectedItems, id]);
            }
        };
        return (
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <TouchableOpacity
                    style={styles.checkbox}
                    onPress={handleCheckboxToggle}>
                    {isChecked ? (
                        <View style={styles.checked}>
                            {<Check fill={COLORS.primary} height={20} width={20} />}
                        </View>
                    ) : null}
                </TouchableOpacity>
            </View>
        );
    };

    const renderform = () => {
        return (
            <View style={{ flexDirection: 'row', marginLeft: 'auto', right: 10 }}>
                <Rectanglebutton
                    onPress={() => selectedItems.length > 0 ? navigation.navigate(navigations.coachuploadnewresults) : alert('please select the tournament which you want to edit ')}
                    label={'Edit'}
                    buttonStyle={{
                        borderRadius: 5,
                        height: 32,
                        width: 70,
                        backgroundColor: selectedItems.length > 0 ? COLORS.primary : '#9293AA'
                    }}
                />
                <Rectanglebutton
                    //         onPress={() => navigation.navigate('tabCoachDash', {
                    //             screen: navigations.home,})
                    // }
                    onPress={() => navigation.navigate(navigations.coachaddnewmatch)}
                    textStyle={{ color: COLORS.primary }}
                    label={'+Add New'}
                    buttonStyle={styles.addnewbutton}
                />
            </View>
        )
    }
    const renderItem = ({ item }) => (
        <View style={[styles.tableRow,{height:45}]}>
            <View style={styles.emptyCell}>
                <Checkbox id={item.id} />
            </View>
            <View style={styles.tournamentcell}>
            <Text style={{color: '#0D0101',}}>{item.tId}</Text>
            </View>
            <Text style={[styles.tableHeader,{color:'#1F2250',textDecorationLine:'underline'}]}>{item.mId}</Text>
            <Text style={[styles.tableHeader,{color:'#01031C'}]}>{item.date}</Text>
        </View>

    );
    const Table = () => {
        return (
            <View style={styles.container}>
                <View style={styles.tableRow}>
                    <View style={styles.emptyCell}></View>
                    <View style={styles.tournamentcell}>
                    <Text style={{fontWeight: 'bold', color: '#0D0101',}}>Tournament-ID </Text>
                    </View>
                    <Text style={styles.tableheading}>Match-ID</Text>
                    <Text style={styles.tableheading}>Date</Text>
                </View>
                <View style={styles.table}>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </View>
        )
    }
    return (
        <>
            <SafeAreaWraper barStyle={'light-content'} >
                <MainLayoutWrapperRe
                    title={'Add Match'}
                    inputbar={true}
                    searchStyle={{}}
                    isBackArrow={false}
                // onFilter={() => navigation.navigate(navigations.upcomingFilter)}
                >
                    {renderform()}
                    {Table()}

                </MainLayoutWrapperRe>
            </SafeAreaWraper>
        </>
    )

}
