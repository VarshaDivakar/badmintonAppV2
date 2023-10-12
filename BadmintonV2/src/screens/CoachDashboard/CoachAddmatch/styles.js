const { COLORS, FONTS, SIZES } = require("@app/constants/Theme");
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 5,
    height: 32,
    width: 70,
    backgroundColor: '#9293AA'
  },
  addnewbutton: {
    borderRadius: 5,
    height: 32,
    width: 90,
    backgroundColor: COLORS.white,
    borderWidth: 1,
  },
  labelStyle: {
    color: COLORS.black12,
    fontWeight: '600',
  },
  container: {
    marginHorizontal: 10,
    borderColor: '#BFAFAF',
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    
  },
  table: {
    borderWidth: 1,
    borderColor: '#BFAFAF',
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: 'row',
    height:35,
  },
  tableheading: {
    flex: 1,
    fontWeight: 'bold',
    color: '#0D0101',
    //padding: 8,
    borderWidth: 1,
    borderColor: '#BFAFAF',
    textAlign: 'center',
    paddingHorizontal:8,
    paddingVertical:8,
    
  },
  tableHeader: {
    flex: 1,
    padding: 13,
    borderWidth: 1,
    borderColor: '#BFAFAF',
    textAlign: 'center',
    color: '#0D0101',
    fontWeight:''
  },
  emptyCell: {
    width: 50, // Adjust the width as needed
    borderWidth: 1,
    borderColor: '#BFAFAF',
    padding: 15
  },
  tournamentcell:{
    borderWidth: 1,
    borderColor: '#BFAFAF',
    width:130,
    //padding:7,
  //textAlign:'center',
  justifyContent:'center',
  alignItems:'center'
  }
})
