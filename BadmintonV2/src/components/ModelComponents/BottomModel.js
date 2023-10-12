import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Alert,
  Platform,
} from 'react-native';
import {COLORS, FONTS, SIZES} from '@app/constants/Theme';
import Modal from 'react-native-modal';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const BottomModel = ({modalVisible, onClose, ...props}) => {
  return (
    <Modal
      // avoidKeyboard={true}
      isVisible={modalVisible}
      onSwipeComplete={onClose}
      swipeDirection="down"
      // swipeDirection={['up', 'left', 'right', 'down']}
      deviceWidth={deviceWidth}
      onBackButtonPress={() =>
        Platform.select({
          android: {},
        })
      }
      ///  onBackButtonPress={() => Alert.alert('no back')}
      onBackdropPress={onClose}
      deviceHeight={deviceHeight}
      style={styles.view}
      {...props.modalStyle}>
      <View style={{}}>
        <View
          style={{
            backgroundColor: COLORS.white,
            width: SIZES.width,
            position: 'absolute',
            bottom: 0,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}>
          {props.children}
        </View>
      </View>
    </Modal>
  );
};

export default BottomModel;

const styles = StyleSheet.create({
  view: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});
