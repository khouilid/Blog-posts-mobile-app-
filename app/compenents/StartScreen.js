import React from 'react';
import { StyleSheet,SafeAreaView,Button,TextInput, Text, View, Platform,Image, StatusBar } from 'react-native';
import {Actions} from 'react-native-router-flux';

import CustomBtn from './CustomBtn';
import Logo from '../compenents/Logo';


const StartScreen = () => {



    let onclick = () => Actions.Login();


    return (
        <View style={styles.start}>
            <Logo/>
      
            <CustomBtn action={onclick}  title={"Start"} color={'red'}/>  
        </View>
    )
}


export default StartScreen;


    const styles = StyleSheet.create({
        start:{
            backgroundColor: '#FFBD33',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0,

        },
        title:{
            fontWeight: 'bold',
            fontSize: 20,
            color:"white",
            width:'60%',
            textAlign:'center',
            width:300,
            margin:15,
        
        },
        Logo:{
            borderRadius:5,
            width :100,
            height:100,
        },
    
    
    })