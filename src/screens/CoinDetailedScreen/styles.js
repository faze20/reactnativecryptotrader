import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    priceContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        padding:15,
    },
    name:{
       color:'white',
       fontSize: 15,
    },
    currentPrice:{
       color:'white',
       fontSize:30,
       fontWeight:'600',
       letterSpacing:1,
    },
    percentageChange:{
        color:'white',
        fontSize:15,
        fontWeight:'500'
    }
   
})

export default styles ;