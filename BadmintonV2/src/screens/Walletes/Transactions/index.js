import {
  SectionList,
  Text,
  View,
  Image,
  ScrollView,
  Alert,
  Pressable,
  Animated,
  FlatList,
} from 'react-native';
import React, {useState, useRef} from 'react';
import SafeAreaWrapper from '@app/components/SafeAreaWraper';
import {COLORS, SIZES} from '@app/constants/Theme';
// import {coinDetailList, Dummy} from '@app/utils/dummyData';
import {styles} from './styles';
import CardCoinList from '@app/components/CardCoinList';
import TransactionHeader from '@app/components/TransactionHeader';
import BottomModel from '@app/components/ModelComponents/BottomModel';
import BottamDetails from '@app/components/BottamDeatils/BottamDetails';
import RenderList from '@app/components/DataList/RenderList';

// import {getDepositWallet} from '@app/store/slices/walletSlice';
// import {useDispatch, useSelector} from 'react-redux';
// import Loader from '@app/components/Loader';
// import TransactionsSection from '@app/utils/TransactionsSection';
import  {Dummy,coinDetailList } from '../../../dummyData';
const Transactions = () => {
  const [modelVisibleBot, setModelVisibleBot] = React.useState(false);

  const [modelVisible, setModelVisible] = useState(false);
  const [Botitem, setBotitem] = React.useState();
  const [isFavourite, setFavourite] = useState();
  const [PayoutsList, setPayoutsList] = useState();
  // const dispatch = useDispatch({});
  const [loading, setLoading] = useState(false);
  // const navigation = useNavigation();
  const [refreshing, setRefreshing] = React.useState(false);
  const flatListRef = useRef(null);
  const sections = React.useMemo(() => {
    const sectionsMap = Dummy.reduce((acc, item) => {
      return Object.assign(acc, {
        [item.date]: [...(acc[item.date] || []), item],
      });
    }, {});

    return Object.entries(sectionsMap).map(([title, data]) => ({
      title,
      data,
    }));
    // .sort((a, b) => a.title.localeCompare(b.title));
  }, []);
  // const onRefresh = React.useCallback(() => {
  //   setRefreshing(true);
  //   setTimeout(() => {
  //     asyncFetchAPIS();
  //     setRefreshing(false);
  //   }, 2000);
  // }, []);

  const _renderSectionHeader = ({section: {title}}) => {
    return (
      <View>
        <Text style={styles.sectionHeading}>{title}</Text>
      </View>
    );
  };
  const _renderCoinItem = ({item}) => {
    return <CardCoinList item={item} />;
  };

  // React.useEffect(() => {
  //   asyncFetchAPIS();
  // }, []);

  // const asyncFetchAPIS = async () => {
  //   setLoading(true);
  //   const data = {
  //     workspace_id: 236,
  //     transaction_type: '',
  //     transaction_method: 'wallet',
  //   };

  //   const resultAction = await dispatch(getDepositWallet(data));
  //   if (getDepositWallet.fulfilled.match(resultAction)) {
  //     //const resultAction = await dispatch(setgetCountrie());
  //     // const transactionData = resultAction.payload.data;
  //     const transactionData = resultAction.payload.data;
  //     setFavourite(resultAction.payload.currencies);
  //     console.log('******************************************************.');

  //     console.log('sucess:....', resultAction.payload.currencies);

  //     // console.log('section', sections);
  //     const datavalue = TransactionsSection({transactionData});
  //     setPayoutsList(datavalue);

  //     setLoading(false);
  //     // Depositlist();
  //   } else {
  //     setLoading(false);
  //     console.log('fail:....', resultAction);
  //   }
  //   // const sections = TransactionsSection({TranscationData});
  // };

  const toTop = item => {
    // use current
    // console.log('data', item);
    setBotitem(item);
    setModelVisibleBot(true);
    // flatListRef.current.scrollToOffset({animated: true, offset: 0});
  };
  const [scrollPosition, setScrollPosition] = useState(1);

  // const handleScroll = event => {
  //   const ITEM_WIDTH = SIZES.width / 3;

  //   const {contentOffset} = event.nativeEvent;
  //   const index = Math.round(contentOffset.x / ITEM_WIDTH);
  //   // setScrollPosition(index);
  //   setScrollPosition(index);
  // };

  const handleScroll = event => {
    const ITEM_WIDTH = SIZES.width;
    // const x = contentOffset.x;

    const {contentOffset} = event.nativeEvent;
    const index = Math.round((contentOffset.x / (ITEM_WIDTH - 50)).toFixed(0));

    setScrollPosition(isFavourite[index].symbol);
  };

  const scrollToIndex = index => {
    flatListRef.current.scrollToIndex({index, animated: true});
  };
  return (
    <SafeAreaWrapper
      containerStyle={{paddingHorizontal: 0}}
      statusbar={COLORS.primary}
      barStyle="light-content"
      backgroundColor={COLORS.red}
      insetsBottom={0}>
      <View style={styles.container}>
        <TransactionHeader title={'Transaction'} />
        <View style={styles.container}>
          <View style={styles.transactionTopView}>
            <FlatList
              horizontal
              ref={flatListRef}
              data={coinDetailList}
              renderItem={_renderCoinItem}
              // onScroll={handleScroll}
              // onScroll={e => {
              //   const x = e.nativeEvent.contentOffset.x;
              //   const scrollind = (x / (SIZES.width - 50)).toFixed(0);
              //   const countval = parseInt(scrollind) + 1;
              //   setScrollPosition(countval);
              //   // setCount(countval);
              //   console.log('jjjj', countval);
              // }}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View style={styles.transactionListiew}>
            <View style={styles.tracsactionSubView}>
              <Text style={styles.tractsactionTxt}>Transactions</Text>
              <Text
                onPress={() => setModelVisibleBot(true)}
                style={styles.viewalltxt}>
                View All
              </Text>
              {/* <Text>Scroll position: {scrollPosition}</Text> */}
            </View>
            {sections && (
              <SectionList
                showsVerticalScrollIndicator={false}
                sections={sections}
                // refreshing={refreshing}
                // onRefresh={onRefresh}
                renderItem={({item}) => (
                  <RenderList item={item} onListPress={() => toTop(item)} />
                )}
                renderSectionHeader={_renderSectionHeader}
              />
            )}
          </View>
        </View>
        {modelVisibleBot && (
          <BottomModel
            modalVisible={modelVisibleBot}
            onClose={() => setModelVisibleBot(false)}>
            <BottamDetails Botitem={Botitem} />
          </BottomModel>
        )}
      </View>
      {/* {loading && <Loader />} */}
    </SafeAreaWrapper>
  );
};

export default Transactions;
