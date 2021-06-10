import React from 'react';
import { StyleSheet,SafeAreaView,Button,TextInput,ScrollView,TouchableOpacity, Text, View, Platform,Image, StatusBar } from 'react-native';
import {Actions} from 'react-native-router-flux';



import CustomBtn from './CustomBtn'
import Logo from '../compenents/Logo';
import { TSpan } from 'react-native-svg';

const UpdateCandidate = ({db, candid}) => {
    const [id, setId]= React.useState(candid.id);
    const [name, setName]= React.useState(candid.name);
    const [email, setEmail] = React.useState(candid.email);
    const  [age,setAge] = React.useState(candid.age);
    const [text, onChangeText] = React.useState("");


    let validateAndUpdate = () => {

        if(name !== null && email !== null && age !== null){
          
          updateCandidate();
          Actions.Candidates();
        }
        
      }
      
      let removeCondidate = () => {
        try {
          db.transaction( (tx) => {
            tx.executeSql('DELETE FROM users WHERE id=' + id +';')
            Actions.Candidates();
          })
        } catch (error) {
          console.log(error);
          
        } 
     }

     let updateCandidate =  () => {
        try {
          db.transaction( (tx) => {
            tx.executeSql('UPDATE users SET name = "'+ name+ '", age = '+age+', email= "'+ email +'" WHERE id=' + id +';')
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
     
    
          <CustomBtn action={validateAndUpdate} title={"Update"} color={'green'}/>  
          <CustomBtn action={removeCondidate} title={"Delete"} color={'red'}/>  
    </View>
       
    )
}

export default UpdateCandidate



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
  
