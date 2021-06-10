import React from 'react';
import { StyleSheet,SafeAreaView,Button,TextInput,ScrollView,TouchableOpacity,RefreshControl, Text, View, Platform,Image, StatusBar } from 'react-native';
import {Actions} from 'react-native-router-flux';



import Candidate from '../compenents/Candidate';


const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const Candidates = ({candids, cadidateWillUpdate, db, setConds }) => {

    let [conds, setCondss] = React.useState([]) 

    
    let goToNew = () => {
        Actions.New()
    }

    let stories= ()=>{
      Actions.Stories();
    }


    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      getAllCandidate();
      wait(2000).then(() => setRefreshing(false));
    }, []);
   


      
  let getAllCandidate = () => {
    try {
      db.transaction((tx) => {
        
        tx.executeSql('SELECT * FROM users',[], (tx, results) => {
          
          
          if(results.rows.length > 0){
            setCondss(results.rows._array);
 
           
          }
          
        });
      })
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
      getAllCandidate();
    //   setConds(conds);
    },[]);

    

    return (
        <View style={styles.container}>

            <ScrollView 
            
                    refreshControl={
                        <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        />
                    }
                    >
                {
                    conds.map((cand) =>   <Candidate key={cand.id}   cadidateWillUpdate={cadidateWillUpdate} condd={cand}/>)
                }    
            </ScrollView>

           <TouchableOpacity style={styles.addIcon} onPress={goToNew}/>
           <TouchableOpacity style={styles.addIconLeft} onPress={stories}/>
   
        </View>
    )
}

export default Candidates



const styles = StyleSheet.create({
    
    container:{
        flex: 1,
    },
 
    addIconLeft:{
      position: 'absolute',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      width:50,
      height:50,
      borderRadius:100,
      backgroundColor: '#FFBD33',
      bottom:10,
      left:10,
      shadowColor:'#000',
     },

    addIcon:{
        position: 'absolute',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width:50,
        height:50,
        borderRadius:100,
        backgroundColor: 'red',
        bottom:10,
        right:10,
        shadowColor:'#000',
    },

    Logo:{
        // width:50,
        // height:50,
    }, 
    
})

