import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,SafeAreaView,Button,TextInput, Text, View } from 'react-native';
import {Scene , Router } from 'react-native-router-flux';
import * as SQLite from 'expo-sqlite';



import Form from './app/compenents/Form';
import StartScreen from './app/compenents/StartScreen' ;
import Candidates from './app/compenents/Candidates'
import NewCandidate from './app/compenents/NewCandidate'
import UpdateCandidate from './app/compenents/UpdateCompenent'
import StoriesCompenent from './app/compenents/StoriesCompenent';




const db = SQLite.openDatabase('maratonedb');




export default function App() {



  let [conds, setConds] = React.useState([]) 
  let [cadidateWillUpdate, setcadidateWillUpdate] = React.useState({
    "age": 946,
    "email": "Hsb",
    "id": 1,
    "name": "Hdh",

  },[]);

  let [posts, setPosts] = React.useState({});


  let setDATA = (c) => setcadidateWillUpdate(c);


  
  function up(newValue) {
    setConds(newValue);
  }
  
  let getAllCandidate = () => {
    try {
      db.transaction((tx) => {
        
        tx.executeSql('SELECT * FROM users',[], (tx, results) => {
          
          
          if(results.rows.length > 0){
            setConds(results.rows._array);
          }
          
        });
      })
    } catch (error) {
      console.log(error);
    }
  }
  
  
  
  React.useEffect( async () => {
    
    createTable();
    getAllCandidate();
    getAllPosts();
    
  }, []);
  
  
let createTable = () => {
  
  try {
  db.transaction((tx) =>  {

    tx.executeSql('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT, age INTEGER, email TEXT);')

  })
  } catch (error) {
    console.log(error);
  }

}



let getAllPosts = async () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => setPosts(json));
}









  return (


    <Router>

      <Scene key="root">

     
            <Scene  key="Welcome"  component={StartScreen} hideNavBar  initial   />
            <Scene  key="Login" component={Form} hideNavBar />
            <Scene  key="Candidates"   component={() => <Candidates   cadidateWillUpdate={setDATA} db={db} setConds={up} candids={conds}  /> }    />
            <Scene key="New" title='New Candidate' component={() => <NewCandidate db={db}/>}/> 
            
            <Scene key="Update"  component={() => <UpdateCandidate db={db} candid={cadidateWillUpdate} />}/> 

            <Scene key="Stories"  component={() => <StoriesCompenent users={conds} posts={posts}/>}/> 


      </Scene>
   
    </Router>
    

  );
}


const styles = StyleSheet.create({
  input: {
    height: 40,
    width:200,
    padding:10,
    margin: 12,
    //borderWidth: 1,
    
    backgroundColor:"#f0ffff",
  },
  container: {
    flex: 1,
    backgroundColor: '#FFBD33',
    alignItems: 'center',
    justifyContent: 'center',
  },

  h1:{
    fontWeight: 'bold',
    fontSize: 30,
  },

});
