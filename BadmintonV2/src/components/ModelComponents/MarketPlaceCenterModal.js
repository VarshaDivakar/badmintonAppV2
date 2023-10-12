import {StyleSheet, Text, View, Dimensions, Platform} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '@app/constants';
import Modal from 'react-native-modal';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const MarketPlaceCenterModal = ({modalVisible, onClose, ...props}) => {
  return (
    <Modal
      avoidKeyboard={true}
      isVisible={modalVisible}
      onSwipeComplete={onClose}
      swipeDirection={['down']}
      deviceWidth={deviceWidth}
      onBackButtonPress={() =>
        Platform.select({
          android: {},
        })
      }
      onBackdropPress={onClose}
      deviceHeight={deviceHeight}
      style={styles.view}
      {...props.modalStyle}>
      <View style={styles.container}>
        <View
          style={{
            height: 74,
            width: '100%',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: COLORS.gray11,
            // backgroundColor: COLORS.white,
            backgroundColor: COLORS.primary,
            borderRadius: 30,
          }}>
          {props.children}
        </View>
      </View>
    </Modal>
  );
};

export default MarketPlaceCenterModal;

const styles = StyleSheet.create({
  view: {
    // justifyContent: 'center',
    // alignItems: 'center',
    // margin: 0,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: SIZES.baseX2,
  },
});
