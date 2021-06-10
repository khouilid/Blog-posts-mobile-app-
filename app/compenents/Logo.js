import React from 'react';
import { StyleSheet,SafeAreaView,Button,TextInput, Text, View, Platform,Image, StatusBar } from 'react-native';

const Logo = () => {
    return (
        <>
            <Image
                        style={styles.Logo}
                        source={require('../../rsc/imgs/Target_Corporation_logo_vector.svg.png')}
            />

            <Text style={styles.title}>Maratone Go</Text>

            
        </>
    )
}

export default Logo

const styles = StyleSheet.create({
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