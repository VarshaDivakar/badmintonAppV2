import {StyleSheet, Text, View, StatusBar, Platform} from 'react-native';
import React from 'react';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS, SIZES} from '../../constants/Theme';

const SafeAreaWraper = ({
  statusbar = COLORS.primary,
  insetsBottom = true,
  barStyle = 'dark-content',
  ...props
}) => {
  const insets = useSafeAreaInsets();

  const CustomStatusBar = ({backgroundColor, BarStyle}) => {
    return (
      <View style={{height: insets.top, backgroundColor}}>
        <StatusBar
          translucent={true}
          animated={true}
          backgroundColor={backgroundColor}
          barStyle={BarStyle}
        />

      </View>
    );
  };

  return (
    <>
      <CustomStatusBar backgroundColor={statusbar} BarStyle={barStyle}  />

      <View
        style={{
          ...styles.container(props.backgroundColor, insets, insetsBottom),
          ...props.containerStyle,
        }}>
        {props.children}
      </View>
    </>
  );
};

export default SafeAreaWraper;

const styles = StyleSheet.create({
  container: (bg = COLORS.white, insets, insetsBottom) => ({
    flex: 1,

     height:SIZES.height,
    backgroundColor: bg,
    paddingBottom: insetsBottom
      ? Platform.OS === 'ios'
        ? insets.bottom
        : 0
      : 0,
   
    // paddingHorizontal: SIZES.baseX4,
  }),
});
