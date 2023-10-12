import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import OvelButton from '@app/components/ButtonComponents/OvelButton';
import {COLORS, FONTS, SIZES} from '@app/constants/themes';
import {useNavigation} from '@react-navigation/native';
import Navigations from '@app/navigations/navigations';
import RectangleButton from '@app/components/ButtonComponents/RectangleButton';
import Downloadbut from '@app/assets/icons/general/downloadbut.svg';
import Edit from '@app/assets/icons/general/edit.svg';
import AddImage from '@app/assets/icons/general/addImage.svg';
import AddNote from '@app/assets/icons/general/addNote.svg';

const DataPreview = ({label, value, label1, value1, label2, value2}) => {
  return (
    <View style={styles.reviewDetailWrap}>
      <View style={styles.renderImageWrap}>
        {/* {item?.subLabel && (
              <Text style={styles.reviewDetailHead}>({item?.subLabel})</Text>
            )} */}
      </View>
      <Text style={styles.reviewDetailHead}>{label}</Text>
      <Text style={styles.reviewDetailValue}>{value}</Text>
      <Text style={styles.reviewDetailValue1}>{label1}</Text>
      <Text style={styles.reviewDetailHead1}>{value1}</Text>
      <Text style={styles.reviewDetailValue2}>{label2}</Text>
      <Text style={styles.reviewDetailHead2}>{value2}</Text>
      {/* {item?.value == 'IMAGE' ? (
            renderImageItem()
          ) : (
            <Text style={styles.reviewDetailValue}>{item?.value}</Text>
          )} */}
    </View>
  );
};

const TransactionModel = ({setModelVisible, setModelVisibleBot}) => {
  const navigation = useNavigation();

  const gotoLoginScreen = () => {
    setModelVisible(false);
    setModelVisibleBot(true);
    //  navigation.navigate(Navigations.officerDetailsShareScreen);
  };
  return (
    <View 
    style={styles.container}
    >
      <View style={styles.upperbar}></View>
      <Text style={styles.headerText}>Transaction Details</Text>
      <View style={{marginTop: SIZES.baseX2 - 30, flexDirection: 'row'}}>
        <DataPreview label1={'£250.00'} value1={'Paid In / Accepted'} />
        <View style={{marginTop: SIZES.base - 47, marginLeft: SIZES.base * 6}}>
          <DataPreview
            label2={'Karthirenia Campbell'}
            value2={'12345678912345'}
          />
        </View>
      </View>
      <View style={styles.imagescontainer}>
        <View style={{flexDirection: 'row', paddingHorizontal: 20}}>
          <View style={styles.imagesView}>
            <Downloadbut />
            <DataPreview label={'Statement'} />
          </View>
          <View style={styles.imagesView}>
            <Edit />
            <DataPreview label={'Edit Details'} />
          </View>
          <View style={styles.imagesView}>
            <AddImage />
            <DataPreview label={'Add Image'} />
          </View>
          <View style={styles.imagesView}>
            <AddNote />

            <DataPreview label={'Add Note'} />
          </View>
        </View>
      </View>
      <View style={styles.rowscontainer}>
        <DataPreview label={'Basic Details'} value={'Wallet'} />
        <View style={styles.datetime}>
          <DataPreview label={'Date & Time'} value={'12 Jan  2021  ,19:38'} />
        </View>
      </View>
      <View style={[styles.rowscontainer, {marginTop: SIZES.base - 105}]}>
        <DataPreview label={'Sending Currency'} value={'INR'} />
        <View style={styles.recicevercurrency}>
          <DataPreview label={'Recevier Currency'} value={'GBP'} />
        </View>
      </View>
      <View style={[styles.rowscontainer, {marginTop: SIZES.base - 105}]}>
        <DataPreview label={'Sender account'} value={'wallet1'} />
        <View style={styles.benefeciary}>
          <DataPreview
            label={'Beneficiary account'}
            value={'Karthik Campbell'}
          />
        </View>
      </View>
      <View style={{marginTop: SIZES.base - 105}}>
        <DataPreview label={'Reference'} value={'from INR bank to INR  wallet'} />
      </View>
    
    </View>
  );
};

export default TransactionModel;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.baseX5,
    paddingVertical: SIZES.baseX5,
    height: SIZES.height / 1.6,
    //  alignItems: 'center',
  },
  headerText: {
    ...FONTS.regular,
    fontSize: 16,
    lineHeight: 35,
    color: COLORS.black,
    marginTop: SIZES.baseX2,
    // textAlign: 'justify',
  },
  reviewDetailHead1: {
    ...FONTS.regular,
    fontSize: 14,
    color: COLORS.blue4,
    // flex: 0.5,
    lineHeight: 20,
    marginLeft: 8,
  },
  reviewDetailValue1: {
    ...FONTS.medium,
    fontSize: 15,
    color: COLORS.green2,
    // flex: 0.5,
    lineHeight: 20,
    marginLeft: 8,
  },
  reviewDetailValue2: {
    ...FONTS.medium,
    fontSize: 15,
    color: COLORS.blue8,
    // flex: 0.5,
    lineHeight: 20,
    marginLeft: 8,
  },
  reviewDetailHead2: {
    ...FONTS.regular,
    fontSize: 14,
    color: COLORS.blue4,
    // flex: 0.5,
    lineHeight: 20,
    marginLeft: 8,
  },
  reviewDetailHead: {
    ...FONTS.regular,
    fontSize: 12,
    color: COLORS.blue5,
    // flex: 0.5,
    lineHeight: 20,
    marginLeft: 8,
  },
  reviewDetailValue: {
    ...FONTS.medium,
    fontSize: 12,
    color: COLORS.blue4,
    // flex: 0.5,
    lineHeight: 20,
    marginLeft: 8,
  },
  rowscontainer: {
    paddingVertical: SIZES.baseX4,
    flexDirection: 'row',
  },
  datetime: {
    marginLeft: SIZES.baseX5 * 4,
  },
  recicevercurrency: {
    marginLeft: SIZES.baseX5 * 2.8,
  },
  benefeciary: {
    marginLeft: SIZES.baseX5 * 3.3,
    marginBottom: SIZES.baseX4,
  },
  imagesView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SIZES.baseX5 + 20,
    marginHorizontal: SIZES.base,
  },
  imagescontainer: {
    marginTop: SIZES.base - 30,
    backgroundColor: COLORS.white3,
    height: SIZES.baseX5 * 4,
    left: -SIZES.baseX5,
    marginRight: -45,
    paddingHorizontal: SIZES.baseX5,
    alignItems: 'center',
  },
  upperbar: {
    width: 85,
    height: 5,
    //width: SIZES.baseX5 * 5,
    // borderColor: COLORS.gray7,
    backgroundColor: COLORS.gray7,
    borderRadius: SIZES.base,
    alignSelf: 'center',
    marginTop: -SIZES.base,
  },
});
