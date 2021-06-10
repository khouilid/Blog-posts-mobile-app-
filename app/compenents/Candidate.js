import React from 'react';
import { StyleSheet,SafeAreaView,Button,TextInput,ScrollView,TouchableOpacity, Text, View, Platform,Image, StatusBar } from 'react-native';
import {Actions} from 'react-native-router-flux';



const Candidate = ({condd , cadidateWillUpdate}) => {

    let update = () => {
        console.log(condd)
        // cadidateWillUpdate(condd);
        Actions.Update();
    
    }





    return (
             
        <TouchableOpacity onPress={() =>update()}  style={styles.card}>

            <View style={styles.card2} >
                <Image style={styles.photo} source={require('../../rsc/imgs/Target_Corporation_logo_vector.svg.png')}/>
                <View style={styles.info}>
                    <Text style={styles.name}>{condd.name}</Text>
                    <Text style={styles.age}>{condd.age} years old</Text>
                </View>
            </View>
            <View>
                {/* add icons */}
            </View>
        </TouchableOpacity>
    )
}

export default Candidate



const styles = StyleSheet.create({
    card:{
        flexDirection: "row",
        justifyContent:'space-between',
    },
    name:{
        fontWeight:'bold',
    },
    info:{
        marginLeft:10
    },
    card2:{
       
   
        marginTop:5                                                                                                         ,
        padding:10,
        height:80,
        width:'100%',
        alignItems:'center',
        backgroundColor:'#F8F8F8',
        flexDirection: "row",
    },
    container:{

        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    photo:{
        borderRadius:5,
        width :50,
        height:50,
    },

    
})
