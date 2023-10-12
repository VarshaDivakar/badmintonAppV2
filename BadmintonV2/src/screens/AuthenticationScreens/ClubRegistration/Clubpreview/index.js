import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import SafeAreaWraper from "@app/components/SafeAreaWraper";
import MainLayoutWrapper from "@app/components/MainLayoutWrapper/MainLayoutWrapper";
import { styles } from "./styles";
import Rectanglebutton from "@app/components/Rectanlebutton";
import Navigations from "@app/navigations/navigations";
import { useNavigation } from "@react-navigation/native";
import EditblueIcon from "@app/assets/icons/Editblue.svg";
import { COLORS, SIZES } from "@app/constants/Theme";
import MainLayoutWrapperClub from '@app/components/MainLayoutWrapper/MainLayoutWrapperClub'

const Clubpreview = ({navigation}) => {
  //const navigation = useNavigation();
  const Underline = () => {
    return (
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginVertical: 7,
        }}
      />
    );
  };

  const Renderedform = () => {
    return (
      <View>
        <View style={styles.editlable}>
          <Text style={styles.title}>Club Details</Text>
          <Pressable onPress={() =>navigation.navigate(Navigations.editclubdetails)}>
            {<EditblueIcon height={18} width={18} />}
          </Pressable>
        </View>
        {Underline()}
        <View style={styles.editlable}>
          <Text style={styles.title}>Additiional Information</Text>
          <Pressable onPress={() =>navigation.navigate(Navigations.editclubadditionalinfo)}>
            {<EditblueIcon height={18} width={18} />}
          </Pressable>
        </View>
        {Underline()}
      </View>
    );
  };
  return (
    <SafeAreaWraper statusbar={'transparent'} barStyle={'light-content'}>
      <MainLayoutWrapperClub>
        <View>
          <Text style={styles.headertextstyle}>Club Registration</Text>
          <Text style={styles.detailstyles}>Preview</Text>
          {Underline()}
        </View>
        <View>{Renderedform()}</View>
        
        <Rectanglebutton
          buttonStyle={{ marginTop: SIZES.baseX8 * 2 }}
          label={"Continue"}
          onPress={()=> navigation.navigate(Navigations.home)}
          //onPress={() => navigation.navigate(Navigations.playerfindtournament)}
        />
      </MainLayoutWrapperClub>
    </SafeAreaWraper>
  );
};

export default Clubpreview;
