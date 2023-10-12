import { StyleSheet, Text, View ,Image,Pressable} from 'react-native'
import React,{useState} from 'react'
import Dropdownarrow from '@app/assets/icons/downarrow.svg';
import { styles } from './styles'
import TextInputComponent from '@app/components/TextInputComponent'
import SafeAreaWraper from '@app/components/SafeAreaWraper'
import AddIcon from '@app/assets/icons/addicon.svg';
import SearchIcon from '@app/assets/icons/search.svg';
import MinusIcon from '@app/assets/icons/minusicon.svg';
import MainLayoutWrapperClub from '@app/components/MainLayoutWrapper/MainLayoutWrapperClub'
import { COLORS ,SIZES} from '@app/constants/Theme'
import images from '@app/constants/images'
import Navigations from '@app/navigations/navigations';
import Keyboardavoidwraper from '@app/components/Keyboardavoidwraper';
import DropDownSelect from '@app/components/DropDownSelect/DropDownSelect'
import RectangleButton from '@app/components/ButtonComponents/RectangleButton';
 
const CountryData=[
  {id:'1',name:'IND'},
  {id:'2',name:'UK'},
  {id:'3',name:'US'}
] 

const Clubadditionalinformation = ({navigation}) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [address,setaddress]=useState(null);
    const Underline = () => {
      return (
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
            //marginVertical: 4,
          }}
        />
      );
    };
    const Ownerform=()=>{
        return(
            <View>
             <TextInputComponent
            container={{ borderWidth: 0 }}
            placeholder={'Enter your Name'}
          />
           <View style={{ flexDirection: 'row' }}>
            <TextInputComponent
              container={{
                borderWidth: 0,
                width: SIZES.width * 0.3,
                paddingHorizontal: 7,
              }}
              leftIcon={
                <Image source={images.londonFlag} style={{ height: 20, width: 35 }} />
              }
              placeholder={'+44'}
              inputStyle={{
                fontSize: 14,
                fontWeight: '600',
                color: '#100202',
              }}
              rightIcon={<Dropdownarrow height={25} width={30} />}
            />
            <TextInputComponent
              container={{
                borderWidth: 0,
                width: SIZES.width * 0.57,
                marginLeft: -SIZES.baseX2,
              }}
              placeholder={'Enter your Number'}
            />
          </View>
          <TextInputComponent
            container={{ borderWidth: 0 }}
            placeholder={'Enter your Email'}
          />
          <Text style={styles.addadress}
          onPress={()=>setaddress(address==='addadress'? null:'addadress')}>+ Add Address</Text>
           <View>
            {
                address==='addadress'&&
                <View>
                    {Addressform ()}
                </View>
                    
                
            }
           </View>
           
            </View>
            
        )
     }
    const Addressform=()=>{
    
        return(
            <View>
                <TextInputComponent
            container={{ borderWidth: 0 }}
            placeholder={'Enter your Address'}
          />
           <TextInputComponent
            container={{ borderWidth: 0 }}
            placeholder={'Enter your Street'}
          />
           <TextInputComponent
            container={{ borderWidth: 0 }}
            placeholder={' Search by Postcode'}
            leftIcon={<SearchIcon height={22} width={22}/>}/>
           <TextInputComponent
            container={{ borderWidth: 0 }}
            placeholder={'Enter your City'}
          />
           <TextInputComponent
            container={{ borderWidth: 0 }}
            placeholder={'Enter your County'}
          />
          <DropDownSelect
          label={'select your country'}
          listDate={CountryData}
          />
            </View>
        )
     }
  return (
    <SafeAreaWraper
    statusbar='transparent'>
        <MainLayoutWrapperClub>
          <Text style={styles.headertextstyle}>Club Registration</Text>
          <Text style={styles.detailstyles}
           onPress={()=>navigation.navigate(Navigations.clubterms)}
           >Additional Information</Text>
         
         {Underline()}
           <Keyboardavoidwraper>
           <View style={styles.headings}>
            <Text style={styles.detailstext}>Owner Details</Text>
            <Pressable
            style={{padding:6}}
            onPress={() =>
              setSelectedItem(selectedItem === 'club' ? null : 'club')
            }>
            {selectedItem === 'club' ? <MinusIcon /> : <AddIcon />}
          </Pressable>
          </View>
          {
          selectedItem === 'club' && <View>
            {Ownerform()}
          </View>
        }
        {Underline()}
         <View style={styles.headings}>
            <Text style={styles.detailstext}>Manager/Care Taker(Optional)</Text>
            <Pressable
            style={{padding:6}}
            onPress={() =>
              setSelectedItem(selectedItem === 'manager' ? null : 'manager')
            }>
            {selectedItem === 'manager' ? <MinusIcon /> : <AddIcon />}
          </Pressable>
          </View>
          {
          selectedItem === 'manager' && <View>
            {Ownerform()}
          </View>
          
        }
        {Underline()}
        <View style={{alignItems:'flex-end',margin:'auto'}}>
          <RectangleButton 
          onPress={()=>navigation.navigate(Navigations.playermobileotp,{navigateToNext:Navigations.clubterms})}
          buttonStyle={{height:48,width:200}}
          label={'Continue'}/>
          </View>
          </Keyboardavoidwraper>
        </MainLayoutWrapperClub>
    </SafeAreaWraper>
  )
}

export default Clubadditionalinformation

