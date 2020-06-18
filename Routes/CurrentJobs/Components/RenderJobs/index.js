import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import { Actions } from 'react-native-router-flux';
import { Button } from 'native-base'

const RenderJobs = ({drivers}) => {
  

  var DATA = drivers //pass allJobs array to data variable 
  //to be used to render all jobs with cards
  
  
  
  function _navigate(param){
    //Actions.currentJob({bidDetails: jobBids});
  }

  function Item({ title }) {
    return (
      <Card style={{flex:1}}>
        <View style={{
          flexDirection:'row',
          justifyContent:'space-between',
          width: '100%'
        }}>
          <View style={{
            width:'65%'
          }}>
            <Text>{title.fullname}</Text>
            <Text>{title.truck_model} | {title.trailer_type} | {title.truck_number}</Text>
          </View>

          <View style={{
            width:'35%'
          }}>
            <Button style={{
                backgroundColor:'#141d48'
              }}
              onPress={()=>Actions.selectedJob({driverInfo: title})}
            >
              <Text style={{textAlign:'center', width:'100%', color:'white'}}>View</Text>
            </Button>
          </View>
        </View>  
      </Card>
    );
  }

  
    return(
      <SafeAreaView style={styles.container}>
        <FlatList 
          data={DATA}
          renderItem={({item})=>
            <Item title={item}/>
          }
        />
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText:{
    fontSize: 18,
    borderWidth: 1,
    padding: 5,
    borderColor: 'grey',
    width: '50%'
  },
  itemView:{
    paddingVertical: 10
  },
  itemText:{
    fontSize: 15
  }
});

export default RenderJobs;