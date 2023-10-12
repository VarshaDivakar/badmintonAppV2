import {StyleSheet, Text, View, Dimensions, Platform} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '@app/constants/Theme';
import Modal from 'react-native-modal';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const CenterModel = ({modalVisible, onClose, ...props}) => {
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
            backgroundColor: COLORS.white,
            borderRadius: 5,
          }}>
          {props.children}
        </View>
      </View>
    </Modal>
  );
};

export default CenterModel;

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
