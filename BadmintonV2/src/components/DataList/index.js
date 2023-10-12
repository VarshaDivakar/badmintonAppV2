import React from 'react';
import {
  View,
  Text,
  SectionList,
  Pressable,
  RefreshControl,
  Image,
} from 'react-native';
import SearchIcon from '@app/assets/icons/search.svg';
import {styles} from './styles';
import {COLORS, FONTS, SIZES} from '@app/constants/Theme';
import RenderList from './RenderList';
export default function DataList({
  title,
  refreshing,
  list,
  onSearchPress,
  onListPress,
  onRefresh,
}) {
  const flatListRef = React.useRef();

  // const scrollToTop = () => {
  //   flatListRef.current.scrollToLocation({
  //     sectionIndex: 0,
  //     itemIndex: 0,
  //     animated: true,
  //     viewPosition: 0,
  //   });
  // };
  return (
    <View style={styles.addAddressListWrap}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.addAddressListResult}>{title}</Text>
        <View style={styles.searchbutt}>
          {/* <SearchIcon
            width={SIZES.baseX4}
            height={SIZES.baseX4}
            style={{color: COLORS.blue8}}
            onPress={() => onSearchPress()}
          /> */}
        </View>
      </View>
      <SectionList
        sections={list}
        keyExtractor={(item, index) => item + index}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={({item}) => (
          <RenderList item={item} onListPress={onListPress} />
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
      {/* <Pressable
        style={{
          height: 40,
          width: 40,
          backgroundColor: 'red',
          borderRadius: 40,
          position: 'absolute',
          bottom: 10,
          right: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={scrollToTop()}>
        <Text style={{color: '#fff'}}>Top</Text>
      </Pressable> */}
    </View>
  );
}
