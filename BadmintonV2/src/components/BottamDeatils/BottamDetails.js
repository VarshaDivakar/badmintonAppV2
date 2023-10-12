import {COLORS, FONTS, SIZES, width, Platform} from '@app/constants/Theme';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Downloadbut from '@app/assets/icons/downloadbut.svg';
import Edit from '@app/assets/icons/Editprofileicon.svg';
import AddImage from '@app/assets/icons/addImage.svg';
import AddNote from '@app/assets/icons/addNote.svg';
import {useNavigation} from '@react-navigation/native';

export default function BottamDetails({
  setModelVisible,
  setModelVisibleBot,
  Botitem,
}) {
  const navigation = useNavigation();

  const gotoLoginScreen = () => {
    setModelVisible(false);
    setModelVisibleBot(true);
  };

  const DataPreview = ({
    label,
    value,
    label1,
    value1,
    label2,
    value2,
    reviewDetailUpdate,
  }) => {
    return (
      <View style={styles.reviewDetailWrap}>
        {label && <Text style={styles.reviewDetailHead}>{label}</Text>}
        {value && <Text style={styles.reviewDetailValue}>{value}</Text>}
        {label1 && (
          <Text style={[styles.reviewDetailValue1, reviewDetailUpdate]}>
            {label1}
          </Text>
        )}
        {value1 && <Text style={styles.reviewDetailHead1}>{value1}</Text>}
        {label2 && <Text style={styles.reviewDetailValue2}>{label2}</Text>}
        {value2 && <Text style={styles.reviewDetailHead2}>{value2}</Text>}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperbar} />
      <Text style={styles.headerText}>Transaction Details</Text>
      {/* <View style={{...styles.rowscontainer, marginTop: 25}}>
        <DataPreview
          reviewDetailUpdate={{
            color: Botitem.type === 'debit' ? COLORS.green : COLORS.red,
          }}
          label1={
            Botitem.settled_currency +
            ' ' +
            parseFloat(Botitem.amount).toFixed(2)
          }
          value1={'Paid Out/'}
        />
        <DataPreview
          label2={Botitem.meta.beneficiary_name}
          value2={Botitem.urn}
        />
      </View> */}

<View style={{...styles.rowscontainer, marginTop: 25}}>
        <DataPreview label1={'£250.00'} value1={'Paid Out/'} />
        <DataPreview
          label2={'Karthirenia Campbell'}
          value2={'12345678912345'}
        />
      </View>

      <View>
        <DataPreview value1={'Pending Confirmation'} />
      </View>

      <View style={styles.imagescontainer}>
        <View style={styles.imagesView}>
          <Downloadbut />
          <Text style={styles.reviewDetailHead}>Statement</Text>
        </View>
        <View style={styles.imagesView}>
         <View style={{backgroundColor:'#e6ecf9',
         height:48,
         width:48,
         justifyContent:'center',
         alignItems:'center',
         borderRadius:10
        }}> 
          <Edit style={{color:'#1040ba'}}/>
         </View>
          <Text style={styles.reviewDetailHead}>Edit Details</Text>
        </View>
        <View style={styles.imagesView}>
          <AddImage />
          <Text style={styles.reviewDetailHead}>Add Image</Text>
        </View>
        <View style={styles.imagesView}>
          <AddNote />
          <Text style={styles.reviewDetailHead}>Add Note</Text>
        </View>
      </View>

      <View style={styles.rowscontainer}>
        <DataPreview label={'Basic Details'} value={'Bank'} />
        <DataPreview label={'Date & Time'} value={'12 Jan  2021  ,19:38'} />
      </View>

      <View style={styles.rowscontainer2}>
        <DataPreview label={'Sending Currency'} value={'INR'} />
        <DataPreview label={'Recevier Currency'} value={'GBP'} />
      </View>

      <View style={styles.rowscontainer2}>
        <DataPreview label={'Sender account'} value={'wallet1'} />
        <DataPreview label={'Beneficiary account'} value={'Karthik Campbell'} />
      </View>

      <View style={styles.rowscontainer2}>
        <DataPreview label={'Refence'} value={'Withdraw'} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.baseX5,
    paddingVertical: SIZES.baseX5,
  },
  upperbar: {
    width: 85,
    height: 5,
    backgroundColor: COLORS.gray7,
    borderRadius: SIZES.base,
    alignSelf: 'center',
    marginTop: -SIZES.base,
    opacity: 0.3,
  },
  headerText: {
    ...FONTS.regular,
    fontSize: 16,
    lineHeight: 35,
    color: COLORS.black,
    marginTop: SIZES.baseX2,
  },
  reviewDetailWrap: {
    width: width / 2 - 10,
  },
  reviewDetailHead1: {
    ...FONTS.regular,
    fontSize: 14,
    color: COLORS.blue4,
    lineHeight: 20,
    marginLeft: 8,
  },
  reviewDetailValue1: {
    ...FONTS.medium,
    fontSize: 15,
    color: COLORS.red,
    lineHeight: 20,
    marginLeft: 8,
  },
  reviewDetailValue2: {
    ...FONTS.medium,
    fontSize: 15,
    color: COLORS.blue8,
    lineHeight: 20,
    marginLeft: 8,
  },
  reviewDetailHead2: {
    ...FONTS.regular,
    fontSize: 14,
    color: COLORS.blue4,
    lineHeight: 20,
    marginLeft: 8,
  },
  reviewDetailHead: {
    ...FONTS.regular,
    fontSize: 12,
    color: COLORS.blue5,
    lineHeight: 20,
    marginLeft: 8,
  },
  reviewDetailValue: {
    ...FONTS.medium,
    fontSize: 12,
    color: COLORS.blue4,
    lineHeight: 20,
    marginLeft: 8,
  },
  imagesView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagescontainer: {
    justifyContent: 'space-between',
    width: width - 40,
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 45,
    alignItems: 'center',
    marginBottom: 45,
  },
  rowscontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowscontainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  // test: {
  //   ...Platform.select({
  //     ios: {
  //       // backgroundColor: 'red',
  //       marginTop: SIZES.base - 105,
  //     },
  //     android: {
  //       // backgroundColor: 'blue',
  //       marginTop: SIZES.base - 115,
  //     },
  //   }),
  // },
});
