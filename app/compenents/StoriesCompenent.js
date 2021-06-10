import React from 'react';
import { StyleSheet,SafeAreaView,Button,TextInput,ScrollView,TouchableOpacity,RefreshControl, Text, View, Platform,Image, StatusBar } from 'react-native';
import {Actions} from 'react-native-router-flux';



import CardCompenent from './CardCompenent';


 const StoriesCompenent = ({posts , users}) => {



    return (
        <ScrollView style={styles.container}>
            {
                posts.map(post =>    <CardCompenent key={post.id} users={users} post ={post}/> )
            }            
        </ScrollView>
    )
}

export default StoriesCompenent


const styles = StyleSheet.create({

    container:{
        flex:1,
        alignContent:'center',
    }
    
})
