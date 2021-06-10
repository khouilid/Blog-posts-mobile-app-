import React from 'react';
import { StyleSheet,SafeAreaView,Button,TextInput,ScrollView,TouchableOpacity,RefreshControl, Text, View, Platform,Image, StatusBar } from 'react-native';
import {Actions} from 'react-native-router-flux';

const CardCompenent = ({post, users}) => {


    let [user , setUser] = React.useState({
        id:null,
        name:"Inknown",
    });


    // setUser(
    // users.filter(user =>{ user.id == post.userId }));




    return (
        <View style={styles.card}>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.disc}>{post.body}</Text>

        <Text style={styles.sign}>
            <Image style={styles.photo} source={require('../../rsc/imgs/Target_Corporation_logo_vector.svg.png')}/>
            <View style={styles.info}>
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.age}>Writter</Text>
            </View>
        </Text>
    </View>
    
    )
}


export default CardCompenent

const styles = StyleSheet.create({


    card:{
        backgroundColor:'white',
        borderRadius:20,
        // width:350,
        margin:10,
        padding:15,

    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10,

        
    },
    sign:{
        margin:6,
        flexDirection: "row",
        justifyContent:'center',
        alignContent:'center',
    },


    name:{
        fontWeight:'bold',
    },
    info:{
        marginLeft:10
    },

    photo:{
        borderRadius:5,
        width :20,
        height:20,
    },
    
})
