import React from 'react';
import { StyleSheet,SafeAreaView,Button,TextInput, Text, View, Platform, StatusBar, TouchableOpacity } from 'react-native';
import { color } from 'react-native-reanimated';

let colorbtn = 'red' ;
const CustomBtn = ({action, color, title}) => {
    colorbtn = color;
    return (
        <>
         <TouchableOpacity
            style={styles.btn}
         
            onPress={action}
            >
            <Text style={styles.btnText}>{title}</Text>
        </TouchableOpacity> 
            
        </>
    )
}
const styles = StyleSheet.create({
    btn:{
        backgroundColor:colorbtn,
        width:300,
        padding:12,
        margin: 12,
        borderRadius:50,
        textAlign:'center',
      },
      btnText:{
        fontWeight:'bold',
        color:'white',
        alignSelf: "center",
      },
    
})


export default CustomBtn
