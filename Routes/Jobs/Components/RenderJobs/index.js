import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import { Actions } from 'react-native-router-flux';

const RenderJobs = ({jobs}) => {
  

  var DATA = jobs //pass allJobs array to data variable 
  //to be used to render all jobs with cards
  
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  
  function _navigate(param){
    Actions.jobDetails({jobDetails: param});
  }
      
  function Item({ title }) {
    return (
      <Card>
        <TouchableOpacity
          onPress={_navigate.bind(this, title)}
        >
        <View style={styles.locView}>
          <Text style={{width: '50%'}}>{title.trailerType}</Text>
          <Text style={{width: '50%', textAlign: 'right', marginBottom: 10}}>{title.distance}</Text>
        </View>
          <View style = {styles.locView}>
            <FontAwesome style={styles.locIcon} size={20} name='dot-circle-o'/>
            <Text style={styles.locText}>{title.pickUp.address}</Text>
          </View>
        <View style={styles.locView}>
          <View style={{ 
            height:35,
            borderLeftWidth:2, 
            marginLeft:7}}/>
          <Text style={styles.dateStyle}>{new Date(title.pickUp.time * 1000).getDate() + ' ' + months[new Date(title.pickUp.time * 1000).getMonth()] + ' ' + new Date(title.pickUp.time * 1000).getFullYear() + ', ' + new Date(title.pickUp.time * 1000).getHours() + ':' + new Date(title.pickUp.time * 1000).getMinutes()}</Text>
        </View>
        <View style={styles.locView}>
          <Entypo style={styles.locIcon} size={17} name='circle'/>
          <Text>{title.dropOff.address}</Text>
          </View>
        <View style={styles.locView}>
          <View style={{
            marginLeft:7}}/>
            <Text style={styles.dateStyle}>{new Date(title.dropOff.Time * 1000).getDate() + ' ' + months[new Date(title.dropOff.Time * 1000).getMonth()] + ' ' + new Date(title.dropOff.Time * 1000).getFullYear() + ', ' + new Date(title.dropOff.Time * 1000).getHours() + ':' + new Date(title.dropOff.Time * 1000).getMinutes()}</Text>
        </View>
        </TouchableOpacity>
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
    backgroundColor:'#eef0ef'
  },
  scrollView: {
    backgroundColor: '#C2185B',
  },
  text: {
    fontSize: 42,
  },
  locView: {
    flexDirection: 'row',
  },
  locIcon: {
    marginRight: 10,
  },
  locText: {
    fontWeight: 'bold'
  },
  headerText:{
    fontSize: 18,
    borderWidth: 1,
    padding: 5,
    borderColor: 'grey',
    width: '50%'
  },
  dateStyle:{
    fontSize: 12,
    marginLeft: 18,
    fontWeight: '100'
  }
});

export default RenderJobs;