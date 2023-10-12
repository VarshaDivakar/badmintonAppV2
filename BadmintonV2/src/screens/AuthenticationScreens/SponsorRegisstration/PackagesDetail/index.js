import { COLORS, FONTS, SIZES } from "@app/constants/Theme";
import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import AddIcon from '@app/assets/icons/addicon.svg';
import MinusIcon from '@app/assets/icons/minusicon.svg';
import SafeAreaWraper from "@app/components/SafeAreaWraper";
import MainLayoutWrapperPy from "@app/components/MainLayoutWrapper/MainLayoutWrapperPy";
import Rectanglebutton from "@app/components/Rectanlebutton";
import { useNavigation } from "@react-navigation/native";
import navigations from "@app/navigations/navigations";
export default function PackagesDetail(props) {
  const packDetails = props?.route?.params?.packagesDetail;
  const navigation = useNavigation();
  console.log('packages Detail ==>', packDetails);
  const [selectedList, setSelectedList] = useState('');
  const _renderPackDetail = ({ item }) => {
    console.log('packdetail item ==>', item)
    return <>
      <View style={styles.headings}>
        <Text style={styles.title}>{item?.title}</Text>
        <Pressable
        style={styles.plusBtn}
          onPress={() =>{
            console.log('press')
            setSelectedList(selectedList == item.title ? '' : item?.title)
          }
          }
        >
          {selectedList === item?.title ? <MinusIcon /> : <AddIcon />}
          {/* <AddIcon /> */}
        </Pressable>
      </View>
    
        {selectedList == item.title &&   <View style={{
          borderBottomColor: '#D1CCCC',
          borderBottomWidth: 1,
          // height: 50
          paddingVertical:10
      }}> 
      <FlatList data={item.item}
          renderItem={({ item }) => <Text style={{
            ...FONTS.medium,
            fontSize: 14,
            color: COLORS.black11,
            marginHorizontal: 40,
            marginBottom: 10
          }}>{item}</Text>} />
          </View>
        }
      
    </>
  }
  return (
    <SafeAreaWraper>
      <MainLayoutWrapperPy
        title={'Packages'}
        isBackArrow={true}
        isFilter={false}
        searchStyle={{
          width: SIZES.width * 0.8
        }}>
        <Text style={styles.title1}>{packDetails.title}</Text>
        <FlatList data={packDetails.items}
          renderItem={_renderPackDetail}
          ListFooterComponent={<View><View style={{...styles.headings,height:40}}>
            <Text style={styles.total}>Total</Text>
            <Text style={styles.total}>$ 25.000</Text>
          </View>
            <View style={styles.btnView}>
              <Rectanglebutton label={'Cancel'} buttonStyle={{
                height: 35,
                width: 120,
                backgroundColor: COLORS.white,
                borderColor: COLORS.primary,
                borderWidth: 1
              }} 
                textStyle={{
                  color: COLORS.primary
                }}
                onPress={()=> navigation.goBack()}
              />
              <Rectanglebutton label={'Continue'} buttonStyle={{
                height: 35,
                width: 120,
              }} onPress={()=> navigation.navigate(navigations.selectPayment)} />
            </View>
          </View>}
        />

      </MainLayoutWrapperPy>
    </SafeAreaWraper>
  )
}
const styles = StyleSheet.create({
  headings: {
    paddingHorizontal: 22,
    // marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#D1CCCC',
    borderBottomWidth: 1,
    height: 50

  },
  title: {
    ...FONTS.regular,
    color: COLORS.black4,
    fontSize: 14,
  },
  title1: {
    ...FONTS.bold,
    fontSize: 18,
    color: COLORS.black5,
    paddingHorizontal: 16,
    borderBottomColor: '#D1CCCC',
    borderBottomWidth: 1,
    height: 50,
    // backgroundColor:'green',
    textAlignVertical: 'center'
  },
  btnView: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  total: {
    ...FONTS.medium,
    color: COLORS.orange,
    fontSize: 14,
  },
  plusBtn:{
    width:30,
    alignItems:'center',
    height:30,
    justifyContent:'center'}
})