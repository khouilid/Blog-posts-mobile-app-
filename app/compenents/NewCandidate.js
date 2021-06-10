import React from 'react';
import { StyleSheet,SafeAreaView,Button,TextInput,ScrollView,TouchableOpacity, Text, View, Platform,Image, StatusBar } from 'react-native';
import {Actions} from 'react-native-router-flux';



import CustomBtn from './CustomBtn'
import Logo from '../compenents/Logo';

const NewCandidate = ({db}) => {
    const [name, setName]= React.useState(null);
    const [email, setEmail] = React.useState(null);
    const  [age,setAge] = React.useState(null);
    const [text, onChangeText] = React.useState("");
    

    let validateInfo = () => {
        if(name !== null && email !== null && age !== null){
          // add();
          Actions.Candidates();
          addNewCandidate();
       
        }


     }



  let addNewCandidate =  () => {
    try {
      db.transaction( (tx) => {
        tx.executeSql('INSERT INTO users (name , age, email) VALUES ("'+   name +'", "'+ age+'", "'+ email +'");');
      })
    } catch (error) {
      console.log(error);
      
    }


  }


    return (
        <View style={styles.container}>
          <Logo/>
          
                    
        <TextInput
            style={styles.input}
            onChangeText={setName}
            value={name}
            placeholder="Your name"
            type
        />
        <TextInput
            style={styles.input}
            onChangeText={setAge}
            value={age}
            keyboardType='numeric'
            
            placeholder="Your age"
          />
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Your email"
          />
     
    
    
          <CustomBtn action={validateInfo}  title={"Save"} color={'red'}/>  
    </View>
       
    )
}

export default NewCandidate



const styles = StyleSheet.create({
    input: {
 
      width:300,
      padding:12,
      margin: 12,
      borderRadius:50,
      //borderWidth: 1,
      
      backgroundColor:"#f0ffff",
    },
    container: {
      flex: 1,
      backgroundColor: '#F8F8F8',
      alignItems: 'center',
      justifyContent:'center',
    
    },
  
    h1:{
      fontWeight: 'bold',
      fontSize: 30,
    },
    note:{
       color:'red',
       fontWeight:'bold',
       alignSelf: "center",
    },
    btn:{
      backgroundColor:'#FF5733',
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
    title:{
      fontWeight:'bold',
      fontSize:30,
      color:'red',
      alignSelf: "center",
    
    },
  

  });
  
