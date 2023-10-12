import React from 'react';
import { styles } from './styles';
import { View, Text, Image, FlatList, ImageBackground, Pressable } from 'react-native';
import SafeAreaWraper from '@app/components/SafeAreaWraper';
import { COLORS, FONTS, SIZES } from '@app/constants/Theme';
import CalenderIcon from '@app/assets/icons/Calendar.svg';
import MainLayoutWrapperRe from '@app/components/MainLayoutWrapper/MainLayoutWrapperRe';
import { useNavigation } from '@react-navigation/native';
import Navigations from '@app/navigations/navigations';
import Rectanglebutton from '@app/components/Rectanlebutton';
import TextInputComponent from '@app/components/TextInputComponent';
import Calendar from '@app/assets/icons/Calendar.svg';
import DropDownSelect from '@app/components/DropDownSelect/DropDownSelect';

export default function CoachAddNewMatch() {
    const navigation = useNavigation();
        const Touranamentid = [
        {
            id: '1',
            name: '1001',
        },
        {
            id: '2',
            name: '1002',
        },
        {
            id: '3',
            name: '1003',
        },
        {
            id: '4',
            name: '1004',
        },
    ];

    const Locationdata = [
        {
            id: '1',
            name: 'Queensland',
        },
        {
            id: '2',
            name: 'Ruephillipe',
        },
        {
            id: '3',
            name: 'Sothampton',
        },
        {
            id: '4',
            name: 'Wembley',
        },
    ];
    const Matchcategory = [
        {
          id: '1',
          name: 'Singles (Boys/Men)​',
        },  
        {
          id: '2',
          name: 'Singles (Girls/Women)​',
        },
        {
          id: '3',
          name: 'Singles (Girls/Women)​',
         
        },
        {
          id: '4',
          name: 'Doubles (Girls/Women)​',
         
        },
      ];

    const renderform = () => {
        return (
            <View style={{ }}>
                 <TextInputComponent
                        container={{ borderWidth: 0 }}
                        inputStyle={{ color: COLORS.black12, fontWeight: '600' }}
                        placeholder={'Date'}
                        rightIcon={<Calendar color={'#777171'} />} />
                    <DropDownSelect
                        selectListStyle={styles.dropdowncontainer}
                        labelStyle={styles.labelStyle}
                        label={'Tournament Id'} listDate={Touranamentid} />
                    <DropDownSelect
                        selectListStyle={styles.dropdowncontainer}
                        labelStyle={styles.labelStyle}
                        label={'Club/location '} listDate={Locationdata} />
                    <TextInputComponent
                        inputStyle={{ color: COLORS.black12, fontWeight: '600' }}

                        container={{
                            borderWidth: 0,
                        }}
                        placeholder={'Enter Your Match Id'}
                    />
                    <DropDownSelect
                        selectListStyle={styles.dropdowncontainer}
                        labelStyle={styles.labelStyle}
                        label={'Select Match Category'} listDate={Matchcategory} />
                    <TextInputComponent
                        inputStyle={{ color: COLORS.black12, fontWeight: '600' }}
                        container={{
                            borderWidth: 0,
                        }}
                        placeholder={'Fee'}
                    />
                    <Rectanglebutton
                    onPress={()=>navigation.navigate(Navigations.coachaddmatch)}
                    label={'Save'}
                    buttonStyle={styles.SavebuttonStyle}
                />

            </View>
        )
    }
    return (
        <>
            <SafeAreaWraper barStyle={'light-content'} >
                <MainLayoutWrapperRe
                    title={'Add Match'}
                    inputbar={false}
                    searchStyle={{}}
                // onFilter={() => navigation.navigate(navigations.upcomingFilter)}
                >
                  {renderform()}
                </MainLayoutWrapperRe>
            </SafeAreaWraper>
        </>
    )

}